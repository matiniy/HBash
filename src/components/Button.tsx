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
  const farsiWidthClass = language === 'fa' ? 'sm:min-w-[calc(auto+15px)]' : '';
  const baseClasses = `btn-font px-4 xs:px-6 py-2.5 xs:py-3 rounded-[8px] font-[500] text-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-neon min-h-[44px] w-full sm:w-[210px] max-w-full shadow-none flex items-center justify-center ${farsiWidthClass}`;
  
  const variantClasses = {
    primary: 'bg-aqua-neon text-black hover:bg-[#00FFA3] hover:-translate-y-0.5 btn-primary [&>*]:text-black',
    secondary: 'bg-transparent text-aqua-neon border border-aqua-neon hover:bg-aqua-neon hover:text-deep-forest hover:-translate-y-0.5 btn-secondary [&>*]:text-aqua-neon'
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