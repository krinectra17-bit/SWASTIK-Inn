import { HOTEL } from './config';
import type { BookingFormData } from '../types';

/**
 * Formats a date string (YYYY-MM-DD) to a human-readable format.
 */
export function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Calculates the number of nights between two date strings.
 * Uses calendar dates to avoid timezone issues.
 */
export function calcNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const [y1, m1, d1] = checkIn.split('-').map(Number);
  const [y2, m2, d2] = checkOut.split('-').map(Number);
  const a = new Date(y1, m1 - 1, d1).getTime();
  const b = new Date(y2, m2 - 1, d2).getTime();
  return Math.max(0, Math.round((b - a) / 86_400_000));
}

/**
 * Returns today's date as a YYYY-MM-DD string in the visitor's local timezone.
 */
export function todayStr(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Returns a date N days from today as a YYYY-MM-DD string.
 */
export function futureDateStr(daysAhead: number): string {
  const now = new Date();
  now.setDate(now.getDate() + daysAhead);
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Returns room label from category ID.
 */
export function getRoomLabel(categoryId: string): string {
  switch (categoryId) {
    case 'deluxe-double':
      return 'Deluxe Double Bed AC Room';
    case 'triple-bed':
      return 'Triple Bed AC Room';
    default:
      return categoryId;
  }
}

/**
 * Builds the complete WhatsApp booking message from form data.
 */
export function buildWhatsAppMessage(data: BookingFormData, nights: number): string {
  const roomLabel = getRoomLabel(data.roomCategory);
  const checkInDisplay = formatDateDisplay(data.checkIn);
  const checkOutDisplay = formatDateDisplay(data.checkOut);

  const lines: string[] = [
    'Hello Swastika Inn,',
    '',
    'I would like to enquire about a room booking.',
    '',
    `Guest Name: ${data.guestName.trim()}`,
    `Check-in Date: ${checkInDisplay}`,
    `Check-out Date: ${checkOutDisplay}`,
    `Total Nights: ${nights}`,
    `Adults: ${data.adults}`,
    `Children: ${data.children > 0 ? data.children : 'None'}`,
    `Rooms Required: ${data.rooms}`,
    `Preferred Room: ${roomLabel}`,
    `Estimated Arrival: ${data.arrivalTime.trim() || 'Not Specified'}`,
    `Mobile Number: ${data.mobileNumber.trim() || 'Not Provided'}`,
    `Special Requests: ${data.specialRequests.trim() || 'None'}`,
    '',
    'Please confirm room availability and the final price for my selected dates.',
    '',
    'Thank you.',
  ];

  return lines.join('\n');
}

/**
 * Builds a WhatsApp click-to-chat URL with the encoded booking message.
 */
export function buildWhatsAppURL(data: BookingFormData, nights: number): string {
  const message = buildWhatsAppMessage(data, nights);
  return `https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a simple WhatsApp URL with a default or custom message.
 */
export function buildSimpleWhatsAppURL(message?: string): string {
  const text = message ?? HOTEL.whatsappDefaultMessage;
  return `https://wa.me/${HOTEL.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Opens a WhatsApp URL in a new tab using a mobile-compatible approach.
 */
export function openWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
