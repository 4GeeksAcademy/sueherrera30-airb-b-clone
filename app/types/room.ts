import type { PropertyListing } from '../data/properties';

export interface Room extends PropertyListing {
  maxGuests: number;
}