import React from 'react';
import Link from 'next/link';
import Button from './Button';
import ListingCard from './ListingCard';

const Listings: React.FC = () => {
  const featuredListings = [
    {
      id: '1',
      title: 'Luxury Uptown Apartment',
      location: 'Uptown Dallas, TX',
      price: '$795,000',
      beds: 2,
      baths: 2,
      sqft: '1,450 Sq Ft',
      image: '/images/Listings/Listing1.png',
      features: ['City View', 'Modern Kitchen', 'Balcony']
    },
    {
      id: '2',
      title: 'Modern Estate In Highland Park',
      location: 'Highland Park, TX',
      price: '$4,250,000',
      beds: 5,
      baths: 6,
      sqft: '6,800 Sq Ft',
      image: '/images/Listings/Listing2.png',
      features: ['Private Pool', 'Gourmet Kitchen', 'Wine Cellar', 'Garden']
    },
    {
      id: '3',
      title: 'Stylish Townhome',
      location: 'Bishop Arts, TX',
      price: '$615,000',
      beds: 3,
      baths: 3,
      sqft: '2,200 Sq Ft',
      image: '/images/Listings/Listing3.png',
      features: ['Rooftop Deck', 'Hardwood Floors', 'Garage']
    }
  ];

  return (
    <section className="py-20 bg-deep-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-aqua-neon rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-aqua-neon rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-aqua-neon rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Listings
          </h2>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              {...listing}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/listings">
            <Button variant="secondary" className="w-full sm:w-auto">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Listings;