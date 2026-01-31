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
        <Reviews />
        <About />
        <ContactForm />
        <Credentials />
        <Documents />
        <Footer />
      </main>
    </>
  );
}