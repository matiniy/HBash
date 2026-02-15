'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import ListingsAIChat from '@/components/ListingsAIChat';
import Button from '@/components/Button';
import PasswordProtection from '@/components/PasswordProtection';
import { useLanguage } from '@/contexts/LanguageContext';
import GradientNoiseWrapper from '@/components/GradientNoiseWrapper';

const LISTINGS_PASSWORD = '1234567890';

export default function Listings() {
  const { t } = useLanguage();
  // Check authentication status immediately on mount (synchronously)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      const authStatus = sessionStorage.getItem('listings_authenticated');
      return authStatus === 'true';
    }
    return false;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedBeds, setSelectedBeds] = useState<string[]>([]);
  const [selectedBaths, setSelectedBaths] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('price-asc');
  const [searchAndFiltersOpen, setSearchAndFiltersOpen] = useState(false);

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

  const propertyTypeOptions = [
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

  const appliedFiltersCount =
    selectedTypes.length +
    selectedPriceRanges.filter((v) => v !== 'all').length +
    selectedBeds.length +
    selectedBaths.length +
    (searchTerm.trim() ? 1 : 0);

  const togglePropertyType = (value: string) => {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };
  const togglePriceRange = (value: string) => {
    if (value === 'all') {
      setSelectedPriceRanges([]);
      return;
    }
    setSelectedPriceRanges((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev.filter((v) => v !== 'all'), value]
    );
  };
  const toggleBeds = (value: string) => {
    if (value === 'all') {
      setSelectedBeds([]);
      return;
    }
    setSelectedBeds((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev.filter((v) => v !== 'all'), value]
    );
  };
  const toggleBaths = (value: string) => {
    if (value === 'all') {
      setSelectedBaths([]);
      return;
    }
    setSelectedBaths((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev.filter((v) => v !== 'all'), value]
    );
  };

  // Filter and search logic
  const filteredListings = useMemo(() => {
    let filtered = allListings.filter(listing => {
      // Search term filter
      const searchMatch = searchTerm === '' || 
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        listing.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));

      // Property type filter (checkboxes: empty = all)
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(listing.type);

      // Price range filter (checkboxes: empty or 'all' = any; else listing in any selected range)
      let priceMatch = true;
      const activePriceRanges = selectedPriceRanges.filter((v) => v !== 'all');
      if (activePriceRanges.length > 0) {
        priceMatch = activePriceRanges.some((range) => {
          switch (range) {
            case 'under-500k':
              return listing.price < 500000;
            case '500k-1m':
              return listing.price >= 500000 && listing.price <= 1000000;
            case '1m-2m':
              return listing.price > 1000000 && listing.price <= 2000000;
            case 'over-2m':
              return listing.price > 2000000;
            default:
              return false;
          }
        });
      }

      // Beds filter (checkboxes: empty = any; else listing.beds >= min(selected))
      const bedsMatch =
        selectedBeds.length === 0 ||
        Math.min(...selectedBeds.map((b) => parseInt(b, 10))) <= listing.beds;

      // Baths filter (checkboxes: empty = any; else listing.baths >= min(selected))
      const bathsMatch =
        selectedBaths.length === 0 ||
        Math.min(...selectedBaths.map((b) => parseInt(b, 10))) <= listing.baths;

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
  }, [searchTerm, selectedTypes, selectedPriceRanges, selectedBeds, selectedBaths, sortBy]);

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    } else if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price.toLocaleString()}`;
  };

  // Show password protection if not authenticated (same look as rest of site)
  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <GradientNoiseWrapper>
          <div className="min-h-screen flex items-center justify-center px-4 py-24">
            <PasswordProtection
              correctPassword={LISTINGS_PASSWORD}
              onSuccess={() => setIsAuthenticated(true)}
              title={t('password.listingsTitle')}
              message={t('password.listingsMessage')}
              lightTheme
            />
          </div>
        </GradientNoiseWrapper>
      </>
    );
  }

  return (
    <main className="listings-page min-h-screen overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <GradientNoiseWrapper>
      {/* Hero Section - on light background, PP Editorial + Raleway, #144552 */}
      <section className="listings-hero-section pt-20 sm:pt-24 pb-10 sm:pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="listings-hero-title text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="listings-hero-lead">Property</span>{' '}<span className="listings-hero-highlight">Listings</span>
            </h1>
            <p className="listings-hero-subtitle text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-1">
              Discover your perfect home in Dallas. Browse our curated selection of premium properties.
            </p>
          </div>
          <ListingsAIChat listings={allListings} formatPrice={formatPrice} />
        </div>
      </section>

      {/* Search and Filter Section - minimal: one trigger, panel has search + checkboxes + radios */}
      <section className="listings-search-section py-8 sm:py-10 border-b border-[#144552]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setSearchAndFiltersOpen((open) => !open)}
              className="listings-form-text listings-search-filters-trigger flex items-center gap-2 py-2 px-0 border-0 border-b-2 border-transparent hover:border-[#144552]/40 focus:ring-0 focus:outline-none cursor-pointer bg-transparent text-[#144552] text-base"
              aria-expanded={searchAndFiltersOpen}
              aria-controls="listings-search-filters-panel"
            >
              <svg className="w-4 h-4 listings-filter-icon flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search & filters</span>
              {appliedFiltersCount > 0 && (
                <span className="listings-filters-badge min-w-[1.25rem] h-5 px-1.5 rounded-full bg-[#144552] text-white text-xs font-medium flex items-center justify-center">
                  {appliedFiltersCount}
                </span>
              )}
              <svg className={`w-4 h-4 transition-transform flex-shrink-0 ${searchAndFiltersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="listings-form-text text-[#144552] text-sm">
              Showing <span className="listings-results-num">{filteredListings.length}</span> of {allListings.length} properties
            </div>
          </div>

          <div
            id="listings-search-filters-panel"
            className={`listings-search-filters-panel overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${searchAndFiltersOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
            aria-hidden={!searchAndFiltersOpen}
          >
            <div className="pt-6 pb-2 space-y-6">
              {/* Search - only visible when panel open */}
              <div className="listings-filter-group">
                <label className="listings-filter-group-label block text-sm font-medium text-[#144552] mb-2">Search</label>
                <div className="relative max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 listings-filter-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Location, features, keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="listings-form-text w-full pl-7 pr-0 py-2.5 text-sm min-h-[40px] focus:ring-0 border-b-2 border-[#144552]/40 focus:border-[#144552] bg-transparent"
                  />
                </div>
              </div>

              {/* Property type - checkboxes */}
              <div className="listings-filter-group">
                <span className="listings-filter-group-label block text-sm font-medium text-[#144552] mb-2">Property type</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {propertyTypeOptions.map((opt) => (
                    <label key={opt.value} className="listings-filter-checkbox-label flex items-center gap-2 cursor-pointer text-[#144552] text-sm">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(opt.value)}
                        onChange={() => togglePropertyType(opt.value)}
                        className="listings-filter-checkbox h-4 w-4 rounded border-[#144552]/50 text-[#144552] focus:ring-[#144552] focus:ring-offset-0"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price - checkboxes */}
              <div className="listings-filter-group">
                <span className="listings-filter-group-label block text-sm font-medium text-[#144552] mb-2">Price</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {priceRanges.map((opt) => (
                    <label key={opt.value} className="listings-filter-checkbox-label flex items-center gap-2 cursor-pointer text-[#144552] text-sm">
                      <input
                        type="checkbox"
                        checked={opt.value === 'all' ? selectedPriceRanges.length === 0 : selectedPriceRanges.includes(opt.value)}
                        onChange={() => togglePriceRange(opt.value)}
                        className="listings-filter-checkbox h-4 w-4 rounded border-[#144552]/50 text-[#144552] focus:ring-[#144552] focus:ring-offset-0"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Beds - checkboxes */}
              <div className="listings-filter-group">
                <span className="listings-filter-group-label block text-sm font-medium text-[#144552] mb-2">Beds</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {bedOptions.map((opt) => (
                    <label key={opt.value} className="listings-filter-checkbox-label flex items-center gap-2 cursor-pointer text-[#144552] text-sm">
                      <input
                        type="checkbox"
                        checked={opt.value === 'all' ? selectedBeds.length === 0 : selectedBeds.includes(opt.value)}
                        onChange={() => toggleBeds(opt.value)}
                        className="listings-filter-checkbox h-4 w-4 rounded border-[#144552]/50 text-[#144552] focus:ring-[#144552] focus:ring-offset-0"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Baths - checkboxes */}
              <div className="listings-filter-group">
                <span className="listings-filter-group-label block text-sm font-medium text-[#144552] mb-2">Baths</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {bathOptions.map((opt) => (
                    <label key={opt.value} className="listings-filter-checkbox-label flex items-center gap-2 cursor-pointer text-[#144552] text-sm">
                      <input
                        type="checkbox"
                        checked={opt.value === 'all' ? selectedBaths.length === 0 : selectedBaths.includes(opt.value)}
                        onChange={() => toggleBaths(opt.value)}
                        className="listings-filter-checkbox h-4 w-4 rounded border-[#144552]/50 text-[#144552] focus:ring-[#144552] focus:ring-offset-0"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort - radio */}
              <div className="listings-filter-group">
                <span className="listings-filter-group-label block text-sm font-medium text-[#144552] mb-2">Sort by</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {sortOptions.map((opt) => (
                    <label key={opt.value} className="listings-filter-radio-label flex items-center gap-2 cursor-pointer text-[#144552] text-sm">
                      <input
                        type="radio"
                        name="sort"
                        checked={sortBy === opt.value}
                        onChange={() => setSortBy(opt.value)}
                        className="listings-filter-radio h-4 w-4 border-[#144552]/50 text-[#144552] focus:ring-[#144552] focus:ring-offset-0"
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {appliedFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTypes([]);
                    setSelectedPriceRanges([]);
                    setSelectedBeds([]);
                    setSelectedBaths([]);
                    setSortBy('price-asc');
                  }}
                  className="listings-filter-clear text-sm text-[#144552] border-b border-[#144552]/50 hover:border-[#144552] pb-0.5"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20">
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
              <div className="w-24 h-24 bg-[#144552]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-[#144552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="listings-hero-title text-2xl font-bold text-[#144552] mb-4">No Properties Found</h3>
              <p className="listings-hero-subtitle text-[#144552] mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find more properties.
              </p>
              <Button 
                variant="secondary" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedTypes([]);
                  setSelectedPriceRanges([]);
                  setSelectedBeds([]);
                  setSelectedBaths([]);
                  setSortBy('price-asc');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - button matches other site buttons (16px, #144552, 48px) */}
      <section className="listings-cta-section py-20 border-t border-[#144552]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h2 className="listings-hero-title text-3xl md:text-4xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="listings-hero-subtitle text-lg mb-8">
            Our inventory is constantly updated. Let us know your specific requirements and we'll help you find the perfect property.
          </p>
          <Button variant="primary" className="listings-cta-btn w-full sm:w-auto">
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
      </GradientNoiseWrapper>
    </main>
  );
}