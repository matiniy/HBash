'use client';

import React, { useState } from 'react';
import Button from './Button';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMsg = data.error || 'Failed to send message. Please try again.';
        console.error('API Error:', errorMsg);
        throw new Error(errorMsg);
      }
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      // Error message is already set in the component's error display
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="section-title-luxerie section-title-luxerie-large text-white mb-4 sm:mb-6" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            <span className="hero-cta-prefix">{t('contact.title')}</span>{' '}
            <span className="hero-cta-suffix text-aqua-neon">{t('contact.consultation')}</span>
          </h2>
          <p className="contact-subtitle text-sm xs:text-base sm:text-lg lg:text-xl text-white max-w-2xl mx-auto" dir={language === 'fa' ? 'rtl' : 'ltr'}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className={`block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('contact.fullName')} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 xs:px-4 py-2.5 xs:py-3 min-h-[44px] bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 text-base ${language === 'fa' ? 'font-sora text-right' : ''}`}
                  placeholder={t('contact.fullNamePlaceholder')}
                  dir={language === 'fa' ? 'rtl' : 'ltr'}
                />
              </div>

              <div>
                <label htmlFor="email" className={`block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                  {t('contact.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 xs:px-4 py-2.5 xs:py-3 min-h-[44px] bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 text-base ${language === 'fa' ? 'font-sora text-right' : ''}`}
                  placeholder={t('contact.emailPlaceholder')}
                  dir={language === 'fa' ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={`block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 xs:px-4 py-2.5 xs:py-3 min-h-[44px] bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 text-base ${language === 'fa' ? 'font-sora text-right' : ''}`}
                placeholder={t('contact.phonePlaceholder')}
                dir={language === 'fa' ? 'rtl' : 'ltr'}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('contact.message')} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className={`w-full px-3 xs:px-4 py-2.5 xs:py-3 min-h-[120px] bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 resize-none text-base ${language === 'fa' ? 'font-sora text-right' : ''}`}
                placeholder={t('contact.messagePlaceholder')}
                dir={language === 'fa' ? 'rtl' : 'ltr'}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className={`p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('contact.success')}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={`p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {t('contact.error')}
              </div>
            )}

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="btn-contact-submit w-full sm:w-auto"
                onClick={() => {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-forest" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('contact.sending')}
                  </div>
                ) : (
                  t('contact.sendMessage')
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;