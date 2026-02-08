'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TREC_DISCLOSURE_URL = 'https://www.trec.texas.gov/';

const DOWNLOADS = [
  { key: 'downloadTrec', href: '/images/document/TREC%20Consumer%20Protection%20Notice%209.1.2023.pdf', download: 'TREC-Consumer-Protection-Notice.pdf' },
  { key: 'downloadIabs', href: '/images/document/IABS-2026_HomeSmart.pdf', download: 'IABS-2026_HomeSmart.pdf' },
] as const;

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const WebIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const Documents: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="documents-section py-12 sm:py-14 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="documents-container max-w-[946px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title - PP Editorial: "Important" + "Documents" (italic) */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className={`documents-title documents-title-combo mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <span className="documents-title-prefix title-combo-first">{t('documents.titlePrefix')}</span>{' '}
            <span className="documents-title-suffix title-combo-highlight">{t('documents.titleSuffix')}</span>
          </h2>
          <p className={`documents-subtitle text-sm xs:text-base sm:text-lg max-w-3xl mx-auto ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('documents.subtitle')}
          </p>
        </div>

        {/* Consolidated disclosure block - like the image */}
        <div className="documents-disclosure-block text-center space-y-4">
          <p
            className={`documents-fair-housing font-medium text-base sm:text-lg ${language === 'fa' ? 'font-sora' : ''}`}
            dir={language === 'fa' ? 'rtl' : 'ltr'}
            style={{ color: '#144552' }}
          >
            {t('documents.fairHousingStatement')}
          </p>
          <p className={`documents-disclosure-line text-sm sm:text-base ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('documents.disclosureLine')}
          </p>
        </div>

        {/* View Full Disclosure on TREC.Gov - above downloads, with web icon */}
        <div className={`documents-trec-row mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-3 text-center ${language === 'fa' ? 'flex-row-reverse' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
          <a
            href={TREC_DISCLOSURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="documents-trec-link documents-download-link inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium underline hover:opacity-85 transition-opacity"
          >
            <WebIcon className="documents-download-icon w-4 h-4 flex-shrink-0" />
            <span className={language === 'fa' ? 'font-sora' : ''}>{t('documents.viewFullDisclosure')}</span>
          </a>
        </div>

        {/* Download list - small icon + document name */}
        <ul className="documents-download-list mt-3 sm:mt-4 space-y-3 text-center" role="list">
          {DOWNLOADS.map(({ key, href, download }) => (
            <li key={key} className={`documents-download-item flex items-center justify-center gap-2 sm:gap-3 ${language === 'fa' ? 'flex-row-reverse' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <a
                href={href}
                download={download}
                target="_blank"
                rel="noopener noreferrer"
                className="documents-download-link inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium hover:opacity-85 transition-opacity"
              >
                <DownloadIcon className="documents-download-icon w-4 h-4 flex-shrink-0" />
                <span className={language === 'fa' ? 'font-sora' : ''}>{t(`documents.${key}`)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Documents;
