'use client';

import React, { useState } from 'react';
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

const ViewIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Documents: React.FC = () => {
  const { t, language } = useLanguage();
  const [overlayPdf, setOverlayPdf] = useState<string | null>(null);

  return (
    <section className="documents-section pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28 bg-transparent relative overflow-hidden">
      <div className="documents-container max-w-[946px] mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title - Raleway + PP Editorial italic: "Licensing &" + "Disclosures" */}
        <div className="text-center mb-5 sm:mb-6 lg:mb-8">
          <h2 className={`documents-title documents-title-combo mb-2 sm:mb-3 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <span className="documents-title-prefix title-combo-first">{t('documents.titlePrefix')}</span>{' '}
            <span className="documents-title-suffix title-combo-highlight">{t('documents.titleSuffix')}</span>
          </h2>
        </div>

        {/* Credentials: Licensed Realtor, Brokerage, Experience - above download links */}
        <Credentials inline />

        {/* Download links - view (eye) + optional download */}
        <ul className="documents-download-list mt-8 sm:mt-10 lg:mt-12 flex flex-wrap items-center justify-center gap-x-3 xs:gap-x-4 sm:gap-x-6 gap-y-3 text-center" role="list">
          {DOWNLOADS.map(({ key, href, download }, index) => (
            <li key={key} className={`documents-download-item flex items-center justify-center gap-2 sm:gap-3 min-w-0 ${language === 'fa' ? 'flex-row-reverse' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {index > 0 && <span className="documents-download-sep text-[#144552] opacity-60 flex-shrink-0" aria-hidden> • </span>}
              <span className="inline-flex items-center gap-2 sm:gap-3 min-w-0">
                <button
                  type="button"
                  onClick={() => setOverlayPdf(href)}
                  className="documents-download-link inline-flex items-center gap-2 sm:gap-3 text-xs xs:text-sm sm:text-base font-medium hover:opacity-85 transition-opacity break-words bg-transparent border-0 cursor-pointer p-0"
                  aria-label={`View ${t(`documents.${key}`)}`}
                >
                  <ViewIcon className="documents-download-icon w-4 h-4 flex-shrink-0" />
                  <span className={language === 'fa' ? 'font-sora' : ''}>{t(`documents.${key}`)}</span>
                </button>
                <a
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="documents-download-link inline-flex items-center gap-1.5 text-xs xs:text-sm font-medium hover:opacity-85 transition-opacity shrink-0"
                  aria-label={`Download ${t(`documents.${key}`)}`}
                  title="Download"
                >
                  <DownloadIcon className="w-4 h-4 flex-shrink-0" />
                  <span className="sr-only xs:not-sr-only xs:inline">{language === 'fa' ? 'دانلود' : 'Download'}</span>
                </a>
              </span>
            </li>
          ))}
        </ul>

        {/* PDF overlay modal */}
        {overlayPdf && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            role="dialog"
            aria-modal="true"
            aria-label="Document viewer"
          >
            <div className="documents-overlay-panel relative w-full max-w-4xl h-[85vh] sm:h-[90vh] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
              <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-[#144552]/20 bg-[#144552]/5">
                <span className="text-sm font-medium text-[#144552] truncate">Document</span>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={overlayPdf}
                    download={DOWNLOADS.find((d) => d.href === overlayPdf)?.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#144552] border border-[#144552]/40 rounded hover:bg-[#144552]/10 transition-colors"
                  >
                    <DownloadIcon className="w-4 h-4" />
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setOverlayPdf(null)}
                    className="p-2 rounded hover:bg-[#144552]/10 text-[#144552] transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-0 w-full">
                <iframe
                  src={`${overlayPdf}#view=FitH`}
                  title="Document viewer"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOverlayPdf(null)}
              className="absolute inset-0 -z-10"
              aria-label="Close overlay"
            />
          </div>
        )}

        {/* Fair Housing statement below downloads */}
        <p
          className={`documents-fair-housing font-medium text-sm xs:text-base sm:text-lg mt-3 sm:mt-4 text-center px-1 max-w-3xl mx-auto ${language === 'fa' ? 'font-sora' : ''}`}
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
