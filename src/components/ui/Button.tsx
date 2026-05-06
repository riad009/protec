import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  icon?: ReactNode;
}

const variants = {
  primary:
    'bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:shadow-brand-600/30 active:scale-[0.98]',
  secondary:
    'bg-white text-gray-800 border border-gray-200 hover:border-brand-300 hover:bg-gray-50 shadow-sm active:scale-[0.98]',
  outline:
    'bg-transparent text-brand-600 border-2 border-brand-500/50 hover:bg-brand-50 hover:border-brand-500 active:scale-[0.98]',
  ghost:
    'bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:scale-[0.98]',
  cta:
    'bg-gradient-to-r from-brand-600 to-brand-500 text-white font-semibold shadow-lg shadow-brand-600/25 hover:shadow-brand-600/40 hover:from-brand-700 hover:to-brand-600 active:scale-[0.98]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  icon,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium
    transition-all duration-300 cursor-pointer select-none
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]} ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {icon}
      {children}
    </button>
  );
}
