'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Title from '../ui/Title';
import Button from '../ui/Button';

interface ResultsHeaderProps {
  total: number;
  onSortChange?: (sortOrder: 'asc' | 'desc') => void;
}

const ResultsHeader = ({ total, onSortChange }: ResultsHeaderProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    onSortChange?.(order);
  };

  return (
    <Container className="py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <Title level={2} size="base">
            Todos los alojamientos
          </Title>
          <p className="text-sm text-gray-600 mt-1">
            {total} alojamientos disponibles
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-600 whitespace-nowrap">Ordenar por:</span>
          <div className="flex gap-2">
            <Button
              variant={sortOrder === 'asc' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => handleSortChange('asc')}
            >
              Menor precio
            </Button>
            <Button
              variant={sortOrder === 'desc' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => handleSortChange('desc')}
            >
              Mayor precio
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResultsHeader;
