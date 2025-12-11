'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-aqua-neon/30 hover:border-aqua-neon/50 transition-all duration-300 flex items-center gap-2 text-white text-sm font-medium"
      aria-label="Toggle language"
    >
      <span className={language === 'en' ? 'font-bold text-aqua-neon' : 'opacity-60'}>
        EN
      </span>
      <span className="text-grey-light">|</span>
      <span className={language === 'fa' ? 'font-bold text-aqua-neon' : 'opacity-60'}>
        FA
      </span>
    </button>
  );
};

export default LanguageToggle;
