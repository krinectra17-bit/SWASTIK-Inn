import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid';
import { GALLERY_IMAGES } from '../lib/config';
import type { GalleryImage } from '../types';

const CATEGORIES: { label: string; value: GalleryImage['category'] | 'all' }[] = [
  { label: 'All Photos', value: 'all' },
  { label: 'Exterior', value: 'exterior' },
  { label: 'Rooms', value: 'rooms' },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<GalleryImage['category'] | 'all'>('all');

  const counts = {
    all: GALLERY_IMAGES.length,
    exterior: GALLERY_IMAGES.filter((i) => i.category === 'exterior').length,
    rooms: GALLERY_IMAGES.filter((i) => i.category === 'rooms').length,
    property: GALLERY_IMAGES.filter((i) => i.category === 'property').length,
  };

  return (
    <div className="bg-hotel-ivory min-h-screen">
      {/* ── Header ── */}
      <section className="relative pt-28 pb-16 bg-hotel-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/exterior-night.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm font-sans mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Gallery</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-xl">
            Explore photographs of the hotel exterior, guest rooms, and property.
          </p>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-heading" className="sr-only">Hotel photographs</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter photos by category">
            {CATEGORIES.map(({ label, value }) => {
              const count = counts[value as keyof typeof counts] ?? 0;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setActiveFilter(value)}
                  className={`font-sans text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
                    activeFilter === value
                      ? 'bg-hotel-green text-white border-hotel-green'
                      : 'bg-white text-hotel-charcoal border-hotel-border hover:border-hotel-green hover:text-hotel-green'
                  }`}
                  aria-pressed={activeFilter === value}
                >
                  {label}
                  {count > 0 && (
                    <span className={`ml-1.5 text-xs ${activeFilter === value ? 'text-white/70' : 'text-hotel-muted'}`}>
                      ({count})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <GalleryGrid images={GALLERY_IMAGES} filter={activeFilter} />

          <p className="text-hotel-muted text-xs font-sans text-center mt-8">
            All photographs depict the actual Swastika Inn property. Click any image to view full size.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-hotel-beige">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-hotel-charcoal mb-4">
            Like What You See?
          </h2>
          <p className="text-hotel-muted font-sans mb-6">
            Book your comfortable stay at Swastika Inn, Ayodhya via WhatsApp.
          </p>
          <Link to="/rooms" className="btn-primary">
            Explore Our Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}
