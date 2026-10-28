import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import BookingForm from '../components/BookingForm';
import { ROOMS, HOTEL } from '../lib/config';

export default function RoomsPage() {
  const [searchParams] = useSearchParams();
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [preselectedRoom, setPreselectedRoom] = useState<string | undefined>();

  const checkIn = searchParams.get('checkIn') ?? '';
  const checkOut = searchParams.get('checkOut') ?? '';
  const adults = Number(searchParams.get('adults') ?? 2);
  const rooms = Number(searchParams.get('rooms') ?? 1);

  const hasSearch = !!(checkIn && checkOut);

  useEffect(() => {
    if (hasSearch) {
      setShowBookingForm(true);
    }
  }, [hasSearch]);

  function handleBookRoom(roomId: string) {
    setPreselectedRoom(roomId);
    setShowBookingForm(true);
    setTimeout(() => {
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  return (
    <div className="bg-hotel-ivory min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative pt-28 pb-16 bg-hotel-green overflow-hidden" aria-label="Rooms page header">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/exterior-evening.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm font-sans mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Rooms</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Our Rooms & Accommodation
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-xl leading-relaxed">
            Two comfortable room categories for couples, families, and small groups visiting Ayodhya.
          </p>
          {hasSearch && (
            <div className="mt-5 inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-2 text-white/90 text-sm font-sans">
              <span>Search results for your dates</span>
              <span className="font-semibold">{adults} adult{adults > 1 ? 's' : ''} · {rooms} room{rooms > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Room Listings ── */}
      <section className="py-16" aria-labelledby="room-listings-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="room-listings-heading" className="sr-only">Available Rooms</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {ROOMS.map((room) => (
              <div key={room.id}>
                <RoomCard room={room} showBookButton={false} />
                <div className="mt-3 flex gap-3">
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="btn-outline flex-1 text-sm py-2.5"
                  >
                    View Details
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleBookRoom(room.id)}
                    className="btn-primary flex-1 text-sm py-2.5"
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-hotel-muted text-sm font-sans bg-white border border-hotel-border rounded-lg p-4 max-w-2xl mx-auto">
            <strong className="text-hotel-charcoal">Indicative price range:</strong>{' '}
            {HOTEL.priceRange} per night, depending on room category, season, and demand.
            Final pricing is confirmed by our team via WhatsApp after you send your enquiry.
          </p>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section id="booking-section" className="py-16 bg-white" aria-labelledby="booking-form-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Enquire Now</p>
            <h2 id="booking-form-heading" className="section-title">
              Book via WhatsApp
            </h2>
            <p className="section-subtitle mt-3">
              Fill in your details and our team will confirm availability and pricing.
            </p>
          </div>

          {!showBookingForm ? (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowBookingForm(true)}
                className="btn-primary text-base py-3.5 px-8"
              >
                Open Booking Enquiry Form
              </button>
            </div>
          ) : (
            <BookingForm
              preselectedRoom={preselectedRoom}
              initialCheckIn={checkIn}
              initialCheckOut={checkOut}
              initialAdults={adults}
              initialRooms={rooms}
            />
          )}
        </div>
      </section>
    </div>
  );
}
