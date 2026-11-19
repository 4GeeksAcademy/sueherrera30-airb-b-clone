import { HTMLAttributes } from 'react';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}

const Title = ({
  level = 1,
  size,
  className,
  ...props
}: TitleProps) => {
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const levelSizeMap = {
    1: size || 'text-2xl sm:text-3xl',
    2: size || 'text-xl sm:text-2xl',
    3: size || 'text-lg sm:text-xl',
    4: size || 'text-base sm:text-lg',
  };

  const finalSize = size ? sizeMap[size] : levelSizeMap[level];
  const baseClasses = `font-semibold text-gray-900 ${finalSize} ${className || ''}`;

  switch (level) {
    case 1:
      return <h1 className={baseClasses} {...props} />;
    case 2:
      return <h2 className={baseClasses} {...props} />;
    case 3:
      return <h3 className={baseClasses} {...props} />;
    case 4:
      return <h4 className={baseClasses} {...props} />;
    default:
      return <h1 className={baseClasses} {...props} />;
  }
};

export default Title;
