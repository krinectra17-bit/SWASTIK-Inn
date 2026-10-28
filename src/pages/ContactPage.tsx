import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, MessageCircle, Navigation, ChevronRight } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import { HOTEL, FAQS } from '../lib/config';
import { buildSimpleWhatsAppURL } from '../lib/whatsapp';

export default function ContactPage() {
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
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-xl">
            Get in touch with Swastika Inn for bookings, enquiries, and travel assistance.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-white" aria-labelledby="contact-details-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-details-heading" className="sr-only">Contact information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Info Card */}
            <div className="lg:col-span-1 space-y-5">
              <div className="bg-hotel-beige rounded-2xl border border-hotel-border p-6">
                <h3 className="font-serif text-xl font-semibold text-hotel-charcoal mb-5">
                  {HOTEL.name}
                </h3>
                <p className="text-hotel-muted text-xs font-sans mb-5">{HOTEL.officialName}</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-hotel-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={14} className="text-hotel-green" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sm text-hotel-charcoal mb-0.5">Address</p>
                      <p className="text-hotel-muted text-sm font-sans leading-relaxed">
                        {HOTEL.address.full}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-hotel-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-hotel-green" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sm text-hotel-charcoal mb-0.5">Phone</p>
                      <a
                        href={HOTEL.phoneLink}
                        className="text-hotel-green text-sm font-sans font-medium hover:underline"
                      >
                        {HOTEL.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-hotel-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={14} className="text-hotel-green" />
                    </div>
                    <div>
                      <p className="font-sans font-medium text-sm text-hotel-charcoal mb-0.5">Check-in / Check-out</p>
                      <p className="text-hotel-muted text-sm font-sans">
                        In: {HOTEL.checkIn} · Out: {HOTEL.checkOut}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <a href={HOTEL.phoneLink} className="btn-primary w-full gap-2">
                  <Phone size={16} />
                  Call Now: {HOTEL.phone}
                </a>
                <a
                  href={buildSimpleWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp Enquiry
                </a>
                <a
                  href={HOTEL.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full gap-2"
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* How to Reach + Map placeholder */}
            <div className="lg:col-span-2 space-y-8">
              {/* Map placeholder */}
              <div className="bg-hotel-beige rounded-2xl border border-hotel-border h-64 flex items-center justify-center overflow-hidden">
                <a
                  href={HOTEL.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-8 text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-hotel-green/10 flex items-center justify-center group-hover:bg-hotel-green/20 transition-colors">
                    <MapPin size={28} className="text-hotel-green" />
                  </div>
                  <p className="font-serif text-hotel-charcoal font-medium">
                    Open in Google Maps
                  </p>
                  <p className="text-hotel-muted text-sm font-sans">
                    Mohabra Road, Deokaali, Ayodhya, UP 224123
                  </p>
                  <span className="text-hotel-green text-sm font-medium font-sans group-hover:underline">
                    Click to view & get directions →
                  </span>
                </a>
              </div>

              {/* How to reach */}
              <div className="bg-white rounded-2xl border border-hotel-border p-6">
                <h3 className="font-serif text-xl text-hotel-charcoal mb-5">How to Reach Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    {
                      emoji: '🚆',
                      mode: 'Train',
                      info: 'Ayodhya Railway Station (~2.6 km). Auto-rickshaws and taxis available.',
                    },
                    {
                      emoji: '✈️',
                      mode: 'Flight',
                      info: 'Maharishi Valmiki International Airport (~7.2 km). Transfers on request.',
                    },
                    {
                      emoji: '🚗',
                      mode: 'By Road',
                      info: 'Mohabra Road, Deokaali. Free on-site parking available.',
                    },
                  ].map(({ emoji, mode, info }) => (
                    <div key={mode}>
                      <p className="text-2xl mb-2" role="img" aria-label={mode}>{emoji}</p>
                      <p className="font-sans font-semibold text-sm text-hotel-charcoal mb-1">By {mode}</p>
                      <p className="text-hotel-muted text-xs font-sans leading-relaxed">{info}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note about contact form */}
              <div className="bg-hotel-beige rounded-xl border border-hotel-border p-5">
                <p className="font-sans font-semibold text-sm text-hotel-charcoal mb-2">
                  Prefer to send a message?
                </p>
                <p className="text-hotel-muted text-sm font-sans leading-relaxed mb-3">
                  The fastest way to reach us is via WhatsApp. Click the button above to
                  send us an enquiry — include your name, dates, and room preference and
                  our team will respond promptly.
                </p>
                <a
                  href={buildSimpleWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm py-2.5 inline-flex"
                >
                  <MessageCircle size={14} />
                  Send a WhatsApp Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-hotel-beige" aria-labelledby="faq-contact-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Helpful Information</p>
            <h2 id="faq-contact-heading" className="section-title">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-hotel-border p-6 md:p-8">
            <FAQAccordion faqs={FAQS} />
          </div>
        </div>
      </section>
    </div>
  );
}
