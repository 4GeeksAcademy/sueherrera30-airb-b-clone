'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Title from '../ui/Title';
import Button from '../ui/Button';

interface ResultsHeaderProps {
  total: number;
  onSortChange?: (sortOrder: 'asc' | 'desc') => void;
  maxPrice?: number | null;
  minGuests?: number | null;
  onMaxPriceChange?: (maxPrice: number | null) => void;
  onMinGuestsChange?: (minGuests: number | null) => void;
}

const ResultsHeader = ({
  total,
  onSortChange,
  maxPrice = null,
  minGuests = null,
  onMaxPriceChange,
  onMinGuestsChange,
}: ResultsHeaderProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSortChange = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    onSortChange?.(order);
  };

  return (
    <Container className="py-4 sm:py-6">
      <div className="flex flex-col gap-4">
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

        <div className="flex flex-wrap gap-4 border-t border-gray-200 pt-4">
          <label className="flex flex-col gap-1 text-sm text-gray-700">
            Precio máximo
            <select
              aria-label="Precio máximo"
              className="min-w-40 rounded border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={maxPrice ?? ''}
              onChange={(event) => onMaxPriceChange?.(event.target.value ? Number(event.target.value) : null)}
            >
              <option value="">Sin límite</option>
              <option value="100">Hasta $100</option>
              <option value="150">Hasta $150</option>
              <option value="200">Hasta $200</option>
              <option value="300">Hasta $300</option>
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm text-gray-700">
            Huéspedes
            <select
              aria-label="Cantidad mínima de huéspedes"
              className="min-w-40 rounded border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={minGuests ?? ''}
              onChange={(event) => onMinGuestsChange?.(event.target.value ? Number(event.target.value) : null)}
            >
              <option value="">Cualquier capacidad</option>
              <option value="2">2 o más</option>
              <option value="4">4 o más</option>
              <option value="6">6 o más</option>
            </select>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default ResultsHeader;
