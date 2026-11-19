import Image from 'next/image';
import Badge from '../ui/Badge';

interface PropertyCardMediaProps {
  image?: string;
  title: string;
  isNew: boolean;
}

const PropertyCardMedia = ({ image, title, isNew }: PropertyCardMediaProps) => (
  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
    {image ? (
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-300 hover:scale-105"
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
        <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )}
    {isNew && <div className="absolute right-3 top-3"><Badge variant="primary">Nuevo</Badge></div>}
  </div>
);

export default PropertyCardMedia;