import Title from '../ui/Title';

interface Amenity {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface AmenitiesListProps {
  amenities: Amenity[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  const getDefaultIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <div>
      <Title level={2} size="lg" className="mb-6">
        Servicios
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            <div className="text-gray-700 flex-shrink-0">
              {amenity.icon || getDefaultIcon()}
            </div>
            <span className="text-gray-900 font-medium">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesList;
