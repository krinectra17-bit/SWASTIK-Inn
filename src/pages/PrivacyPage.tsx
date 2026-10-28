import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { HOTEL } from '../lib/config';

export default function PrivacyPage() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-hotel-ivory min-h-screen">
      <section className="relative pt-28 pb-16 bg-hotel-green overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm font-sans mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 font-sans text-sm">Last updated: October {year}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-hotel-border p-8 md:p-10 space-y-8 font-sans text-hotel-charcoal">

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-hotel-muted leading-relaxed">
                Swastika Inn ({HOTEL.officialName}) respects your privacy and is committed to
                handling any information you share with us responsibly. This policy explains
                what information this website may collect and how it is used.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">2. Information We Collect</h2>
              <p className="text-hotel-muted leading-relaxed mb-3">
                This website uses a WhatsApp booking enquiry system. When you fill in the
                booking form, you provide:
              </p>
              <ul className="list-disc list-inside text-hotel-muted leading-relaxed space-y-1 ml-2">
                <li>Your name</li>
                <li>Your preferred travel dates</li>
                <li>Number of guests</li>
                <li>Room preference</li>
                <li>Optional: mobile number, arrival time, special requests</li>
              </ul>
              <p className="text-hotel-muted leading-relaxed mt-3">
                This information is formatted into a message and sent directly to the hotel
                through WhatsApp when you choose to click "Book on WhatsApp". The website
                itself does not store, transmit, or save your personal information to any
                server or database.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">3. WhatsApp Communication</h2>
              <p className="text-hotel-muted leading-relaxed">
                When you click the WhatsApp button, you are redirected to WhatsApp with a
                pre-filled message. You must personally send the message. The hotel team
                receives your message through WhatsApp and may use that information to
                respond to your enquiry and process your reservation. WhatsApp's own privacy
                policy governs that communication. We do not collect WhatsApp messages
                independently of the WhatsApp application.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">4. Cookies and Analytics</h2>
              <p className="text-hotel-muted leading-relaxed">
                This website may use standard analytics tools (such as Google Analytics,
                if configured) to understand website traffic in aggregate form. No personal
                identification is collected through analytics. If you prefer not to be tracked,
                you may use a browser with tracking protection enabled.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">5. Third-Party Links</h2>
              <p className="text-hotel-muted leading-relaxed">
                This website contains links to Google Maps and WhatsApp. These are external
                services governed by their own privacy policies. We are not responsible for
                the content or privacy practices of those external services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold mb-3">6. Contact</h2>
              <p className="text-hotel-muted leading-relaxed">
                If you have questions about this privacy policy, please contact us at:
              </p>
              <div className="mt-3 bg-hotel-beige rounded-lg p-4 text-sm">
                <p className="font-medium text-hotel-charcoal">{HOTEL.name}</p>
                <p className="text-hotel-muted">{HOTEL.address.full}</p>
                <p className="text-hotel-muted">Phone: {HOTEL.phone}</p>
              </div>
            </section>

          </article>
        </div>
      </section>
    </div>
  );
}
