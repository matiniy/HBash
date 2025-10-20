'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';

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
      {/* Background Image - Extends under glass effect with parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute right-0 top-0 w-full lg:w-[65%] h-[120%] bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url('/images/hero/hero-background.jpg'), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
        ></div>
        {/* Dark overlay for left side - smaller to allow image to show through */}
        <div className="absolute left-0 top-0 w-full lg:w-[35%] h-full bg-deep-forest"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center min-h-screen py-12">
            {/* Left Content - Text with Glass Effect - Responsive */}
            <div className="w-full lg:w-[50%] lg:max-w-[950px]">
              {/* Glass Effect Background - Positioned over extending image */}
              <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight font-space-grotesk">
                  Find Your Dream Home In The Heart Of{' '}
                  <span className="text-aqua-neon">Dallas</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-grey-light leading-relaxed mt-4 sm:mt-6">
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
                <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      20%
                    </div>
                    <div className="text-grey-light text-xs sm:text-sm">
                      Trusted By Companies
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      13K
                    </div>
                    <div className="text-grey-light text-xs sm:text-sm">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                      9+
                    </div>
                    <div className="text-grey-light text-xs sm:text-sm">
                      Years Helping
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Empty space for image to show through - Responsive */}
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