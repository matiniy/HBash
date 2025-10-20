# H Bashash Realtor – Dallas, TX

A modern, premium realtor website for showcasing luxury listings, client trust signals, and consultation CTAs.

## Features
- Hero with glass effect, stats, and full‑width marquee (slow animation)
- Dark theme with Aqua Neon accents; responsive half‑screen hero image with parallax
- Listings grid with taller dark cards; dynamic details route `/listings/[id]`
- About section with background image, refined CTAs, and testimonials
- Credentials section with license/brokerage info and TREC disclosure CTA
- Contact form; mobile‑first, accessible, optimized UI

## Tech Stack
- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Google Fonts: Space Grotesk, Sora (via `next/font`)

## Color Palette
- Deep Forest: `#021212`
- Aqua Neon: `#00FFA3`
- Grey Light: `#B3B3B3`
- Black 70%: `rgba(0,0,0,0.7)`

## Project Structure (key paths)
```
src/
  app/
    page.tsx                # Home
    listings/
      page.tsx              # Listings index
      [id]/page.tsx         # Listing details (dynamic)
  components/
    Navbar.tsx Hero.tsx About.tsx Listings.tsx ListingCard.tsx
    ContactForm.tsx Credentials.tsx PartnerLogos.tsx Footer.tsx Button.tsx
public/
  images/hero/              # Hero background (upload here)
  images/Realtor/           # Realtor photo + about background
  images/Listings/          # Listing images
```

## Getting Started
1) Install
```
npm install
```
2) Dev server
```
npm run dev
```
3) Open `http://localhost:3000`

Note: If you prefer a different port: `npm run dev -- --port 3002`.

## Scripts
- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run start` – start production server
- `npm run lint` – lint

## Assets
- Hero background: place at `public/images/hero/hero-background.jpg` (or replace URL fallback in `Hero.tsx`)
- Realtor photo: `public/images/Realtor/realtor-photo.png`
- Listing images: `public/images/Listings/*`

## Legal
Licensed Texas Realtor (TREC) under HomeSmart Stars Realty. See credentials section for license/brokerage details.

—
© 2025 H Bashash Realtor