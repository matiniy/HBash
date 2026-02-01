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
    <section className="min-h-screen relative overflow-hidden">
      {/* Top scrim to keep navbar readable on bright images (no navbar background) */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-28 hero-top-scrim z-[5] pointer-events-none" />

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] min-h-screen lg:h-screen">
          {/* Left panel */}
          <div className={`bg-deep-forest/90 text-white flex flex-col items-start justify-center z-10 lg:h-screen w-full lg:w-auto px-6 sm:px-8 lg:pl-8 lg:pr-6 py-16 lg:py-20 ${
            language === 'fa' ? 'text-right' : 'text-left'
          }`}>
            <h1
              className={`hero-title-luxerie leading-tight mt-10 sm:mt-12 lg:mt-[72px] ${
                language === 'fa' ? 'hero-title-farsi' : ''
              }`}
              dir={language === 'fa' ? 'rtl' : 'ltr'}
            >
              <span className="block whitespace-normal lg:whitespace-nowrap">
                {t('hero.primaryTitle')}
              </span>
              <span className="block whitespace-normal lg:whitespace-nowrap">
                {t('hero.primaryHighlight')}
              </span>
            </h1>
            <p
              className={`mt-3 text-xs xs:text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed ${
                language === 'fa' ? 'font-sora' : ''
              }`}
              dir={language === 'fa' ? 'rtl' : 'ltr'}
            >
              <span className="block whitespace-nowrap">
                {t('hero.primarySubheadlineLine1')}
              </span>
              <span className="block whitespace-nowrap">
                {t('hero.primarySubheadlineLine2')}
              </span>
            </p>

            <Link href="/contact" className="mt-6 sm:mt-8 w-full flex justify-start">
              <Button variant="primary" className="w-auto font-light">
                {t('hero.scheduleConsultation')}
              </Button>
            </Link>
          </div>

          {/* Right panel image */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-screen overflow-hidden bg-deep-forest z-0 lg:-ml-px">
            <HeroCarousel
              className="absolute inset-0 w-full h-full transition-transform duration-75 ease-out"
              images={heroImages}
              interval={4000}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'center center'
              }}
            />
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