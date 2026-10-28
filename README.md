# Swastika Inn — Hotel Website

A complete, production-ready hotel website for **Swastika Inn** (officially *Swastika Hotel & Lawn*), located in Deokaali, Ayodhya, Uttar Pradesh.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS 3** (styling)
- **React Router v6** (routing)
- **Lucide React** (icons)
- **date-fns** (date utilities)
- **WhatsApp click-to-chat** (booking)

## Features

- Complete multi-page hotel website
- WhatsApp booking enquiry form with full validation
- Dynamic booking message generation
- Responsive layouts (mobile-first)
- Photo gallery with keyboard-accessible lightbox
- FAQ accordion
- SEO metadata, structured data, sitemap, robots.txt
- Accessible navigation with keyboard support

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/rooms` | Room listings |
| `/rooms/deluxe-double-bed-ac` | Deluxe room detail |
| `/rooms/triple-bed-ac` | Triple room detail |
| `/gallery` | Photo gallery |
| `/amenities` | Amenities & policies |
| `/explore-ayodhya` | Nearby attractions |
| `/about` | About the hotel |
| `/contact` | Contact & FAQ |
| `/privacy-policy` | Privacy policy |
| `/booking-terms` | Booking terms |

## Development

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
pnpm preview
```

## Hotel Configuration

All hotel information is centrally managed in:
- `src/lib/config.ts` — hotel details, rooms, amenities, FAQs, attractions

**WhatsApp Number:** `916393556011`

## Deployment

The production build (`dist/`) can be deployed to:
- **Vercel** (recommended — zero-config for Vite + React)
- **Netlify**
- **Any static hosting** with SPA redirect support

For Vercel, add a `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

For Netlify, add a `_redirects` file in `public/`:
```
/*  /index.html  200
```

## Environment Variables

No environment variables are required for the WhatsApp booking flow.

For analytics, set `VITE_GA_ID` (Google Analytics 4 measurement ID) if needed.

## Domain & SEO

Update the domain in:
1. `index.html` — canonical URLs and OG tags
2. `public/sitemap.xml` — all URL entries
3. `public/robots.txt` — sitemap URL

Current placeholder domain: `https://swastikainn.com`

## Remaining Setup (Owner Action Required)

1. **Domain** — Register and point domain to hosting
2. **HTTPS** — Enabled automatically on Vercel/Netlify
3. **Google Search Console** — Submit sitemap after domain is live
4. **Google Analytics** — Add GA4 tracking ID if desired
5. **Prices** — Update room price ranges in `src/lib/config.ts` once confirmed
6. **WhatsApp** — Test the WhatsApp booking flow on mobile and desktop
