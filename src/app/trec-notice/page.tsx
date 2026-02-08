import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TRECNotice from '@/components/TRECNotice';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

export default function TRECNoticePage() {
  return (
    <main className="min-h-screen bg-deep-forest overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-6 sm:pb-8 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="page-title-size font-bold text-white mb-3 sm:mb-4">
              Consumer Protection <span className="text-aqua-neon">Notice</span>
            </h1>
            <p className="text-white text-base sm:text-lg">
              Texas Real Estate Commission (TREC) Information
            </p>
          </div>
        </div>
      </section>

      <GradientNoiseWrapper>
      {/* TREC Notice Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TRECNotice />
        </div>
      </section>

      <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}
