interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
  className?: string;
  icon?: React.ReactNode;
}

const badgeVariants = {
  default: 'bg-brand-50 text-brand-600 border-brand-200',
  success: 'bg-trust-50 text-trust-600 border-trust-100',
  warning: 'bg-amber-50 text-amber-500 border-amber-100',
  info: 'bg-gray-100 text-gray-600 border-gray-200',
};

export default function Badge({ children, variant = 'default', className = '', icon }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold
        rounded-full border
        ${badgeVariants[variant]} ${className}
      `}
    >
      {icon}
      {children}
    </span>
  );
}
