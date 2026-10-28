import { Link } from 'react-router-dom';
import { Users, Wifi, Tv, Wind, ChevronRight, MessageCircle } from 'lucide-react';
import type { Room } from '../types';
import { buildSimpleWhatsAppURL } from '../lib/whatsapp';

interface Props {
  room: Room;
  showBookButton?: boolean;
}

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  'Air Conditioning': <Wind size={14} />,
  'Free Wi-Fi': <Wifi size={14} />,
  'Flat-screen TV': <Tv size={14} />,
};

export default function RoomCard({ room, showBookButton = true }: Props) {
  const bookingMessage = `Hello Swastika Inn, I would like to enquire about the ${room.name}. Please share availability and pricing. Thank you.`;

  return (
    <article className="card overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.image}
          alt={`${room.name} at Swastika Inn, Ayodhya`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
        />
        {/* Occupancy badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm
                        rounded-full px-3 py-1 shadow-sm">
          <Users size={12} className="text-hotel-green" aria-hidden="true" />
          <span className="text-hotel-charcoal text-xs font-sans font-medium">
            Up to {room.maxAdults} adults
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Name */}
        <h3 className="font-serif text-xl font-semibold text-hotel-charcoal mb-2 group-hover:text-hotel-green transition-colors duration-150">
          {room.name}
        </h3>

        {/* Description */}
        <p className="text-hotel-muted text-sm font-sans leading-relaxed mb-4">
          {room.shortDescription}
        </p>

        {/* Features */}
        <ul className="flex flex-wrap gap-2 mb-5" aria-label="Room features">
          {room.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="flex items-center gap-1.5 text-xs font-sans text-hotel-charcoal
                         bg-hotel-beige px-2.5 py-1 rounded-full"
            >
              {FEATURE_ICONS[f] && (
                <span className="text-hotel-green" aria-hidden="true">
                  {FEATURE_ICONS[f]}
                </span>
              )}
              {f}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-5">
          <span className="font-sans text-hotel-muted text-xs">From</span>
          <span className="font-serif text-2xl font-semibold text-hotel-charcoal">
            {room.priceFrom}
          </span>
          <span className="font-sans text-hotel-muted text-xs">/ night</span>
          <span className="font-sans text-hotel-muted text-xs ml-1">
            (indicative · subject to confirmation)
          </span>
        </div>

        {/* Divider */}
        <div className="divider mb-4" />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <Link
            to={`/rooms/${room.slug}`}
            className="btn-outline flex-1 text-sm py-2.5 gap-1.5"
          >
            View Room
            <ChevronRight size={14} aria-hidden="true" />
          </Link>
          {showBookButton && (
            <a
              href={buildSimpleWhatsAppURL(bookingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex-1 text-sm py-2.5 gap-1.5"
            >
              <MessageCircle size={14} aria-hidden="true" />
              Book on WhatsApp
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
