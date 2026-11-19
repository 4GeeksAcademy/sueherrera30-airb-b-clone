interface RatingProps {
  score: number;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
}

const Rating = ({ score, reviewCount, size = 'md' }: RatingProps) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <svg
          className={`${sizeStyles[size]} text-gray-900 fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span className={`font-medium text-gray-900 ${textSize[size]}`}>
          {score.toFixed(1)}
        </span>
      </div>
      {reviewCount !== undefined && (
        <span className={`text-gray-600 ${textSize[size]}`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;
