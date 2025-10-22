'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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

const ListingDetailsPage = () => {
  const params = useParams();
  const id = (params?.id ?? '') as string;
  const listing = getListingData(id);
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
        <div className="absolute top-6 left-6 z-20">
          <Link href="/listings">
            <Button variant="secondary" className="flex items-center gap-2 backdrop-blur-sm bg-black/20 border-white/20">
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
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Enhanced Price and Property Info Overlay - Responsive */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
            <div className="bg-black/40 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/10 max-w-[280px] sm:max-w-none">
              {/* Price */}
              <div className="text-right mb-3 sm:mb-4">
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-aqua-neon mb-1">
                  {listing.price}
                </div>
                <div className="text-xs sm:text-sm text-grey-light">Asking Price</div>
              </div>
              
              {/* Property Type & Status */}
              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div className="bg-aqua-neon/20 text-aqua-neon px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-aqua-neon/30 text-center">
                  {listing.type}
                </div>
                <div className="bg-white/20 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-white/30 text-center">
                  {listing.status}
                </div>
              </div>
              
              {/* Quick Stats - Hidden on very small screens, shown on larger mobile */}
              <div className="hidden xs:grid grid-cols-2 gap-2 sm:gap-3 text-center">
                <div className="bg-white/10 rounded-lg p-1.5 sm:p-2">
                  <div className="text-sm sm:text-lg font-bold text-white">{listing.beds}</div>
                  <div className="text-xs text-grey-light">Beds</div>
                </div>
                <div className="bg-white/10 rounded-lg p-1.5 sm:p-2">
                  <div className="text-sm sm:text-lg font-bold text-white">{listing.baths}</div>
                  <div className="text-xs text-grey-light">Baths</div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Navigation */}
          {listing.images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                {currentImageIndex + 1} / {listing.images.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex gap-1 sm:gap-2 overflow-x-auto max-w-[200px] sm:max-w-none">
                {listing.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-12 h-8 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Overview - Enhanced Design */}
            <section className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-gray-700/30 shadow-2xl">
              <div className="mb-8">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 leading-tight">{listing.title}</h1>
                <div className="flex items-center gap-2 text-lg text-grey-light">
                  <svg className="w-5 h-5 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {listing.address}
                </div>
              </div>
              
              {/* Enhanced Property Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-gradient-to-br from-aqua-neon/10 to-aqua-neon/5 rounded-2xl p-4 text-center border border-aqua-neon/20">
                  <div className="text-2xl xs:text-3xl font-bold text-aqua-neon mb-1">{listing.beds}</div>
                  <div className="text-sm text-grey-light">Bedrooms</div>
                </div>
                <div className="bg-gradient-to-br from-aqua-neon/10 to-aqua-neon/5 rounded-2xl p-4 text-center border border-aqua-neon/20">
                  <div className="text-2xl xs:text-3xl font-bold text-aqua-neon mb-1">{listing.baths}</div>
                  <div className="text-sm text-grey-light">Bathrooms</div>
                </div>
                <div className="bg-gradient-to-br from-aqua-neon/10 to-aqua-neon/5 rounded-2xl p-4 text-center border border-aqua-neon/20">
                  <div className="text-2xl xs:text-3xl font-bold text-aqua-neon mb-1">{listing.sqft}</div>
                  <div className="text-sm text-grey-light">Square Feet</div>
                </div>
                <div className="bg-gradient-to-br from-aqua-neon/10 to-aqua-neon/5 rounded-2xl p-4 text-center border border-aqua-neon/20">
                  <div className="text-2xl xs:text-3xl font-bold text-aqua-neon mb-1">{listing.lotSize}</div>
                  <div className="text-sm text-grey-light">Lot Size</div>
                </div>
              </div>
              
              {/* Property Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-grey-light mb-1">Year Built</div>
                  <div className="text-lg font-semibold text-white">{listing.yearBuilt}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-grey-light mb-1">Parking</div>
                  <div className="text-lg font-semibold text-white">{listing.parking}</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-sm text-grey-light mb-1">Property Type</div>
                  <div className="text-lg font-semibold text-aqua-neon">{listing.type}</div>
                </div>
              </div>
            </section>

            {/* Property Description - Enhanced */}
            <section className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-gray-700/30 shadow-2xl">
              <h2 className="text-2xl xs:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-aqua-neon rounded-full"></div>
                About This Property
              </h2>
              <p className="text-grey-light leading-relaxed mb-8 text-lg">{listing.description}</p>
              
              <div className="bg-aqua-neon/10 rounded-2xl p-6 border border-aqua-neon/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Quick Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-grey-light">
                      <span className="text-aqua-neon mr-3 text-lg">✓</span>
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Key Features - Enhanced */}
            <section className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-gray-700/30 shadow-2xl">
              <h2 className="text-2xl xs:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-aqua-neon rounded-full"></div>
                Key Features & Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {listing.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-aqua-neon/30 transition-all duration-300 group">
                    <div className="flex items-center text-grey-light group-hover:text-white transition-colors">
                      <span className="text-aqua-neon mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                      <span className="font-medium">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Map & Neighborhood - Enhanced */}
            <section className="bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-gray-700/30 shadow-2xl">
              <h2 className="text-2xl xs:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-aqua-neon rounded-full"></div>
                Location & Neighborhood
              </h2>
              <div className="bg-gradient-to-br from-aqua-neon/10 to-aqua-neon/5 h-64 rounded-2xl flex items-center justify-center border border-aqua-neon/20 mb-8">
                <div className="text-center">
                  <svg className="w-16 h-16 text-aqua-neon mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-grey-light text-lg">Interactive Map Coming Soon</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Nearby Attractions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-grey-light">Highland Park Village</span>
                      <span className="text-aqua-neon font-semibold">5 min</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-grey-light">Dallas Love Field Airport</span>
                      <span className="text-aqua-neon font-semibold">12 min</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-grey-light">University Park</span>
                      <span className="text-aqua-neon font-semibold">8 min</span>
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-grey-light">Downtown Dallas</span>
                      <span className="text-aqua-neon font-semibold">15 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Agent Contact Panel - Enhanced */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-gray-700/30 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-aqua-neon to-aqua-neon/80 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold text-deep-forest">H</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{listing.agent.name}</h3>
                <p className="text-grey-light text-lg">{listing.agent.title}</p>
                <div className="mt-4 bg-aqua-neon/10 rounded-full px-4 py-2 inline-block">
                  <span className="text-aqua-neon text-sm font-semibold">{listing.agent.license}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-aqua-neon/30 transition-all duration-300">
                  <div className="flex items-center text-grey-light">
                    <div className="w-10 h-10 bg-aqua-neon/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-grey-light">Phone</div>
                      <div className="text-white font-semibold">{listing.agent.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-aqua-neon/30 transition-all duration-300">
                  <div className="flex items-center text-grey-light">
                    <div className="w-10 h-10 bg-aqua-neon/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-aqua-neon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-grey-light">Email</div>
                      <div className="text-white font-semibold text-sm">{listing.agent.email}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <Button variant="primary" className="w-full text-lg py-4">
                  Schedule Consultation
                </Button>
                <Button variant="secondary" className="w-full text-lg py-4">
                  Schedule Tour
                </Button>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-sm text-grey-light mb-2">Licensed with</div>
                  <div className="text-white font-semibold">{listing.agent.brokerage}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsPage;
