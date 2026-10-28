import { Link } from 'react-router-dom';
import { Home, MessageCircle } from 'lucide-react';
import { buildSimpleWhatsAppURL } from '../lib/whatsapp';

export default function NotFoundPage() {
  return (
    <div className="bg-hotel-ivory min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-serif text-8xl font-semibold text-hotel-beige mb-4">404</p>
        <h1 className="font-serif text-3xl font-semibold text-hotel-charcoal mb-3">
          Page Not Found
        </h1>
        <p className="text-hotel-muted font-sans leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link to="/" className="btn-primary gap-2">
            <Home size={16} />
            Back to Home
          </Link>
          <a
            href={buildSimpleWhatsAppURL()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp gap-2"
          >
            <MessageCircle size={16} />
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
