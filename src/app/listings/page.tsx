'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import Button from '@/components/Button';

export default function Listings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedBeds, setSelectedBeds] = useState('all');
  const [selectedBaths, setSelectedBaths] = useState('all');
  const [sortBy, setSortBy] = useState('price-asc');

  const allListings = [
    {
      id: '1',
      title: 'Luxury Uptown Apartment',
      location: 'Uptown Dallas, TX',
      price: 795000,
      beds: 2,
      baths: 2,
      sqft: '1,450 Sq Ft',
      image: '/images/Listings/Listing1.png',
      features: ['City View', 'Modern Kitchen', 'Balcony'],
      type: 'condo',
      keywords: ['luxury', 'apartment', 'uptown', 'dallas', 'city view', 'modern', 'kitchen', 'balcony', 'downtown']
    },
    {
      id: '2',
      title: 'Modern Estate In Highland Park',
      location: 'Highland Park, TX',
      price: 4250000,
      beds: 5,
      baths: 6,
      sqft: '6,800 Sq Ft',
      image: '/images/Listings/Listing2.png',
      features: ['Private Pool', 'Gourmet Kitchen', 'Wine Cellar', 'Garden'],
      type: 'single-family',
      keywords: ['modern', 'estate', 'highland park', 'dallas', 'pool', 'gourmet', 'kitchen', 'wine cellar', 'garden', 'luxury']
    },
    {
      id: '3',
      title: 'Stylish Townhome',
      location: 'Bishop Arts, TX',
      price: 615000,
      beds: 3,
      baths: 3,
      sqft: '2,200 Sq Ft',
      image: '/images/Listings/Listing3.png',
      features: ['Rooftop Deck', 'Hardwood Floors', 'Garage'],
      type: 'townhome',
      keywords: ['stylish', 'townhome', 'bishop arts', 'dallas', 'rooftop', 'deck', 'hardwood', 'floors', 'garage']
    },
    {
      id: '4',
      title: 'Contemporary Condo',
      location: 'Downtown Dallas, TX',
      price: 425000,
      beds: 1,
      baths: 1,
      sqft: '950 Sq Ft',
      image: '/images/Listings/Listing1.png',
      features: ['High Ceilings', 'City Views', 'Concierge'],
      type: 'condo',
      keywords: ['contemporary', 'condo', 'downtown', 'dallas', 'high ceilings', 'city views', 'concierge', 'urban']
    },
    {
      id: '5',
      title: 'Family Home in Lakewood',
      location: 'Lakewood, TX',
      price: 875000,
      beds: 4,
      baths: 3,
      sqft: '3,200 Sq Ft',
      image: '/images/Listings/Listing2.png',
      features: ['Large Yard', 'Updated Kitchen', 'Hardwood Floors'],
      type: 'single-family',
      keywords: ['family', 'home', 'lakewood', 'dallas', 'large yard', 'updated kitchen', 'hardwood floors', 'suburban']
    },
    {
      id: '6',
      title: 'Penthouse Suite',
      location: 'Victory Park, TX',
      price: 1250000,
      beds: 3,
      baths: 3,
      sqft: '2,800 Sq Ft',
      image: '/images/Listings/Listing3.png',
      features: ['Panoramic Views', 'Private Elevator', 'Rooftop Access'],
      type: 'luxury',
      keywords: ['penthouse', 'suite', 'victory park', 'dallas', 'panoramic views', 'private elevator', 'rooftop access', 'luxury']
    }
  ];

  const priceRanges = [
    { label: 'Any Price', value: 'all' },
    { label: 'Under $500K', value: 'under-500k' },
    { label: '$500K - $1M', value: '500k-1m' },
    { label: '$1M - $2M', value: '1m-2m' },
    { label: 'Over $2M', value: 'over-2m' }
  ];

  const propertyTypes = [
    { label: 'All Types', value: 'all' },
    { label: 'Single Family', value: 'single-family' },
    { label: 'Condo', value: 'condo' },
    { label: 'Townhome', value: 'townhome' },
    { label: 'Luxury', value: 'luxury' }
  ];

  const bedOptions = [
    { label: 'Any Beds', value: 'all' },
    { label: '1+ Beds', value: '1' },
    { label: '2+ Beds', value: '2' },
    { label: '3+ Beds', value: '3' },
    { label: '4+ Beds', value: '4' },
    { label: '5+ Beds', value: '5' }
  ];

  const bathOptions = [
    { label: 'Any Baths', value: 'all' },
    { label: '1+ Baths', value: '1' },
    { label: '2+ Baths', value: '2' },
    { label: '3+ Baths', value: '3' },
    { label: '4+ Baths', value: '4' },
    { label: '5+ Baths', value: '5' }
  ];

  const sortOptions = [
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest First', value: 'newest' },
    { label: 'Largest First', value: 'size-desc' },
    { label: 'Smallest First', value: 'size-asc' }
  ];

  // Filter and search logic
  const filteredListings = useMemo(() => {
    let filtered = allListings.filter(listing => {
      // Search term filter
      const searchMatch = searchTerm === '' || 
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        listing.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));

      // Property type filter
      const typeMatch = selectedType === 'all' || listing.type === selectedType;

      // Price range filter
      let priceMatch = true;
      if (selectedPriceRange !== 'all') {
        switch (selectedPriceRange) {
          case 'under-500k':
            priceMatch = listing.price < 500000;
            break;
          case '500k-1m':
            priceMatch = listing.price >= 500000 && listing.price <= 1000000;
            break;
          case '1m-2m':
            priceMatch = listing.price > 1000000 && listing.price <= 2000000;
            break;
          case 'over-2m':
            priceMatch = listing.price > 2000000;
            break;
        }
      }

      // Beds filter
      const bedsMatch = selectedBeds === 'all' || listing.beds >= parseInt(selectedBeds);

      // Baths filter
      const bathsMatch = selectedBaths === 'all' || listing.baths >= parseInt(selectedBaths);

      return searchMatch && typeMatch && priceMatch && bedsMatch && bathsMatch;
    });

    // Sort listings
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return b.id.localeCompare(a.id); // Simple newest first
        case 'size-desc':
          return parseInt(b.sqft.replace(/[^\d]/g, '')) - parseInt(a.sqft.replace(/[^\d]/g, ''));
        case 'size-asc':
          return parseInt(a.sqft.replace(/[^\d]/g, '')) - parseInt(b.sqft.replace(/[^\d]/g, ''));
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedType, selectedPriceRange, selectedBeds, selectedBaths, sortBy]);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-deep-forest relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border border-aqua-neon rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-aqua-neon rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-aqua-neon rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-aqua-neon rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Property <span className="text-aqua-neon">Listings</span>
            </h1>
            <p className="text-xl text-grey-light max-w-3xl mx-auto">
              Discover your perfect home in Dallas. Browse our curated selection of premium properties.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Search Bar */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Input */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-grey-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search by location, features, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-3">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-aqua-neon min-w-[140px]"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-aqua-neon min-w-[140px]"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-aqua-neon min-w-[120px]"
                >
                  {bedOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedBaths}
                  onChange={(e) => setSelectedBaths(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-aqua-neon min-w-[120px]"
                >
                  {bathOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-aqua-neon min-w-[160px]"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-grey-light">
              Showing <span className="text-aqua-neon font-semibold">{filteredListings.length}</span> of {allListings.length} properties
            </div>
            <div className="flex items-center gap-2 text-sm text-grey-light">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters applied
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20 bg-deep-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  {...listing}
                  price={formatPrice(listing.price)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-grey-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Properties Found</h3>
              <p className="text-grey-light mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find more properties.
              </p>
              <Button 
                variant="secondary" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('all');
                  setSelectedPriceRange('all');
                  setSelectedBeds('all');
                  setSelectedBaths('all');
                  setSortBy('price-asc');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-lg text-grey-light mb-8">
            Our inventory is constantly updated. Let us know your specific requirements and we'll help you find the perfect property.
          </p>
          <Button variant="primary" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}