import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-hotel-ivory min-h-screen">
      {/* Header */}
      <section className="relative pt-28 pb-16 bg-hotel-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/exterior-night.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm font-sans mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            About Swastika Inn
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-xl leading-relaxed">
            A welcoming and comfortable hotel for pilgrims, families, and travellers visiting Ayodhya.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-3">Our Property</p>
              <h2 id="about-heading" className="section-title mb-5">
                Comfortable Accommodation in Deokaali, Ayodhya
              </h2>
              <p className="text-hotel-muted font-sans leading-relaxed mb-5">
                Swastika Inn, officially known as Swastika Hotel &amp; Lawn, is located on
                Mohabra Road in Deokaali, Ayodhya — a convenient and accessible location
                for guests visiting the city's important religious and cultural landmarks.
              </p>
              <p className="text-hotel-muted font-sans leading-relaxed mb-5">
                We offer two categories of comfortable, air-conditioned rooms: the Deluxe
                Double Bed AC Room for couples and solo travellers, and the Triple Bed AC
                Room for small families and groups. Each room is maintained to a clean and
                functional standard with modern amenities.
              </p>
              <p className="text-hotel-muted font-sans leading-relaxed mb-8">
                Our team is available at the front desk around the clock to assist with
                enquiries, room service, transfer arrangements, and any other needs you may
                have during your stay. We aim to make every guest's visit to Ayodhya as
                comfortable and straightforward as possible.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Air-conditioned rooms',
                  'Free Wi-Fi access',
                  'Free on-site parking',
                  '24-hour front desk',
                  'Room service',
                  'Power backup',
                  'CCTV common areas',
                  'Pets welcome',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm font-sans text-hotel-charcoal">
                    <Check size={14} className="text-hotel-green flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <Link to="/rooms" className="btn-primary">View Our Rooms</Link>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <img
                  src="/images/exterior-evening.jpg"
                  alt="Swastika Inn hotel exterior at dusk, Deokaali, Ayodhya"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img
                    src="/images/room-double.jpg"
                    alt="Deluxe Double Bed AC Room at Swastika Inn"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img
                    src="/images/room-triple.jpg"
                    alt="Triple Bed AC Room at Swastika Inn"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-hotel-beige" aria-labelledby="what-to-expect-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="what-to-expect-heading" className="font-serif text-3xl text-hotel-charcoal mb-8 text-center">
            What to Expect at Swastika Inn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: '🛏️',
                title: 'Clean & Comfortable Rooms',
                desc: 'All rooms are cleaned and prepared for each new guest. Fresh bed linen is provided for every stay.',
              },
              {
                emoji: '📶',
                title: 'Essential Amenities',
                desc: 'Free Wi-Fi, AC, flat-screen TV, and attached bathrooms are standard across our room categories.',
              },
              {
                emoji: '🏨',
                title: 'Helpful Front Desk',
                desc: 'Our 24-hour front desk team is happy to assist with queries, local directions, and transfer arrangements.',
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-hotel-border text-center">
                <p className="text-4xl mb-3" role="img" aria-label={title}>{emoji}</p>
                <h3 className="font-sans font-semibold text-hotel-charcoal mb-2">{title}</h3>
                <p className="text-hotel-muted text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Night Photo CTA */}
      <section className="relative py-20 overflow-hidden" aria-label="Book at Swastika Inn">
        <div className="absolute inset-0">
          <img
            src="/images/exterior-night.jpg"
            alt="Swastika Hotel & Lawn illuminated at night"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-hotel-charcoal/70" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-4">
            Book Your Stay
          </h2>
          <p className="text-white/75 font-sans mb-8 text-lg">
            Reach out via WhatsApp and our team will confirm your room and dates.
          </p>
          <Link to="/rooms" className="btn-gold text-base py-3.5 px-8">
            View Available Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}
