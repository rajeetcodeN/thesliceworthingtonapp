Add-Type -AssemblyName System.Drawing

$srcPath = "d:\the-slice-worthington-main\the-slice-worthington-main\public\icons\icon-512.png"
$resDir = "d:\the-slice-worthington-main\the-slice-worthington-main\android\app\src\main\res"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source icon not found at $srcPath"
    exit 1
}

$srcImage = [System.Drawing.Image]::FromFile($srcPath)
$black = [System.Drawing.Color]::FromArgb(255, 0, 0, 0)

function Create-Legacy-Launcher-Icon {
    param(
        [System.Drawing.Image]$Image,
        [int]$Size,
        [string]$OutputPath,
        [bool]$IsRound = $false
    )
    $destBitmap = New-Object System.Drawing.Bitmap $Size, $Size
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)

    $brush = New-Object System.Drawing.SolidBrush $black
    if ($IsRound) {
        $graphics.FillEllipse($brush, 0, 0, $Size, $Size)
    } else {
        # Rounded rectangle for legacy icon
        $corner = [int]($Size * 0.18)
        $rect = New-Object System.Drawing.Rectangle 0, 0, $Size, $Size
        $path = New-Object System.Drawing.Drawing2D.GraphicsPath
        $path.AddArc(0, 0, $corner * 2, $corner * 2, 180, 90)
        $path.AddArc($Size - $corner * 2, 0, $corner * 2, $corner * 2, 270, 90)
        $path.AddArc($Size - $corner * 2, $Size - $corner * 2, $corner * 2, $corner * 2, 0, 90)
        $path.AddArc(0, $Size - $corner * 2, $corner * 2, $corner * 2, 90, 90)
        $path.CloseFigure()
        $graphics.FillPath($brush, $path)
        $path.Dispose()
    }
    $brush.Dispose()

    # Draw logo scaled inside
    $logoSize = [int]($Size * 0.75)
    $offsetX = [int](($Size - $logoSize) / 2)
    $offsetY = [int](($Size - $logoSize) / 2)
    $destRect = New-Object System.Drawing.Rectangle $offsetX, $offsetY, $logoSize, $logoSize
    $graphics.DrawImage($Image, $destRect, 0, 0, $Image.Width, $Image.Height, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()

    $destBitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()
}

function Create-Adaptive-Foreground-Icon {
    param(
        [System.Drawing.Image]$Image,
        [int]$Size,
        [string]$OutputPath
    )
    $destBitmap = New-Object System.Drawing.Bitmap $Size, $Size
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.Clear([System.Drawing.Color]::Transparent)

    # 108dp base: icon scaled to 62% sits safely inside the 66dp adaptive viewport
    $logoSize = [int]($Size * 0.62)
    $offsetX = [int](($Size - $logoSize) / 2)
    $offsetY = [int](($Size - $logoSize) / 2)
    $destRect = New-Object System.Drawing.Rectangle $offsetX, $offsetY, $logoSize, $logoSize
    $graphics.DrawImage($Image, $destRect, 0, 0, $Image.Width, $Image.Height, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()

    $destBitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()
}

# 1. Generate Legacy and Adaptive App Icons
$iconSizes = @{
    "mipmap-mdpi"    = @{ icon = 48; foreground = 108 }
    "mipmap-hdpi"    = @{ icon = 72; foreground = 162 }
    "mipmap-xhdpi"   = @{ icon = 96; foreground = 216 }
    "mipmap-xxhdpi"  = @{ icon = 144; foreground = 324 }
    "mipmap-xxxhdpi" = @{ icon = 192; foreground = 432 }
}

foreach ($folder in $iconSizes.Keys) {
    $sizes = $iconSizes[$folder]
    $dir = Join-Path $resDir $folder
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

    Create-Legacy-Launcher-Icon -Image $srcImage -Size $sizes.icon -OutputPath (Join-Path $dir "ic_launcher.png") -IsRound $false
    Create-Legacy-Launcher-Icon -Image $srcImage -Size $sizes.icon -OutputPath (Join-Path $dir "ic_launcher_round.png") -IsRound $true
    Create-Adaptive-Foreground-Icon -Image $srcImage -Size $sizes.foreground -OutputPath (Join-Path $dir "ic_launcher_foreground.png")
    Write-Host "Generated icons for $folder"
}

# 2. Generate Splash screens (centered brand logo on pure black #000000 background)
$splashScreens = @{
    "drawable"                  = @(480, 480, 0.40)
    "drawable-port-mdpi"        = @(320, 480, 0.45)
    "drawable-port-hdpi"        = @(480, 800, 0.45)
    "drawable-port-xhdpi"       = @(720, 1280, 0.45)
    "drawable-port-xxhdpi"      = @(960, 1600, 0.45)
    "drawable-port-xxxhdpi"     = @(1280, 1920, 0.45)
    "drawable-land-mdpi"        = @(480, 320, 0.35)
    "drawable-land-hdpi"        = @(800, 480, 0.35)
    "drawable-land-xhdpi"       = @(1280, 720, 0.35)
    "drawable-land-xxhdpi"      = @(1600, 960, 0.35)
    "drawable-land-xxxhdpi"     = @(1920, 1080, 0.35)
}

foreach ($folder in $splashScreens.Keys) {
    $dims = $splashScreens[$folder]
    $w = $dims[0]
    $h = $dims[1]
    $scale = $dims[2]
    $dir = Join-Path $resDir $folder
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

    $minDim = [Math]::Min($w, $h)
    $logoSize = [int]($minDim * $scale)

    $destBitmap = New-Object System.Drawing.Bitmap $w, $h
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $brush = New-Object System.Drawing.SolidBrush $black
    $graphics.FillRectangle($brush, 0, 0, $w, $h)
    $brush.Dispose()

    $offsetX = [int](($w - $logoSize) / 2)
    $offsetY = [int](($h - $logoSize) / 2)
    $destRect = New-Object System.Drawing.Rectangle $offsetX, $offsetY, $logoSize, $logoSize
    $graphics.DrawImage($srcImage, $destRect, 0, 0, $srcImage.Width, $srcImage.Height, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()

    $outPath = Join-Path $dir "splash.png"
    $destBitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()
    Write-Host "Generated splash for $folder"
}

# 3. Copy brand logo files directly to res/drawable
$drawableDir = Join-Path $resDir "drawable"
Copy-Item $srcPath (Join-Path $drawableDir "logo.png") -Force
Copy-Item $srcPath (Join-Path $drawableDir "favicon.png") -Force

$srcImage.Dispose()
Write-Host "All Android brand icons, drawables, and splash screens successfully updated with The Slice brand logo!"
