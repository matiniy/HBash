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
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-aqua-neon fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-deep-forest">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 ${language === 'fa' ? 'font-sora' : ''}`}
          dir={language === 'fa' ? 'rtl' : 'ltr'}
        >
          <h2 className="section-title-luxerie section-title-luxerie-large text-white">
            {t('reviews.title')}
          </h2>
          <p
            className={`mt-2 text-white/90 text-sm xs:text-base sm:text-lg ${
              language === 'fa' ? 'font-sora' : ''
            }`}
            dir={language === 'fa' ? 'rtl' : 'ltr'}
          >
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="relative min-h-[220px] sm:min-h-[260px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-aqua-neon/10 group-hover:bg-white/10 group-hover:border-aqua-neon/30 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <StarRating />
                      <p
                        className={`text-white text-sm xs:text-base sm:text-lg leading-relaxed mb-3 group-hover:text-white transition-colors ${
                          language === 'fa' ? 'font-sora' : ''
                        }`}
                        dir={language === 'fa' ? 'rtl' : 'ltr'}
                      >
                        {testimonial.text}
                      </p>
                      <div className="flex items-center justify-between">
                        <p
                          className={`text-white font-semibold text-sm xs:text-base ${
                            language === 'fa' ? 'font-sora' : ''
                          }`}
                          dir={language === 'fa' ? 'rtl' : 'ltr'}
                        >
                          — {testimonial.author}
                        </p>
                        <span
                          className={`text-aqua-neon text-xs xs:text-sm font-semibold group-hover:text-[#00e694] transition-colors ${
                            language === 'fa' ? 'font-sora' : ''
                          }`}
                        >
                          {t('about.readMoreReviews')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}

          {testimonials.length > 1 && (
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial ? 'w-8 bg-aqua-neon' : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;


