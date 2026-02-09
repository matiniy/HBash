'use client';

import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { src: '/images/social/8cf7041b3017c7bccae05a710f55c229%201.png', alt: 'HomeSmart Stars' },
  { src: '/images/social/toppng.com-equal-housing-opportunity-logo-vector-400x400%201.png', alt: 'Equal Housing Opportunity' },
  { src: '/images/social/MT-Member-Logo-Reversed-Stacked%201.png', alt: 'MetroTex Association of REALTORS' },
  { src: '/images/social/nar_membershipmark_white%201.png', alt: 'REALTOR' },
] as const;

const SocialLogos: React.FC = () => {
  return (
    <section
      className="social-logos-section w-full flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 xl:py-28"
      style={{ backgroundColor: '#144552' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-center gap-4 xs:gap-5 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full">
          {LOGOS.map(({ src, alt }, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 w-[90px] xs:w-[110px] sm:w-[140px] md:w-[160px] lg:w-[180px]"
            >
              <Image
                src={src}
                alt={alt}
                width={180}
                height={120}
                className="w-full h-auto max-h-[44px] xs:max-h-[52px] sm:max-h-[60px] md:max-h-[72px] object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLogos;
