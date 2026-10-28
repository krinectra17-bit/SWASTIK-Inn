import { Link } from 'react-router-dom';
import { MapPin, Clock, ChevronRight, Shield, Wifi, Car, Zap } from 'lucide-react';
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import AmenitiesSection from '../components/AmenitiesSection';
import GalleryGrid from '../components/GalleryGrid';
import FAQAccordion from '../components/FAQAccordion';
import { HOTEL, ROOMS, NEARBY_ATTRACTIONS, GALLERY_IMAGES, FAQS } from '../lib/config';
import { buildSimpleWhatsAppURL } from '../lib/whatsapp';

export default function HomePage() {
  return (
    <div className="bg-hotel-ivory">
      {/* ── Hero ── */}
      <Hero />

      {/* ── Hotel Introduction ── */}
      <section
        id="intro"
        className="py-20 bg-white"
        aria-labelledby="intro-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">Welcome to Swastika Inn</p>
              <h2 id="intro-heading" className="section-title mb-5">
                A Welcoming Stay in the Heart of Ayodhya
              </h2>
              <p className="section-subtitle mb-5 leading-relaxed">
                Situated on Mohabra Road in Deokaali, Ayodhya, Swastika Inn — officially
                registered as Swastika Hotel &amp; Lawn — offers clean, comfortable,
                and air-conditioned rooms for pilgrims, families, and travellers.
              </p>
              <p className="text-hotel-muted font-sans leading-relaxed mb-8">
                Whether you are visiting the sacred Shri Ram Janmabhoomi Mandir,
                Hanuman Garhi, or other important landmarks, our hotel provides a
                practical and pleasant base, with free Wi-Fi, on-site parking, a
                24-hour front desk, and room service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/rooms" className="btn-primary">
                  View Our Rooms
                </Link>
                <a
                  href={buildSimpleWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Enquire via WhatsApp
                </a>
              </div>
            </div>

            {/* Image panel */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl">
                <img
                  src="/images/exterior-evening.jpg"
                  alt="Swastika Inn hotel exterior at dusk, Ayodhya"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
              </div>
              {/* Quick Info Cards */}
              <div className="absolute -bottom-6 -left-4 hidden md:grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, label: 'Check-in', value: '12:00 PM' },
                  { icon: Clock, label: 'Check-out', value: '11:00 AM' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-white rounded-xl shadow-lg p-4 border border-hotel-border">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={14} className="text-hotel-gold" />
                      <span className="text-hotel-muted text-xs font-sans">{label}</span>
                    </div>
                    <p className="font-serif text-lg font-semibold text-hotel-charcoal">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Highlights ── */}
      <section className="py-12 bg-hotel-beige" aria-label="Hotel highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wifi, title: 'Free Wi-Fi', desc: 'Throughout the property' },
              { icon: Car, title: 'Free Parking', desc: 'On-site private parking' },
              { icon: Zap, title: '24-hr Power Backup', desc: 'Uninterrupted power' },
              { icon: Shield, title: 'CCTV Monitored', desc: 'Secure common areas' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-hotel-green/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-hotel-green" aria-hidden="true" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-hotel-charcoal mb-1">{title}</h3>
                <p className="text-hotel-muted text-xs font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rooms ── */}
      <section className="py-20 bg-hotel-ivory" aria-labelledby="rooms-home-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label mb-3">Our Accommodation</p>
              <h2 id="rooms-home-heading" className="section-title">
                Choose Your Room
              </h2>
            </div>
            <Link
              to="/rooms"
              className="flex items-center gap-1.5 font-sans text-sm font-medium text-hotel-green hover:text-hotel-green-light transition-colors"
            >
              View all rooms
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROOMS.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          <p className="text-center text-hotel-muted text-xs font-sans mt-6">
            Indicative price range: {HOTEL.priceRange} per night. Final pricing confirmed via WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Amenities Preview ── */}
      <AmenitiesSection />

      {/* ── Gallery Preview ── */}
      <section className="py-20 bg-white" aria-labelledby="gallery-preview-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label mb-3">Property Photos</p>
              <h2 id="gallery-preview-heading" className="section-title">
                See the Property
              </h2>
            </div>
            <Link
              to="/gallery"
              className="flex items-center gap-1.5 font-sans text-sm font-medium text-hotel-green hover:text-hotel-green-light transition-colors"
            >
              Full gallery
              <ChevronRight size={16} />
            </Link>
          </div>
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* ── Nearby Attractions ── */}
      <section className="py-20 bg-hotel-beige" aria-labelledby="explore-home-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Location Advantage</p>
            <h2 id="explore-home-heading" className="section-title mb-4">
              Close to Ayodhya's Landmarks
            </h2>
            <p className="section-subtitle max-w-lg mx-auto">
              Swastika Inn is conveniently located for exploring Ayodhya's most
              important temples and transport hubs. Distances are approximate and subject to verification.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {NEARBY_ATTRACTIONS.map((attr) => (
              <div key={attr.name} className="bg-white rounded-xl border border-hotel-border p-5 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-hotel-gold flex-shrink-0" aria-hidden="true" />
                  <span className="text-hotel-gold font-sans text-xs font-semibold uppercase tracking-wide">
                    {attr.distance}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-hotel-charcoal mb-2 leading-snug">
                  {attr.name}
                </h3>
                <p className="text-hotel-muted text-xs font-sans leading-relaxed">
                  {attr.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/explore-ayodhya" className="btn-outline inline-flex">
              Explore Ayodhya Guide
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section className="py-20 bg-hotel-ivory" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-3">Find Us</p>
              <h2 id="location-heading" className="section-title mb-4">
                Our Location in Deokaali, Ayodhya
              </h2>
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={18} className="text-hotel-gold flex-shrink-0 mt-0.5" />
                <p className="text-hotel-muted font-sans leading-relaxed">
                  {HOTEL.address.full}
                </p>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <Clock size={18} className="text-hotel-gold flex-shrink-0" />
                <p className="text-hotel-muted font-sans">
                  Check-in: {HOTEL.checkIn} · Check-out: {HOTEL.checkOut}
                </p>
              </div>
              <a
                href={HOTEL.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Get Directions on Google Maps
              </a>
            </div>
            <div className="bg-hotel-beige rounded-2xl h-72 flex items-center justify-center border border-hotel-border overflow-hidden">
              <a
                href={HOTEL.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-hotel-green/10 flex items-center justify-center group-hover:bg-hotel-green/20 transition-colors">
                  <MapPin size={28} className="text-hotel-green" />
                </div>
                <p className="font-serif text-hotel-charcoal font-medium">View on Google Maps</p>
                <p className="text-hotel-muted text-sm font-sans">
                  Deokaali, Ayodhya, UP 224123
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white" aria-labelledby="faq-home-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 id="faq-home-heading" className="section-title">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={FAQS.slice(0, 7)} />
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-outline inline-flex">
              See all FAQs & Contact Us
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="relative py-20 overflow-hidden"
        aria-label="Book your stay at Swastika Inn"
      >
        <div className="absolute inset-0">
          <img
            src="/images/exterior-night.jpg"
            alt="Swastika Hotel & Lawn at night with decorative lights"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-hotel-charcoal/75" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-hotel-gold/80 mb-4">Ready to Visit?</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-5">
            Plan Your Stay in Ayodhya
          </h2>
          <p className="text-white/75 font-sans leading-relaxed mb-8 text-lg">
            Book your comfortable room at Swastika Inn through WhatsApp.
            Our team will confirm availability and pricing for your dates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#booking-form"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-gold text-base py-3.5 px-8"
            >
              Book Your Stay
            </a>
            <a
              href={HOTEL.phoneLink}
              className="btn-outline border-white/40 text-white hover:bg-white hover:text-hotel-charcoal text-base py-3.5 px-8"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
