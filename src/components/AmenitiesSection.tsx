import {
  Wind, Wifi, Tv, Bath, Car, Clock, Utensils, Coffee,
  Zap, Droplets, Shield, CarFront, PawPrint, Shirt, Info
} from 'lucide-react';
import { AMENITIES } from '../lib/config';

const ICON_MAP: Record<string, React.ElementType> = {
  wind: Wind,
  wifi: Wifi,
  tv: Tv,
  bath: Bath,
  car: Car,
  clock: Clock,
  utensils: Utensils,
  coffee: Coffee,
  zap: Zap,
  droplets: Droplets,
  shield: Shield,
  'car-front': CarFront,
  'paw-print': PawPrint,
  shirt: Shirt,
};

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-hotel-ivory" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">What We Offer</p>
          <h2 id="amenities-heading" className="section-title mb-4">
            Hotel Amenities & Facilities
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Everything you need for a comfortable and convenient stay in Ayodhya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {AMENITIES.map((amenity) => {
            const Icon = ICON_MAP[amenity.icon] ?? Info;
            return (
              <div
                key={amenity.name}
                className="bg-white rounded-xl border border-hotel-border p-5 flex gap-4 hover:shadow-md hover:border-hotel-sage transition-all duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hotel-green/10 flex items-center justify-center">
                  <Icon size={18} className="text-hotel-green" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-sm text-hotel-charcoal mb-1">
                    {amenity.name}
                  </h3>
                  <p className="text-hotel-muted text-xs font-sans leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 max-w-2xl mx-auto">
          <Info size={18} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-sans font-semibold text-sm text-amber-800 mb-1">
              Important Property Note
            </p>
            <p className="text-amber-700 text-sm font-sans leading-relaxed">
              This property does not have a lift or elevator. Guests requiring
              ground-floor accommodation — including elderly guests or those with
              mobility considerations — are kindly requested to contact us before
              arrival so we can prepare accordingly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
