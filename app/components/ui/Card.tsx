import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({
  variant = 'default',
  padding = 'md',
  className,
  ...props
}: CardProps) => {
  const baseStyles = 'rounded-lg bg-white overflow-hidden';

  const variantStyles = {
    default: 'border border-gray-200',
    elevated: 'shadow-md',
    outlined: 'border-2 border-gray-200',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className || ''}`}
      {...props}
    />
  );
};

export default Card;
