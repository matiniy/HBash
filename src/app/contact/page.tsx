import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/Button';

export default function Contact() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="text-aqua-neon">Touch</span>
            </h1>
            <p className="text-xl text-grey-light max-w-3xl mx-auto">
              Ready to start your real estate journey? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-forest mb-8">
                Contact <span className="text-aqua-neon">Information</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aqua-neon/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-deep-forest mb-2">Office Location</h3>
                    <p className="text-gray-600">
                      123 Main Street, Suite 100<br />
                      Dallas, TX 75201
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aqua-neon/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-deep-forest mb-2">Phone</h3>
                    <p className="text-gray-600">
                      (555) 123-4567<br />
                      Available 9 AM - 6 PM, Mon-Fri
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aqua-neon/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-deep-forest mb-2">Email</h3>
                    <p className="text-gray-600">
                      info@hbashash.com<br />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-aqua-neon/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-deep-forest mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-400">Dallas, TX Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-deep-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked <span className="text-aqua-neon">Questions</span>
            </h2>
            <p className="text-lg text-grey-light">
              Common questions about our services and the real estate process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the home buying process typically take?",
                answer: "The home buying process typically takes 30-45 days from contract to closing, depending on various factors like financing, inspections, and negotiations."
              },
              {
                question: "Do you work with first-time homebuyers?",
                answer: "Absolutely! We specialize in helping first-time homebuyers navigate the process with education, guidance, and support every step of the way."
              },
              {
                question: "What areas of Dallas do you serve?",
                answer: "We serve the entire Dallas metropolitan area, including Uptown, Highland Park, Lakewood, Bishop Arts, Victory Park, and surrounding neighborhoods."
              },
              {
                question: "How do you determine the right price for my home?",
                answer: "We conduct a comprehensive market analysis, comparing your property to similar homes in the area, considering current market conditions, and your home's unique features."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-aqua-neon/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-grey-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}