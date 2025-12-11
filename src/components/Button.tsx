import React from 'react';

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
  const baseClasses = 'px-4 xs:px-6 py-2.5 xs:py-3 rounded-full hover:rounded-[10px] font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-neon min-h-[44px] flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-aqua-neon text-grey-light hover:bg-[#1a5a6a] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-aqua-neon/30 btn-primary',
    secondary: 'bg-transparent text-aqua-neon border border-aqua-neon hover:bg-aqua-neon hover:text-grey-light hover:-translate-y-0.5 btn-secondary'
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