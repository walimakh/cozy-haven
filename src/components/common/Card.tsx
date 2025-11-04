import React, { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  padding?: 'none' | 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  padding = 'medium',
  onClick,
}) => {
  // Base card classes
  const baseClasses = 'bg-white rounded-card shadow-elevated';

  // Hover classes
  const hoverClasses = hoverable
    ? 'transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1'
    : '';

  // Clickable classes
  const clickableClasses = onClick ? 'cursor-pointer' : '';

  // Padding classes
  const paddingClasses = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-10',
  };

  // Combine classes
  const combinedClasses = `
    ${baseClasses}
    ${hoverClasses}
    ${clickableClasses}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
