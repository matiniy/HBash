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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0])); // Track loaded images

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        // Preload next image
        if (!loadedImages.has(nextIndex)) {
          setLoadedImages(prev => new Set([...prev, nextIndex]));
        }
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, loadedImages]);

  // Preload next image when current changes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    if (!loadedImages.has(nextIndex)) {
      setLoadedImages(prev => new Set([...prev, nextIndex]));
    }
  }, [currentIndex, images.length, loadedImages]);

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
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {shouldLoad ? (
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={index === 0 ? 85 : 75} // Lower quality for non-first images
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="100vw"
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
                if (!loadedImages.has(index)) {
                  setLoadedImages(prev => new Set([...prev, index]));
                }
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
