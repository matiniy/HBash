'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const Credentials: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="credentials-section py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-aqua-neon rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-aqua-neon rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Credentials Grid - no box background, 3 items, closer together */}
        <div className="credentials-cards grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {/* Licensed Realtor */}
          <div className="p-4 sm:p-5 text-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Image src="/images/brokerage/agreement.png" alt={t('credentials.licensedRealtor')} width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className={`section-title-luxerie credentials-title mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.licensedRealtor')}</h3>
            <p className={`credentials-subtext mb-1 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.name')}</p>
            <p className={`credentials-detail whitespace-pre-line ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.trecLicense')}</p>
          </div>

          {/* Brokerage */}
          <div className="p-4 sm:p-5 text-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Image src="/images/brokerage/Brokerage.png" alt={t('credentials.brokerage')} width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className={`section-title-luxerie credentials-title mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.brokerage')}</h3>
            <p className={`credentials-subtext mb-1 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.homesmartStars')}</p>
            <p className={`credentials-detail whitespace-pre-line ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.operatingUnder')}</p>
          </div>

          {/* Experience */}
          <div className="p-4 sm:p-5 text-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Image src="/images/brokerage/Experience.png" alt={t('credentials.experience')} width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className={`section-title-luxerie credentials-title mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.experience')}</h3>
            <p className={`credentials-subtext mb-1 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.yearsExperience')}</p>
            <p className={`credentials-detail whitespace-pre-line ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.experienceDetail')}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Credentials;
