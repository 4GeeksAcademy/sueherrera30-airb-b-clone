'use client';

import { useState } from 'react';
import Card from '../ui/Card';
import Title from '../ui/Title';
import Button from '../ui/Button';
import Divider from '../ui/Divider';
import BookingGuestCounter from './BookingGuestCounter';
import BookingTotals from './BookingTotals';

interface BookingWidgetProps {
  pricePerNight: number;
  minGuests?: number;
  maxGuests?: number;
  onBook?: (guests: number, nights: number) => void;
}

const BookingWidget = ({
  pricePerNight,
  minGuests = 1,
  maxGuests = 8,
  onBook,
}: BookingWidgetProps) => {
  const [guests, setGuests] = useState(minGuests);
  const [nights, setNights] = useState(1);

  return (
    <Card variant="elevated" padding="lg" className="sticky bottom-0 sm:static">
      <div className="flex items-baseline gap-2 mb-4">
        <Title level={3} size="lg">
          ${pricePerNight}
        </Title>
        <span className="text-gray-600 text-sm">por noche</span>
      </div>

      <Divider className="mb-6" />

      <BookingGuestCounter guests={guests} minGuests={minGuests} maxGuests={maxGuests} onChange={setGuests} />

      <label className="mb-6 block text-sm font-semibold text-gray-900">
        Noches
        <input
          type="number"
          min={1}
          max={30}
          value={nights}
          onChange={(event) => setNights(Math.min(30, Math.max(1, Number(event.target.value) || 1)))}
          className="mt-2 block w-full rounded-lg border border-gray-300 p-2 font-normal"
        />
      </label>

      <Divider className="mb-6" />
      <BookingTotals pricePerNight={pricePerNight} nights={nights} />
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={() => onBook?.(guests, nights)}
      >
        Reservar
      </Button>
    </Card>
  );
};

export default BookingWidget;
