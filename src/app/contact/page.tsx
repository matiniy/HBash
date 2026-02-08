import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/Button';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

export default function Contact() {
  return (
    <main className="contact-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
      {/* Hero Section - no black background */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-[150px] pb-8 sm:pb-12 lg:pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="contact-page-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6">
              Get In <span className="contact-page-highlight">Touch</span>
            </h1>
            <p className="contact-page-text text-base xs:text-lg sm:text-xl max-w-3xl mx-auto px-2">
              Ready to start your real estate journey? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info Section */}
      <section className="contact-page-contact-info py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Contact Information */}
            <div className="flex flex-col">
              <h2 className="contact-page-title text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                Contact <span className="contact-page-highlight">Information</span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-page-title text-lg sm:text-xl font-semibold mb-2">Office Location</h3>
                    <p className="contact-page-text text-sm sm:text-base break-words">
                      5717 Legacy Dr Suite 250<br />
                      Plano, TX 75024, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-page-title text-lg sm:text-xl font-semibold mb-2">Phone</h3>
                    <p className="contact-page-text text-sm sm:text-base">
                      +1 214-916-9778<br />
                      Available 9 AM - 6 PM, Mon-Fri
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-page-title text-lg sm:text-xl font-semibold mb-2">Email</h3>
                    <p className="contact-page-text text-sm sm:text-base">
                      info@haidehbashash.com<br />
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="contact-page-icon-wrap w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="contact-page-icon w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="contact-page-title text-lg sm:text-xl font-semibold mb-2">Office Hours</h3>
                    <p className="contact-page-text text-sm sm:text-base">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps embed - Haideh Bashash, Realtor (HomeSmart Stars) */}
            <div className="contact-page-map-placeholder rounded-2xl overflow-hidden min-h-[16rem] lg:min-h-0 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3343.165708982293!2d-96.8229998!3d33.0784248!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1347d46c4e0b%3A0xad3cc48ad72e63ce!2sHaideh%20Bashash%2C%20Realtor%20(HomeSmart%20Stars)!5e0!3m2!1sen!2sae!4v1770535548222!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haideh Bashash, Realtor - Office Location"
                className="w-full h-full min-h-[16rem] block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - no box background */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="contact-page-title text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Frequently Asked <span className="contact-page-highlight">Questions</span>
            </h2>
            <p className="contact-page-text text-base sm:text-lg px-2">
              Common questions about our services and the real estate process.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
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
              <div key={index} className="py-4 sm:py-5 border-b border-[#144552]/20">
                <h3 className="contact-page-title text-base sm:text-lg font-semibold mb-2 sm:mb-3">{faq.question}</h3>
                <p className="contact-page-text text-sm sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}