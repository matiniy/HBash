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
          <div className="flex items-center justify-start min-h-screen pt-24 pb-10 sm:pb-12">
            {/* Centered hero card */}
            {/* Negative bottom margin so the marquee overlaps the bottom of the card */}
            <div className="w-full max-w-full sm:max-w-[520px] -mt-[50px] sm:-mt-[60px] mb-[-18px] sm:mb-[-24px] pl-4 sm:pl-6 lg:pl-12">
              {/* Add extra bottom padding so buttons stay above the marquee while the card still overlaps */}
              <div className={`hero-glass-card backdrop-blur-lg rounded-2xl bg-white/20 p-4 xs:p-5 sm:p-6 pb-10 sm:pb-12 shadow-2xl min-h-[180px] sm:min-h-[200px] ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                <h1
                  className={`hero-title-luxerie leading-tight ${language === 'fa' ? 'hero-title-farsi' : ''}`}
                  dir={language === 'fa' ? 'rtl' : 'ltr'}
                >
                  <span className="block">{t('hero.primaryTitle')}</span>
                  <span className="block">{t('hero.primaryHighlight')}</span>
                </h1>
                <p
                  className={`mt-3 text-xs xs:text-sm sm:text-base text-white/90 leading-relaxed ${
                    language === 'fa' ? 'font-sora' : ''
                  }`}
                  dir={language === 'fa' ? 'rtl' : 'ltr'}
                >
                  {t('hero.primarySubheadlineLine1')}
                  <span className="block">{t('hero.primarySubheadlineLine2')}</span>
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 items-start ${language === 'fa' ? 'sm:justify-end' : 'sm:justify-start'}`}>
                  <Link href="/contact">
                    <Button variant="primary" className="w-full sm:w-auto font-light">
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
                <span className="text-deep-forest font-normal text-base sm:text-lg mx-2 sm:mx-4">
                  {t('hero.marquee.line1')} •
                </span>
                <span className="text-deep-forest font-normal text-base sm:text-lg mx-2 sm:mx-4">
                  {t('hero.marquee.line2')} •
                </span>
                <span className="text-deep-forest font-normal text-base sm:text-lg mx-2 sm:mx-4">
                  {t('hero.marquee.line3')} •
                </span>
              </div>
              {/* Content block 2 (duplicate for seamless loop) */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-deep-forest font-normal text-base sm:text-lg mx-2 sm:mx-4">
                  {t('hero.marquee.line1')} •
                </span>
                <span className="text-deep-forest font-normal text-base sm:text-lg mx-2 sm:mx-4">
                  {t('hero.marquee.line2')} •
                </span>
                <span className="text-deep-forest font-normal text-base sm:text-lg mx-2 sm:mx-4">
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