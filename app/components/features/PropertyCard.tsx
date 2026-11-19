import Link from 'next/link';
import Image from 'next/image';
import Card from '../ui/Card';
import Rating from '../ui/Rating';
import Badge from '../ui/Badge';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image?: string;
  isFavorite?: boolean;
  isNew?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  image,
  isFavorite = false,
  isNew = false,
}: PropertyCardProps) => {
  return (
    <Link href={`/rooms/${id}`}>
      <Card variant="default" padding="none" className="hover:shadow-lg transition-shadow duration-200 cursor-pointer overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full aspect-square bg-gray-200 overflow-hidden rounded-lg">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {isNew && <Badge variant="primary">Nuevo</Badge>}
          </div>

          {/* Favorite Button */}
          <button
            className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-700'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-1 mb-1">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-1 mb-3">
            {location}
          </p>

          {/* Rating and Price */}
          <div className="flex items-center justify-between">
            <Rating score={rating} reviewCount={reviewCount} size="sm" />
            <span className="font-semibold text-gray-900 text-sm">
              ${price}
              <span className="text-xs text-gray-600 font-normal"> / noche</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;
