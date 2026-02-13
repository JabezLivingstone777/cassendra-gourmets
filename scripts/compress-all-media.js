const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');

// Configuration
const CONFIG = {
    images: {
        quality: 80,
        formats: ['webp'], // Convert to WebP by default
        sizes: {
            thumbnail: 400,
            medium: 800,
            large: 1200,
            original: null
        }
    },
    videos: {
        codec: 'libx264',
        crf: 28, // Lower = better quality, 18-28 is good range
        preset: 'medium',
        audioCodec: 'aac',
        audioBitrate: '128k'
    },
    backup: false, // Set to true to create backups instead of deleting
    minCompressionRatio: 0.1 // Only keep compressed if it's at least 10% smaller
};

// Store compression stats
const stats = {
    images: { processed: 0, failed: 0, saved: 0, deleted: 0 },
    videos: { processed: 0, failed: 0, saved: 0, deleted: 0 }
};

async function findAllMediaFiles() {
    const mediaFiles = {
        images: [],
        videos: []
    };

    async function scanDirectory(dir) {
        try {
            const entries = await fs.readdir(dir, { withFileTypes: true });

            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);

                // Skip node_modules, .next, and hidden directories
                if (entry.isDirectory()) {
                    if (!entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== '.next') {
                        await scanDirectory(fullPath);
                    }
                } else {
                    const ext = path.extname(entry.name).toLowerCase();

                    if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
                        mediaFiles.images.push(fullPath);
                    } else if (['.mp4', '.mov', '.avi', '.mkv', '.webm'].includes(ext)) {
                        mediaFiles.videos.push(fullPath);
                    }
                }
            }
        } catch (error) {
            console.error(`Error scanning ${dir}:`, error.message);
        }
    }

    await scanDirectory(PUBLIC_DIR);
    return mediaFiles;
}

async function compressImage(imagePath) {
    try {
        const dir = path.dirname(imagePath);
        const ext = path.extname(imagePath);
        const basename = path.basename(imagePath, ext);

        // Create a compressed version
        const compressedPath = path.join(dir, `${basename}.webp`);

        // Skip if already WebP
        if (ext === '.webp') {
            console.log(`  ⏭️  Skipping (already WebP): ${path.relative(PUBLIC_DIR, imagePath)}`);
            return null;
        }

        // Get original file size
        const originalStats = await fs.stat(imagePath);
        const originalSize = originalStats.size;

        // Compress to WebP
        await sharp(imagePath)
            .webp({ quality: CONFIG.images.quality })
            .toFile(compressedPath);

        // Get compressed file size
        const compressedStats = await fs.stat(compressedPath);
        const compressedSize = compressedStats.size;
        const savings = originalSize - compressedSize;
        const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

        console.log(`  ✓ Compressed: ${path.relative(PUBLIC_DIR, imagePath)}`);
        console.log(`    ${(originalSize / 1024).toFixed(1)}KB → ${(compressedSize / 1024).toFixed(1)}KB (${savingsPercent}% saved)`);

        stats.images.saved += savings;
        stats.images.processed++;

        // Delete original if compression was successful and worthwhile
        if (compressedSize < originalSize * (1 - CONFIG.minCompressionRatio)) {
            await fs.unlink(imagePath);
            console.log(`    🗑️  Deleted original`);
            stats.images.deleted++;
        } else {
            // If compression didn't help much, remove the compressed version
            await fs.unlink(compressedPath);
            console.log(`    ⚠️  Compression not beneficial, kept original`);
        }

        return { originalSize, compressedSize, savings };
    } catch (error) {
        console.error(`  ❌ Failed to compress ${imagePath}:`, error.message);
        stats.images.failed++;
        return null;
    }
}

async function compressVideo(videoPath) {
    try {
        const dir = path.dirname(videoPath);
        const ext = path.extname(videoPath);
        const basename = path.basename(videoPath, ext);

        // Create compressed version path
        const compressedPath = path.join(dir, `${basename}_compressed.mp4`);

        // Get original file size
        const originalStats = await fs.stat(videoPath);
        const originalSize = originalStats.size;

        console.log(`  📹 Compressing: ${path.relative(PUBLIC_DIR, videoPath)} (${(originalSize / 1024 / 1024).toFixed(1)}MB)`);

        // Compress video using ffmpeg
        const ffmpegCmd = `ffmpeg -i "${videoPath}" -c:v ${CONFIG.videos.codec} -crf ${CONFIG.videos.crf} -preset ${CONFIG.videos.preset} -c:a ${CONFIG.videos.audioCodec} -b:a ${CONFIG.videos.audioBitrate} -movflags +faststart "${compressedPath}" -y`;

        await execAsync(ffmpegCmd);

        // Get compressed file size
        const compressedStats = await fs.stat(compressedPath);
        const compressedSize = compressedStats.size;
        const savings = originalSize - compressedSize;
        const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

        console.log(`  ✓ Compressed: ${(compressedSize / 1024 / 1024).toFixed(1)}MB (${savingsPercent}% saved)`);

        stats.videos.saved += savings;
        stats.videos.processed++;

        // Replace original with compressed version if it's smaller
        if (compressedSize < originalSize * (1 - CONFIG.minCompressionRatio)) {
            await fs.unlink(videoPath);
            await fs.rename(compressedPath, videoPath);
            console.log(`    🗑️  Replaced original with compressed version`);
            stats.videos.deleted++;
        } else {
            // If compression didn't help, remove compressed version
            await fs.unlink(compressedPath);
            console.log(`    ⚠️  Compression not beneficial, kept original`);
        }

        return { originalSize, compressedSize, savings };
    } catch (error) {
        console.error(`  ❌ Failed to compress ${videoPath}:`, error.message);
        stats.videos.failed++;
        return null;
    }
}

async function checkFFmpeg() {
    try {
        await execAsync('ffmpeg -version');
        return true;
    } catch (error) {
        console.error('❌ FFmpeg is not installed or not in PATH!');
        console.error('   Please install FFmpeg to compress videos.');
        console.error('   Download from: https://ffmpeg.org/download.html');
        return false;
    }
}

async function main() {
    console.log('🎬 Starting media compression...\n');

    // Check if ffmpeg is available
    const hasFFmpeg = await checkFFmpeg();

    // Find all media files
    console.log('📂 Scanning for media files...\n');
    const mediaFiles = await findAllMediaFiles();

    console.log(`Found ${mediaFiles.images.length} images and ${mediaFiles.videos.length} videos\n`);

    // Compress images
    if (mediaFiles.images.length > 0) {
        console.log('🖼️  COMPRESSING IMAGES\n');
        console.log('='.repeat(50));

        for (const imagePath of mediaFiles.images) {
            await compressImage(imagePath);
        }

        console.log('\n');
    }

    // Compress videos
    if (mediaFiles.videos.length > 0 && hasFFmpeg) {
        console.log('📹 COMPRESSING VIDEOS\n');
        console.log('='.repeat(50));

        for (const videoPath of mediaFiles.videos) {
            await compressVideo(videoPath);
        }

        console.log('\n');
    } else if (mediaFiles.videos.length > 0 && !hasFFmpeg) {
        console.log('⚠️  Skipping video compression (FFmpeg not available)\n');
    }

    // Print summary
    console.log('\n');
    console.log('='.repeat(50));
    console.log('📊 COMPRESSION SUMMARY');
    console.log('='.repeat(50));

    console.log('\n🖼️  Images:');
    console.log(`   Processed: ${stats.images.processed}`);
    console.log(`   Failed: ${stats.images.failed}`);
    console.log(`   Deleted: ${stats.images.deleted}`);
    console.log(`   Space saved: ${(stats.images.saved / 1024 / 1024).toFixed(2)}MB`);

    console.log('\n📹 Videos:');
    console.log(`   Processed: ${stats.videos.processed}`);
    console.log(`   Failed: ${stats.videos.failed}`);
    console.log(`   Replaced: ${stats.videos.deleted}`);
    console.log(`   Space saved: ${(stats.videos.saved / 1024 / 1024).toFixed(2)}MB`);

    const totalSaved = stats.images.saved + stats.videos.saved;
    console.log(`\n💾 Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
    console.log('\n✨ Compression complete!\n');
}

main().catch(console.error);
