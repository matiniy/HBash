# Hero Carousel Images

This directory contains images for the homepage hero carousel.

## How to Add Images

1. **Upload your images** to this directory (`/public/images/hero/`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: 1920x1080px or larger (16:9 aspect ratio works best)
   - File size: Keep under 2MB for optimal performance

2. **Update the Hero component** to include your new image:
   - Open: `src/components/Hero.tsx`
   - Find the `heroImages` array (around line 10-15)
   - Add your image path: `'/images/hero/your-image-name.jpg'`

## Example

```typescript
const heroImages = [
  '/images/hero/2_photo_2.jpg',
  '/images/hero/20_photo_22.jpg',
  '/images/hero/your-new-image.jpg',  // Add your new image here
];
```

## Carousel Settings

- **Interval**: 4 seconds between each image
- **Transition**: Smooth fade effect (1 second)
- **Navigation**: Dots at the bottom allow manual navigation
- **Auto-play**: Automatically cycles through all images

## Tips

- Use high-quality images for best results
- Ensure images are properly optimized before uploading
- Images will automatically scale to fit the hero section
- The carousel will loop continuously through all images