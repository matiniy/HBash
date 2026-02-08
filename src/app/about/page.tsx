'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function About() {
  const { t, language } = useLanguage();
  return (
    <main className="about-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
      {/* Hero Section - name only, left-aligned */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-2 sm:pb-4 lg:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl ${language === 'fa' ? 'text-right' : 'text-left'}`}>
            <h1 className={`about-page-hero-title page-title-size mb-0 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <span className="title-combo-first">{t('aboutPage.sectionTitlePrefix')}</span><span className="title-combo-highlight">{t('aboutPage.sectionTitleSuffix')}</span>
            </h1>
          </div>
        </div>
      </section>
      {/* Story Section - subheader + bio in left column (same style/size/line break), image right */}
      <section className="pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className={`about-page-text text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.subtitle')}
                </p>
                <p className={`about-page-text text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.paragraph1')}
                </p>
                <p className={`about-page-text text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.paragraph2')}
                </p>
                <p className={`about-page-text text-sm xs:text-base sm:text-lg text-white leading-relaxed ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('aboutPage.paragraph3')}
                </p>
              </div>
              <Link
                href="/contact"
                className={`hero-cta-link about-page-cta inline-flex items-center gap-2 w-fit ${language === 'fa' ? 'flex-row-reverse' : ''}`}
                dir={language === 'fa' ? 'rtl' : 'ltr'}
              >
                {language === 'fa' ? (
                  <span className="hero-cta-arrow" aria-hidden><ArrowLeft /></span>
                ) : (
                  <span className="hero-cta-arrow" aria-hidden><ArrowRight /></span>
                )}
                <span className="hero-cta-prefix">{t('aboutPage.getInTouch')}</span>
              </Link>
            </div>
            <div className="relative -mt-6 sm:-mt-10 lg:-mt-12 max-w-[88%] lg:max-w-[82%] mx-auto lg:mx-0 lg:ml-auto">
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
            <h2 className={`about-page-title about-page-values-heading section-title-luxerie page-title-size mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <span className="title-combo-first">{t('aboutPage.valuesTitle')}</span>{' '}<span className="about-page-values-highlight title-combo-highlight">{t('aboutPage.valuesTitleHighlight')}</span>
            </h2>
            <p className={`about-page-text about-page-values-subtitle text-base sm:text-lg max-w-3xl mx-auto px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('aboutPage.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="about-page-values-card p-6 sm:p-8 text-center group">
              <div className="about-page-values-icon-wrap relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image src="/images/icons%20background/image%20133.png" alt="" fill className="object-contain pointer-events-none" />
                <div className="about-page-values-icon relative z-10 w-6 h-6 sm:w-10 sm:h-10">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className={`about-page-text text-lg sm:text-xl font-semibold mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.integrity')}
              </h3>
              <p className={`about-page-text text-sm sm:text-base px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.integrityDesc')}
              </p>
            </div>

            <div className="about-page-values-card p-6 sm:p-8 text-center group">
              <div className="about-page-values-icon-wrap relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image src="/images/icons%20background/image%20133.png" alt="" fill className="object-contain pointer-events-none" />
                <div className="about-page-values-icon relative z-10 w-6 h-6 sm:w-10 sm:h-10">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className={`about-page-text text-lg sm:text-xl font-semibold mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.excellence')}
              </h3>
              <p className={`about-page-text text-sm sm:text-base px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.excellenceDesc')}
              </p>
            </div>

            <div className="about-page-values-card p-6 sm:p-8 text-center group">
              <div className="about-page-values-icon-wrap relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <Image src="/images/icons%20background/image%20133.png" alt="" fill className="object-contain pointer-events-none" />
                <div className="about-page-values-icon relative z-10 w-6 h-6 sm:w-10 sm:h-10">
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className={`about-page-text text-lg sm:text-xl font-semibold mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.clientFocus')}
              </h3>
              <p className={`about-page-text text-sm sm:text-base px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('aboutPage.clientFocusDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - green #144552 bar */}
      <section className="about-page-cta-section py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className={`about-page-title section-title-luxerie page-title-size about-page-cta-title mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('aboutPage.ctaTitle')}
          </h2>
          <p className={`about-page-text text-base sm:text-lg about-page-cta-text mb-6 sm:mb-8 px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('aboutPage.ctaSubtitle')}
          </p>
          <Link href="/contact" className="flex justify-center">
            <Button variant="secondary" className={`about-page-cta-btn bg-deep-forest border-deep-forest hover:bg-white hover:text-deep-forest w-full sm:w-auto ${language === 'fa' ? 'sm:min-w-[calc(auto+15px)]' : ''}`}>
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