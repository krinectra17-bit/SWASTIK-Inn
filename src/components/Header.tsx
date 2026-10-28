import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { HOTEL, NAV_LINKS } from '../lib/config';
import { buildSimpleWhatsAppURL } from '../lib/whatsapp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll detection for header style
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Trap focus / close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-hotel-border'
          : 'bg-transparent'
      }`}
    >
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn-primary text-sm z-50"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Wordmark */}
          <Link
            to="/"
            className="flex flex-col leading-none group"
            aria-label="Swastika Inn — Home"
          >
            <span
              className={`font-serif font-semibold text-xl tracking-tight transition-colors duration-200 ${
                isScrolled || !isHomePage ? 'text-hotel-green' : 'text-white'
              } group-hover:text-hotel-gold`}
            >
              Swastika Inn
            </span>
            <span
              className={`font-sans text-[10px] tracking-widest uppercase transition-colors duration-200 ${
                isScrolled || !isHomePage ? 'text-hotel-muted' : 'text-white/70'
              }`}
            >
              Ayodhya
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 font-sans text-sm font-medium rounded-md transition-colors duration-150 ${
                    isActive
                      ? 'text-hotel-gold'
                      : isScrolled || !isHomePage
                      ? 'text-hotel-charcoal hover:text-hotel-green'
                      : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={HOTEL.phoneLink}
              className={`flex items-center gap-1.5 font-sans text-sm font-medium transition-colors duration-150 ${
                isScrolled || !isHomePage
                  ? 'text-hotel-muted hover:text-hotel-green'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="Call Swastika Inn"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">{HOTEL.phone}</span>
            </a>
            <a
              href={buildSimpleWhatsAppURL()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Book Your Stay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-md transition-colors duration-150 ${
              isScrolled || !isHomePage
                ? 'text-hotel-charcoal hover:bg-hotel-beige'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 shadow-2xl
                   transform transition-transform duration-300 ease-out lg:hidden
                   ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hotel-border">
          <span className="font-serif font-semibold text-hotel-green text-lg">
            Swastika Inn
          </span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-hotel-charcoal hover:bg-hotel-beige"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-sans text-sm font-medium transition-colors duration-150 ${
                  isActive
                    ? 'bg-hotel-beige text-hotel-green font-semibold'
                    : 'text-hotel-charcoal hover:bg-hotel-beige hover:text-hotel-green'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 space-y-3 border-t border-hotel-border pt-4 mt-2">
          <a
            href={HOTEL.phoneLink}
            className="flex items-center gap-2 px-4 py-3 rounded-lg text-hotel-charcoal hover:bg-hotel-beige text-sm font-medium"
          >
            <Phone size={16} className="text-hotel-green" />
            {HOTEL.phone}
          </a>
          <a
            href={buildSimpleWhatsAppURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </header>
  );
}
