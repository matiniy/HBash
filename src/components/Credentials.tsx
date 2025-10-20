import React from 'react';

const Credentials: React.FC = () => {
  return (
    <section className="py-20 bg-deep-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-aqua-neon rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-aqua-neon rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by 20+ Companies & 13,000 Clients in Dallas and Beyond
          </h2>
          <p className="text-grey-light text-lg max-w-3xl mx-auto">
            More than 20+ partnerships across Dallas & Texas, providing corporate real estate support and relocation housing solutions
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* License Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-neon/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aqua-neon/30 transition-colors">
                <svg className="w-8 h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Licensed Realtor</h3>
              <p className="text-grey-light text-sm mb-2">Haideh Bashash</p>
              <p className="text-aqua-neon text-xs font-semibold">TREC Verified License #0679262</p>
            </div>
          </div>

          {/* Brokerage Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-neon/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aqua-neon/30 transition-colors">
                <svg className="w-8 h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Brokerage</h3>
              <p className="text-grey-light text-sm mb-2">HomeSmart Stars</p>
              <p className="text-aqua-neon text-xs font-semibold">Operating under HomeSmart Stars Realty</p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-neon/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aqua-neon/30 transition-colors">
                <svg className="w-8 h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
              <p className="text-grey-light text-sm mb-2">9+ Years</p>
              <p className="text-aqua-neon text-xs font-semibold">Proven Results in Dallas</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-neon/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-aqua-neon/30 transition-colors">
                <svg className="w-8 h-8 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7M3 8l2.46-1.64A2 2 0 017.22 6h9.56a2 2 0 011.76.36L21 8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
              <p className="text-grey-light text-sm mb-2">Direct Access</p>
              <div className="space-y-1">
                <p className="text-aqua-neon text-xs font-semibold">📧 HaidehRealtor@gmail.com</p>
                <p className="text-aqua-neon text-xs font-semibold">📞 214.916.9778</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Compliance Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-grey-light">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Texas-Certified Realtor
            </span>
            <span>•</span>
            <span>Verified License #0679262</span>
            <span>•</span>
            <span>HomeSmart Stars</span>
            <span>•</span>
            <a href="https://www.trec.texas.gov" target="_blank" rel="noopener noreferrer" className="text-aqua-neon hover:underline">
              View Full Disclosure on TREC.gov
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
