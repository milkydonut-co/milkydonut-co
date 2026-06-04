# MilkyDonut.co

A modern, responsive, mobile-first business website for **MilkyDonut.co** — a Malaysian artisan donut brand based in Kuala Lumpur.

## Features

- **Home page** — Hero section with animated donut, product showcase (Milky Donut at RM2.50/pc), process steps, customer testimonials, and WhatsApp order integration
- **Team page** — Profile cards for 8 team members with roles, bios, personal achievements, and Canva portfolio links
- **Gallery page** — Photo gallery with drag-and-drop upload for sales photos and activities, powered by Netlify Blobs

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Routing:** TanStack Router (file-based)
- **Storage:** [Netlify Blobs](https://docs.netlify.com/blobs/overview/) for gallery photos
- **Functions:** Netlify Functions (serverless) for photo upload/retrieval API
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) via Google Fonts
- **Deployment:** Netlify

## Design

Warm artisan aesthetic using three core colors: **cream** (#FDF6EC), **beige** (#E8D5B5), and **brown** (#7C4A1E). Elegant Cormorant Garamond serif headings paired with clean DM Sans body text.

## Local Development

```bash
# Install dependencies
npm install

# Start development server (with Netlify Functions)
netlify dev
```

The site runs on `http://localhost:8888` by default.

## Environment

No environment variables required — Netlify Blobs is auto-configured when deployed to Netlify.
