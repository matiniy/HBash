'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);

  const logoSources = [
    '/images/Logo/logo.svg',
    '/images/Logo/logo.png',
    '/images/Logo/HBash.svg',
    '/images/Logo/HBash.png'
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoError = () => {
    setLogoIndex((prev) => (prev + 1 < logoSources.length ? prev + 1 : prev));
  };

  return (
    <nav className="bg-deep-forest/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-aqua-neon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" style={{ padding: '5px' }}>
            {logoIndex < logoSources.length ? (
              <Image
                src={logoSources[logoIndex]}
                alt="H Bashash"
                width={320}
                height={80}
                priority
                className="h-16 w-auto"
                onError={handleLogoError}
              />
            ) : (
              <span className="text-2xl font-semibold text-white">H Bashash</span>
            )}
            <span className="sr-only">H Bashash</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-aqua-neon transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-aqua-neon transition-colors">
              Services
            </Link>
            <Link href="/listings" className="text-white hover:text-aqua-neon transition-colors">
              Listings
            </Link>
            <Link href="/contact">
              <Button variant="primary">Contact</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-aqua-neon focus:outline-none focus:text-aqua-neon"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deep-forest/98 backdrop-blur-sm border-t border-aqua-neon/20">
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-aqua-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white hover:text-aqua-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/listings"
                className="block px-3 py-2 text-white hover:text-aqua-neon transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Listings
              </Link>
              <div className="px-3 py-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" className="w-full">Contact</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;