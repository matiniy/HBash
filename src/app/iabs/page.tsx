import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IABS from '@/components/IABS';

export default function IABSPage() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Information About Brokerage <span className="text-aqua-neon">Services (IABS)</span>
            </h1>
            <p className="text-grey-light text-lg">
              Texas Real Estate Commission Required Disclosure
            </p>
          </div>
        </div>
      </section>

      {/* IABS Document Content */}
      <section className="py-12 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IABS 
            documentPath="/documents/iabs/IABS-Document.pdf"
            documentName="IABS Document"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
