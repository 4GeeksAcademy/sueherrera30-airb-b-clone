import Title from '../ui/Title';
import Rating from '../ui/Rating';
import Divider from '../ui/Divider';

interface ListingHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
}

const ListingHeader = ({
  title,
  location,
  rating,
  reviewCount,
}: ListingHeaderProps) => {
  return (
    <div className="mb-6">
      <Title level={1} className="mb-3">
        {title}
      </Title>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <Rating score={rating} reviewCount={reviewCount} />
          <span className="text-sm text-gray-600">•</span>
          <span className="text-sm text-gray-600">{location}</span>
        </div>
      </div>
      <Divider className="mt-6" />
    </div>
  );
};

export default ListingHeader;
