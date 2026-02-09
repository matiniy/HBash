'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface CredentialsProps {
  /** When true, render only the grid (no section wrapper) for embedding inside Documents */
  inline?: boolean;
}

const Credentials: React.FC<CredentialsProps> = ({ inline = false }) => {
  const { t, language } = useLanguage();

  const grid = (
    <div className="credentials-cards grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-4 sm:gap-5 mb-0">
          {/* Licensed Realtor */}
          <div className="p-3 sm:p-4 text-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <Image src="/images/brokerage/agreement.png" alt={t('credentials.licensedRealtor')} width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className={`section-title-luxerie credentials-title mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.licensedRealtor')}</h3>
            <p className={`credentials-subtext mb-1 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.name')}</p>
            <p className={`credentials-detail whitespace-pre-line ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.trecLicense')}</p>
          </div>

          {/* Brokerage */}
          <div className="p-3 sm:p-4 text-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <Image src="/images/brokerage/Brokerage.png" alt={t('credentials.brokerage')} width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className={`section-title-luxerie credentials-title mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.brokerage')}</h3>
            <p className={`credentials-subtext mb-1 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.homesmartStars')}</p>
            <p className={`credentials-detail whitespace-pre-line ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.operatingUnder')}</p>
          </div>

          {/* Experience */}
          <div className="p-3 sm:p-4 text-center" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 flex items-center justify-center">
              <Image src="/images/brokerage/Experience.png" alt={t('credentials.experience')} width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className={`section-title-luxerie credentials-title mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.experience')}</h3>
            <p className={`credentials-subtext mb-1 ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.yearsExperience')}</p>
            <p className={`credentials-detail whitespace-pre-line ${language === 'fa' ? 'font-sora' : ''}`}>{t('credentials.experienceDetail')}</p>
          </div>
    </div>
  );

  if (inline) {
    return <div className="credentials-inline mt-4 sm:mt-5 mb-8 sm:mb-10 md:mb-12 lg:mb-14">{grid}</div>;
  }

  return (
    <section className="credentials-section pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-12 lg:pb-16 bg-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-aqua-neon rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-aqua-neon rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {grid}
      </div>
    </section>
  );
};

export default Credentials;
