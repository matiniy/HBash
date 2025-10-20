import React from 'react';
import Link from 'next/link';

interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  features?: string[];
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  image,
  features = []
}) => {
  return (
    <Link href={`/listings/${id}`}>
      <div className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 listing-card border border-gray-700/50 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-aqua-neon/20 to-deep-forest/20 group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-aqua-neon text-deep-forest px-3 py-1 rounded-full text-sm font-semibold">
          Price: {price}
        </div>

        {/* Dark Overlay with Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
          <div className="text-white">
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-sm text-grey-light mb-2">Location: {location}</p>
            <div className="text-sm text-grey-light">
              {beds} Beds • {baths} Baths • {sqft}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      </div>
    </Link>
  );
};

export default ListingCard;