import type { ReactNode } from 'react';

type CardVariant = 'light' | 'dark';
type CardHover = 'lift' | 'glow' | 'none';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  hover?: CardHover;
}

const variantClasses: Record<CardVariant, string> = {
  light: 'bg-white border border-gray-100',
  dark: 'bg-white/5 backdrop-blur-sm border border-white/10',
};

const hoverClasses: Record<CardHover, string> = {
  lift: 'hover:shadow-xl hover:-translate-y-1',
  glow: 'hover:bg-white/10',
  none: '',
};

export default function Card({
  children,
  className = '',
  variant = 'light',
  hover = 'lift',
}: CardProps) {
  return (
    <div
      className={`group rounded-2xl p-8 transition-all duration-300 ${variantClasses[variant]} ${hoverClasses[hover]} ${className}`}
    >
      {children}
    </div>
  );
}
