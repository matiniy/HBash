'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

export default function Services() {
  const { t, language } = useLanguage();
  const services = [
    {
      title: t('servicesPage.homeBuying'),
      description: t('servicesPage.homeBuyingDesc'),
      features: [
        'Market analysis and property evaluation',
        'Negotiation and offer strategies',
        'Home inspection coordination',
        'Closing process management'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: t('servicesPage.homeSelling'),
      description: t('servicesPage.homeSellingDesc'),
      features: [
        'Property valuation and pricing strategy',
        'Professional photography and staging',
        'Marketing and advertising campaigns',
        'Showings and open house management'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: t('servicesPage.investmentProperties'),
      description: t('servicesPage.investmentPropertiesDesc'),
      features: [
        'Market analysis and investment opportunities',
        'Rental property evaluation',
        'Cash flow analysis and projections',
        'Property management recommendations'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('servicesPage.relocationServices'),
      description: t('servicesPage.relocationServicesDesc'),
      features: [
        'Neighborhood research and recommendations',
        'School district information',
        'Local amenities and services guide',
        'Settlement assistance and support'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: t('servicesPage.marketAnalysis'),
      description: t('servicesPage.marketAnalysisDesc'),
      features: [
        'Comparative market analysis (CMA)',
        'Property value assessments',
        'Market trend analysis',
        'Investment opportunity evaluation'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('servicesPage.consultation'),
      description: t('servicesPage.consultationDesc'),
      features: [
        'One-on-one strategy sessions',
        'Goal setting and planning',
        'Market education and guidance',
        'Ongoing support and advice'
      ],
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <main className="services-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
      {/* Hero Section - no black background */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-8 sm:pb-12 lg:pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`services-page-title section-title-luxerie section-title-luxerie-large mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <span className="title-combo-first">{t('servicesPage.title')}</span>{' '}<span className="services-page-highlight title-combo-highlight">{t('servicesPage.titleHighlight')}</span>
            </h1>
            <p className={`services-page-text text-base xs:text-lg sm:text-xl max-w-3xl mx-auto px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('servicesPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - no box background */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="services-page-card p-6 sm:p-8 group">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 sm:mb-6 services-page-icon-wrap">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 services-page-icon">
                    {service.icon}
                  </div>
                </div>
                <h3 className={`services-page-title text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {service.title}
                </h3>
                <p className={`services-page-text text-sm sm:text-base mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-start text-xs sm:text-sm services-page-text ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                      <svg className={`w-3 h-3 sm:w-4 sm:h-4 services-page-check flex-shrink-0 mt-0.5 ${language === 'fa' ? 'ml-2 sm:ml-3' : 'mr-2 sm:mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`services-page-title section-title-luxerie section-title-luxerie-large mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <span className="title-combo-first">{t('servicesPage.processTitle')}</span>{' '}<span className="services-page-highlight title-combo-highlight">{t('servicesPage.processTitleHighlight')}</span>
            </h2>
            <p className={`services-page-text text-base sm:text-lg max-w-3xl mx-auto px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('servicesPage.processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: t('servicesPage.step1Title'), description: t('servicesPage.step1Desc') },
              { step: '02', title: t('servicesPage.step2Title'), description: t('servicesPage.step2Desc') },
              { step: '03', title: t('servicesPage.step3Title'), description: t('servicesPage.step3Desc') },
              { step: '04', title: t('servicesPage.step4Title'), description: t('servicesPage.step4Desc') }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="services-page-step-circle w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <span className="services-page-step-num text-xl sm:text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className={`services-page-title text-lg sm:text-xl font-semibold mb-2 sm:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {item.title}
                </h3>
                <p className={`services-page-text text-sm sm:text-base px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - green #144552, no black button */}
      <section className="py-12 sm:py-16 lg:py-20 services-page-cta-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className={`services-page-title section-title-luxerie section-title-luxerie-large services-page-cta-title mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <span className="title-combo-first">{t('servicesPage.ctaTitlePrefix')}</span><span className="title-combo-highlight">{t('servicesPage.ctaTitleHighlight')}</span>
          </h2>
          <p className={`services-page-text text-base sm:text-lg mb-6 sm:mb-8 px-2 services-page-cta-text ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('servicesPage.ctaSubtitle')}
          </p>
          <Link href="/contact" className="flex justify-center">
            <span className="services-page-cta-btn inline-block px-4 xs:px-6 py-2.5 xs:py-3 rounded-[8px] font-semibold text-sm xs:text-base transition-all duration-300 min-h-[48px] flex items-center justify-center w-full sm:w-auto max-w-xs sm:max-w-none">
              {t('servicesPage.scheduleConsultation')}
            </span>
          </Link>
        </div>
      </section>

      <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}