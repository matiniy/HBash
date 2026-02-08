'use client';

import React, { useState } from 'react';

const SOCIAL_LOGOS = [
  { src: '/images/social/Group 1533208951.png', alt: 'Partner logo 1' },
  { src: '/images/social/Group 1533208952.png', alt: 'Partner logo 2' },
  { src: '/images/social/Group 1533208953.png', alt: 'Partner logo 3' },
] as const;

const SocialLogos: React.FC = () => {
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  const handleError = (index: number) => setFailed((p) => ({ ...p, [index]: true }));

  const visibleLogos = SOCIAL_LOGOS.filter((_, i) => !failed[i]);
  if (visibleLogos.length === 0) return null;

  return (
    <section className="social-logos-section py-10 sm:py-12 lg:py-14 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16">
          {SOCIAL_LOGOS.map(({ src, alt }, index) => {
            if (failed[index]) return null;
            return (
              <div
                key={index}
                className="social-logo-item flex items-center justify-center flex-1 min-w-0 max-w-[180px] xs:max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto max-h-[72px] xs:max-h-[88px] sm:max-h-[112px] md:max-h-[128px] lg:max-h-[144px] object-contain object-center"
                  onError={() => handleError(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLogos;
