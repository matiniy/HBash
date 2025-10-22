import React from 'react';
import Link from 'next/link';
import Button from './Button';

const About: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/Background/Background.png")' }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-deep-forest/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-deep-forest/20 rounded-tl-3xl rounded-tr-3xl p-8 lg:p-12">
          {/* Left Content - Realtor Image and CTA */}
          <div className="relative">
            <img
              src="/images/Realtor/realtor-photo.png"
              alt="H Bashash - Dallas Realtor"
              className="w-[calc(100%-60px)] mx-auto h-[350px] xs:h-[400px] sm:h-[470px] md:h-[520px] lg:h-[620px] object-cover object-top rounded-2xl shadow-2xl"
            />
                {/* Buttons - Centered and Overlapping */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-60px)] flex flex-row gap-3 items-center justify-center">
              <Link href="/contact">
                <Button variant="primary" className="w-full sm:w-auto">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="https://t.me/KasboKarDallas" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-6 py-3 bg-black/30 text-white rounded-full hover:rounded-[10px] border border-white/20 hover:bg-black/40 transition-all duration-300 flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Join Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Glass Effect Box and Testimonials */}
          <div className="space-y-8">
            {/* Glass Effect Box - Positioned 150px to the left, overlapping image */}
            <div className="relative -ml-[50px] sm:-ml-[100px] lg:-ml-[150px] w-[110%] sm:w-[115%] lg:w-[120%] h-[180px] sm:h-[200px] lg:h-[220px] bg-black/40 backdrop-blur-lg rounded-tr-2xl rounded-bl-2xl rounded-br-2xl rounded-tl-none p-3 sm:p-4 text-white z-20 flex items-center">
              <p className="text-sm xs:text-base sm:text-lg lg:text-[20px] font-sora font-normal leading-normal text-left">
                With a deep passion for helping people find the perfect home, H Bashash brings years of experience, market insight, and personal attention to every client relationship.
              </p>
            </div>
            
            {/* Testimonials - Under the glass effect box */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-2 sm:space-x-4">
                <div className="flex-shrink-0 text-aqua-neon text-2xl sm:text-3xl lg:text-4xl font-bold">"</div>
                <p className="text-grey-light text-sm xs:text-base sm:text-lg leading-relaxed">
                  From Luxury Estates To Family-Friendly Neighborhoods, Discover Homes That Fit Your Lifestyle - Guided By A Trusted Expert Who Knows Dallas Inside Out.
                </p>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-4">
                <div className="flex-shrink-0 text-aqua-neon text-2xl sm:text-3xl lg:text-4xl font-bold">"</div>
                <p className="text-grey-light text-sm xs:text-base sm:text-lg leading-relaxed">
                  From Luxury Estates To Family-Friendly Neighborhoods, Discover Homes That Fit Your Lifestyle - Guided By A Trusted Expert Who Knows Dallas Inside Out.
                </p>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-4">
                <div className="flex-shrink-0 text-aqua-neon text-2xl sm:text-3xl lg:text-4xl font-bold">"</div>
                <p className="text-grey-light text-sm xs:text-base sm:text-lg leading-relaxed">
                  From Luxury Estates To Family-Friendly Neighborhoods, Discover Homes That Fit Your Lifestyle - Guided By A Trusted Expert Who Knows Dallas Inside Out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;