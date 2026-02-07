'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { useLanguage } from '@/contexts/LanguageContext';

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

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

  const textOffset = Math.min(scrollY * 0.3, 120);
  const textOpacity = Math.max(0, 1 - scrollY * 0.0025);
  return (
    <section className="hero-section min-h-screen relative overflow-hidden">
      {/* Full-screen background image — no scroll scale or animation */}
      <div className="absolute inset-0 z-0">
        <HeroCarousel
          className="absolute inset-0 w-full h-full object-cover"
          images={heroImages}
          interval={4000}
          style={{
            transform: 'scale(1)',
            transformOrigin: 'center center'
          }}
        />
        {/* Overlay: #082C36 darker — 62% opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(8, 44, 54, 0.62)' }}
          aria-hidden
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-24 sm:h-28 hero-top-scrim z-[6] pointer-events-none" />

      {/* Content overlay - text forced white */}
      <div
        className={`hero-content relative z-10 min-h-screen flex flex-col justify-center w-full max-w-2xl px-6 sm:px-8 py-24 lg:py-20 ${
          language === 'fa'
            ? 'text-right items-end lg:ml-auto lg:mr-12 lg:pl-0 lg:pr-0'
            : 'text-left items-start lg:pl-12 lg:pr-0 lg:mr-auto'
        }`}
        style={{ transform: 'translateY(50px)' }}
      >
        <h1
          className={`hero-title-luxerie mt-10 sm:mt-12 lg:mt-0 ${
            language === 'fa' ? 'hero-title-farsi' : ''
          }`}
          dir={language === 'fa' ? 'rtl' : 'ltr'}
          style={{
            transform: `translateY(-${textOffset}px)`,
            opacity: textOpacity,
            transition: 'opacity 150ms linear'
          }}
        >
          <span className="block whitespace-normal lg:whitespace-nowrap hero-title-lead">
            {t('hero.primaryTitle')}
          </span>
          <span className="block whitespace-normal lg:whitespace-nowrap hero-title-editorial">
            {t('hero.primaryHighlight')}
          </span>
        </h1>
        <p
          className={`hero-description mt-3 ${
            language === 'fa' ? 'font-sora' : ''
          }`}
          dir={language === 'fa' ? 'rtl' : 'ltr'}
          style={{
            transform: `translateY(-${textOffset}px)`,
            opacity: textOpacity,
            transition: 'opacity 150ms linear'
          }}
        >
          {[
            t('hero.primarySubheadlineLine1'),
            t('hero.primarySubheadlineLine2'),
            t('hero.primarySubheadlineLine3')
          ].join(' ')}
        </p>

        <Link
          href="/contact"
          className={`hero-cta-link mt-6 sm:mt-8 inline-flex items-center gap-2 w-fit ${language === 'fa' ? 'flex-row-reverse' : ''}`}
          style={{
            transform: `translateY(-${textOffset}px)`,
            opacity: textOpacity,
            transition: 'opacity 150ms linear'
          }}
        >
          {language === 'fa' ? (
            <span className="hero-cta-arrow" aria-hidden>
              <ArrowLeft />
            </span>
          ) : (
            <span className="hero-cta-arrow" aria-hidden>
              <ArrowRight />
            </span>
          )}
          <span className="hero-cta-prefix">{t('hero.consultationPrefix')}</span>
          {' '}
          <span className="hero-cta-suffix">{t('hero.consultationSuffix')}</span>
        </Link>
      </div>

      {/* Full Width Marquee Strip */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <section className="hero-marquee-strip py-3 sm:py-4 overflow-hidden">
            <div className={`flex whitespace-nowrap marquee-slow ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {/* Content block 1 */}
              <div className="flex-shrink-0 flex items-center marquee-inner">
                <span className="font-normal text-base sm:text-lg marquee-item">
                  {t('hero.marquee.line1')} <span className="marquee-dot">•</span>
                </span>
                <span className="font-normal text-base sm:text-lg marquee-item">
                  {t('hero.marquee.line2')} <span className="marquee-dot">•</span>
                </span>
                <span className="font-normal text-base sm:text-lg marquee-item">
                  {t('hero.marquee.line3')} <span className="marquee-dot">•</span>
                </span>
              </div>
              {/* Content block 2 (duplicate for seamless loop) */}
              <div className="flex-shrink-0 flex items-center marquee-inner">
                <span className="font-normal text-base sm:text-lg marquee-item">
                  {t('hero.marquee.line1')} <span className="marquee-dot">•</span>
                </span>
                <span className="font-normal text-base sm:text-lg marquee-item">
                  {t('hero.marquee.line2')} <span className="marquee-dot">•</span>
                </span>
                <span className="font-normal text-base sm:text-lg marquee-item">
                  {t('hero.marquee.line3')} <span className="marquee-dot">•</span>
                </span>
              </div>
            </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;