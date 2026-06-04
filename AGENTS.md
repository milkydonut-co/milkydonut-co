# AGENTS.md — MilkyDonut.co

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

MilkyDonut.co is a modern, mobile-first marketing website for a Malaysian artisan donut brand. It features a home page with product showcase and testimonials, a team page for 8 members, and a photo gallery with file upload backed by Netlify Blobs.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 + custom CSS (CSS variables) |
| Storage | Netlify Blobs (gallery photos) |
| Functions | Netlify Functions v2 (photo API) |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts) |
| Language | TypeScript 5 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx       # Root layout: Navbar + Footer (shellComponent)
    index.tsx        # Home page — hero, product, testimonials, CTA
    team.tsx         # Team page — 8 member profile cards
    gallery.tsx      # Gallery page — upload UI + masonry photo grid
  styles.css         # Global: Tailwind import, CSS vars, animations, utilities

netlify/
  functions/
    upload-photo.ts  # POST /api/upload-photo — multipart upload to Blobs
    get-photos.ts    # GET  /api/get-photos  — list all gallery photos
    get-photo.ts     # GET  /api/get-photo?key=… — stream photo from Blobs
    delete-photo.ts  # DELETE /api/delete-photo?key=… — remove photo
```

## Brand Colors (CSS Variables)

All colors in `src/styles.css` on `:root`. Use these everywhere — never hardcode hex values in components:

| Variable | Value | Usage |
|----------|-------|-------|
| `--cream` | #FDF6EC | Page background |
| `--beige` | #E8D5B5 | Tab bars, strips |
| `--beige-light` | #F2E8D5 | Card backgrounds |
| `--beige-dark` | #D4BC95 | Borders, dividers |
| `--brown-light` | #C4956A | Icons, section labels |
| `--brown` | #7C4A1E | Primary action color |
| `--brown-mid` | #5C3317 | Mid-level accents |
| `--brown-dark` | #3D1F08 | Hero, footer backgrounds |
| `--gold` | #C9944A | Gold accents |
| `--gold-light` | #E5B86A | Marquee, italic highlights |
| `--text-dark` | #2C1A0E | Main body text |
| `--text-mid` | #7C5C3E | Secondary text |
| `--text-light` | #A88560 | Labels, placeholders |

## Typography

- **Display/Headings:** `'Cormorant Garamond', serif` (loaded via Google Fonts in styles.css)
- **Body/UI:** `'DM Sans', sans-serif`
- All `<h1>`–`<h6>` default to Cormorant Garamond via CSS `h1, h2, ...` selector

## Custom CSS Utilities (non-Tailwind)

Defined in `src/styles.css`:

- `.nav-link` — underline-slide-on-hover navigation links
- `.btn-primary` — brown filled CTA button (uppercase, tracked)
- `.btn-outline` — brown outlined button
- `.section-label` — tiny uppercase eyebrow label (DM Sans 0.7rem)
- `.card-hover` — `-4px` translateY on hover + shadow
- `.gallery-grid` — CSS `columns` masonry (2→3→4 at breakpoints)
- `.gallery-item` — `break-inside: avoid` grid cell
- `.upload-zone` — dashed border drop target with hover state
- `.animate-fade-up`, `.animate-float`, `.animate-spin-slow`, `.animate-marquee` — keyframe animations
- `.delay-100` through `.delay-800` — animation-delay helpers
- `.noise-overlay` — fixed-position grain texture (z-index: 9999, pointer-events: none)

## Key Conventions

### Routing

File-based with TanStack Router. The root `__root.tsx` uses `shellComponent` (not `component`), rendering `<Navbar>` → `{children}` → `<Footer>`. Each page file exports `Route` (createFileRoute) and a default component.

### Netlify Functions (v2)

Each function in `netlify/functions/` exports:
```ts
export default async (req: Request, _context: Context) => Response
export const config: Config = { path: '/api/...' }
```

The `_context` parameter is unused (underscore prefix avoids TS `noUnusedParameters` error).

### Blobs Storage

Gallery photos stored in `getStore('gallery-photos')`.  
Key format: `photos/{category}/{timestamp}-{filename}` where category is `general`, `sales`, or `activities`.

Images served via `/api/get-photo?key=…` with `Cache-Control: public, max-age=31536000, immutable`.

### Non-Obvious Decisions

- **WhatsApp ordering** — standard for Malaysian SME F&B; order link dynamically includes quantity and total price
- **SVG avatars** — team photos are generated SVGs with initials + silhouette; hover reveals achievement quote without needing real photos
- **`noise-overlay` is `position: fixed`** — never on scrolling containers (Tailwind performance rule: animate transform/opacity only)
- **CSS columns masonry** — zero JS dependency for gallery grid; breakpoints defined in `styles.css` not Tailwind config
- **Cormorant Garamond** — deliberate luxury pastry aesthetic; avoids common AI-generated font choices (Inter, Space Grotesk)
