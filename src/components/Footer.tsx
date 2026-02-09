'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <footer className="bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-800 pt-6 xs:pt-8 pb-6 xs:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl xs:text-2xl font-bold text-white mb-3 xs:mb-4">Haideh Bashash</h3>
            <p className={`text-sm xs:text-base text-white mb-4 xs:mb-6 max-w-md ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Info - left-aligned */}
          <div>
            <h4 className={`text-base xs:text-lg font-semibold text-white mb-3 xs:mb-4 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('footer.contactInfo')}
            </h4>
            <div className="space-y-2 xs:space-y-3 text-white">
              <p className="flex items-start text-sm min-w-0 break-words gap-2">
                <svg className="footer-contact-icon w-3 h-3 xs:w-4 xs:h-4 mt-0.5 xs:mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                5717 Legacy Dr Suite 250, Plano, TX 75024, United States
              </p>
              <p className="flex items-center text-sm gap-2">
                <svg className="footer-contact-icon w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 214-916-9778
              </p>
              <p className="flex items-center text-sm gap-2">
                <svg className="footer-contact-icon w-3 h-3 xs:w-4 xs:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@haidehbashash.com
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="border-t border-gray-800 mt-6 xs:mt-8 pt-6 xs:pt-8">
          <div className="text-center space-y-2">
            <p className={`text-xs xs:text-sm text-white ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('footer.copyright')}{' '}
              <span>| </span>
              <a
                href="https://www.metamatn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#2B8097] transition-colors"
              >
                {t('footer.designedBy')}
              </a>
            </p>
            <p className={`text-xs xs:text-sm text-white ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <Link href="/trec-notice" className="text-aqua-neon hover:text-[#2B8097] underline transition-colors">
                {t('footer.trecNotice')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;