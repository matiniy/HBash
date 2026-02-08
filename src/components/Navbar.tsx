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

          {/* Hamburger menu button - always visible on all screen sizes */}
          <div className="ml-auto">
            <button
              onClick={toggleMenu}
              className="nav-hamburger-btn p-1 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <svg className="h-[35px] w-[35px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
              className={`nav-dropdown-panel fixed z-50 top-16 sm:top-[72px] w-64 max-h-[min(70vh,22rem)] overflow-y-auto rounded-xl shadow-2xl nav-glass py-2 ${
                isFarsi ? 'left-4 sm:left-6 lg:left-12' : 'right-4 sm:right-6 lg:right-8'
              }`}
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