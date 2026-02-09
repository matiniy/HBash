import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TRECNotice from '@/components/TRECNotice';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

export default function TRECNoticePage() {
  return (
    <main className="trec-notice-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
        {/* Hero Section - light theme, same style as contact */}
        <section className="pt-20 sm:pt-24 pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="trec-notice-title page-title-size font-bold mb-3 sm:mb-4" style={{ color: '#144552' }}>
                Consumer Protection <span className="trec-notice-highlight" style={{ fontFamily: '"PP Editorial Old", var(--font-playfair), Georgia, serif', fontStyle: 'italic' }}>Notice</span>
              </h1>
              <p className="trec-notice-subtitle text-base sm:text-lg" style={{ color: '#144552', fontFamily: 'var(--font-raleway), Raleway, sans-serif' }}>
                Texas Real Estate Commission (TREC) Information
              </p>
            </div>
          </div>
        </section>

        {/* TREC Notice Content */}
        <section className="py-8 sm:py-12 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <TRECNotice />
          </div>
        </section>

        <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}
