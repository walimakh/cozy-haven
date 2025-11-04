import React, { type ReactNode } from 'react';

export type BadgeVariant = 'sustainable' | 'new' | 'bestseller' | 'default';
export type BadgeSize = 'small' | 'medium';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
}) => {
  // Base badge classes
  const baseClasses =
    'inline-flex items-center rounded-full font-semibold whitespace-nowrap';

  // Variant classes
  const variantClasses = {
    sustainable: 'bg-sage-green text-white',
    new: 'bg-soft-terracotta text-white',
    bestseller: 'bg-warm-charcoal text-white',
    default: 'bg-gray-200 text-warm-charcoal',
  };

  // Size classes
  const sizeClasses = {
    small: 'px-2 py-1 text-tiny',
    medium: 'px-3 py-1 text-tiny',
  };

  // Combine classes
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return <span className={combinedClasses}>{children}</span>;
};

export default Badge;
