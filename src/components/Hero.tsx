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
      {/* Mobile: Full Background Carousel */}
      <div className="absolute inset-0 lg:hidden z-0">
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <HeroCarousel images={heroImages} interval={4000} />
        </div>
        {/* Dark overlay for mobile text readability */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      </div>

      {/* Desktop: Side-by-side layout with carousel (image on the right as before) */}
      <div className="absolute inset-0 hidden lg:block z-0">
        <div 
          className="absolute right-0 top-0 w-[65%] h-[120%] transition-transform duration-75 ease-out overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <HeroCarousel images={heroImages} interval={4000} />
        </div>
        {/* Solid left overlay so text side stays clean */}
        <div className="absolute left-0 top-0 w-[35%] h-full bg-deep-forest z-[1]"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center min-h-screen py-12">
            {/* Content - Full width on mobile, half width on desktop */}
            <div className="w-full lg:w-[50%] lg:max-w-[950px]">
              {/* Glass Effect Background - Full width on mobile, positioned over extending image on desktop */}
              <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-4 xs:p-6 sm:p-8 shadow-2xl hero-glass-card">
                <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight font-oxygen ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('hero.title')}{' '}
                  <span className="text-aqua-neon font-bold italic">{t('hero.dallas')}</span>
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
                  {/* Rebuilt secondary CTA button explicitly so text is always green */}
                  <Link href="/listings">
                    <button
                      type="button"
                      className="w-full sm:w-auto px-4 xs:px-6 py-2.5 xs:py-3 rounded-full hover:rounded-[10px] font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-neon min-h-[44px] flex items-center justify-center border border-aqua-neon text-aqua-neon hero-secondary-cta"
                    >
                      {t('hero.browseListings')}
                    </button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="primary" className="w-full sm:w-auto">
                      {t('hero.scheduleConsultation')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop: Right Content - Empty space for image to show through */}
            <div className="hidden lg:block lg:flex-1 h-full min-h-[600px]">
              {/* This space allows the background image to show through */}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Marquee Strip */}
      <div className="absolute bottom-0 left-0 w-full">
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