'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Credentials from '@/components/Credentials';

const DOWNLOADS = [
  { key: 'downloadTrec', href: '/images/document/TREC%20Consumer%20Protection%20Notice%209.1.2023.pdf', download: 'TREC-Consumer-Protection-Notice.pdf' },
  { key: 'downloadGeneralInfo', href: '/images/document/General%20Info.%20%26%20Notice%20to%20Consumers%20(Buyer)%20-%209_25.pdf', download: 'General-Information-and-Notice-to-Consumers.pdf' },
] as const;

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Documents: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="documents-section pt-12 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 bg-transparent relative overflow-hidden">
      <div className="documents-container max-w-[946px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title - Raleway + PP Editorial italic: "Licensing &" + "Disclosures" */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className={`documents-title documents-title-combo mb-2 sm:mb-3 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <span className="documents-title-prefix title-combo-first">{t('documents.titlePrefix')}</span>{' '}
            <span className="documents-title-suffix title-combo-highlight">{t('documents.titleSuffix')}</span>
          </h2>
        </div>

        {/* Credentials: Licensed Realtor, Brokerage, Experience - above download links */}
        <Credentials inline />

        {/* Download links - one line */}
        <ul className="documents-download-list mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-center" role="list">
          {DOWNLOADS.map(({ key, href, download }, index) => (
            <li key={key} className={`documents-download-item flex items-center justify-center gap-2 sm:gap-3 ${language === 'fa' ? 'flex-row-reverse' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {index > 0 && <span className="documents-download-sep text-[#144552] opacity-60" aria-hidden> • </span>}
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

        {/* Fair Housing statement below downloads */}
        <p
          className={`documents-fair-housing font-medium text-base sm:text-lg mt-3 sm:mt-4 text-center ${language === 'fa' ? 'font-sora' : ''}`}
          dir={language === 'fa' ? 'rtl' : 'ltr'}
          style={{ color: '#144552' }}
        >
          {t('documents.fairHousingStatement')}
        </p>
      </div>
    </section>
  );
};

export default Documents;
