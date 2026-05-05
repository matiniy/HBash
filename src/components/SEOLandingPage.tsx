'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

type SEOLandingPageProps = {
  h1: string;
  intro: string;
  keyword: string;
  areas: string[];
  highlights: string[];
  steps: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export default function SEOLandingPage({
  h1,
  intro,
  keyword,
  areas,
  highlights,
  steps,
  faqs,
}: SEOLandingPageProps) {
  return (
    <main className="services-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
        <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-8 sm:pb-10 lg:pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="services-page-title section-title-luxerie page-title-size mb-4">
                <span className="title-combo-first">{h1}</span>
              </h1>
              <p className="services-page-text text-sm xs:text-base sm:text-lg leading-relaxed">{intro}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link href="/listings" className="services-page-cta-btn inline-block px-5 py-3 rounded-[8px] font-semibold text-sm xs:text-base">
                  Browse Listings
                </Link>
                <Link href="/services" className="services-page-cta-btn inline-block px-5 py-3 rounded-[8px] font-semibold text-sm xs:text-base">
                  See Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="services-page-card p-6 sm:p-8">
                <h2 className="services-page-title text-xl sm:text-2xl font-semibold mb-4">
                  Why clients choose help for {keyword}
                </h2>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li key={item} className="services-page-text text-sm sm:text-base flex items-start">
                      <span className="mr-2 sm:mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services-page-card p-6 sm:p-8">
                <h2 className="services-page-title text-xl sm:text-2xl font-semibold mb-4">Key Dallas areas covered</h2>
                <ul className="space-y-3">
                  {areas.map((area) => (
                    <li key={area} className="services-page-text text-sm sm:text-base flex items-start">
                      <span className="mr-2 sm:mr-3">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="services-page-title section-title-luxerie text-center mb-6 sm:mb-8">Step-by-step process</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="services-page-card p-5 sm:p-6">
                  <h3 className="services-page-title text-base sm:text-lg font-semibold mb-2">Step {index + 1}</h3>
                  <p className="services-page-text text-sm sm:text-base">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="services-page-title section-title-luxerie text-center mb-6 sm:mb-8">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="services-page-card p-5 sm:p-6">
                  <h3 className="services-page-title text-base sm:text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="services-page-text text-sm sm:text-base">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
        <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}
