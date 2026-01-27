'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  children, 
  onClick, 
  type = 'button',
  className = '' 
}) => {
  const { language } = useLanguage();
  const farsiWidthClass = language === 'fa' ? 'min-w-[calc(100%+15px)] sm:min-w-[calc(auto+15px)]' : '';
  const baseClasses = `px-4 xs:px-6 py-2.5 xs:py-3 rounded-full hover:rounded-[10px] font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-neon min-h-[44px] flex items-center justify-center ${farsiWidthClass}`;
  
  const variantClasses = {
    primary: 'bg-aqua-neon text-white hover:bg-[#00e694] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-aqua-neon/30 btn-primary [&>*]:text-white',
    secondary: 'bg-transparent text-aqua-neon border border-aqua-neon hover:bg-aqua-neon hover:text-deep-forest hover:-translate-y-0.5 btn-secondary'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;