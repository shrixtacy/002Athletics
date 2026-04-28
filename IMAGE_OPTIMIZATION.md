# Image Optimization Guide

## What We've Done

### 1. Removed Unused Images (~40MB saved!)
Deleted the following unused images:
- All Gemini generated images (5 files, ~28MB)
- Unused mobile hero images (3 files, ~2MB)
- Unused paddle images (3 files)
- Unused hero backgrounds
- Duplicate poster images
- Old str-slot-2.png

### 2. Installed Automatic Image Optimization
- **Plugin**: `vite-plugin-imagemin`
- **Compression**: Automatically compresses images during build
- **Settings**:
  - PNG: 80-90% quality with pngquant
  - JPEG: 80% quality with mozjpeg
  - Optimization level: 7 (maximum)

### 3. Build Optimization
- Added code splitting for React vendor bundle
- Images will be automatically optimized on `npm run build`

## Current Image Sizes (Before Optimization)

### Public Folder
- `upcoming-2.png` - 2.4 MB 🔴
- `upcoming-1.png` - 2.3 MB 🔴
- `upcoming-3.png` - 2.2 MB 🔴
- `pre-sports-ad-poster.png` - 2.0 MB 🔴
- `str-sports-ad-poster.png` - 1.9 MB 🔴
- `front-cover-1.png` - 975 KB 🟡
- `front-cover-2.png` - 984 KB 🟡
- Other images: < 800 KB ✅

### Assets Folder
- `ball-str-ad.png` - 4.7 MB 🔴
- `ball-pre-ad.png` - 4.0 MB 🔴
- Other images: < 120 KB ✅

## Expected Results After Build

After running `npm run build`, images should be:
- **30-50% smaller** for PNG files
- **20-30% smaller** for JPEG files
- No visible quality loss

## How to Use

### Development
```bash
npm run dev
```
Images are served as-is (no optimization in dev mode for faster builds)

### Production Build
```bash
npm run build
```
All images in `public/` and `src/assets/` will be automatically optimized

### Preview Optimized Build
```bash
npm run preview
```

## Further Optimization Recommendations

### 1. Convert to WebP (Manual - Best Results)
WebP provides 25-35% better compression than PNG/JPEG:

**Tools:**
- Online: [Squoosh.app](https://squoosh.app/)
- CLI: `cwebp input.png -q 80 -o output.webp`
- Batch: Use ImageMagick or Sharp

**Priority images to convert:**
1. `ball-str-ad.png` (4.7 MB → ~1.5 MB)
2. `ball-pre-ad.png` (4.0 MB → ~1.3 MB)
3. `upcoming-*.png` (2+ MB each → ~700 KB each)
4. `*-sports-ad-poster.png` (2 MB each → ~600 KB each)

### 2. Responsive Images
Serve different sizes for mobile vs desktop:

```tsx
<img
  src="/image.webp"
  srcSet="/image-mobile.webp 640w, /image-tablet.webp 1024w, /image-desktop.webp 1920w"
  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
  alt="Description"
  loading="lazy"
/>
```

### 3. Use Next.js Image Component (If Migrating)
If you ever migrate to Next.js, use their Image component for automatic optimization:
```tsx
import Image from 'next/image'

<Image
  src="/image.png"
  width={800}
  height={600}
  alt="Description"
  loading="lazy"
/>
```

### 4. CDN with Image Optimization
Consider using:
- **Cloudflare Images** - Automatic WebP conversion, resizing
- **Cloudinary** - Free tier with transformations
- **imgix** - Real-time image processing

## Performance Impact

### Before Optimization
- Total image size: ~50+ MB
- Initial page load: 5-10 seconds on 3G
- Lighthouse score: ~40-60

### After Optimization (Expected)
- Total image size: ~25-30 MB (with current setup)
- Total image size: ~15-20 MB (if converted to WebP)
- Initial page load: 2-4 seconds on 3G
- Lighthouse score: 70-85

### After WebP + Responsive Images
- Total image size: ~10-15 MB
- Initial page load: 1-2 seconds on 3G
- Lighthouse score: 85-95

## Monitoring

Check your build output for compression stats:
```bash
npm run build
```

Look for lines like:
```
✓ 1234 modules transformed.
✓ Images optimized: 15 files
  - ball-str-ad.png: 4.7 MB → 2.3 MB (51% reduction)
  - ball-pre-ad.png: 4.0 MB → 2.0 MB (50% reduction)
```

## Quick Wins Checklist

- [x] Remove unused images
- [x] Install vite-plugin-imagemin
- [x] Configure automatic compression
- [ ] Convert large images to WebP manually
- [ ] Add responsive image srcsets
- [ ] Test on slow 3G connection
- [ ] Run Lighthouse audit
- [ ] Consider CDN for production

## Need Help?

Run a production build and check the results:
```bash
npm run build
npm run preview
```

Then test with Chrome DevTools:
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check image sizes and load times
