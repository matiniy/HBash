'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';

// Mock data - in a real app, this would come from a database
const getListingData = (id: string) => {
  const listings = {
    '1': {
      id: '1',
      title: 'Luxury Uptown Apartment',
      location: 'Uptown Dallas, TX',
      address: '123 Uptown Blvd, Dallas, TX 75201',
      price: '$795,000',
      beds: 2,
      baths: 2,
      sqft: '1,450 Sq Ft',
      lotSize: '0.12 acres',
      yearBuilt: 2020,
      parking: '1-car garage',
      type: 'Apartment',
      status: 'For Sale',
      images: [
        '/images/Listings/Listing1.png',
        '/images/Listings/Listing1.png',
        '/images/Listings/Listing1.png',
        '/images/Listings/Listing1.png',
        '/images/Listings/Listing1.png'
      ],
      description: 'Discover contemporary luxury in the heart of Uptown Dallas. This stunning 2-bedroom apartment offers floor-to-ceiling windows with panoramic city views, modern finishes, and access to premium amenities including a rooftop pool and fitness center.',
      features: [
        'City View',
        'Modern Kitchen',
        'Balcony',
        'Rooftop Pool',
        'Fitness Center',
        'Concierge Service',
        'Smart Home Features',
        'Hardwood Floors'
      ],
      agent: {
        name: 'H Bashash',
        title: 'Your Dallas Real Estate Expert',
        phone: '214-916-9778',
        email: 'HaidehRealtor@gmail.com',
        license: 'License #0679262',
        brokerage: 'HomeSmart Stars Realty'
      },
      coordinates: { lat: 32.7767, lng: -96.7970 },
      neighborhood: 'Uptown'
    },
    '2': {
      id: '2',
      title: 'Modern Estate In Highland Park',
      location: 'Highland Park, TX',
      address: '456 Highland Park Blvd, Dallas, TX 75205',
      price: '$4,250,000',
      beds: 5,
      baths: 6,
      sqft: '6,800 Sq Ft',
      lotSize: '0.45 acres',
      yearBuilt: 2018,
      parking: '3-car garage',
      type: 'Single Family Home',
      status: 'For Sale',
      images: [
        '/images/Listings/Listing2.png',
        '/images/Listings/Listing2.png',
        '/images/Listings/Listing2.png',
        '/images/Listings/Listing2.png',
        '/images/Listings/Listing2.png'
      ],
      description: 'Experience unparalleled luxury in this contemporary masterpiece nestled in Highland Park. This elegant 5-bedroom estate offers expansive living spaces, a private pool, and floor-to-ceiling windows framing Dallas skyline views — crafted for those who value privacy and modern comfort.',
      features: [
        'Private Pool & Outdoor Kitchen',
        'Smart Home Automation System',
        'Chef\'s Kitchen with Marble Island',
        'Floor-to-Ceiling Windows',
        '3-Car Garage',
        'Walk-in Closets',
        'Security System & Gated Entry',
        'Wine Cellar'
      ],
      agent: {
        name: 'H Bashash',
        title: 'Your Dallas Real Estate Expert',
        phone: '214-916-9778',
        email: 'HaidehRealtor@gmail.com',
        license: 'License #0679262',
        brokerage: 'HomeSmart Stars Realty'
      },
      coordinates: { lat: 32.8024, lng: -96.7899 },
      neighborhood: 'Highland Park'
    },
    '3': {
      id: '3',
      title: 'Stylish Townhome',
      location: 'Bishop Arts, TX',
      address: '789 Bishop Arts District, Dallas, TX 75208',
      price: '$615,000',
      beds: 3,
      baths: 3,
      sqft: '2,200 Sq Ft',
      lotSize: '0.08 acres',
      yearBuilt: 2019,
      parking: '2-car garage',
      type: 'Townhome',
      status: 'For Sale',
      images: [
        '/images/Listings/Listing3.png',
        '/images/Listings/Listing3.png',
        '/images/Listings/Listing3.png',
        '/images/Listings/Listing3.png',
        '/images/Listings/Listing3.png'
      ],
      description: 'Step into modern living in the vibrant Bishop Arts District. This stylish 3-bedroom townhome combines contemporary design with historic charm, featuring an open-concept layout, rooftop deck, and walking distance to trendy restaurants and shops.',
      features: [
        'Rooftop Deck',
        'Hardwood Floors',
        '2-Car Garage',
        'Open Concept Living',
        'Modern Appliances',
        'Walk-in Closets',
        'Private Patio',
        'Historic District Location'
      ],
      agent: {
        name: 'H Bashash',
        title: 'Your Dallas Real Estate Expert',
        phone: '214-916-9778',
        email: 'HaidehRealtor@gmail.com',
        license: 'License #0679262',
        brokerage: 'HomeSmart Stars Realty'
      },
      coordinates: { lat: 32.7505, lng: -96.8089 },
      neighborhood: 'Bishop Arts'
    }
  };
  
  return listings[id as keyof typeof listings] || null;
};

interface ListingDetailsPageProps {
  params: {
    id: string;
  };
}

const ListingDetailsPage: React.FC<ListingDetailsPageProps> = ({ params }) => {
  const listing = getListingData(params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!listing) {
    return (
      <div className="min-h-screen bg-deep-forest flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Listing Not Found</h1>
          <Link href="/listings">
            <Button variant="primary">Back to Listings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <div className="min-h-screen bg-deep-forest">
      {/* Hero / Gallery Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link href="/listings">
            <Button variant="secondary" className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Listings
            </Button>
          </Link>
        </div>

        {/* Main Image */}
        <div 
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ 
            backgroundImage: `url(${listing.images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            imageRendering: 'high-quality'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Price Tag Overlay */}
          <div className="absolute top-8 right-8 bg-aqua-neon text-deep-forest px-6 py-3 rounded-full text-xl font-bold">
            {listing.price}
          </div>
          
          {/* Property Type Tag */}
          <div className="absolute top-20 right-8 bg-white/90 text-deep-forest px-4 py-2 rounded-full text-sm font-semibold">
            {listing.type}
          </div>
          
          {/* Action Buttons - Horizontal Layout */}
          <div className="absolute top-32 right-8 flex gap-2">
            {/* Save Button */}
            <div className="bg-white/90 text-deep-forest p-3 rounded-full hover:bg-aqua-neon transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            {/* Share Button */}
            <div className="bg-white/90 text-deep-forest p-3 rounded-full hover:bg-aqua-neon transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.882 12.686 9 12 9 12s.118-.686.316-1.342m0 0A1.94 1.94 0 0112 9.75a1.94 1.94 0 012.684 1.342m0 0c.198.656.316 1.342.316 1.342s.118.686.316 1.342m-3.316 2.076a3.004 3.004 0 00-.416 1.428 3.004 3.004 0 00.416 1.428m-3.316-4.932a3.004 3.004 0 00-.416 1.428 3.004 3.004 0 00.416 1.428M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Carousel Navigation */}
          {listing.images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {listing.images.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                {listing.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex ? 'border-aqua-neon' : 'border-white/50'
                    }`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button for Mobile */}
        <div className="lg:hidden mb-8">
          <Link href="/listings">
            <Button variant="secondary" className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Listings
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Property Overview */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h1 className="text-4xl font-bold text-white mb-4">{listing.title}</h1>
              <p className="text-xl text-grey-light mb-8">{listing.address}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-aqua-neon mb-2">{listing.beds}</div>
                  <div className="text-grey-light">Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aqua-neon mb-2">{listing.baths}</div>
                  <div className="text-grey-light">Baths</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aqua-neon mb-2">{listing.sqft}</div>
                  <div className="text-grey-light">Sq Ft</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aqua-neon mb-2">{listing.lotSize}</div>
                  <div className="text-grey-light">Lot Size</div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div><span className="text-grey-light">Year Built:</span> <span className="text-white">{listing.yearBuilt}</span></div>
                <div><span className="text-grey-light">Parking:</span> <span className="text-white">{listing.parking}</span></div>
                <div><span className="text-grey-light">Status:</span> <span className="text-aqua-neon">{listing.status}</span></div>
              </div>
            </section>

            {/* Property Description */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">About This Property</h2>
              <p className="text-grey-light leading-relaxed mb-6">{listing.description}</p>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Highlights:</h3>
                <ul className="space-y-2">
                  {listing.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-grey-light">
                      <span className="text-aqua-neon mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Key Features */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-grey-light">
                    <span className="text-aqua-neon mr-3">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            {/* Map & Neighborhood */}
            <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-6">Location & Neighborhood</h2>
              <div className="bg-gray-700/50 h-64 rounded-lg flex items-center justify-center">
                <p className="text-grey-light">Map integration would go here</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-4">Neighborhood Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><span className="text-grey-light">Highland Park Village:</span> <span className="text-white">5 min</span></div>
                  <div><span className="text-grey-light">Dallas Love Field Airport:</span> <span className="text-white">12 min</span></div>
                  <div><span className="text-grey-light">University Park:</span> <span className="text-white">8 min</span></div>
                  <div><span className="text-grey-light">Downtown Dallas:</span> <span className="text-white">15 min</span></div>
                </div>
              </div>
            </section>
          </div>

          {/* Agent Contact Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-aqua-neon rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-deep-forest">H</span>
                </div>
                <h3 className="text-xl font-bold text-white">{listing.agent.name}</h3>
                <p className="text-grey-light">{listing.agent.title}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-grey-light">
                  <svg className="w-5 h-5 mr-3 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {listing.agent.phone}
                </div>
                <div className="flex items-center text-grey-light">
                  <svg className="w-5 h-5 mr-3 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {listing.agent.email}
                </div>
              </div>
              
              <div className="space-y-4">
                <Button variant="primary" className="w-full">
                  Schedule Consultation
                </Button>
                <Button variant="secondary" className="w-full">
                  Schedule Tour
                </Button>
              </div>
              
              <div className="mt-6 text-xs text-grey-light text-center">
                <p>{listing.agent.license}</p>
                <p>{listing.agent.brokerage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsPage;
