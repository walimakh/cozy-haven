import React from 'react';

interface IconProps {
  icon: React.ComponentType<any>;
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  className = '',
  size = 24,
  strokeWidth = 2,
  ...props
}) => {
  return (
    <IconComponent
      className={className}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
};

export default Icon;
