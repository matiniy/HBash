'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './Button';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { t, language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isFarsi = language === 'fa';

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoSources = [
    '/images/Logo/Logo.png',
    '/images/Logo/logo.svg',
    '/images/Logo/logo.png',
    '/images/Logo/HBash.svg',
    '/images/Logo/HBash.png',
    '/images/logo.svg',
    '/images/logo.png'
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoError = () => {
    setLogoIndex((prev) => (prev + 1 < logoSources.length ? prev + 1 : prev));
  };

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navClasses = `fixed top-0 left-0 w-full z-50 nav-glass ${isScrolled ? 'nav-glass--scrolled' : ''}`;
  const innerPadding = 'px-3 sm:px-4 lg:px-8';
  const barHeight = 'h-14 sm:h-16';
  // Keep logo visually aligned with toggles/nav: slightly smaller than the navbar height
  const logoHeightClass = 'h-10 sm:h-12';

  return (
    <nav className={`${navClasses} ${isFarsi ? 'nav-rtl' : ''}`}>
      <div className={`max-w-7xl mx-auto ${innerPadding} nav-inner`}>
        <div className={`flex w-full items-center ${barHeight}`}>
          {/* Left cluster: Logo + Theme + Language */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2" style={{ padding: '5px' }}>
              {logoIndex < logoSources.length ? (
                <span
                  className={`nav-logo-bg relative ${logoHeightClass} aspect-square rounded-full overflow-hidden`}
                  aria-hidden="true"
                >
                  <Image
                    src={logoSources[logoIndex]}
                    alt="Haideh Bashash"
                    fill
                    priority
                    className="object-contain"
                    onError={handleLogoError}
                  />
                </span>
              ) : (
                <span className="text-xl sm:text-2xl font-semibold text-white">Haideh Bashash</span>
              )}
              <span className="sr-only">Haideh Bashash</span>
            </Link>

            {/* Desktop toggles next to logo (smaller) */}
            <div className="hidden md:flex items-center gap-2 scale-[0.88] origin-left">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="ml-auto hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className={`nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                isActive('/') ? 'nav-link-active' : ''
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/about"
              className={`nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                isActive('/about') ? 'nav-link-active' : ''
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/services"
              className={`nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                isActive('/services') ? 'nav-link-active' : ''
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link
              href="/listings"
              className={`nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                isActive('/listings') ? 'nav-link-active' : ''
              }`}
            >
              {t('nav.listings')}
            </Link>
            <Link href="/contact">
              <Button variant="primary" className="nav-contact-button">
                {t('nav.contact')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="ml-auto md:hidden">
            <button
              onClick={toggleMenu}
              className="p-3 text-white hover:text-aqua-neon focus:outline-none focus:text-aqua-neon"
              aria-label="Open navigation menu"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-b-2xl">
              <Link
                href="/"
                className={`block px-3 py-3 nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                  isActive('/') ? 'nav-link-active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-3 nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                  isActive('/about') ? 'nav-link-active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-3 nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                  isActive('/services') ? 'nav-link-active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                href="/listings"
                className={`block px-3 py-3 nav-link nav-link-underline hover:text-aqua-neon transition-colors ${
                  isActive('/listings') ? 'nav-link-active' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.listings')}
              </Link>
              <div className="px-3 py-3 flex items-center justify-between">
                <span className="text-white text-sm">Theme:</span>
                <ThemeToggle />
              </div>
              <div className="px-3 py-3">
                <LanguageToggle />
              </div>
              <div className="px-3 py-2">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" className="w-full nav-contact-button">
                    {t('nav.contact')}
                  </Button>
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