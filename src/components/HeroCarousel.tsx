'use client';

import React, { useState, useEffect } from 'react';

interface HeroCarouselProps {
  images: string[];
  interval?: number; // in milliseconds
  className?: string;
  style?: React.CSSProperties;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  images, 
  interval = 4000, // 4 seconds default
  className = '',
  style
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  // Preload all images immediately for faster transitions
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set(images.map((_, i) => i)));

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        // Track previous index for slide direction (right-to-left)
        setPreviousIndex(prevIndex);
        // Preload next image
        setLoadedImages((prev) => {
          if (!prev.has(nextIndex)) {
            const newSet = new Set(prev);
            newSet.add(nextIndex);
            return newSet;
          }
          return prev;
        });
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Preload next image when current changes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setLoadedImages((prev) => {
      if (!prev.has(nextIndex)) {
        const newSet = new Set(prev);
        newSet.add(nextIndex);
        return newSet;
      }
      return prev;
    });
  }, [currentIndex, images.length]);

  if (images.length === 0) {
    // Fallback if no images
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-aqua-neon/20 to-deep-forest"></div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`} style={style}>
      {images.map((image, index) => {
        const shouldLoad = loadedImages.has(index);

        // Smooth cross-fade (no sliding)
        const isCurrent = index === currentIndex;
        const isPrev = index === previousIndex;
        // Keep only current & previous on top to prevent flicker/stacking artifacts
        const zClass = isCurrent ? 'z-20' : isPrev ? 'z-10' : 'z-0';
        const opacityClass = isCurrent ? 'opacity-100' : 'opacity-0';
        
        return (
          <div
            key={index}
            className={`absolute inset-0 ${zClass} transition-opacity duration-1000 ease-in-out ${opacityClass}`}
          >
            {shouldLoad ? (
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url('${image}')` }}
                role="img"
                aria-label={`Hero image ${index + 1}`}
              />
            ) : (
              // Placeholder while loading
              <div className="absolute inset-0 bg-deep-forest/50" />
            )}
          </div>
        );
      })}
      
      {/* Navigation dots - Only show on desktop and when there are multiple images */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 lg:bottom-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setLoadedImages((prev) => {
                  if (!prev.has(index)) {
                    const newSet = new Set(prev);
                    newSet.add(index);
                    return newSet;
                  }
                  return prev;
                });
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'w-8 bg-aqua-neon'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
