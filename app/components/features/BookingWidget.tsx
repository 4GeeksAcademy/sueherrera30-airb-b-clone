'use client';

import { useState } from 'react';
import Card from '../ui/Card';
import Title from '../ui/Title';
import Button from '../ui/Button';
import Divider from '../ui/Divider';

interface BookingWidgetProps {
  pricePerNight: number;
  minGuests?: number;
  maxGuests?: number;
  onBook?: (guests: number) => void;
}

const BookingWidget = ({
  pricePerNight,
  minGuests = 1,
  maxGuests = 8,
  onBook,
}: BookingWidgetProps) => {
  const [guests, setGuests] = useState(minGuests);

  const handleDecrement = () => {
    if (guests > minGuests) {
      setGuests(guests - 1);
    }
  };

  const handleIncrement = () => {
    if (guests < maxGuests) {
      setGuests(guests + 1);
    }
  };

  const totalPrice = pricePerNight * guests;

  return (
    <Card variant="elevated" padding="lg" className="sticky bottom-0 sm:static">
      {/* Header */}
      <div className="flex items-baseline gap-2 mb-4">
        <Title level={3} size="lg">
          ${pricePerNight}
        </Title>
        <span className="text-gray-600 text-sm">por noche</span>
      </div>

      <Divider className="mb-6" />

      {/* Guest Counter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Huéspedes
        </label>
        <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-2">
          <button
            onClick={handleDecrement}
            disabled={guests === minGuests}
            className="text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
          <span className="flex-1 text-center font-medium text-gray-900">
            {guests} {guests === 1 ? 'huésped' : 'huéspedes'}
          </span>
          <button
            onClick={handleIncrement}
            disabled={guests === maxGuests}
            className="text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
        </div>
      </div>

      <Divider className="mb-6" />

      {/* Price Summary */}
      <div className="space-y-3 mb-6 text-sm">
        <div className="flex justify-between text-gray-700">
          <span>${pricePerNight} × {guests} noche{guests > 1 ? 's' : ''}</span>
          <span>${pricePerNight * guests}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tarifa de servicio</span>
          <span>${Math.round(totalPrice * 0.1)}</span>
        </div>
      </div>

      <Divider className="mb-6" />

      {/* Total */}
      <div className="flex justify-between items-baseline mb-6">
        <span className="font-semibold text-gray-900">Total</span>
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">
            ${Math.round(totalPrice * 1.1)}
          </div>
          <span className="text-xs text-gray-600">IVA incluido</span>
        </div>
      </div>

      {/* CTA Button */}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={() => onBook?.(guests)}
      >
        Reservar
      </Button>
      <button className="w-full mt-3 text-gray-700 font-semibold hover:bg-gray-100 py-2.5 rounded-lg transition-colors">
        Guardar en favoritos
      </button>
    </Card>
  );
};

export default BookingWidget;
