'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';
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
  const innerPadding = 'px-6 sm:px-8 lg:pl-12 lg:pr-8';
  const barHeight = 'h-16 min-h-[70px] sm:h-[72px]';
  // Keep logo visually aligned with toggles/nav: slightly smaller than the navbar height
  const logoHeightClass = 'h-10 sm:h-12';

  return (
    <nav className={`${navClasses} ${isFarsi ? 'nav-rtl' : ''}`}>
      <div className={`w-full ${innerPadding} nav-inner`}>
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
          </div>

          {/* Social icons + Hamburger menu */}
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <a href="https://www.instagram.com/haideh.realty/" target="_blank" rel="noopener noreferrer" className="nav-social-icon min-w-[44px] min-h-[44px] flex items-center justify-center text-white/90 hover:text-aqua-neon transition-colors p-2 touch-manipulation" aria-label="Instagram">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/HaidehBashashRealtor" target="_blank" rel="noopener noreferrer" className="nav-social-icon min-w-[44px] min-h-[44px] flex items-center justify-center text-white/90 hover:text-aqua-neon transition-colors p-2 touch-manipulation" aria-label="Facebook">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/haideh-bashash-21119843/" target="_blank" rel="noopener noreferrer" className="nav-social-icon min-w-[44px] min-h-[44px] flex items-center justify-center text-white/90 hover:text-aqua-neon transition-colors p-2 touch-manipulation" aria-label="LinkedIn">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <button
              onClick={toggleMenu}
              className="nav-hamburger-btn min-w-[44px] min-h-[44px] p-2 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 touch-manipulation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <svg className="h-6 w-6 sm:h-[35px] sm:w-[35px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Small dropdown panel - vertical nav, not full screen */}
        {isMenuOpen && (
          <>
            {/* Light backdrop - click to close */}
            <div
              className="fixed inset-0 z-40 bg-black/40"
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
            />
            <div
              className="nav-dropdown-panel fixed z-50 top-16 sm:top-[72px] right-4 sm:right-6 lg:right-8 w-64 max-h-[min(70vh,22rem)] overflow-y-auto rounded-xl shadow-2xl nav-glass py-2"
              role="dialog"
              aria-label="Navigation menu"
              dir={isFarsi ? 'rtl' : 'ltr'}
            >
              <div className="flex flex-col">
                <Link
                  href="/"
                  className={`nav-menu-link block px-4 py-2.5 nav-link hover:text-aqua-neon transition-colors ${
                    isActive('/') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.home')}
                </Link>
                <Link
                  href="/about"
                  className={`nav-menu-link block px-4 py-2.5 nav-link hover:text-aqua-neon transition-colors ${
                    isActive('/about') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  href="/services"
                  className={`nav-menu-link block px-4 py-2.5 nav-link hover:text-aqua-neon transition-colors ${
                    isActive('/services') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.services')}
                </Link>
                <Link
                  href="/listings"
                  className={`nav-menu-link block px-4 py-2.5 nav-link hover:text-aqua-neon transition-colors ${
                    isActive('/listings') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.listings')}
                </Link>
                <Link
                  href="/contact"
                  className={`nav-menu-link block px-4 py-2.5 nav-link hover:text-aqua-neon transition-colors ${
                    isActive('/contact') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
                <div className="px-4 py-2.5 border-t border-[#144552]/20 mt-1">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;