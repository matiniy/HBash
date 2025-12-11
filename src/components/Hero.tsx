'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import HeroCarousel from './HeroCarousel';

// Hero images array - Add your image filenames here
// Simply add new images to /public/images/hero/ and add their filenames to this array
const heroImages = [
  '/images/hero/2_photo_2.jpg',
  '/images/hero/20_photo_22.jpg',
  '/images/hero/21_photo_23.jpg',
  '/images/hero/59_photo_59.jpg',
  '/images/hero/62A73F24-0FF0-45FB-8099-165430CA0911.JPG',
  // Add more images here as you upload them to /public/images/hero/
  // Example: '/images/hero/your-new-image.jpg',
];

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll position
  const scale = Math.max(0.8, 1 - scrollY * 0.0005);
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Mobile: Full Background Carousel */}
      <div className="absolute inset-0 lg:hidden z-0">
        <div 
          className="absolute inset-0 transition-transform duration-75 ease-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <HeroCarousel images={heroImages} interval={4000} />
        </div>
        {/* Dark overlay for mobile text readability */}
        <div className="absolute inset-0 bg-black/50 z-[1]"></div>
      </div>

      {/* Desktop: Side-by-side layout with carousel */}
      <div className="absolute inset-0 hidden lg:block z-0">
        <div 
          className="absolute right-0 top-0 w-[65%] h-[120%] transition-transform duration-75 ease-out overflow-hidden"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        >
          <HeroCarousel images={heroImages} interval={4000} />
        </div>
        {/* Dark overlay for left side on desktop */}
        <div className="absolute left-0 top-0 w-[35%] h-full bg-deep-forest z-[1]"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center min-h-screen py-12">
            {/* Content - Full width on mobile, half width on desktop */}
            <div className="w-full lg:w-[50%] lg:max-w-[950px]">
              {/* Glass Effect Background - Full width on mobile, positioned over extending image on desktop */}
              <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-4 xs:p-6 sm:p-8 shadow-2xl">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight font-space-grotesk">
                  Find Your Dream Home In The Heart Of{' '}
                  <span className="text-aqua-neon">Dallas</span>
                </h1>
                
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-grey-light leading-relaxed mt-4 sm:mt-6">
                  From luxury estates to family-friendly neighborhoods, discover homes that fit your lifestyle - guided by a trusted expert who knows Dallas inside out.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8">
                  <Link href="/listings">
                    <Button variant="secondary" className="w-full sm:w-auto">
                      Browse Listings
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="primary" className="w-full sm:w-auto">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>

                {/* Stats Row - Directly under hero content */}
                <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-12">
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                      20%
                    </div>
                    <div className="text-grey-light text-xs xs:text-sm sm:text-base">
                      Trusted By Companies
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                      13K
                    </div>
                    <div className="text-grey-light text-xs xs:text-sm sm:text-base">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                      9+
                    </div>
                    <div className="text-grey-light text-xs xs:text-sm sm:text-base">
                      Years Helping
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Right Content - Empty space for image to show through */}
            <div className="hidden lg:block lg:flex-1 h-full min-h-[600px]">
              {/* This space allows the background image to show through */}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Marquee Strip */}
      <div className="absolute bottom-0 left-0 w-full">
        <section className="bg-aqua-neon py-3 sm:py-4 overflow-hidden">
            <div className="flex whitespace-nowrap marquee-slow">
              {/* Content block 1 */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  Because Home Is More Than Walls — It's Where Stories Begin •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  Turning Dallas Dreams Into Addresses •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  Where Every Door Opens to a New Chapter •
                </span>
              </div>
              {/* Content block 2 (duplicate for seamless loop) */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  Because Home Is More Than Walls — It's Where Stories Begin •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  Turning Dallas Dreams Into Addresses •
                </span>
                <span className="text-deep-forest font-semibold text-base sm:text-lg mx-4 sm:mx-8">
                  Where Every Door Opens to a New Chapter •
                </span>
              </div>
            </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;