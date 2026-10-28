import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { NEARBY_ATTRACTIONS, HOTEL } from '../lib/config';

export default function ExplorePage() {
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
            <span className="text-white">Explore Ayodhya</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Explore Ayodhya
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-xl leading-relaxed">
            Discover Ayodhya's sacred temples, landmarks, and important transport connections — all within convenient reach of Swastika Inn.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-amber-700 text-xs font-sans text-center">
            Distances shown are approximate and subject to verification. Travel times may vary depending on traffic, route, and mode of transport.
          </p>
        </div>
      </div>

      {/* Attractions */}
      <section className="py-16" aria-labelledby="attractions-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="attractions-heading" className="sr-only">Nearby landmarks and attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEARBY_ATTRACTIONS.map((attr, idx) => (
              <article key={attr.name} className="bg-white rounded-2xl border border-hotel-border overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gradient-to-br from-hotel-green to-hotel-green-light p-6 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans text-sm font-medium text-white/70 uppercase tracking-wide">
                      {idx < 2 ? 'Sacred Site' : idx === 2 ? 'Railway Station' : 'Airport'}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-sans">
                      <MapPin size={12} />
                      {attr.distance}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold leading-snug">{attr.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-hotel-muted font-sans leading-relaxed mb-5">
                    {attr.description}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${attr.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2.5 inline-flex"
                  >
                    Get Directions
                    <ChevronRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 bg-hotel-beige" aria-labelledby="getting-here-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Travel Tips</p>
            <h2 id="getting-here-heading" className="section-title">Getting to Swastika Inn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚆',
                title: 'By Train',
                desc: 'Ayodhya Railway Station is the nearest station, approximately 2.6 km from the hotel. Auto-rickshaws and taxis are available from the station.',
              },
              {
                icon: '✈️',
                title: 'By Air',
                desc: 'Maharishi Valmiki International Airport is approximately 7.2 km away. Paid transfer arrangements can be made through the hotel on request.',
              },
              {
                icon: '🚗',
                title: 'By Road',
                desc: 'The hotel is located on Mohabra Road, Deokaali, Ayodhya. On-site free private parking is available for guests arriving by personal vehicle.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-hotel-border">
                <p className="text-3xl mb-3" role="img" aria-label={title}>{icon}</p>
                <h3 className="font-sans font-semibold text-hotel-charcoal mb-2">{title}</h3>
                <p className="text-hotel-muted text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={HOTEL.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              View Hotel on Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <h2 className="font-serif text-3xl text-hotel-charcoal mb-4">
          Planning a Visit to Ayodhya?
        </h2>
        <p className="text-hotel-muted font-sans mb-6 max-w-md mx-auto">
          Book a comfortable room at Swastika Inn and explore Ayodhya's sacred landmarks at your own pace.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/rooms" className="btn-primary">View Our Rooms</Link>
          <Link to="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
