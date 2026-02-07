'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="nav-lang-toggle px-3 py-1.5 rounded-full bg-[#FFEFDF] hover:bg-[#FFEFDF]/90 border border-[#144552]/30 hover:border-[#144552]/50 transition-all duration-300 flex items-center gap-2 text-sm font-medium"
      aria-label="Toggle language"
      style={{ color: '#144552' }}
    >
      <span className={language === 'en' ? 'font-bold nav-lang-active' : 'opacity-70 nav-lang-inactive'}>
        EN
      </span>
      <span className="nav-lang-sep opacity-70">|</span>
      <span className={language === 'fa' ? 'font-bold nav-lang-active' : 'opacity-70 nav-lang-inactive'}>
        FA
      </span>
    </button>
  );
};

export default LanguageToggle;
