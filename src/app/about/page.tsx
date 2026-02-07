'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

export default function About() {
  const { t, language } = useLanguage();
  return (
    <main className="min-h-screen bg-deep-forest overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-8 sm:pb-12 lg:pb-[50px] bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`section-title-luxerie section-title-luxerie-large text-white mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('aboutPage.title')} <span className="text-aqua-neon">{t('aboutPage.titleHighlight')}</span>
            </h1>
            <p className={`text-base xs:text-lg sm:text-xl text-white max-w-3xl mx-auto px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('aboutPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <GradientNoiseWrapper>
      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className={`section-title-luxerie section-title-luxerie-large text-white mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.sectionTitle')}
              </h2>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className={`text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.paragraph1')}
                </p>
                <p className={`text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.paragraph2')}
                </p>
                <p className={`text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.paragraph3')}
                </p>
              </div>
              <Link href="/contact">
                <Button variant="primary" className={`w-full sm:w-auto ${language === 'fa' ? 'sm:min-w-[calc(auto+15px)]' : ''}`}>
                  {t('aboutPage.getInTouch')}
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/images/Realtor/realtor-photo.png"
                alt="Haideh Bashash - Dallas Realtor"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
                quality={90}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`section-title-luxerie section-title-luxerie-large text-white mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('aboutPage.valuesTitle')} <span className="text-aqua-neon">{t('aboutPage.valuesTitleHighlight')}</span>
            </h2>
            <p className={`text-base sm:text-lg text-white max-w-3xl mx-auto px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('aboutPage.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.integrity')}
              </h3>
              <p className={`text-sm sm:text-base text-white px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.integrityDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.excellence')}
              </h3>
              <p className={`text-sm sm:text-base text-white px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.excellenceDesc')}
              </p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.clientFocus')}
              </h3>
              <p className={`text-sm sm:text-base text-white px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.clientFocusDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - keep bright aqua bar */}
      <section className="py-12 sm:py-16 lg:py-20 bg-aqua-neon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`section-title-luxerie section-title-luxerie-large text-deep-forest mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('aboutPage.ctaTitle')}
          </h2>
          <p className={`text-base sm:text-lg text-deep-forest mb-6 sm:mb-8 px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('aboutPage.ctaSubtitle')}
          </p>
          <Link href="/contact">
            <Button variant="secondary" className={`bg-deep-forest text-aqua-neon border-deep-forest hover:bg-white hover:text-deep-forest w-full sm:w-auto ${language === 'fa' ? 'sm:min-w-[calc(auto+15px)]' : ''}`}>
              {t('aboutPage.scheduleConsultation')}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}