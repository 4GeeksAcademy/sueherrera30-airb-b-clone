import Rating from '../ui/Rating';

interface PropertyCardDetailsProps {
  title: string;
  location: string;
  description?: string;
  price: number;
  rating: number;
  reviewCount: number;
}

const PropertyCardDetails = ({ title, location, description, price, rating, reviewCount }: PropertyCardDetailsProps) => (
  <div className="p-3 sm:p-4">
    <h3 className="mb-1 line-clamp-1 text-sm font-semibold text-gray-900 sm:text-base">{title}</h3>
    <p className="mb-3 line-clamp-1 text-xs text-gray-600 sm:text-sm">{location}</p>
    {description && <p className="mb-3 line-clamp-2 text-xs text-gray-600">{description}</p>}
    <div className="flex items-center justify-between">
      <Rating score={rating} reviewCount={reviewCount} size="sm" />
      <span className="text-sm font-semibold text-gray-900">
        ${price}<span className="text-xs font-normal text-gray-600"> / noche</span>
      </span>
    </div>
  </div>
);

export default PropertyCardDetails;