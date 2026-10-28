import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { HOTEL } from '../lib/config';

export default function BookingTermsPage() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-hotel-ivory min-h-screen">
      <section className="relative pt-28 pb-16 bg-hotel-green overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm font-sans mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Booking Terms</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Booking Terms & Cancellation
          </h1>
          <p className="text-white/70 font-sans text-sm">Last updated: October {year}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-hotel-border p-8 md:p-10 space-y-8 font-sans text-hotel-charcoal">

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-700 text-sm leading-relaxed">
                <strong>Important:</strong> The terms and conditions below reflect general
                hotel policies. The hotel owner may update these at any time. For the most
                current policies — especially regarding cancellations, refunds, and advance
                payment — please confirm directly with the hotel via WhatsApp or phone
                before completing your booking.
              </p>
            </div>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">1. Booking Process</h2>
              <p className="text-hotel-muted leading-relaxed">
                Room reservations at Swastika Inn are made through WhatsApp enquiry. When
                you submit a booking enquiry, our team will review your request and confirm
                room availability, applicable dates, and the final room rate. A reservation
                is not confirmed until you receive explicit confirmation from the hotel team.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">2. Pricing</h2>
              <p className="text-hotel-muted leading-relaxed">
                Room prices on this website are indicative and may vary based on the room
                category, travel dates, season, demand, and any applicable taxes or charges.
                The final confirmed price will be communicated to you by our team before your
                stay. We recommend confirming the price before making any payment.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">3. Check-in & Check-out</h2>
              <ul className="text-hotel-muted leading-relaxed space-y-2">
                <li>• Standard check-in time: 12:00 PM (noon)</li>
                <li>• Standard check-out time: 11:00 AM</li>
                <li>• Early check-in and late check-out are subject to room availability and may be subject to additional charges</li>
                <li>• Requests for early check-in or late check-out should be made in advance</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">4. Identification Requirements</h2>
              <p className="text-hotel-muted leading-relaxed">
                All guests are required to present a valid government-issued photo
                identification document at check-in. The primary guest must be at least
                18 years of age. Acceptable documents include Aadhaar card, passport,
                driving licence, voter ID, and PAN card.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">5. Cancellation Policy</h2>
              <p className="text-hotel-muted leading-relaxed">
                Cancellation terms depend on the booking arrangement agreed with the hotel.
                Please confirm the applicable cancellation policy, advance payment requirement,
                and refund conditions directly with the hotel team at the time of booking.
                The hotel owner reserves the right to determine cancellation charges.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">6. Property Rules</h2>
              <ul className="text-hotel-muted leading-relaxed space-y-2">
                <li>• Smoking is not permitted inside any guest room or common indoor area</li>
                <li>• Pets are allowed subject to the current pet policy — please enquire in advance</li>
                <li>• Guests are responsible for any damage caused to hotel property</li>
                <li>• The hotel reserves the right to refuse service in cases of inappropriate conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">7. Additional Services</h2>
              <p className="text-hotel-muted leading-relaxed">
                Breakfast, airport or railway station transfers, and other additional services
                are available at an additional charge. Please enquire at the time of booking
                or at check-in for current rates and availability.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">8. Contact for Clarification</h2>
              <p className="text-hotel-muted leading-relaxed mb-3">
                For any questions about bookings or terms, please contact us:
              </p>
              <div className="bg-hotel-beige rounded-lg p-4 text-sm">
                <p className="font-medium text-hotel-charcoal">{HOTEL.name}</p>
                <p className="text-hotel-muted">{HOTEL.address.full}</p>
                <p className="text-hotel-muted">Phone: {HOTEL.phone}</p>
              </div>
            </section>

          </article>
        </div>
      </section>
    </div>
  );
}
