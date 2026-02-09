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
      className="social-logos-section w-full pt-16 sm:pt-20 pb-8 sm:pb-10 lg:pb-12"
      style={{ backgroundColor: '#144552' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {LOGOS.map(({ src, alt }, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-1 min-w-0 max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
            >
              <Image
                src={src}
                alt={alt}
                width={180}
                height={120}
                className="w-full h-auto max-h-[56px] sm:max-h-[64px] md:max-h-[72px] object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLogos;
