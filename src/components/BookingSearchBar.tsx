import { useState, useId } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Users, BedDouble } from 'lucide-react';
import { todayStr, futureDateStr, calcNights } from '../lib/whatsapp';
import { ROOMS } from '../lib/config';

export default function BookingSearchBar() {
  const id = useId();
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [error, setError] = useState('');

  const today = todayStr();
  const minCheckOut = checkIn || today;

  const nights = calcNights(checkIn, checkOut);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!checkIn) {
      setError('Please select a check-in date.');
      return;
    }
    if (!checkOut) {
      setError('Please select a check-out date.');
      return;
    }
    if (checkIn < today) {
      setError('Check-in date cannot be in the past.');
      return;
    }
    if (checkOut <= checkIn) {
      setError('Check-out date must be after check-in date.');
      return;
    }

    // Navigate to rooms with search params
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      adults: String(adults),
      rooms: String(rooms),
    });
    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      aria-label="Room availability search"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5"
      noValidate
    >
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 items-end">

        {/* Check-in */}
        <div className="col-span-1">
          <label htmlFor={`${id}-checkin`} className="form-label text-xs">
            Check-in
          </label>
          <input
            type="date"
            id={`${id}-checkin`}
            value={checkIn}
            min={today}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (checkOut && e.target.value >= checkOut) {
                setCheckOut(futureDateStr(1));
              }
            }}
            className="form-input text-sm"
          />
        </div>

        {/* Check-out */}
        <div className="col-span-1">
          <label htmlFor={`${id}-checkout`} className="form-label text-xs">
            Check-out
          </label>
          <input
            type="date"
            id={`${id}-checkout`}
            value={checkOut}
            min={minCheckOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="form-input text-sm"
          />
        </div>

        {/* Adults */}
        <div className="col-span-1">
          <label htmlFor={`${id}-adults`} className="form-label text-xs flex items-center gap-1">
            <Users size={12} className="text-hotel-muted" aria-hidden="true" />
            Adults
          </label>
          <select
            id={`${id}-adults`}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="form-input text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Rooms */}
        <div className="col-span-1">
          <label htmlFor={`${id}-rooms`} className="form-label text-xs flex items-center gap-1">
            <BedDouble size={12} className="text-hotel-muted" aria-hidden="true" />
            Rooms
          </label>
          <select
            id={`${id}-rooms`}
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="form-input text-sm"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <button type="submit" className="btn-primary w-full gap-2">
            <Search size={16} aria-hidden="true" />
            <span>Search Rooms</span>
          </button>
        </div>
      </div>

      {/* Nights badge + error */}
      <div className="flex items-center justify-between mt-2 px-0.5">
        <div>
          {nights > 0 && (
            <span className="text-hotel-green text-xs font-medium font-sans">
              {nights} night{nights > 1 ? 's' : ''} selected
            </span>
          )}
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
      </div>

      <p className="text-hotel-muted text-xs font-sans mt-1.5">
        Availability and final pricing will be confirmed by our team via WhatsApp. Rates from{' '}
        <strong className="text-hotel-charcoal">
          {ROOMS[0].priceFrom}
        </strong>{' '}
        per night.
      </p>
    </form>
  );
}
