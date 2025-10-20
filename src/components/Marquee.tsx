import React from 'react';

const Marquee: React.FC = () => {
  return (
    <section className="bg-aqua-neon py-4 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div className="marquee flex items-center">
          <span className="text-deep-forest font-semibold text-lg mx-8">
            A Vision For Liveable And Affordable Homes •
          </span>
          <span className="text-deep-forest font-semibold text-lg mx-8">
            A Vision For Liveable And Affordable Homes •
          </span>
          <span className="text-deep-forest font-semibold text-lg mx-8">
            A Vision For Liveable And Affordable Homes •
          </span>
          <span className="text-deep-forest font-semibold text-lg mx-8">
            A Vision For Liveable And Affordable Homes •
          </span>
          <span className="text-deep-forest font-semibold text-lg mx-8">
            A Vision For Liveable And Affordable Homes •
          </span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;