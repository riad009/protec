import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  padding?: string;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  gradient = false,
  padding = 'p-6 md:p-8',
}: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden
        ${gradient
          ? 'bg-white'
          : 'bg-white'
        }
        border border-gray-100 shadow-sm
        ${hover
          ? 'transition-all duration-500 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5 hover:-translate-y-1'
          : ''
        }
        ${padding}
        ${className}
      `}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
