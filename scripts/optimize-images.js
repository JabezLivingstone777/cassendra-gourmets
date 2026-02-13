const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/assets/images/cassendraimages');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/images/webp');

// Image categories based on visual inspection
const CATEGORIES = {
    buns: ['DSC4259', 'DSC4274', 'DSC4277', 'DSC4278'],
    chocolates: ['DSC4309', 'DSC4321', 'DSC4344', 'DSC4350', 'DSC4368'],
    cakes: ['DSC09535', 'DSC09546', 'DSC09650', 'DSC09657', 'DSC09660'],
    cookies: ['DSC4287', 'DSC4294', 'DSC4305'],
    savories: ['DSC4326', 'DSC4330', 'DSC4341'],
    desserts: ['DSC09693', 'DSC09709', 'DSC09714', 'DSC09718'],
    platters: ['DSC4385', 'DSC4388', 'DSC4405', 'DSC4412', 'DSC4419', 'DSC4421', 'DSC4422', 'DSC4425', 'DSC4430', 'DSC4444', 'DSC4446', 'DSC4448', 'DSC4450'],
    specialties: ['DSC09726', 'DSC09728', 'DSC4280', 'DSC4486', 'DSC4489', 'DSC4535', 'DSC4538', 'DSC4549', 'DSC4551', 'DSC4553', 'DSC4554']
};

// Sizes to generate
const SIZES = {
    thumbnail: 400,
    medium: 800,
    large: 1200,
    original: null // Keep original size
};

async function ensureDir(dir) {
    try {
        await fs.access(dir);
    } catch {
        await fs.mkdir(dir, { recursive: true });
    }
}

function getCategoryForImage(filename) {
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');

    for (const [category, patterns] of Object.entries(CATEGORIES)) {
        if (patterns.some(pattern => nameWithoutExt.includes(pattern))) {
            return category;
        }
    }

    return 'general';
}

async function optimizeImage(inputPath, outputBasePath, filename) {
    const category = getCategoryForImage(filename);
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');

    console.log(`Processing ${filename} -> Category: ${category}`);

    // Create category directory
    const categoryDir = path.join(outputBasePath, category);
    await ensureDir(categoryDir);

    const metadata = await sharp(inputPath).metadata();
    const stats = {
        filename,
        category,
        originalSize: (await fs.stat(inputPath)).size,
        originalDimensions: { width: metadata.width, height: metadata.height },
        optimizedSizes: {}
    };

    // Generate different sizes
    for (const [sizeName, width] of Object.entries(SIZES)) {
        const outputPath = path.join(categoryDir, `${nameWithoutExt}-${sizeName}.webp`);

        let sharpInstance = sharp(inputPath);

        if (width) {
            sharpInstance = sharpInstance.resize(width, null, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        await sharpInstance
            .webp({ quality: 80 })
            .toFile(outputPath);

        const outputStats = await fs.stat(outputPath);
        stats.optimizedSizes[sizeName] = {
            path: outputPath,
            size: outputStats.size,
            compression: `${((1 - outputStats.size / stats.originalSize) * 100).toFixed(1)}%`
        };

        console.log(`  ✓ ${sizeName}: ${(outputStats.size / 1024).toFixed(1)}KB (${stats.optimizedSizes[sizeName].compression} smaller)`);
    }

    return stats;
}

async function main() {
    console.log('🖼️  Starting image optimization...\n');

    // Ensure output directory exists
    await ensureDir(OUTPUT_DIR);

    // Read all images from input directory
    const files = await fs.readdir(INPUT_DIR);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    console.log(`Found ${imageFiles.length} images to process\n`);

    const manifest = {
        processedAt: new Date().toISOString(),
        totalImages: imageFiles.length,
        categories: {},
        images: []
    };

    // Process each image
    for (const file of imageFiles) {
        const inputPath = path.join(INPUT_DIR, file);
        const stats = await optimizeImage(inputPath, OUTPUT_DIR, file);
        manifest.images.push(stats);

        // Group by category
        if (!manifest.categories[stats.category]) {
            manifest.categories[stats.category] = [];
        }
        manifest.categories[stats.category].push(file);
    }

    // Save manifest
    const manifestPath = path.join(OUTPUT_DIR, 'image-manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    console.log('\n✨ Optimization complete!');
    console.log(`\nSummary:`);
    console.log(`  Total images processed: ${manifest.totalImages}`);
    console.log(`  Categories created: ${Object.keys(manifest.categories).length}`);
    Object.entries(manifest.categories).forEach(([cat, imgs]) => {
        console.log(`    - ${cat}: ${imgs.length} images`);
    });
    console.log(`\nManifest saved to: ${manifestPath}`);

    // Calculate total savings
    const totalOriginal = manifest.images.reduce((sum, img) => sum + img.originalSize, 0);
    const totalOptimized = manifest.images.reduce((sum, img) =>
        sum + Object.values(img.optimizedSizes).reduce((s, size) => s + size.size, 0), 0
    );
    const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

    console.log(`\nSpace savings: ${totalSavings}% (${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB)`);
}

main().catch(console.error);
