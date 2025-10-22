'use client';

import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend or email service
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-deep-forest">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Schedule a <span className="text-aqua-neon">Consultation</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-grey-light max-w-2xl mx-auto">
            Ready to find your dream home? Let's discuss your needs and start your journey to homeownership.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-aqua-neon/20">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-white mb-1 xs:mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 resize-none text-sm xs:text-base"
                placeholder="Tell us about your dream home and any specific requirements..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                className="w-full sm:w-auto"
                onClick={() => {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-deep-forest" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;