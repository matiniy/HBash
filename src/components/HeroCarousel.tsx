'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: string[];
  interval?: number; // in milliseconds
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  images, 
  interval = 4000 // 4 seconds default
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
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => {
        const isVisible = index === currentIndex;
        const shouldLoad = loadedImages.has(index);

        // Determine slide position for right-to-left animation
        let positionClass = 'translate-x-full opacity-0 z-0';
        if (index === currentIndex) {
          positionClass = 'translate-x-0 opacity-100 z-20';
        } else if (index === previousIndex) {
          // Slide previous slide out to the left
          positionClass = '-translate-x-full opacity-0 z-10';
        }
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transform transition-transform duration-700 ease-out ${positionClass}`}
          >
            {shouldLoad ? (
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index < 3} // Priority for first 3 images
                quality={80} // Balanced quality for all images
                loading={index < 3 ? 'eager' : 'lazy'}
                sizes="100vw"
                unoptimized={false}
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
