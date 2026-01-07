'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Credentials from '@/components/Credentials';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

// Hero images array - used for preloading
const heroImages = [
  '/images/hero/1_photo_01_dte.jpg',
  '/images/hero/2_photo_2.jpg',
  '/images/hero/13_photo_12.jpg',
  '/images/hero/20_photo_22.jpg',
  '/images/hero/21_photo_23.jpg',
  '/images/hero/54_photo_56.jpg',
  '/images/hero/59_photo_59.jpg',
  '/images/hero/62A73F24-0FF0-45FB-8099-165430CA0911.JPG',
];

export default function Land2() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <PageLoader 
          onComplete={handleLoadingComplete}
          imagesToPreload={heroImages}
        />
      )}
      <div className="light-mode">
        <main 
          className={`min-h-screen bg-white transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Navbar />
          <Hero />
          <About />
          <ContactForm />
          <Credentials />
          <Footer />
        </main>
      </div>
    </>
  );
}

