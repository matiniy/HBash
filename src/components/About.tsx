'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
          {/* Left - Portrait only */}
          <div className={`about-section-animate about-section-left relative w-full max-w-[92%] lg:max-w-[85%] mx-auto shrink-0 ${isInView ? 'about-section-visible' : ''}`}>
            <Image
              src="/images/Realtor/realtor-photo.png"
              alt="H Bashash - Dallas Realtor"
              width={600}
              height={800}
              className="w-full h-auto max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh] object-contain object-top"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>

          {/* Right - Title, bio with inline Read More, then buttons */}
          <div className={`about-section-animate about-section-right space-y-4 sm:space-y-5 ${language === 'fa' ? 'font-sora' : ''} ${isInView ? 'about-section-visible' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <h2 className="about-heading text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight">
              <span className="about-heading-raleway title-combo-first">{t('about.headingPrefix')}</span>{' '}
              <span className="about-heading-editorial title-combo-highlight">{t('about.headingName')}</span>
            </h2>
            <p className={`about-body text-sm xs:text-base sm:text-lg lg:text-xl leading-relaxed ${language === 'fa' ? 'text-right' : 'text-left'}`} style={{ fontFamily: 'var(--font-raleway), Raleway, sans-serif' }}>
              {t('about.bioExcerpt')}{' '}
              <Link href="/about" className="about-read-more font-semibold transition-colors duration-300">
                {t('about.readMore')}
              </Link>
            </p>
            <div className="flex flex-row flex-wrap gap-3 sm:gap-4 items-center pt-1">
              <Link href="/contact">
                <Button variant="primary" className="min-h-[48px] h-12 min-w-[180px] sm:min-w-[200px] justify-center rounded-[10px]">
                  <span className="hero-cta-prefix">{t('hero.consultationPrefix')}</span>{' '}
                  <span className="hero-cta-suffix">{t('hero.consultationSuffix')}</span>
                </Button>
              </Link>
              <Link href="https://t.me/KasboKarDallas" target="_blank" rel="noopener noreferrer">
                <button className="about-telegram-btn min-h-[48px] h-12 min-w-[180px] sm:min-w-[200px] px-4 xs:px-6 py-2.5 xs:py-3 bg-black/30 rounded-[10px] border border-white/20 hover:bg-black/40 transition-all duration-300 flex items-center gap-2 justify-center text-xs xs:text-sm font-medium">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  {t('about.joinNow')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;