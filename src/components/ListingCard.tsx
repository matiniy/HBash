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
      <div className="listing-card group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#144552]/20 hover:border-[#144552]/40 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <div 
          className="w-full h-full bg-gradient-to-br from-[#144552]/10 to-black/20 group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
        
        {/* Price Badge - #144552 */}
        <div className="listing-card-price absolute top-3 left-3 sm:top-4 sm:left-4 px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
          {price}
        </div>

        {/* Gradient overlay + Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-5">
          <div className="text-white">
            <h3 className="listing-card-title text-base sm:text-lg mb-1.5 line-clamp-2">{title}</h3>
            <p className="listing-card-text text-xs sm:text-sm text-white/95 mb-2 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#144552] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {location}
            </p>
            <div className="listing-card-text flex flex-wrap gap-x-3 gap-y-0.5 text-xs sm:text-sm text-white/90">
              <span>{beds} Beds</span>
              <span>{baths} Baths</span>
              <span>{sqft}</span>
            </div>
          </div>
        </div>

        {/* View arrow on hover */}
        <div className="absolute bottom-4 right-4 w-9 h-9 bg-[#144552] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
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