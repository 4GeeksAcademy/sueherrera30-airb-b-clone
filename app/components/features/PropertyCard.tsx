'use client';

import Link from 'next/link';
import Card from '../ui/Card';
import { useListingSearch } from '../providers/SearchProvider';
import PropertyCardMedia from './PropertyCardMedia';
import PropertyCardDetails from './PropertyCardDetails';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  description?: string;
  price: number;
  rating: number;
  reviewCount: number;
  image?: string;
  isNew?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  description,
  price,
  rating,
  reviewCount,
  image,
  isNew = false,
}: PropertyCardProps) => {
  const { favoriteIds, toggleFavorite } = useListingSearch();
  const isFavorite = favoriteIds.includes(id);

  return (
    <Card variant="default" padding="none" className="overflow-hidden transition-shadow duration-200 hover:shadow-lg">
      <div className="relative">
        <Link href={`/rooms/${id}`} aria-label={`Ver alojamiento: ${title}`}>
          <PropertyCardMedia image={image} title={title} isNew={isNew} />
        </Link>
        <button
          type="button"
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
          aria-pressed={isFavorite}
          onClick={() => toggleFavorite(id)}
          className="absolute left-3 top-3 rounded-full bg-white p-2 shadow-md transition-shadow hover:shadow-lg"
        >
          <svg className={`h-5 w-5 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>
      <Link href={`/rooms/${id}`} className="block">
        <PropertyCardDetails
          title={title}
          location={location}
          description={description}
          price={price}
          rating={rating}
          reviewCount={reviewCount}
        />
      </Link>
    </Card>
  );
};

export default PropertyCard;
