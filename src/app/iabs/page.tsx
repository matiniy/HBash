import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IABSPage() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Information About <span className="text-aqua-neon">Brokerage Services</span>
            </h1>
            <p className="text-white text-lg">
              IABS Document
            </p>
          </div>
        </div>
      </section>

      {/* IABS Document Content */}
      <section className="py-12 bg-deep-forest">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-aqua-neon/20">
            {/* IABS Image Container */}
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="relative w-full">
                <img
                  src="/documents/iabs/IABS-HomeSmart_2025 (1).jpg"
                  alt="Information About Brokerage Services (IABS)"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-6 text-center">
              <a
                href="/documents/iabs/IABS-HomeSmart_2025 (1).jpg"
                download="IABS-HomeSmart_2025.jpg"
                className="inline-block px-6 py-3 bg-aqua-neon text-deep-forest rounded-full font-semibold hover:bg-[#00e694] transition-colors duration-300"
              >
                Download IABS Document
              </a>
            </div>

            {/* Info Message */}
            <div className="mt-8 p-6 bg-white/5 rounded-lg border border-aqua-neon/10">
              <p className="text-white text-center text-sm">
                This document provides important information about brokerage services. If you have any questions, please contact us for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
