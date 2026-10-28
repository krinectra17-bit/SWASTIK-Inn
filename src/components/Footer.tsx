import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { HOTEL } from '../lib/config';
import { buildSimpleWhatsAppURL } from '../lib/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hotel-charcoal text-white" aria-label="Site footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="font-serif text-2xl font-semibold text-white">
                Swastika Inn
              </h2>
              <p className="text-white/50 text-xs font-sans mt-0.5 tracking-wide uppercase">
                Swastika Hotel & Lawn
              </p>
            </div>
            <p className="text-white/65 text-sm font-sans leading-relaxed mb-5">
              Comfortable, air-conditioned rooms in the heart of Deokaali,
              Ayodhya — your welcoming base for an unforgettable pilgrimage or visit.
            </p>
            <a
              href={buildSimpleWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-2.5 px-4 w-full"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Rooms', href: '/rooms' },
                { label: 'Hotel Amenities', href: '/amenities' },
                { label: 'Photo Gallery', href: '/gallery' },
                { label: 'Explore Ayodhya', href: '/explore-ayodhya' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-white/65 hover:text-hotel-gold text-sm font-sans transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Rooms
            </h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  to="/rooms/deluxe-double-bed-ac"
                  className="text-white/65 hover:text-hotel-gold text-sm font-sans transition-colors duration-150"
                >
                  Deluxe Double Bed AC Room
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms/triple-bed-ac"
                  className="text-white/65 hover:text-hotel-gold text-sm font-sans transition-colors duration-150"
                >
                  Triple Bed AC Room
                </Link>
              </li>
            </ul>

            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/50 mb-3">
              Check-in / Check-out
            </h3>
            <div className="flex items-start gap-2 text-white/65 text-sm">
              <Clock size={14} className="text-hotel-gold mt-0.5 flex-shrink-0" />
              <div>
                <p>Check-in: {HOTEL.checkIn}</p>
                <p>Check-out: {HOTEL.checkOut}</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-white/50 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-hotel-gold mt-0.5 flex-shrink-0" />
                <p className="text-white/65 text-sm font-sans leading-relaxed">
                  {HOTEL.address.full}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-hotel-gold flex-shrink-0" />
                <a
                  href={HOTEL.phoneLink}
                  className="text-white/65 hover:text-hotel-gold text-sm font-sans transition-colors duration-150"
                >
                  {HOTEL.phone}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={HOTEL.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white/30 text-white hover:bg-white hover:text-hotel-charcoal text-sm py-2 px-4"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-sans">
            © {year} Swastika Inn (Swastika Hotel & Lawn). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-white/40 hover:text-white/70 text-xs font-sans transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">·</span>
            <Link
              to="/booking-terms"
              className="text-white/40 hover:text-white/70 text-xs font-sans transition-colors duration-150"
            >
              Booking Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
