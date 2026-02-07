'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    text: 'Haideh helped us immensely in our real estate process. She is knowledgeable, kind, and effective.',
    author: 'Peter Curtis',
  },
  {
    text: 'After months of frustration, Haideh helped us find our dream home within weeks. She made the entire process smooth, enjoyable, and stress-free. Highly recommend!',
    author: 'Neda Mirzaeian',
  },
  {
    text: 'My wife and I had a fantastic experience with Haideh! She was super knowledgeable and always available. We found the perfect home without any stress.',
    author: 'Hossein Entezari',
  },
];

const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/NTTL8uiUqwZL3enEA';

const StarRating: React.FC = () => {
  return (
    <div className="flex items-center gap-1 justify-center reviews-stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const QuoteMark: React.FC = () => (
  <span className="reviews-quote-mark" aria-hidden>"</span>
);

const Reviews: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    slideRefs.current[currentTestimonial]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [currentTestimonial]);

  return (
    <section className="py-16 sm:py-20 bg-transparent relative">
      {/* Noise overlay: size 2.6, density 100%, color #FEE2C6 */}
      <div className="reviews-noise-overlay" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
          <defs>
            <filter id="reviewsNoise" x="0" y="0">
              <feTurbulence type="fractalNoise" baseFrequency="0.385" numOctaves="4" result="turbulence" />
              <feColorMatrix
                in="turbulence"
                type="matrix"
                values="0.996 0 0 0 0 0 0.886 0 0 0 0 0 0.776 0 0 0 0 0 1 0"
                result="noise"
              />
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="#FEE2C6" filter="url(#reviewsNoise)" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-8 sm:mb-12 ${language === 'fa' ? 'font-sora' : ''}`}
          dir={language === 'fa' ? 'rtl' : 'ltr'}
        >
          <h2 className="reviews-section-title">
            <span className="reviews-title-clients">{t('reviews.titleClients')}</span>
            <span className="reviews-title-stories">{t('reviews.titleStories')}</span>
          </h2>
          <p
            className={`reviews-subtitle mt-2 ${language === 'fa' ? 'font-sora' : ''}`}
            dir={language === 'fa' ? 'rtl' : 'ltr'}
          >
            {t('reviews.subtitle')}
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block mt-4 text-[#0d7488] text-sm sm:text-base font-semibold hover:underline ${language === 'fa' ? 'font-sora' : ''}`}
            dir={language === 'fa' ? 'rtl' : 'ltr'}
          >
            {t('about.readMoreReviews')}
          </a>
        </div>

        <div
          className="reviews-carousel overflow-x-auto overflow-y-visible pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="reviews-carousel-inner flex gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => { slideRefs.current[index] = el; }}
                onClick={() => setCurrentTestimonial(index)}
                className={`reviews-carousel-slide flex-shrink-0 text-center transition-opacity duration-300 cursor-pointer px-4 sm:px-6 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-50'
                }`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p
                    className={`reviews-author text-[#144552] font-semibold text-sm xs:text-base mb-2 ${
                      language === 'fa' ? 'font-sora' : ''
                    }`}
                    dir={language === 'fa' ? 'rtl' : 'ltr'}
                  >
                    {testimonial.author}
                  </p>
                  <div className="flex items-start justify-center gap-1 sm:gap-2">
                    <QuoteMark />
                    <p
                      className={`text-[#144552]/90 text-sm xs:text-base sm:text-lg leading-relaxed ${
                        language === 'fa' ? 'font-sora' : ''
                      }`}
                      dir={language === 'fa' ? 'rtl' : 'ltr'}
                    >
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-4">
                    <StarRating />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;


