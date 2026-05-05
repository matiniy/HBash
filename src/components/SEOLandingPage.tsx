'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
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
  const galleryRef = useRef<HTMLDivElement>(null);

  const galleryItems = [
    {
      title: 'Modern Dallas Home',
      location: 'North Dallas',
      image: '/images/Listings/Listing1.png',
    },
    {
      title: 'Family-Friendly Neighborhood',
      location: 'Frisco',
      image: '/images/Listings/Listing2.png',
    },
    {
      title: 'Move-In Ready Property',
      location: 'Plano',
      image: '/images/Listings/Listing3.png',
    },
    {
      title: 'Luxury Community',
      location: 'McKinney',
      image: '/images/hero/2.jpg',
    },
    {
      title: 'New Construction Area',
      location: 'Prosper',
      image: '/images/hero/3.jpg',
    },
  ];

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return;
    const distance = Math.min(420, galleryRef.current.clientWidth * 0.9);
    galleryRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth',
    });
  };

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
              <div className="mt-6 flex w-full flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3">
                <Link
                  href="/listings"
                  className="services-page-cta-btn inline-flex justify-center items-center w-full xs:w-auto min-h-[48px] px-5 py-3 rounded-[8px] font-semibold text-sm xs:text-base bg-[#F3D4B4] text-[#144552] hover:bg-[#e8c9a8] transition-all duration-300"
                >
                  Browse Listings
                </Link>
                <Link
                  href="/services"
                  className="services-page-cta-btn inline-flex justify-center items-center w-full xs:w-auto min-h-[48px] px-5 py-3 rounded-[8px] font-semibold text-sm xs:text-base bg-[#F3D4B4] text-[#144552] hover:bg-[#e8c9a8] transition-all duration-300"
                >
                  See Services
                </Link>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                <h2 className="services-page-title text-lg sm:text-xl font-semibold">Explore Dallas homes</h2>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Scroll listings left"
                    onClick={() => scrollGallery('left')}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#F3D4B4] text-[#144552] border border-[#144552]/20 hover:bg-[#e8c9a8] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    aria-label="Scroll listings right"
                    onClick={() => scrollGallery('right')}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#F3D4B4] text-[#144552] border border-[#144552]/20 hover:bg-[#e8c9a8] transition-colors"
                  >
                    →
                  </button>
                </div>
              </div>

              <div
                ref={galleryRef}
                className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {galleryItems.map((item) => (
                  <Link
                    key={`${item.title}-${item.location}`}
                    href="/listings"
                    className="group snap-start shrink-0 w-[88%] xs:w-[78%] sm:w-[60%] lg:w-[34%] xl:w-[30%]"
                  >
                    <article className="services-page-card overflow-hidden">
                      <div
                        className="h-48 sm:h-56 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/5" />
                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <h3 className="text-white font-semibold text-base sm:text-lg">{item.title}</h3>
                          <p className="text-white/90 text-sm">{item.location}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
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

        <About />
        <ContactForm />
        <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}
