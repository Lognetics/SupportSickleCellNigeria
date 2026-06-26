# Support Sickle Cell Nigeria (SSCN)

The official website for **Support Sickle Cell Nigeria** — a national non-profit
creating awareness, supporting warriors and families, promoting genotype testing
and blood donation, funding research, and driving healthcare reform across all 36
states and the FCT.

## Tech stack

- **Next.js 16** (App Router, `src/` directory) + **React 19**
- **Tailwind CSS v4** (design tokens defined in `src/app/globals.css`)
- **TypeScript** (strict)
- Fully static-rendered — fast, cheap to host, SEO-friendly
- Zero external runtime dependencies beyond Next/React

## Design system

- **Colours:** Deep Red `#C62828` (primary), Navy `#13294B` (accent), white, light grey, soft red.
- **Type:** Poppins (headings) + Open Sans (body) via `next/font`.
- **Motion:** scroll-reveal, animated counters, floating CTA, hover transitions
  (respects `prefers-reduced-motion`).

## Pages

Home, About, Understanding Sickle Cell, Programs, Get Support, Events, Blood
Donation, Volunteer, Donate, Resources, Stories of Hope, Shop, Partners, News,
Gallery, FAQs, Contact, plus Privacy & Terms, a custom 404, `sitemap.xml` and
`robots.txt`.

> Forms (newsletter, contact, registration, donate) and the shop/donation flows
> are front-end mockups — wire them to a backend / payment gateway
> (Paystack, Flutterwave, Stripe) before going live.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Deploy

Optimised for **Vercel** — import the repo and deploy (zero config needed).

## Project structure

```
src/
  app/            # routes (one folder per page) + layout, globals, sitemap, robots
  components/     # navbar, footer, ui primitives, reveal, counter, forms, icons …
  lib/site.ts     # central content/data (nav, programs, events, stories, FAQs …)
```
