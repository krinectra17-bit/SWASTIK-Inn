import type { BookingFormData, BookingFormErrors } from '../types';
import { ROOMS } from './config';
import { todayStr, calcNights } from './whatsapp';

/**
 * Validates the complete booking form and returns an error map.
 * An empty object means the form is valid.
 */
export function validateBookingForm(data: BookingFormData): BookingFormErrors {
  const errors: BookingFormErrors = {};
  const today = todayStr();

  if (!data.guestName.trim()) {
    errors.guestName = 'Please enter your name.';
  }

  if (!data.checkIn) {
    errors.checkIn = 'Please select a check-in date.';
  } else if (data.checkIn < today) {
    errors.checkIn = 'Check-in date cannot be in the past.';
  }

  if (!data.checkOut) {
    errors.checkOut = 'Please select a check-out date.';
  } else if (data.checkIn && data.checkOut <= data.checkIn) {
    errors.checkOut = 'Check-out must be after check-in.';
  }

  if (!data.adults || data.adults < 1) {
    errors.adults = 'Please enter at least 1 adult.';
  } else if (data.adults > 20) {
    errors.adults = 'For large groups, please contact us directly.';
  }

  if (!data.rooms || data.rooms < 1) {
    errors.rooms = 'Please select at least 1 room.';
  }

  if (!data.roomCategory) {
    errors.roomCategory = 'Please select a room category.';
  } else {
    // Occupancy check when booking a single room
    if (data.rooms === 1) {
      const room = ROOMS.find((r) => r.id === data.roomCategory);
      if (room && data.adults > room.maxAdults) {
        errors.adults = `This room accommodates up to ${room.maxAdults} adult${room.maxAdults > 1 ? 's' : ''}. For more guests, please increase the number of rooms.`;
      }
    }
  }

  return errors;
}

/**
 * Returns true if the form has no validation errors.
 */
export function isFormValid(errors: BookingFormErrors): boolean {
  return Object.keys(errors).length === 0;
}

/**
 * Creates a clean default booking form state.
 */
export function defaultBookingForm(preselectedRoom?: string): BookingFormData {
  return {
    guestName: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    rooms: 1,
    roomCategory: preselectedRoom ?? '',
    arrivalTime: '',
    mobileNumber: '',
    specialRequests: '',
  };
}

export { calcNights };
