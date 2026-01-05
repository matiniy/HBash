'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageLoaderProps {
  onComplete: () => void;
  imagesToPreload?: string[];
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete, imagesToPreload = [] }) => {
  const { t, language } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Engaging messages in both languages
  const messages = {
    en: [
      "Finding your perfect home...",
      "Exploring Dallas neighborhoods...",
      "Preparing your dream property...",
      "Almost there...",
      "Welcome home!"
    ],
    fa: [
      "در حال پیدا کردن خانه ایده‌آل شما...",
      "در حال کاوش محله‌های دالاس...",
      "در حال آماده‌سازی ملک رویایی شما...",
      "تقریباً آماده است...",
      "به خانه خوش آمدید!"
    ]
  };

  const currentMessages = messages[language as 'en' | 'fa'] || messages.en;

  // Preload images
  useEffect(() => {
    if (imagesToPreload.length === 0) {
      // If no images, just simulate loading
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(onComplete, 300);
            return 100;
          }
          return prev + 2;
        });
      }, 60); // 3 seconds total (100 / 2 * 60ms = 3000ms)
      return () => clearInterval(timer);
    }

    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          // Update progress based on images loaded (80% for images)
          setProgress((prev) => {
            const imageProgress = (loadedCount / totalImages) * 80;
            return Math.max(prev, imageProgress);
          });
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setImagesLoaded(loadedCount);
          // Still count as progress even if failed
          setProgress((prev) => {
            const imageProgress = (loadedCount / totalImages) * 80;
            return Math.max(prev, imageProgress);
          });
          resolve(); // Continue even if image fails
        };
        img.src = src;
      });
    };

    const startTime = Date.now();
    const minLoadTime = 2500; // Minimum 2.5 seconds for smooth experience

    // Load all images in parallel
    Promise.all(imagesToPreload.map(loadImage)).then(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      if (remaining > 0) {
        // Fill remaining progress smoothly to 100%
        const steps = 25;
        const stepTime = remaining / steps;
        
        let step = 0;
        const fillInterval = setInterval(() => {
          step++;
          setProgress((prev) => {
            const increment = (100 - prev) / (steps - step + 1);
            const newProgress = Math.min(100, prev + increment);
            if (newProgress >= 100 || step >= steps) {
              clearInterval(fillInterval);
              setTimeout(onComplete, 300);
              return 100;
            }
            return newProgress;
          });
        }, stepTime);
      } else {
        // Images loaded quickly, ensure we show 100% before completing
        setProgress(100);
        setTimeout(onComplete, 300);
      }
    });
  }, [imagesToPreload, onComplete]);

  // Rotate messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % currentMessages.length);
    }, 600); // Change message every 600ms

    return () => clearInterval(messageInterval);
  }, [currentMessages.length]);

  return (
    <div className="fixed inset-0 z-[9999] bg-deep-forest flex items-center justify-center">
      <div className="w-full max-w-md px-8 text-center">
        {/* Logo or Brand Name */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-aqua-neon mb-2">
            Haideh Bashash
          </h1>
          <p className="text-grey-light text-sm">
            {language === 'fa' ? 'مشاور املاک دالاس' : 'Dallas Realtor'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-aqua-neon rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-aqua-neon/50 animate-pulse"></div>
            </div>
          </div>
          <p className="text-aqua-neon text-sm mt-2 font-semibold">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Engaging Message */}
        <div className="min-h-[60px] flex items-center justify-center">
          <p
            key={currentMessage}
            className={`text-white text-lg sm:text-xl font-medium transition-opacity duration-500 ${language === 'fa' ? 'font-sora' : ''}`}
            dir={language === 'fa' ? 'rtl' : 'ltr'}
          >
            {currentMessages[currentMessage]}
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-aqua-neon rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

