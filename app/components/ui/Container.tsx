import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const Container = ({
  maxWidth = 'xl',
  className,
  ...props
}: ContainerProps) => {
  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-5xl',
    '2xl': 'max-w-6xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 ${maxWidthStyles[maxWidth]} ${className || ''}`}
      {...props}
    />
  );
};

export default Container;
