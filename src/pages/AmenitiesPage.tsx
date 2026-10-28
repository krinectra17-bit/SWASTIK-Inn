import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import AmenitiesSection from '../components/AmenitiesSection';

export default function AmenitiesPage() {
  return (
    <div className="bg-hotel-ivory min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-16 bg-hotel-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/exterior-evening.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm font-sans mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Amenities</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Hotel Amenities & Facilities
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-xl leading-relaxed">
            A range of practical amenities to make your stay in Ayodhya comfortable and convenient.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <AmenitiesSection />

      {/* Policies */}
      <section className="py-16 bg-white" aria-labelledby="policies-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="policies-heading" className="font-serif text-3xl text-hotel-charcoal mb-8 text-center">
            Property Rules & Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Identification',
                items: [
                  'Valid government-issued photo ID required at check-in',
                  'Accepted: Aadhaar, passport, driving licence, voter ID, PAN card',
                  'Primary guest must be at least 18 years old',
                ],
              },
              {
                title: 'Check-in & Check-out',
                items: [
                  'Check-in from 12:00 PM',
                  'Check-out by 11:00 AM',
                  'Early check-in or late check-out subject to availability — please enquire',
                ],
              },
              {
                title: 'Smoking',
                items: [
                  'Smoking is prohibited inside the building',
                  'Designated outdoor smoking areas may be available — please enquire',
                ],
              },
              {
                title: 'Pets',
                items: [
                  'Pets are permitted subject to the hotel\'s current policy',
                  'Please inform us before arrival if you are bringing a pet',
                ],
              },
              {
                title: 'Accessibility',
                items: [
                  'The property does not have a lift or elevator',
                  'Guests requiring ground-floor rooms should request in advance',
                  'Please contact us to discuss your requirements',
                ],
              },
              {
                title: 'Additional Services',
                items: [
                  'Breakfast available on request at extra charge',
                  'Airport and railway station transfers available on request at extra charge',
                  'Room service available — enquire at reception for timings',
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="bg-hotel-beige rounded-xl p-5 border border-hotel-border">
                <h3 className="font-sans font-semibold text-hotel-charcoal mb-3">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-sans text-hotel-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-hotel-gold mt-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hotel-beige text-center">
        <h2 className="font-serif text-3xl text-hotel-charcoal mb-4">Ready to Book?</h2>
        <p className="text-hotel-muted font-sans mb-6 max-w-md mx-auto">
          Enquire about room availability via WhatsApp and our team will be happy to assist.
        </p>
        <Link to="/rooms" className="btn-primary">View Our Rooms</Link>
      </section>
    </div>
  );
}
