import { calculateBookingTotals } from '../../utils/booking';

interface BookingTotalsProps {
  pricePerNight: number;
  nights: number;
}

const BookingTotals = ({ pricePerNight, nights }: BookingTotalsProps) => {
  const { subtotal, serviceFee, total } = calculateBookingTotals(pricePerNight, nights);

  return (
    <>
      <div className="mb-6 space-y-3 text-sm">
        <div className="flex justify-between text-gray-700">
          <span>${pricePerNight} × {nights} noche{nights > 1 ? 's' : ''}</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span>Tarifa de servicio</span>
          <span>${serviceFee}</span>
        </div>
      </div>
      <div className="mb-6 flex items-baseline justify-between">
        <span className="font-semibold text-gray-900">Total</span>
        <span className="text-xl font-bold text-gray-900">${total}</span>
      </div>
    </>
  );
};

export default BookingTotals;