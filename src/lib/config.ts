import type { Room, GalleryImage, Amenity, Attraction, FAQ, NavLink } from '../types';

// ─── Site Configuration ──────────────────────────────────────────────────────
export const SITE_CONFIG = {
  domain: 'https://swastikainn.com',
  siteName: 'Swastika Inn',
};

// ─── Hotel Information ────────────────────────────────────────────────────────
export const HOTEL = {
  name: 'Swastika Inn',
  officialName: 'Swastika Hotel & Lawn',
  tagline: 'Your Comfortable Stay in Ayodhya',
  description:
    'Swastika Inn offers comfortable, air-conditioned rooms in the heart of Deokaali, Ayodhya — your ideal base for exploring sacred landmarks.',
  phone: '+91 63935 56011',
  phoneLink: 'tel:+916393556011',
  whatsappNumber: '916393556011',
  whatsappDefaultMessage:
    'Hello Swastika Inn, I would like to enquire about room availability and booking.',
  address: {
    street: 'Mohabra Road, Near Bhavdiya Public School',
    area: 'Deokaali',
    city: 'Ayodhya',
    state: 'Uttar Pradesh',
    country: 'India',
    pincode: '224123',
    full: 'Mohabra Road, Near Bhavdiya Public School, Deokaali, Ayodhya, Uttar Pradesh — 224123',
    oneLine:
      'Mohabra Road, Near Bhavdiya Public School, Deokaali, Ayodhya, UP 224123',
  },
  checkIn: '12:00 PM',
  checkOut: '11:00 AM',
  priceRange: '₹1,080 – ₹2,000+',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Swastika+Hotel+%26+Lawn+Deokaali+Ayodhya+Uttar+Pradesh',
} as const;

// ─── Navigation Links ─────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Amenities', href: '/amenities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Explore Ayodhya', href: '/explore-ayodhya' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ─── Room Data ────────────────────────────────────────────────────────────────
export const ROOMS: Room[] = [
  {
    id: 'deluxe-double',
    name: 'Deluxe Double Bed AC Room',
    slug: 'deluxe-double-bed-ac',
    shortDescription:
      'A comfortable air-conditioned room for couples and solo travellers.',
    longDescription:
      'Our Deluxe Double Bed AC Room is designed for couples and individual travellers seeking a comfortable and convenient stay in Ayodhya. The room features a plush double bed with a tufted headboard, modern air conditioning for year-round comfort, a flat-screen television, and an attached private bathroom. Fresh bed linen and towels are provided for every stay. The room is well-appointed and maintained to ensure a clean, welcoming environment.',
    maxAdults: 2,
    image: '/images/room-double.jpg',
    features: [
      'Air Conditioning',
      'Double Bed',
      'Flat-screen TV',
      'Attached Bathroom',
      'Free Wi-Fi',
      'Fresh Linen & Towels',
    ],
    priceFrom: '₹1,080',
    priceTo: '₹1,800',
  },
  {
    id: 'triple-bed',
    name: 'Triple Bed AC Room',
    slug: 'triple-bed-ac',
    shortDescription:
      'A practical air-conditioned room for small families and groups.',
    longDescription:
      'Our Triple Bed AC Room is ideal for small families, groups of friends, or colleagues travelling together. The room comfortably accommodates up to 3 adults with well-arranged beds, modern air conditioning, a flat-screen television, and an attached private bathroom. The floral-accented interiors create a cheerful and homely atmosphere. Clean bed linen and towels are refreshed for every stay.',
    maxAdults: 3,
    image: '/images/room-triple.jpg',
    features: [
      'Air Conditioning',
      'Three Beds',
      'Flat-screen TV',
      'Attached Bathroom',
      'Free Wi-Fi',
      'Fresh Linen & Towels',
    ],
    priceFrom: '₹1,500',
    priceTo: '₹2,000+',
  },
];

// ─── Amenities Data ───────────────────────────────────────────────────────────
export const AMENITIES: Amenity[] = [
  {
    icon: 'wind',
    name: 'Air-Conditioned Rooms',
    description: 'All guest rooms are equipped with individual air conditioners for year-round comfort.',
  },
  {
    icon: 'wifi',
    name: 'Free Wi-Fi',
    description: 'Complimentary high-speed wireless internet access throughout the property.',
  },
  {
    icon: 'tv',
    name: 'Flat-screen Television',
    description: 'Flat-screen TVs with entertainment channels in every room.',
  },
  {
    icon: 'bath',
    name: 'Attached Private Bathroom',
    description: 'Each room has its own private en-suite bathroom with continuous hot and cold water.',
  },
  {
    icon: 'car',
    name: 'Free Private Parking',
    description: 'Complimentary on-site parking is available for guests with personal vehicles.',
  },
  {
    icon: 'clock',
    name: '24-Hour Front Desk',
    description: 'Our reception team is available around the clock to assist with any requests.',
  },
  {
    icon: 'utensils',
    name: 'Room Service',
    description: 'In-room service is available. Please contact reception for details and timings.',
  },
  {
    icon: 'coffee',
    name: 'Paid Breakfast Options',
    description: 'Breakfast can be arranged on request at an additional charge. Please ask at check-in.',
  },
  {
    icon: 'zap',
    name: '24-Hour Power Backup',
    description: 'Uninterrupted power supply ensures your comfort is not affected by local outages.',
  },
  {
    icon: 'droplets',
    name: 'Continuous Water Supply',
    description: 'Reliable water supply is maintained throughout the day and night.',
  },
  {
    icon: 'shield',
    name: 'CCTV Monitoring',
    description: 'CCTV cameras operate in common areas for the security of all guests and staff.',
  },
  {
    icon: 'car-front',
    name: 'Airport & Station Transfers',
    description: 'Optional paid transfers to and from Ayodhya Railway Station and Maharishi Valmiki International Airport can be arranged on request.',
  },
  {
    icon: 'paw-print',
    name: 'Pets Welcome',
    description: 'Pets are permitted subject to the hotel\'s pet policy. Please contact us in advance.',
  },
  {
    icon: 'shirt',
    name: 'Iron Access',
    description: 'Ironing facilities are available on request at the front desk.',
  },
];

// ─── Gallery Images ───────────────────────────────────────────────────────────
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/exterior-evening.jpg',
    alt: 'Swastika Inn hotel exterior at dusk with illuminated facade and landscaped frontage in Ayodhya',
    category: 'exterior',
    width: 768,
    height: 1024,
  },
  {
    src: '/images/exterior-night.jpg',
    alt: 'Swastika Hotel & Lawn exterior at night decorated with festive fairy lights',
    category: 'exterior',
    width: 1024,
    height: 768,
  },
  {
    src: '/images/room-double.jpg',
    alt: 'Deluxe Double Bed AC Room at Swastika Inn with tufted headboard and bright interiors',
    category: 'rooms',
    width: 1024,
    height: 768,
  },
  {
    src: '/images/room-triple.jpg',
    alt: 'Triple Bed AC Room at Swastika Inn with floral wallpaper and air conditioning',
    category: 'rooms',
    width: 1024,
    height: 768,
  },
];

// ─── Nearby Attractions ───────────────────────────────────────────────────────
export const NEARBY_ATTRACTIONS: Attraction[] = [
  {
    name: 'Shri Ram Janmabhoomi Mandir',
    description:
      'The sacred birthplace of Lord Shri Ram, housing the magnificent Ram Mandir — a landmark of profound religious importance for pilgrims across India.',
    distance: 'approx. 3.3 km',
    icon: 'temple',
    mapQuery: 'Shri+Ram+Janmabhoomi+Mandir+Ayodhya',
  },
  {
    name: 'Hanuman Garhi Mandir',
    description:
      'A revered hilltop temple dedicated to Lord Hanuman, a short distance from the property and visited by thousands of devotees every day.',
    distance: 'approx. 3.2 km',
    icon: 'temple',
    mapQuery: 'Hanuman+Garhi+Ayodhya',
  },
  {
    name: 'Ayodhya Railway Station',
    description:
      'The main railway station serving Ayodhya, well-connected to major cities across India. Convenient starting point for most visitors arriving by train.',
    distance: 'approx. 2.6 km',
    icon: 'train',
    mapQuery: 'Ayodhya+Junction+Railway+Station',
  },
  {
    name: 'Maharishi Valmiki International Airport',
    description:
      'The international airport serving Ayodhya, with growing domestic and international connectivity. Transfer arrangements available on request.',
    distance: 'approx. 7.2 km',
    icon: 'plane',
    mapQuery: 'Maharishi+Valmiki+International+Airport+Ayodhya',
  },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
export const FAQS: FAQ[] = [
  {
    question: 'What time is check-in?',
    answer:
      'Standard check-in time is 12:00 PM (noon). If you plan to arrive earlier, please contact us in advance and we will do our best to accommodate you, subject to room availability.',
  },
  {
    question: 'What time is check-out?',
    answer:
      'Standard check-out time is 11:00 AM. Late check-out may be possible subject to availability. Please enquire at the front desk on the day of departure.',
  },
  {
    question: 'Which room categories are available?',
    answer:
      'We offer two room categories: the Deluxe Double Bed AC Room (suitable for up to 2 adults) and the Triple Bed AC Room (suitable for up to 3 adults). Both rooms include air conditioning, flat-screen TV, attached bathroom, and free Wi-Fi.',
  },
  {
    question: 'How can I enquire about room availability?',
    answer:
      'The easiest way to check availability is through our WhatsApp booking form on this website. Fill in your travel dates and guest details, and click "Book on WhatsApp" to send us an enquiry. Our team will respond with availability and pricing.',
  },
  {
    question: 'How do I confirm the final room price?',
    answer:
      'Room prices vary by season, dates, and availability. After you send your enquiry via WhatsApp, our team will confirm the exact price for your selected dates before you make any payment.',
  },
  {
    question: 'Is Wi-Fi available?',
    answer:
      'Yes. Free Wi-Fi is available for all guests throughout the property.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Yes. Free private on-site parking is available for guests travelling by personal vehicle.',
  },
  {
    question: 'Are pets allowed?',
    answer:
      'Pets are permitted subject to the hotel\'s current pet policy. Please contact us before your arrival to confirm the applicable arrangements.',
  },
  {
    question: 'Is breakfast included?',
    answer:
      'Breakfast is not included in the standard room rate but can be arranged on request at an additional charge. Please enquire at the time of booking or at check-in.',
  },
  {
    question: 'Does the property have a lift?',
    answer:
      'No. The property does not have a lift or elevator. Guests requiring ground-floor accommodation — including elderly guests or those with mobility considerations — are kindly requested to inform us at the time of booking.',
  },
  {
    question: 'Can I request a ground-floor room?',
    answer:
      'Yes. Ground-floor rooms can be requested in advance. We will do our best to accommodate such requests, subject to availability. Please mention this in your WhatsApp booking enquiry.',
  },
  {
    question: 'What identification is required at check-in?',
    answer:
      'A valid government-issued photo identification document is required at check-in for all guests. Accepted documents include Aadhaar card, passport, driving licence, voter ID, and PAN card.',
  },
  {
    question: 'How can I reach the hotel from Ayodhya Railway Station?',
    answer:
      'The hotel is approximately 2.6 km from Ayodhya Railway Station. You can reach us by auto-rickshaw, taxi, or cab booked through apps. Optional paid transfer arrangements can be made through the hotel — please enquire in advance.',
  },
  {
    question: 'Can I arrange a transfer from the airport?',
    answer:
      'Yes. Paid airport transfer services can be arranged on request. Maharishi Valmiki International Airport is approximately 7.2 km from the hotel. Please contact us before your arrival to confirm arrangements and applicable charges.',
  },
];
