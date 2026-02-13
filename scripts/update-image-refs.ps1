# Script to update image references in JS/JSX files from JPG/PNG to WebP

Write-Host "Updating image references to WebP..." -ForegroundColor Green

# Get list of PNG files that still exist (these should NOT be converted to .webp in references)
$existingPngs = Get-ChildItem -Path "public\assets\images" -Recurse -Filter "*.png" | ForEach-Object {
    $_.Name
}

Write-Host "`nFound $($existingPngs.Count) PNG files that still exist" -ForegroundColor Cyan

# Get all JS and JSX files
$jsFiles = Get-ChildItem -Path @("app", "components", "layout") -Recurse -Include @("*.js", "*.jsx") -File

$totalUpdates = 0
$filesModified = 0

foreach ($file in $jsFiles) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    $fileUpdates = 0
    
    # Replace .jpg and .jpeg with .webp
    $jpgMatches = ([regex]'\.jpe?g').Matches($content)
    if ($jpgMatches.Count -gt 0) {
        $content = $content -replace '\.jpe?g', '.webp'
        $fileUpdates += $jpgMatches.Count
    }
    
    # Replace .png with .webp ONLY if the PNG file doesn't exist
    $pngMatches = ([regex]'(["\047/])([^"\047/]+)\.png').Matches($content)
    foreach ($match in $pngMatches) {
        $filename = $match.Groups[2].Value + ".png"
        if ($existingPngs -notcontains $filename) {
            # This PNG file was converted to WebP, so update the reference
            $oldRef = $match.Value
            $newRef = $oldRef -replace '\.png$', '.webp'
            $content = $content.Replace($oldRef, $newRef)
            $fileUpdates++
        }
    }
    
    # Save if content changed
    if ($content -ne $originalContent) {
        $content | Set-Content $file.FullName -NoNewline
        $filesModified++
        $totalUpdates += $fileUpdates
        Write-Host "  Updated: $($file.Name) ($fileUpdates changes)" -ForegroundColor Yellow
    }
}

Write-Host "`nComplete!" -ForegroundColor Green
Write-Host "Files modified: $filesModified" -ForegroundColor Cyan
Write-Host "Total updates: $totalUpdates" -ForegroundColor Cyan
