'use client';

import Container from '../ui/Container';
import Title from '../ui/Title';

interface ListingsGridProps {
  children: React.ReactNode;
  isLoading?: boolean;
  total?: number;
}

const ListingsGrid = ({ children, isLoading = false, total }: ListingsGridProps) => {
  if (isLoading) {
    return (
      <Container className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-lg bg-gray-100 aspect-square animate-pulse"
            />
          ))}
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8">
      {total !== undefined && (
        <Title level={2} size="lg" className="mb-6">
          {total} alojamientos
        </Title>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {children}
      </div>
    </Container>
  );
};

export default ListingsGrid;
