import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pb-16 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              About <span className="text-aqua-neon">H Bashash</span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-white max-w-3xl mx-auto px-2">
              Your trusted real estate partner in Dallas, bringing years of experience and personal attention to every client relationship.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                About Haideh Bashash
              </h2>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className="text-sm xs:text-base sm:text-lg text-white leading-relaxed">
                  Haideh Bashash is the agent people turn to when they want clarity, confidence, and a genuinely smooth real estate experience. Since 2016, she has built a reputation for unwavering dedication and honest communication, treating every client's goals as if they were her own.
                </p>
                <p className="text-sm xs:text-base sm:text-lg text-white leading-relaxed">
                  Her 17 years at the United Nations sharpened her ability to understand people, solve problems calmly, and navigate complex situations with ease—skills that set her apart in today's market.
                </p>
                <p className="text-sm xs:text-base sm:text-lg text-white leading-relaxed">
                  Fluent in Turkish and Persian, deeply connected to her community, and driven by a "quality over quantity" mindset, Haideh brings a steady, client-first approach that delivers real results and long-term trust.
                </p>
              </div>
              <Link href="/contact">
                <Button variant="primary" className="w-full sm:w-auto">Get In Touch</Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-aqua-neon/20 to-deep-forest/20 rounded-3xl p-6 sm:p-8 h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-aqua-neon/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">H Bashash</h3>
                <p className="text-white/80 text-sm sm:text-base">Licensed Realtor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-aqua-neon">Values</span>
            </h2>
            <p className="text-base sm:text-lg text-white max-w-3xl mx-auto px-2">
              The principles that guide everything we do and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Integrity</h3>
              <p className="text-sm sm:text-base text-white px-2">
                We believe in doing the right thing, even when no one is watching. Honest communication and transparent practices are the foundation of our business.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Excellence</h3>
              <p className="text-sm sm:text-base text-white px-2">
                We strive for excellence in everything we do, from market research to client communication. Our attention to detail sets us apart.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-aqua-neon/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">Client Focus</h3>
              <p className="text-sm sm:text-base text-white px-2">
                Your success is our success. We're committed to understanding your unique needs and delivering solutions that exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-aqua-neon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-deep-forest mb-4 sm:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-lg text-deep-forest mb-6 sm:mb-8 px-2">
            Let's discuss your real estate goals and create a plan that works for you.
          </p>
          <Link href="/contact">
            <Button variant="secondary" className="bg-deep-forest text-aqua-neon border-deep-forest hover:bg-white hover:text-deep-forest w-full sm:w-auto">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}