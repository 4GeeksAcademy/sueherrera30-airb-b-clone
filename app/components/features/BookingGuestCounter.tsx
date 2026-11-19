interface BookingGuestCounterProps {
  guests: number;
  minGuests: number;
  maxGuests: number;
  onChange: (guests: number) => void;
}

const BookingGuestCounter = ({ guests, minGuests, maxGuests, onChange }: BookingGuestCounterProps) => (
  <div className="mb-6">
    <span className="mb-3 block text-sm font-semibold text-gray-900">Huéspedes</span>
    <div className="flex items-center gap-4 rounded-lg border border-gray-300 p-2">
      <button
        type="button"
        aria-label="Quitar un huésped"
        onClick={() => onChange(Math.max(minGuests, guests - 1))}
        disabled={guests === minGuests}
        className="text-gray-600 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13H5v-2h14v2z" />
        </svg>
      </button>
      <span className="flex-1 text-center font-medium text-gray-900">
        {guests} {guests === 1 ? 'huésped' : 'huéspedes'}
      </span>
      <button
        type="button"
        aria-label="Agregar un huésped"
        onClick={() => onChange(Math.min(maxGuests, guests + 1))}
        disabled={guests === maxGuests}
        className="text-gray-600 transition-colors hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  </div>
);

export default BookingGuestCounter;