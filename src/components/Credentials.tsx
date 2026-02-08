import React from 'react';
import Image from 'next/image';

const Credentials: React.FC = () => {
  return (
    <section className="credentials-section py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-aqua-neon rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-aqua-neon rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Credentials Grid - no box background, 3 items, closer together */}
        <div className="credentials-cards grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {/* Licensed Realtor */}
          <div className="p-4 sm:p-5 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Image src="/images/brokerage/agreement.png" alt="Licensed Realtor" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="section-title-luxerie credentials-title mb-2">Licensed Realtor</h3>
            <p className="credentials-subtext mb-1">Haideh Bashash</p>
            <p className="credentials-detail whitespace-pre-line">TREC Verified License{'\n'}#0679262</p>
          </div>

          {/* Brokerage */}
          <div className="p-4 sm:p-5 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Image src="/images/brokerage/Brokerage.png" alt="Brokerage" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="section-title-luxerie credentials-title mb-2">Brokerage</h3>
            <p className="credentials-subtext mb-1">HomeSmart Stars</p>
            <p className="credentials-detail whitespace-pre-line">Operating under{'\n'}HomeSmart Stars Realty</p>
          </div>

          {/* Experience */}
          <div className="p-4 sm:p-5 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Image src="/images/brokerage/Experience.png" alt="Experience" width={64} height={64} className="w-full h-full object-contain" />
            </div>
            <h3 className="section-title-luxerie credentials-title mb-2">Experience</h3>
            <p className="credentials-subtext mb-1">9+ Years</p>
            <p className="credentials-detail whitespace-pre-line">Operating under{'\n'}Proven Results in Dallas</p>
          </div>
        </div>

        {/* Brokerage Logo Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {/* HomeSmart Stars Logo */}
            <div className="flex items-center justify-center">
              <img 
                src="/images/brokerage/homesmart-stars-logo.png" 
                alt="HomeSmart Stars" 
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                onError={(e) => {
                  // Fallback if logo not yet provided
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Fair Housing Act Statement */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <p className="text-white text-sm xs:text-base sm:text-lg max-w-4xl mx-auto px-2 leading-relaxed">
            Haideh Bashash fully supports the principles of the Fair Housing Act and the Equal Opportunity Act.
          </p>
        </div>

        {/* Legal Compliance Footer */}
        <div className="credentials-legal-footer mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm px-2">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Texas-Certified Realtor
            </span>
            <span>•</span>
            <span>Verified License #0679262</span>
            <span>•</span>
            <span>HomeSmart Stars</span>
            <span>•</span>
            <a href="https://www.trec.texas.gov" target="_blank" rel="noopener noreferrer" className="hover:underline">
              View Full Disclosure on TREC.gov
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
