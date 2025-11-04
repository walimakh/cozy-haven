import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'large' | 'medium' | 'small';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  // Base button classes
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-soft-terracotta focus:ring-offset-2';

  // Variant classes
  const variantClasses = {
    primary:
      'bg-soft-terracotta text-white hover:bg-opacity-90 hover:shadow-elevated',
    secondary:
      'border-2 border-soft-terracotta text-soft-terracotta hover:bg-soft-terracotta hover:text-white',
    ghost: 'text-soft-terracotta hover:underline',
  };

  // Size classes
  const sizeClasses = {
    large: 'px-6',
    medium: 'px-5', 
    small: 'px-4',
  };

  // Size styles (inline styles for reliable rendering)
  const sizeStyles = {
    large: { height: '48px', fontSize: '16px' },
    medium: { height: '40px', fontSize: '16px' },
    small: { height: '32px', fontSize: '14px' },
  };

  // Border radius classes
  const radiusClasses = variant === 'ghost' ? '' : 'rounded-button';

  // Disabled classes
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed hover:bg-opacity-100 hover:no-underline'
    : 'cursor-pointer';

  // Full width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Icon spacing classes
  const iconSpacing = icon ? (iconPosition === 'left' ? 'gap-2' : 'gap-2') : '';

  // Combine all classes
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${radiusClasses}
    ${disabledClasses}
    ${widthClasses}
    ${iconSpacing}
    ${className}
  `.trim();

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      style={{
        ...sizeStyles[size],
        fontFamily: 'system-ui, -apple-system, sans-serif',
        ...props.style
      }}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0 flex items-center">{icon}</span>}
      <span className="flex items-center">{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0 flex items-center">{icon}</span>}
    </button>
  );
};

export default Button;
