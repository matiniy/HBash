import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TRECNotice from '@/components/TRECNotice';

export default function TRECNoticePage() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-grey-light mb-4">
              Consumer Protection <span className="text-aqua-neon">Notice</span>
            </h1>
            <p className="text-grey-light text-lg">
              Texas Real Estate Commission (TREC) Information
            </p>
          </div>
        </div>
      </section>

      {/* TREC Notice Content */}
      <section className="py-12 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TRECNotice />
        </div>
      </section>

      <Footer />
    </main>
  );
}
