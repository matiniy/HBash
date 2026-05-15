'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  const faqItems = [
    { question: t('contactPage.faq1Question'), answer: t('contactPage.faq1Answer') },
    { question: t('contactPage.faq2Question'), answer: t('contactPage.faq2Answer') },
    { question: t('contactPage.faq3Question'), answer: t('contactPage.faq3Answer') },
    { question: t('contactPage.faq4Question'), answer: t('contactPage.faq4Answer') }
  ];

  return (
    <main className="contact-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info Section */}
      <section className="contact-page-contact-info py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Contact Information */}
            <div className="flex flex-col" dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <h2 className={`contact-page-title page-title-size font-bold mb-6 sm:mb-8 ${language === 'fa' ? 'font-sora' : ''}`}>
                <span className="title-combo-first">{t('contactPage.contactInfoTitle')}</span>{' '}<span className="contact-page-highlight title-combo-highlight">{t('contactPage.contactInfoHighlight')}</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`contact-page-title text-lg sm:text-xl font-semibold mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('contactPage.officeLocation')}</h3>
                    <p className={`contact-page-text text-sm sm:text-base break-words ${language === 'fa' ? 'font-sora' : ''}`}>
                      {t('contactPage.addressLine1')}<br />
                      {t('contactPage.addressLine2')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`contact-page-title text-lg sm:text-xl font-semibold mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('contactPage.phone')}</h3>
                    <p className={`contact-page-text text-sm sm:text-base ${language === 'fa' ? 'font-sora' : ''}`}>
                      {t('contactPage.phoneNumber')}<br />
                      {t('contactPage.phoneHours')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`contact-page-title text-lg sm:text-xl font-semibold mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('contactPage.email')}</h3>
                    <p className={`contact-page-text text-sm sm:text-base ${language === 'fa' ? 'font-sora' : ''}`}>
                      {t('contactPage.emailAddress')}<br />
                      {t('contactPage.emailResponse')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`contact-page-title text-lg sm:text-xl font-semibold mb-2 ${language === 'fa' ? 'font-sora' : ''}`}>{t('contactPage.officeHours')}</h3>
                    <p className={`contact-page-text text-sm sm:text-base ${language === 'fa' ? 'font-sora' : ''}`}>
                      {t('contactPage.hoursWeekday')}<br />
                      {t('contactPage.hoursSaturday')}<br />
                      {t('contactPage.hoursSunday')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps embed - office location */}
            <div className="contact-page-map-placeholder rounded-2xl overflow-hidden min-h-[16rem] lg:min-h-0 lg:h-full">
              <iframe
                src="https://maps.google.com/maps?q=5550+Granite+Parkway,+Suite+120,+Plano,+TX+75204,+USA&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('contactPage.mapTitle')}
                className="w-full h-full min-h-[16rem] block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - no box background */}
      <section className="contact-page-faq py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`contact-page-title page-title-size font-bold mb-4 sm:mb-6 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              <span className="title-combo-first">{t('contactPage.faqTitle')}</span>{' '}<span className="contact-page-highlight title-combo-highlight">{t('contactPage.faqTitleHighlight')}</span>
            </h2>
            <p className={`contact-page-text text-base sm:text-lg px-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {t('contactPage.faqSubtitle')}
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="py-4 sm:py-5 border-b border-[#144552]/20" dir={language === 'fa' ? 'rtl' : 'ltr'}>
                <h3 className={`contact-page-title text-base sm:text-lg font-semibold mb-2 sm:mb-3 ${language === 'fa' ? 'font-sora' : ''}`}>{faq.question}</h3>
                <p className={`contact-page-text text-sm sm:text-base ${language === 'fa' ? 'font-sora' : ''}`}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}