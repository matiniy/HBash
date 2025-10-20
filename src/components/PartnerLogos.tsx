import React from 'react';

const PartnerLogos: React.FC = () => {
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

        {/* Partnership Logos - Horizontal Layout */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group text-center min-w-[200px]">
            <div className="text-xl font-bold text-white mb-1">Google</div>
            <p className="text-grey-light text-xs">Relocation housing</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group text-center min-w-[200px]">
            <div className="text-xl font-bold text-white mb-1">Slack</div>
            <p className="text-grey-light text-xs">Corporate support</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group text-center min-w-[200px]">
            <div className="text-xl font-bold text-white mb-1">Rio Tinto</div>
            <p className="text-grey-light text-xs">Executive housing</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-gray-700/50 hover:border-aqua-neon/50 transition-all duration-300 group text-center min-w-[200px]">
            <div className="text-xl font-bold text-white mb-1">Heroku</div>
            <p className="text-grey-light text-xs">Tech relocation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;