import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Home Buying',
      description: 'Expert guidance through the entire home buying process, from pre-approval to closing.',
      features: [
        'Market analysis and property evaluation',
        'Negotiation and offer strategies',
        'Home inspection coordination',
        'Closing process management'
      ],
      icon: (
        <svg className="w-12 h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: 'Home Selling',
      description: 'Maximize your property value with our comprehensive selling strategy and marketing approach.',
      features: [
        'Property valuation and pricing strategy',
        'Professional photography and staging',
        'Marketing and advertising campaigns',
        'Showings and open house management'
      ],
      icon: (
        <svg className="w-12 h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Investment Properties',
      description: 'Strategic real estate investment guidance to help you build wealth through property.',
      features: [
        'Market analysis and investment opportunities',
        'Rental property evaluation',
        'Cash flow analysis and projections',
        'Property management recommendations'
      ],
      icon: (
        <svg className="w-12 h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Relocation Services',
      description: 'Comprehensive relocation support for families and individuals moving to or from Dallas.',
      features: [
        'Neighborhood research and recommendations',
        'School district information',
        'Local amenities and services guide',
        'Settlement assistance and support'
      ],
      icon: (
        <svg className="w-12 h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Market Analysis',
      description: 'In-depth market insights and property valuations to inform your real estate decisions.',
      features: [
        'Comparative market analysis (CMA)',
        'Property value assessments',
        'Market trend analysis',
        'Investment opportunity evaluation'
      ],
      icon: (
        <svg className="w-12 h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Consultation',
      description: 'Personalized real estate consultation to help you make informed decisions.',
      features: [
        'One-on-one strategy sessions',
        'Goal setting and planning',
        'Market education and guidance',
        'Ongoing support and advice'
      ],
      icon: (
        <svg className="w-12 h-12 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-aqua-neon">Services</span>
            </h1>
            <p className="text-xl text-grey-light max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                <div className="w-16 h-16 bg-aqua-neon/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-aqua-neon/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-deep-forest mb-4 group-hover:text-aqua-neon transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-aqua-neon mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-aqua-neon">Process</span>
            </h2>
            <p className="text-lg text-grey-light max-w-3xl mx-auto">
              A proven methodology that ensures your success at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We start with understanding your goals, timeline, and budget.' },
              { step: '02', title: 'Strategy', description: 'Develop a customized plan tailored to your specific needs.' },
              { step: '03', title: 'Execution', description: 'Implement our strategy with precision and attention to detail.' },
              { step: '04', title: 'Results', description: 'Deliver exceptional outcomes that exceed your expectations.' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-aqua-neon/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-aqua-neon/30 transition-colors duration-300">
                  <span className="text-2xl font-bold text-aqua-neon">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-grey-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aqua-neon">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-forest mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-deep-forest mb-8">
            Let's discuss how we can help you achieve your real estate goals.
          </p>
          <Link href="/contact">
            <Button variant="secondary" className="bg-deep-forest text-aqua-neon border-deep-forest hover:bg-white hover:text-deep-forest">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}