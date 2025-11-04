import React, { type InputHTMLAttributes } from 'react';

export type InputState = 'default' | 'error' | 'success';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  state?: InputState;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  state = 'default',
  fullWidth = false,
  className = '',
  id,
  ...props
}) => {
  // Generate ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  // Base input classes
  const baseClasses =
    'border rounded-input px-4 py-2 text-body transition-all duration-200 focus:outline-none focus:shadow-elevated';

  // State classes
  const stateClasses = {
    default:
      'border-gray-300 focus:border-soft-terracotta focus:ring-1 focus:ring-soft-terracotta',
    error: 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500',
    success:
      'border-sage-green focus:border-sage-green focus:ring-1 focus:ring-sage-green',
  };

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Disabled classes
  const disabledClasses = props.disabled
    ? 'bg-gray-100 cursor-not-allowed opacity-60'
    : 'bg-white';

  // Helper text color based on state
  const helperTextColor = {
    default: 'text-gray-600',
    error: 'text-red-500',
    success: 'text-sage-green',
  };

  // Combine classes
  const combinedClasses = `
    ${baseClasses}
    ${stateClasses[state]}
    ${widthClasses}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label
          htmlFor={inputId}
          className="block mb-2 text-small font-semibold text-warm-charcoal"
        >
          {label}
        </label>
      )}
      <input id={inputId} className={combinedClasses} {...props} />
      {helperText && (
        <p className={`mt-2 text-small ${helperTextColor[state]}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
