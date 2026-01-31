'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: 'url("/images/Background/Background.png")' }}
      ></div>
      
      {/* Overlay for readability - adjusted for theme visibility */}
      <div className="absolute inset-0 bg-deep-forest/10 z-0 about-section-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-8 lg:py-12">
          {/* Left Content - Realtor Image and CTA */}
          <div className="relative">
            <Image
              src="/images/Realtor/realtor-photo.JPG"
              alt="H Bashash - Dallas Realtor"
              width={600}
              height={800}
              className="w-full sm:w-[calc(100%-60px)] mx-auto h-[260px] xs:h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] object-cover object-top rounded-2xl shadow-2xl"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
                {/* Buttons - Responsive: Stacked on mobile, horizontal on desktop */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-full sm:max-w-[calc(100%-60px)] flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link href="/contact">
                <Button variant="primary" className="w-full sm:w-auto">
                  {t('hero.scheduleConsultation')}
                </Button>
              </Link>
              <Link href="https://t.me/KasboKarDallas" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-4 xs:px-6 py-2.5 xs:py-3 bg-black/30 text-white rounded-full hover:rounded-[10px] border border-white/20 hover:bg-black/40 transition-all duration-300 flex items-center gap-2 justify-center text-xs xs:text-sm">
                  <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  {t('about.joinNow')}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Glass Effect Box and Testimonials */}
          <div className="space-y-8">
            {/* Glass Effect Box - Positioned 150px to the left, overlapping image */}
            <div className={`relative -ml-0 sm:-ml-[100px] lg:-ml-[150px] w-full sm:w-[115%] lg:w-[120%] min-h-[160px] sm:min-h-[200px] lg:min-h-[220px] bg-black/40 backdrop-blur-lg rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-none p-4 sm:p-6 lg:p-8 text-white z-20 flex flex-col justify-center ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <div className="space-y-3 sm:space-y-4">
                <p className={`text-sm xs:text-base sm:text-lg lg:text-xl font-sora font-normal leading-relaxed ${language === 'fa' ? 'text-right' : 'text-left'} line-clamp-3`}>
                  {t('about.bio')}
                </p>
                <Link href="/about" className="inline-block mt-2">
                  <span className="text-aqua-neon hover:text-[#00e694] font-semibold text-sm xs:text-base sm:text-lg transition-colors duration-300 underline">
                    {t('about.readMore')}
                  </span>
                </Link>
              </div>
            </div>

            {/* Description text under bio */}
            <div className={`mt-8 sm:mt-10 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <p className={`text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed ${language === 'fa' ? 'text-right' : 'text-left'}`}>
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;