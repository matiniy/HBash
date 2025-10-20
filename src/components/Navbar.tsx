'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const [isFloating, setIsFloating] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY;
      if (y > 80 && scrollingDown) {
        setIsFloating(true);
      } else if (y < lastY - 4 || y <= 10) {
        setIsFloating(false);
      }
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

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

  const navClasses = [
    'fixed z-50 transition-all duration-300 ease-out',
    isFloating
      ? 'top-4 left-1/2 -translate-x-1/2 w-[92%] md:w-[80%] rounded-full border border-aqua-neon/20 bg-deep-forest/80 backdrop-blur-xl shadow-lg'
      : 'top-0 left-0 w-full translate-x-0 bg-deep-forest/95 backdrop-blur-sm border-b border-aqua-neon/20'
  ].join(' ');

  const innerPadding = isFloating ? 'px-3 sm:px-4' : 'px-4 sm:px-6 lg:px-8';
  const barHeight = isFloating ? 'h-14' : 'h-16';

  return (
    <nav className={navClasses}>
      <div className={`max-w-7xl mx-auto ${innerPadding}`}>
        <div className={`flex justify-between items-center ${barHeight}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" style={{ padding: '5px' }}>
            {logoIndex < logoSources.length ? (
              <Image
                src={logoSources[logoIndex]}
                alt="H Bashash"
                width={320}
                height={80}
                priority
                className={isFloating ? 'h-12 w-auto' : 'h-16 w-auto'}
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deep-forest/98 backdrop-blur-sm border-t border-aqua-neon/20 rounded-b-2xl">
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