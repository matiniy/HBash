'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Credentials from '@/components/Credentials';
import Documents from '@/components/Documents';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

// Hero images array - used for preloading
const heroImages = [
  '/images/hero/1.JPG',
  '/images/hero/2.jpg',
  '/images/hero/3.jpg',
  '/images/hero/4.jpg',
  '/images/hero/5.jpg',
  '/images/hero/6.jpg',
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setHasMounted(true);
    const hasLoaded = sessionStorage.getItem('hbash_has_loaded') === 'true';
    setIsLoading(!hasLoaded);
  }, []);

  useEffect(() => {
    if (!isLoading && typeof window !== 'undefined') {
      sessionStorage.setItem('hbash_has_loaded', 'true');
    }
  }, [isLoading]);

  return (
    <>
      {hasMounted && isLoading && (
        <PageLoader 
          onComplete={handleLoadingComplete}
          imagesToPreload={heroImages}
        />
      )}
      <main 
        className={`min-h-screen bg-deep-forest transition-opacity duration-500 ${
          hasMounted && !isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <Hero />
        <div className="main-gradient-bg relative" style={{ background: 'radial-gradient(ellipse at center, #FFEFDF 0%, #F3D4B4 100%)' }}>
          {/* Noise overlay for all sections: size 1.2, 80% opacity, color #FEE2C6 */}
          <div className="gradient-noise-overlay" aria-hidden>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <defs>
                <filter id="gradientNoise" x="0" y="0">
                  <feTurbulence type="fractalNoise" baseFrequency="0.833" numOctaves="4" result="turbulence" />
                  <feColorMatrix
                    in="turbulence"
                    type="matrix"
                    values="0.996 0 0 0 0 0 0.886 0 0 0 0 0 0.776 0 0 0 0 0 1 0"
                    result="noise"
                  />
                </filter>
              </defs>
              <rect width="100%" height="100%" fill="#FEE2C6" filter="url(#gradientNoise)" />
            </svg>
          </div>
          <div className="relative z-10">
            <Reviews />
            <About />
            <ContactForm />
            <Credentials />
            <Documents />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}