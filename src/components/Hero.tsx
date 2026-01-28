'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import HeroCarousel from './HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';

// Hero images array - Add your image filenames here
// Simply add new images to /public/images/hero/ and add their filenames to this array
const heroImages = [
  '/images/hero/1.JPG',
  '/images/hero/2.jpg',
  '/images/hero/3.jpg',
  '/images/hero/4.jpg',
  '/images/hero/5.jpg',
  '/images/hero/6.jpg',
];

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll position
  const scale = Math.max(0.8, 1 - scrollY * 0.0005);
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Full Background Carousel (mobile + desktop) */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <HeroCarousel images={heroImages} interval={4000} />
        </div>
        {/* Soft overlay for text readability (keeps images visible) */}
        <div className="absolute inset-0 hero-image-overlay z-[1]"></div>
      </div>

      {/* Top scrim to keep navbar readable on bright images (no navbar background) */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-28 hero-top-scrim z-[5] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Push hero card closer to marquee: align to bottom with safe padding */}
          <div className="flex items-end justify-center min-h-screen pt-24 pb-10 sm:pb-12">
            {/* Centered hero card */}
            {/* Negative bottom margin so the marquee overlaps the bottom of the card */}
            <div className="w-full max-w-[600px] sm:max-w-[680px] md:max-w-[760px] mb-[-18px] sm:mb-[-24px]">
              {/* Add extra bottom padding so buttons stay above the marquee while the card still overlaps */}
              <div className="hero-glass-card backdrop-blur-lg rounded-2xl p-4 xs:p-5 sm:p-6 pb-10 sm:pb-12 shadow-2xl text-center min-h-[180px] sm:min-h-[200px]">
                <h1 className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight font-oxygen ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('hero.title')}{' '}
                  <span className="text-aqua-neon font-bold italic">{t('hero.dallas')}</span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 items-center justify-center">
                  <Link href="/contact">
                    <Button variant="primary" className="w-full sm:w-auto">
                      {t('hero.scheduleConsultation')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Marquee Strip */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <section className="bg-aqua-neon py-3 sm:py-4 overflow-hidden">
            <div className={`flex whitespace-nowrap marquee-slow ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {/* Content block 1 */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  {t('hero.marquee.line1')} •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  {t('hero.marquee.line2')} •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  {t('hero.marquee.line3')} •
                </span>
              </div>
              {/* Content block 2 (duplicate for seamless loop) */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  {t('hero.marquee.line1')} •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  {t('hero.marquee.line2')} •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  {t('hero.marquee.line3')} •
                </span>
              </div>
            </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;