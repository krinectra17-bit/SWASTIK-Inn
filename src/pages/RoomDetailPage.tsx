import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Users, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import { ROOMS } from '../lib/config';

export default function RoomDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const room = ROOMS.find((r) => r.slug === slug);
  const [showBooking, setShowBooking] = useState(false);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  return (
    <div className="bg-hotel-ivory min-h-screen">
      {/* ── Hero Image ── */}
      <section className="relative pt-16 h-[50vh] md:h-[60vh] overflow-hidden" aria-label={`${room.name} photo`}>
        <img
          src={room.image}
          alt={`${room.name} at Swastika Inn, Ayodhya`}
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-charcoal/50 to-transparent" aria-hidden="true" />
        {/* Back */}
        <Link
          to="/rooms"
          className="absolute top-20 left-4 sm:left-8 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm
                     text-hotel-charcoal text-sm font-medium rounded-full px-4 py-2 hover:bg-white
                     transition-colors duration-150 shadow-md"
        >
          <ArrowLeft size={14} />
          All Rooms
        </Link>
      </section>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ── Left: Room Info ── */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-hotel-muted text-sm font-sans mb-5">
              <Link to="/" className="hover:text-hotel-green transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/rooms" className="hover:text-hotel-green transition-colors">Rooms</Link>
              <ChevronRight size={14} />
              <span className="text-hotel-charcoal">{room.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-hotel-green/10 text-hotel-green
                               text-xs font-sans font-medium px-3 py-1 rounded-full">
                <Users size={12} />
                Up to {room.maxAdults} adults
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-hotel-charcoal mb-5">
              {room.name}
            </h1>

            <p className="text-hotel-muted font-sans leading-relaxed text-lg mb-8">
              {room.longDescription}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="font-sans font-semibold text-hotel-charcoal mb-4">Room Features</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {room.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-sans text-hotel-charcoal">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-hotel-green/10 flex items-center justify-center">
                      <Check size={12} className="text-hotel-green" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Policies */}
            <div className="bg-hotel-beige rounded-xl p-6 border border-hotel-border mb-8">
              <h2 className="font-sans font-semibold text-hotel-charcoal mb-3">Room Policies</h2>
              <ul className="space-y-2 text-sm font-sans text-hotel-muted">
                <li>• Check-in: 12:00 PM | Check-out: 11:00 AM</li>
                <li>• Valid government-issued photo ID required at check-in</li>
                <li>• Primary guest must be at least 18 years old</li>
                <li>• Smoking is not permitted inside the room</li>
                <li>• Pets allowed, subject to hotel policy — please enquire in advance</li>
                <li>• No lift available — ground-floor rooms available on request</li>
              </ul>
            </div>

            {/* Second photo (night exterior for context) */}
            <div className="rounded-xl overflow-hidden aspect-[16/7]">
              <img
                src="/images/exterior-night.jpg"
                alt="Swastika Hotel & Lawn exterior at night"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* ── Right: Booking Panel ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              {/* Price */}
              <div className="bg-white rounded-2xl border border-hotel-border shadow-sm p-6 mb-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-3xl font-semibold text-hotel-charcoal">
                    {room.priceFrom}
                  </span>
                  <span className="text-hotel-muted font-sans text-sm">/ night</span>
                </div>
                {room.priceTo && (
                  <p className="text-hotel-muted text-xs font-sans mb-3">
                    Up to {room.priceTo} depending on season
                  </p>
                )}
                <p className="text-hotel-muted text-xs font-sans bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                  Prices are indicative. Final rate confirmed via WhatsApp.
                </p>
              </div>

              {/* Booking Toggle */}
              {!showBooking ? (
                <div className="bg-white rounded-2xl border border-hotel-border shadow-sm p-6">
                  <button
                    type="button"
                    onClick={() => setShowBooking(true)}
                    className="btn-primary w-full text-base py-3.5"
                  >
                    Book This Room
                  </button>
                  <p className="text-hotel-muted text-xs text-center mt-3 font-sans">
                    Opens a WhatsApp booking enquiry
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-hotel-border shadow-sm p-6">
                  <h3 className="font-serif text-lg font-semibold text-hotel-charcoal mb-5">
                    Send Booking Enquiry
                  </h3>
                  <BookingForm preselectedRoom={room.id} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Compare */}
        <div className="mt-16 pt-10 border-t border-hotel-border">
          <h2 className="font-serif text-2xl text-hotel-charcoal mb-6">Other Room Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROOMS.filter((r) => r.id !== room.id).map((otherRoom) => (
              <Link
                key={otherRoom.id}
                to={`/rooms/${otherRoom.slug}`}
                className="group flex gap-4 bg-white rounded-xl border border-hotel-border p-4 hover:shadow-md hover:border-hotel-sage transition-all duration-200"
              >
                <img
                  src={otherRoom.image}
                  alt={otherRoom.name}
                  className="w-24 h-20 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-sans font-semibold text-sm text-hotel-charcoal group-hover:text-hotel-green transition-colors mb-1">
                    {otherRoom.name}
                  </h3>
                  <p className="text-hotel-muted text-xs font-sans mb-2">
                    Up to {otherRoom.maxAdults} adults
                  </p>
                  <p className="text-hotel-green text-sm font-medium font-sans">
                    From {otherRoom.priceFrom} / night
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
