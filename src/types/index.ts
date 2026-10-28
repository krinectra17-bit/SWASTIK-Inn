export interface Room {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  maxAdults: number;
  image: string;
  features: string[];
  priceFrom: string;
  priceTo?: string;
}

export interface BookingFormData {
  guestName: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  roomCategory: string;
  arrivalTime: string;
  mobileNumber: string;
  specialRequests: string;
}

export interface BookingFormErrors {
  [key: string]: string | undefined;
  guestName?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  rooms?: string;
  roomCategory?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'exterior' | 'rooms' | 'property';
  width: number;
  height: number;
}

export interface Amenity {
  icon: string;
  name: string;
  description: string;
  note?: string;
}

export interface Attraction {
  name: string;
  description: string;
  distance: string;
  icon: string;
  mapQuery: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
