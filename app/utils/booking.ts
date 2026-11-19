export interface BookingTotals {
  subtotal: number;
  serviceFee: number;
  total: number;
}

export const calculateBookingTotals = (pricePerNight: number, nights: number): BookingTotals => {
  const subtotal = pricePerNight * nights;
  const serviceFee = Math.round(subtotal * 0.1);

  return {
    subtotal,
    serviceFee,
    total: subtotal + serviceFee,
  };
};