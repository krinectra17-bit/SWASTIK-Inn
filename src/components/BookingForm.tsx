import { useState, useId } from 'react';
import { MessageCircle, AlertCircle } from 'lucide-react';
import { ROOMS } from '../lib/config';
import { buildWhatsAppURL, openWhatsApp, todayStr, futureDateStr, calcNights, formatDateDisplay } from '../lib/whatsapp';
import { validateBookingForm, defaultBookingForm } from '../lib/booking';
import type { BookingFormData, BookingFormErrors } from '../types';

interface Props {
  preselectedRoom?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialRooms?: number;
}

export default function BookingForm({
  preselectedRoom,
  initialCheckIn = '',
  initialCheckOut = '',
  initialAdults = 2,
  initialRooms = 1,
}: Props) {
  const formId = useId();
  const today = todayStr();

  const [form, setForm] = useState<BookingFormData>({
    ...defaultBookingForm(preselectedRoom),
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    adults: initialAdults,
    rooms: initialRooms,
  });
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const nights = calcNights(form.checkIn, form.checkOut);

  function update<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // Auto-clear check-out if it's no longer valid
      if (key === 'checkIn' && next.checkOut && (value as string) >= next.checkOut) {
        next.checkOut = '';
      }
      return next;
    });
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  function getError(field: string): string | undefined {
    return touched[field] ? errors[field] : undefined;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true])
    );
    setTouched(allTouched);

    const validationErrors = validateBookingForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const url = buildWhatsAppURL(form, nights);
    openWhatsApp(url);
  }

  const selectedRoom = ROOMS.find((r) => r.id === form.roomCategory);

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="WhatsApp room booking enquiry form"
      className="space-y-5"
    >
      {/* Important notice */}
      <div className="bg-hotel-beige border border-hotel-border rounded-lg p-4 flex gap-3">
        <MessageCircle size={18} className="text-hotel-green flex-shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-hotel-muted text-sm font-sans leading-relaxed">
          Fill in your details and click{' '}
          <strong className="text-hotel-charcoal">Book on WhatsApp</strong>. Our team
          will confirm availability and the final price for your selected dates.
        </p>
      </div>

      {/* ── Row 1: Name + Mobile ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-name`} className="form-label">
            Guest Name <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            type="text"
            id={`${formId}-name`}
            value={form.guestName}
            onChange={(e) => update('guestName', e.target.value)}
            onBlur={() => handleBlur('guestName')}
            placeholder="Your full name"
            autoComplete="name"
            className={`form-input ${getError('guestName') ? 'border-red-400 focus:ring-red-400' : ''}`}
            aria-invalid={!!getError('guestName')}
            aria-describedby={getError('guestName') ? `${formId}-name-err` : undefined}
          />
          {getError('guestName') && (
            <p id={`${formId}-name-err`} className="form-error" role="alert">
              {getError('guestName')}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-mobile`} className="form-label">
            Mobile Number <span className="text-hotel-muted font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id={`${formId}-mobile`}
            value={form.mobileNumber}
            onChange={(e) => update('mobileNumber', e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
            className="form-input"
          />
        </div>
      </div>

      {/* ── Row 2: Dates ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-checkin`} className="form-label">
            Check-in Date <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            type="date"
            id={`${formId}-checkin`}
            value={form.checkIn}
            min={today}
            onChange={(e) => update('checkIn', e.target.value)}
            onBlur={() => handleBlur('checkIn')}
            className={`form-input ${getError('checkIn') ? 'border-red-400 focus:ring-red-400' : ''}`}
            aria-invalid={!!getError('checkIn')}
            aria-describedby={getError('checkIn') ? `${formId}-checkin-err` : undefined}
          />
          {getError('checkIn') && (
            <p id={`${formId}-checkin-err`} className="form-error" role="alert">
              {getError('checkIn')}
            </p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-checkout`} className="form-label">
            Check-out Date <span className="text-red-500" aria-label="required">*</span>
          </label>
          <input
            type="date"
            id={`${formId}-checkout`}
            value={form.checkOut}
            min={form.checkIn || today}
            onChange={(e) => update('checkOut', e.target.value)}
            onBlur={() => handleBlur('checkOut')}
            className={`form-input ${getError('checkOut') ? 'border-red-400 focus:ring-red-400' : ''}`}
            aria-invalid={!!getError('checkOut')}
            aria-describedby={getError('checkOut') ? `${formId}-checkout-err` : undefined}
          />
          {getError('checkOut') && (
            <p id={`${formId}-checkout-err`} className="form-error" role="alert">
              {getError('checkOut')}
            </p>
          )}
        </div>
      </div>

      {/* Nights indicator */}
      {nights > 0 && (
        <div className="flex items-center gap-2 text-hotel-green text-sm font-medium font-sans">
          <span className="inline-block w-2 h-2 rounded-full bg-hotel-green" aria-hidden="true" />
          {nights} night{nights > 1 ? 's' : ''} —{' '}
          <span className="text-hotel-muted font-normal">
            {formatDateDisplay(form.checkIn)} → {formatDateDisplay(form.checkOut)}
          </span>
        </div>
      )}

      {/* ── Row 3: Adults, Children, Rooms ── */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor={`${formId}-adults`} className="form-label">
            Adults <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id={`${formId}-adults`}
            value={form.adults}
            onChange={(e) => update('adults', Number(e.target.value))}
            onBlur={() => handleBlur('adults')}
            className={`form-input ${getError('adults') ? 'border-red-400 focus:ring-red-400' : ''}`}
          >
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {getError('adults') && (
            <p className="form-error" role="alert">{getError('adults')}</p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-children`} className="form-label">
            Children <span className="text-hotel-muted font-normal">(optional)</span>
          </label>
          <select
            id={`${formId}-children`}
            value={form.children}
            onChange={(e) => update('children', Number(e.target.value))}
            className="form-input"
          >
            {[0,1,2,3,4,5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${formId}-rooms`} className="form-label">
            Rooms <span className="text-red-500" aria-label="required">*</span>
          </label>
          <select
            id={`${formId}-rooms`}
            value={form.rooms}
            onChange={(e) => update('rooms', Number(e.target.value))}
            onBlur={() => handleBlur('rooms')}
            className={`form-input ${getError('rooms') ? 'border-red-400 focus:ring-red-400' : ''}`}
          >
            {[1,2,3,4,5].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Room Category ── */}
      <div>
        <label className="form-label">
          Preferred Room <span className="text-red-500" aria-label="required">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ROOMS.map((room) => (
            <label
              key={room.id}
              className={`relative flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-150 ${
                form.roomCategory === room.id
                  ? 'border-hotel-green bg-hotel-green/5'
                  : 'border-hotel-border hover:border-hotel-sage'
              }`}
            >
              <input
                type="radio"
                name={`${formId}-room`}
                value={room.id}
                checked={form.roomCategory === room.id}
                onChange={() => {
                  update('roomCategory', room.id);
                  handleBlur('roomCategory');
                }}
                className="mt-0.5 accent-hotel-green"
              />
              <div className="flex-1 min-w-0">
                <p className="font-sans font-medium text-sm text-hotel-charcoal">
                  {room.name}
                </p>
                <p className="text-hotel-muted text-xs mt-0.5">
                  Up to {room.maxAdults} adults · From {room.priceFrom}/night
                </p>
              </div>
            </label>
          ))}
        </div>
        {getError('roomCategory') && (
          <p className="form-error mt-1" role="alert">{getError('roomCategory')}</p>
        )}
      </div>

      {/* ── Optional Fields ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${formId}-arrival`} className="form-label">
            Estimated Arrival Time <span className="text-hotel-muted font-normal">(optional)</span>
          </label>
          <input
            type="time"
            id={`${formId}-arrival`}
            value={form.arrivalTime}
            onChange={(e) => update('arrivalTime', e.target.value)}
            className="form-input"
          />
          <p className="text-hotel-muted text-xs mt-1">Check-in from 12:00 PM</p>
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-requests`} className="form-label">
          Special Requests <span className="text-hotel-muted font-normal">(optional)</span>
        </label>
        <textarea
          id={`${formId}-requests`}
          value={form.specialRequests}
          onChange={(e) => update('specialRequests', e.target.value)}
          placeholder="Ground-floor room, early check-in, dietary requirements, etc."
          rows={3}
          className="form-input resize-none"
        />
      </div>

      {/* Summary */}
      {nights > 0 && selectedRoom && (
        <div className="bg-hotel-beige rounded-lg p-4 border border-hotel-border">
          <h3 className="font-sans font-semibold text-sm text-hotel-charcoal mb-2">
            Booking Summary
          </h3>
          <dl className="space-y-1 text-sm font-sans">
            <div className="flex justify-between">
              <dt className="text-hotel-muted">Room</dt>
              <dd className="text-hotel-charcoal font-medium">{selectedRoom.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-hotel-muted">Check-in</dt>
              <dd className="text-hotel-charcoal">{formatDateDisplay(form.checkIn)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-hotel-muted">Check-out</dt>
              <dd className="text-hotel-charcoal">{formatDateDisplay(form.checkOut)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-hotel-muted">Nights</dt>
              <dd className="text-hotel-charcoal">{nights}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-hotel-muted">Guests</dt>
              <dd className="text-hotel-charcoal">
                {form.adults} adult{form.adults > 1 ? 's' : ''}
                {form.children > 0 ? `, ${form.children} child${form.children > 1 ? 'ren' : ''}` : ''}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-hotel-muted">Rooms</dt>
              <dd className="text-hotel-charcoal">{form.rooms}</dd>
            </div>
          </dl>
          <p className="text-hotel-muted text-xs mt-3 pt-3 border-t border-hotel-border">
            Final price and availability will be confirmed by hotel staff via WhatsApp.
          </p>
        </div>
      )}

      {/* Validation summary */}
      {Object.keys(errors).length > 0 && touched['guestName'] && (
        <div className="flex items-start gap-2 text-red-500 bg-red-50 rounded-lg p-3 border border-red-200">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm font-sans">Please fix the errors above before sending your enquiry.</p>
        </div>
      )}

      {/* Submit */}
      <button type="submit" className="btn-whatsapp w-full text-base py-3.5 gap-2.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Book on WhatsApp
      </button>
      <p className="text-hotel-muted text-xs text-center font-sans">
        WhatsApp will open with your booking details pre-filled. Send the message to receive confirmation from our team.
      </p>
    </form>
  );
}
