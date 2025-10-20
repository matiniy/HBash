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
  const baseClasses = 'px-6 py-3 rounded-full hover:rounded-[10px] font-semibold text-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-neon';
  
  const variantClasses = {
    primary: 'bg-aqua-neon text-deep-forest hover:bg-[#00e694] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-aqua-neon/30 btn-primary',
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