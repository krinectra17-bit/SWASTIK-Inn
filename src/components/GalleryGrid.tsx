import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { GalleryImage } from '../types';

interface Props {
  images: GalleryImage[];
  filter?: GalleryImage['category'] | 'all';
}

export default function GalleryGrid({ images, filter = 'all' }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === 'all' ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"
        role="list"
        aria-label="Hotel photo gallery"
      >
        {filtered.map((img, idx) => (
          <div
            key={img.src}
            role="listitem"
            className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
            onClick={() => openLightbox(idx)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width={img.width}
              height={img.height}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-hotel-charcoal/0 group-hover:bg-hotel-charcoal/20
                            transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-white/90 rounded-full p-3">
                <ZoomIn size={20} className="text-hotel-charcoal" aria-hidden="true" />
              </div>
            </div>
            <span className="sr-only">View full size: {img.alt}</span>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo lightbox: ${currentImage.alt}`}
          className="fixed inset-0 z-[60] flex items-center justify-center lightbox-backdrop bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20
                       text-white transition-colors duration-150"
            aria-label="Close photo viewer"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          {filtered.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20
                         text-white transition-colors duration-150"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] mx-16 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white/70 text-sm text-center mt-3 font-sans">
              {currentImage.alt}
            </p>
            <p className="text-white/40 text-xs text-center font-sans">
              {(lightboxIndex ?? 0) + 1} / {filtered.length}
            </p>
          </div>

          {/* Next */}
          {filtered.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20
                         text-white transition-colors duration-150"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
