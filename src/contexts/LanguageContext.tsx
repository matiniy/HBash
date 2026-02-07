'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/translations';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage === 'en' || savedLanguage === 'fa') {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fa' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    if (!translations || typeof translations !== 'object') return key;
    const keys = key.split('.');
    let value: unknown = translations[language as keyof typeof translations];

    for (const k of keys) {
      value = value && typeof value === 'object' && k in value ? (value as Record<string, unknown>)[k] : undefined;
    }

    if (typeof value === 'string') return value;

    // Fallback to English
    let fallback: unknown = translations.en;
    for (const k of keys) {
      fallback = fallback && typeof fallback === 'object' && k in fallback ? (fallback as Record<string, unknown>)[k] : undefined;
    }
    return typeof fallback === 'string' ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
