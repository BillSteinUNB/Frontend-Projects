import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-rebuilt-gold/50 disabled:opacity-50 disabled:cursor-not-allowed font-sans";
  
  const variants = {
    primary: "bg-rebuilt-gold text-rebuilt-void hover:bg-rebuilt-gold-light active:bg-rebuilt-gold-dark",
    outline: "border border-rebuilt-gold text-rebuilt-gold hover:bg-rebuilt-gold hover:text-rebuilt-void",
    ghost: "text-white/70 hover:text-rebuilt-gold hover:bg-white/5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};