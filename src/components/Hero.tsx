import { Link } from 'react-router-dom';
import { MapPin, ChevronDown } from 'lucide-react';
import BookingSearchBar from './BookingSearchBar';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end"
      aria-label="Welcome to Swastika Inn"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/exterior-evening.jpg"
          alt="Swastika Inn hotel exterior at dusk, Deokaali, Ayodhya"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0 w-full">
        <div className="max-w-xl mb-12 md:mb-16">
          {/* Location Badge */}
          <div className="flex items-center gap-1.5 mb-5">
            <MapPin size={14} className="text-hotel-gold" aria-hidden="true" />
            <span className="text-white/80 font-sans text-sm tracking-wide">
              Deokaali, Ayodhya, Uttar Pradesh
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.1] mb-5">
            Your Comfortable<br />
            <span className="italic font-normal text-hotel-gold">Stay</span> in Ayodhya
          </h1>

          {/* Supporting text */}
          <p className="text-white/80 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Discover a welcoming stay with comfortable AC rooms, convenient
            amenities, and easy access to Ayodhya's important landmarks.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#booking-form"
              className="btn-gold text-sm md:text-base px-6 py-3"
            >
              Book Your Stay
            </a>
            <Link
              to="/rooms"
              className="btn-outline border-white/50 text-white hover:bg-white hover:text-hotel-charcoal text-sm md:text-base px-6 py-3"
            >
              Explore Our Rooms
            </Link>
          </div>
        </div>
      </div>

      {/* Booking Bar */}
      <div
        id="booking-form"
        className="relative z-10 w-full bg-white/95 backdrop-blur-sm shadow-xl border-t border-hotel-border"
      >
        <BookingSearchBar />
      </div>

      {/* Scroll cue */}
      <a
        href="#intro"
        className="absolute bottom-[160px] left-1/2 -translate-x-1/2 text-white/50 hover:text-white
                   transition-colors duration-150 hidden md:flex flex-col items-center gap-1 group"
        aria-label="Scroll down to learn more"
      >
        <span className="text-xs font-sans tracking-widest uppercase">Discover</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
