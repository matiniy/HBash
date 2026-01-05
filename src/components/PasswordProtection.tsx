'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Button from './Button';

interface PasswordProtectionProps {
  correctPassword: string;
  onSuccess: () => void;
  title?: string;
  message?: string;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({
  correctPassword,
  onSuccess,
  title,
  message,
}) => {
  const { t, language } = useLanguage();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem('listings_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      onSuccess();
    }
  }, [onSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password === correctPassword) {
      sessionStorage.setItem('listings_authenticated', 'true');
      setIsAuthenticated(true);
      onSuccess();
    } else {
      setError(language === 'fa' ? 'رمز عبور اشتباه است' : 'Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return null; // Already authenticated, don't show the form
  }

  return (
    <div className="min-h-screen bg-deep-forest flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-aqua-neon/20 shadow-2xl">
          {/* Logo/Title */}
          <div className="text-center mb-8">
            <h1 className={`text-3xl md:text-4xl font-bold text-white mb-2 ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {title || (language === 'fa' ? 'دسترسی محدود' : 'Restricted Access')}
            </h1>
            <p className={`text-grey-light text-sm ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {message || (language === 'fa' ? 'این صفحه با رمز عبور محافظت می‌شود' : 'This page is password protected')}
            </p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="password" 
                className={`block text-sm font-medium text-white mb-2 ${language === 'fa' ? 'font-sora' : ''}`}
                dir={language === 'fa' ? 'rtl' : 'ltr'}
              >
                {language === 'fa' ? 'رمز عبور' : 'Password'}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 bg-white/10 border border-aqua-neon/30 rounded-lg text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-aqua-neon focus:border-transparent transition-all duration-300 ${
                  language === 'fa' ? 'font-sora text-right' : ''
                }`}
                placeholder={language === 'fa' ? 'رمز عبور را وارد کنید' : 'Enter password'}
                dir={language === 'fa' ? 'rtl' : 'ltr'}
                autoFocus
                required
              />
            </div>

            {error && (
              <div className={`p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center text-sm ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
            >
              {language === 'fa' ? 'ورود' : 'Enter'}
            </Button>
          </form>

          {/* Info Message */}
          <div className="mt-6 text-center">
            <p className={`text-grey-light text-xs ${language === 'fa' ? 'font-sora' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
              {language === 'fa' 
                ? 'این صفحه در حال توسعه است و به زودی در دسترس عموم قرار خواهد گرفت'
                : 'This page is under development and will be available soon'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;

