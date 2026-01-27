'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Documents: React.FC = () => {
  const { t, language } = useLanguage();

  const documents = [
    {
      title: 'IABS-2026 HomeSmart',
      filename: 'IABS-2026_HomeSmart.pdf',
      path: '/images/document/IABS-2026_HomeSmart.pdf',
      description: 'Information About Brokerage Services'
    },
    {
      title: 'TREC Consumer Protection Notice',
      filename: 'TREC Consumer Protection Notice 9.1.2023.pdf',
      path: '/images/document/TREC Consumer Protection Notice 9.1.2023.pdf',
      description: 'Texas Real Estate Commission Consumer Protection Notice'
    }
  ];

  return (
    <section className="py-16 bg-deep-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('documents.title')}
          </h2>
          <p className={`text-white text-sm xs:text-base sm:text-lg max-w-3xl mx-auto ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('documents.subtitle')}
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-aqua-neon/10 hover:border-aqua-neon/30 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                {/* PDF Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-lg flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Document Info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-aqua-neon transition-colors ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                    {doc.title}
                  </h3>
                  <p className={`text-white/80 text-sm sm:text-base mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                    {doc.description}
                  </p>
                  <a
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={doc.filename}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-aqua-neon/20 hover:bg-aqua-neon/30 text-aqua-neon rounded-lg font-semibold transition-all duration-300 group-hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span className={`text-sm sm:text-base ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                      {t('documents.download')}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;

