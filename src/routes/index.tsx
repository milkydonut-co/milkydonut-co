import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function DonutSVG({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Outer ring shadow */}
      <circle cx="160" cy="168" r="130" fill="rgba(60,30,10,0.08)" />
      {/* Main donut body */}
      <circle cx="160" cy="160" r="128" fill="#C4956A" />
      <circle cx="160" cy="160" r="128" fill="url(#donutGrad)" />
      {/* Glaze drips */}
      <ellipse cx="160" cy="160" rx="128" ry="128" fill="url(#glazeGrad)" />
      {/* Glaze drip shapes */}
      <path d="M90 110 Q100 90 120 95 Q115 115 90 110Z" fill="#FDF6EC" opacity="0.7"/>
      <path d="M180 88 Q200 78 215 92 Q205 108 180 88Z" fill="#FDF6EC" opacity="0.5"/>
      <path d="M230 140 Q248 130 255 148 Q242 162 230 140Z" fill="#FDF6EC" opacity="0.5"/>
      <path d="M85 175 Q72 165 80 148 Q95 155 85 175Z" fill="#FDF6EC" opacity="0.4"/>
      {/* Sprinkles */}
      <rect x="130" y="100" width="12" height="4" rx="2" fill="#E8D5B5" transform="rotate(-20 130 100)" />
      <rect x="175" y="115" width="10" height="4" rx="2" fill="#7C4A1E" transform="rotate(15 175 115)" />
      <rect x="200" y="155" width="11" height="4" rx="2" fill="#E8D5B5" transform="rotate(-35 200 155)" />
      <rect x="155" y="200" width="10" height="4" rx="2" fill="#7C4A1E" transform="rotate(10 155 200)" />
      <rect x="115" y="185" width="12" height="4" rx="2" fill="#C4956A" transform="rotate(25 115 185)" />
      <rect x="105" y="140" width="9" height="4" rx="2" fill="#3D1F08" transform="rotate(-15 105 140)" />
      <rect x="215" y="120" width="11" height="4" rx="2" fill="#E8D5B5" transform="rotate(30 215 120)" />
      <rect x="190" y="195" width="10" height="4" rx="2" fill="#7C4A1E" transform="rotate(-10 190 195)" />
      {/* Hole */}
      <circle cx="160" cy="160" r="52" fill="#FDF6EC" />
      <circle cx="160" cy="160" r="52" fill="url(#holeGrad)" />
      {/* Shine */}
      <ellipse cx="120" cy="118" rx="18" ry="10" fill="white" opacity="0.25" transform="rotate(-30 120 118)" />
      <defs>
        <radialGradient id="donutGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#D4A97A" />
          <stop offset="100%" stopColor="#7C4A1E" />
        </radialGradient>
        <radialGradient id="glazeGrad" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FDF6EC" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#E8D5B5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C4956A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="holeGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FDF6EC" />
          <stop offset="100%" stopColor="#F2E8D5" />
        </radialGradient>
      </defs>
    </svg>
  )
}

const testimonials = [
  {
    name: 'Nurul Hafizah',
    role: 'Regular Customer',
    rating: 5,
    text: 'The softest donut I have ever had in KL! The milky glaze is just perfect — not too sweet, not too plain. I order every week without fail.',
    initials: 'NH',
    color: '#C4956A',
  },
  {
    name: 'Ahmad Ridhwan',
    role: 'Food Blogger',
    rating: 5,
    text: 'I have tried donuts across the whole country and MilkyDonut.co stands on a completely different level. The texture, the glaze, the smell — pure artistry.',
    initials: 'AR',
    color: '#7C4A1E',
  },
  {
    name: 'Siti Nabilah',
    role: 'Event Organizer',
    rating: 5,
    text: 'We ordered 200 pieces for our corporate event and every single guest was asking where we got them. Will definitely order again for all future events!',
    initials: 'SN',
    color: '#5C3317',
  },
  {
    name: 'Darren Loo',
    role: 'Café Owner',
    rating: 5,
    text: 'As a café owner, I know quality when I taste it. MilkyDonut.co has mastered the balance of fluffy bread and silky glaze. A true gem.',
    initials: 'DL',
    color: '#C9944A',
  },
  {
    name: 'Farhana Zulaikha',
    role: 'Mother of Three',
    rating: 5,
    text: 'My kids refuse to eat any other donuts now. MilkyDonut.co has completely spoiled them — and honestly, me too. Worth every ringgit!',
    initials: 'FZ',
    color: '#A86540',
  },
  {
    name: 'Khairul Azmi',
    role: 'University Student',
    rating: 5,
    text: 'RM2.50 for a donut this good?! That is genuinely the best value in Malaysia. Friends from my campus have all become loyal customers now.',
    initials: 'KA',
    color: '#3D1F08',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Made with Love',
    desc: 'Every donut is handcrafted fresh daily using premium ingredients sourced locally.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Halal Certified',
    desc: 'All ingredients and processes are fully halal certified for your peace of mind.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Fresh Daily',
    desc: 'We bake in small batches throughout the day — your donut is never more than hours old.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Home Delivery',
    desc: 'Order online and get fresh milky donuts delivered right to your doorstep.',
  },
]

export default function HomePage() {
  const [orderQty, setOrderQty] = useState(1)

  return (
    <div style={{ background: 'var(--cream)' }}>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* Background shapes */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, var(--beige) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-15"
          style={{ border: '60px solid var(--beige)' }}
        />
        <div
          className="absolute bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
          style={{ border: '40px solid var(--brown-light)' }}
        />

        {/* Floating dots */}
        {([
          { top: '15%', left: '5%', size: 8, delay: '0s' },
          { top: '70%', left: '8%', size: 5, delay: '1s' },
          { top: '30%', right: '15%', size: 6, delay: '2s' },
          { top: '75%', right: '8%', size: 10, delay: '0.5s' },
        ] as Array<{ top: string; left?: string; right?: string; size: number; delay: string }>).map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              width: dot.size,
              height: dot.size,
              background: 'var(--brown-light)',
              opacity: 0.4,
              animationDelay: dot.delay,
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1">
              <div className="section-label mb-6 animate-fade-up" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                — Est. 2023 · Kuala Lumpur
              </div>

              <h1
                className="mb-6 animate-fade-up delay-100"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: 'var(--brown-dark)',
                  opacity: 0,
                  animationFillMode: 'forwards',
                }}
              >
                The Donut<br />
                <em style={{ color: 'var(--brown-light)', fontStyle: 'italic' }}>That Dreams</em><br />
                Are Made Of
              </h1>

              <p
                className="mb-8 animate-fade-up delay-200"
                style={{
                  color: 'var(--text-mid)',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  maxWidth: '440px',
                  opacity: 0,
                  animationFillMode: 'forwards',
                }}
              >
                Pillowy soft, glazed in silky milk cream, and dusted with just the right amount of love. Our signature Milky Donut is unlike anything you have ever tasted.
              </p>

              <div
                className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300"
                style={{ opacity: 0, animationFillMode: 'forwards' }}
              >
                <a href="#product" className="btn-primary">
                  Discover Our Donut
                </a>
                <a href="#testimonials" className="btn-outline">
                  Read Reviews
                </a>
              </div>

              {/* Stats row */}
              <div
                className="flex gap-8 animate-fade-up delay-400"
                style={{ opacity: 0, animationFillMode: 'forwards' }}
              >
                {[
                  { value: '10K+', label: 'Donuts Sold' },
                  { value: '4.9★', label: 'Rating' },
                  { value: 'RM2.50', label: 'Per Piece' },
                ].map(stat => (
                  <div key={stat.value}>
                    <div
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.6rem',
                        fontWeight: 600,
                        color: 'var(--brown)',
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-light)', letterSpacing: '0.05em' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: donut */}
            <div className="order-1 lg:order-2 flex items-center justify-center relative">
              {/* Circular text */}
              <div className="absolute w-80 h-80 animate-spin-slow" style={{ opacity: 0.25 }}>
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <path id="circlePath" d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" fill="none"/>
                  <text style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '4px', fill: 'var(--brown)' }}>
                    <textPath href="#circlePath">
                      MILKYDONUT.CO · HANDCRAFTED DAILY · KUALA LUMPUR ·
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Donut */}
              <div className="relative z-10">
                <DonutSVG
                  className="animate-float w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-2xl"
                />
              </div>
              {/* Price tag */}
              <div
                className="absolute bottom-4 right-4 md:bottom-8 md:right-0 rotate-3 p-4 rounded"
                style={{ background: 'var(--brown-dark)', color: 'var(--cream)' }}
              >
                <div className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--brown-light)' }}>Per piece</div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', lineHeight: 1 }}>RM 2.50</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest" style={{ color: 'var(--text-light)', fontFamily: 'DM Sans' }}>SCROLL</span>
          <div className="w-px h-8 animate-bounce" style={{ background: 'var(--brown-light)' }} />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="py-4 overflow-hidden"
        style={{ background: 'var(--brown)', color: 'var(--cream)' }}
      >
        <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 px-8 text-sm tracking-widest uppercase" style={{ color: 'var(--beige)' }}>
              <span>Milky Donut</span>
              <span style={{ color: 'var(--gold-light)' }}>✦</span>
              <span>RM2.50 Per Piece</span>
              <span style={{ color: 'var(--gold-light)' }}>✦</span>
              <span>Fresh Daily</span>
              <span style={{ color: 'var(--gold-light)' }}>✦</span>
              <span>Halal Certified</span>
              <span style={{ color: 'var(--gold-light)' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6" style={{ background: 'var(--beige-light)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="text-center p-6 rounded card-hover"
                style={{ background: 'var(--cream)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'var(--beige)', color: 'var(--brown)' }}
                >
                  {f.icon}
                </div>
                <h3
                  className="mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--brown-dark)' }}
                >
                  {f.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section id="product" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Our Signature</div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                color: 'var(--brown-dark)',
                lineHeight: 1.2,
              }}
            >
              The One & Only<br />
              <em style={{ color: 'var(--brown-light)' }}>Milky Donut</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Donut showcase */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute w-72 h-72 rounded-full"
                style={{ background: 'radial-gradient(circle, var(--beige) 0%, transparent 70%)' }}
              />
              <div className="relative">
                <DonutSVG className="w-72 h-72 drop-shadow-2xl animate-float" />
                {/* Ingredient tags */}
                {[
                  { label: 'Milk Glaze', pos: { top: '5%', left: '-10%' } },
                  { label: 'Soft Dough', pos: { top: '40%', right: '-15%' } },
                  { label: 'Sprinkles', pos: { bottom: '10%', left: '0%' } },
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="absolute text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: 'var(--brown-dark)',
                      color: 'var(--cream)',
                      ...tag.pos,
                      fontFamily: 'DM Sans',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div>
              <div className="section-label mb-4">Product Details</div>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.8rem',
                  fontWeight: 600,
                  color: 'var(--brown-dark)',
                  lineHeight: 1.1,
                }}
              >
                Milky Donut
              </h3>

              <p
                className="mb-6 leading-relaxed"
                style={{ color: 'var(--text-mid)', fontSize: '1rem' }}
              >
                Our signature creation — a pillowy-soft ring of dough, lovingly glazed with our house-made milk cream that sets into the silkiest coat you have ever encountered. Every bite dissolves into warmth, sweetness, and a subtle milky richness that keeps you coming back.
              </p>

              {/* Qualities */}
              <ul className="space-y-3 mb-8">
                {[
                  'Hand-rolled & shaped daily by our artisan bakers',
                  'Double-proofed for an extra-pillowy texture',
                  'Glazed with pure fresh milk cream reduction',
                  'Topped with handpicked colourful sprinkles',
                  'No artificial preservatives or flavourings',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-mid)' }}>
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--beige)', color: 'var(--brown)' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price & Order */}
              <div
                id="order"
                className="p-6 rounded"
                style={{ background: 'var(--beige-light)', border: '1px solid var(--beige-dark)' }}
              >
                <div className="flex items-end gap-2 mb-4">
                  <span
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '3rem',
                      fontWeight: 700,
                      color: 'var(--brown)',
                      lineHeight: 1,
                    }}
                  >
                    RM 2.50
                  </span>
                  <span className="text-sm mb-2" style={{ color: 'var(--text-light)' }}>/ piece</span>
                </div>

                {/* Quantity selector */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm" style={{ color: 'var(--text-mid)' }}>Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setOrderQty(Math.max(1, orderQty - 1))}
                      className="w-8 h-8 rounded flex items-center justify-center font-bold transition-colors"
                      style={{ background: 'var(--beige-dark)', color: 'var(--brown-dark)' }}
                    >
                      −
                    </button>
                    <span
                      className="w-8 text-center font-semibold"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--brown-dark)' }}
                    >
                      {orderQty}
                    </span>
                    <button
                      onClick={() => setOrderQty(orderQty + 1)}
                      className="w-8 h-8 rounded flex items-center justify-center font-bold transition-colors"
                      style={{ background: 'var(--beige-dark)', color: 'var(--brown-dark)' }}
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-semibold ml-auto" style={{ color: 'var(--brown)' }}>
                    Total: RM {(orderQty * 2.50).toFixed(2)}
                  </span>
                </div>

                <a
                  href={`https://wa.me/601112345678?text=Hi! I would like to order ${orderQty} pcs of Milky Donut (RM${(orderQty * 2.50).toFixed(2)})`}
                  className="btn-primary w-full justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT'S MADE ── */}
      <section className="py-20 px-6" style={{ background: 'var(--brown-dark)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label mb-4" style={{ color: 'var(--brown-light)' }}>The Process</div>
          <h2
            className="mb-16"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: 'var(--cream)',
            }}
          >
            From Our Kitchen<br />
            <em style={{ color: 'var(--gold-light)' }}>to Your Hands</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Mix', desc: 'Premium flour, fresh milk, and a secret blend of spices kneaded to perfection.' },
              { step: '02', title: 'Rest', desc: 'The dough double-proofs for 2 hours to achieve our signature pillowy softness.' },
              { step: '03', title: 'Fry', desc: 'Each ring is golden-fried in clean oil at the precise temperature for even cooking.' },
              { step: '04', title: 'Glaze', desc: 'Dunked in silky milk cream glaze, then finished with vibrant sprinkles by hand.' },
            ].map((step, i) => (
              <div key={i} className="text-left">
                <div
                  className="text-5xl font-bold mb-3 opacity-30"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--beige)' }}
                >
                  {step.step}
                </div>
                <h4
                  className="mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', color: 'var(--cream)' }}
                >
                  {step.title}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-light)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">What They Say</div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 600,
                color: 'var(--brown-dark)',
              }}
            >
              Loved by{' '}
              <em style={{ color: 'var(--brown-light)' }}>Thousands</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 rounded card-hover"
                style={{
                  background: i % 3 === 2 ? 'var(--brown-dark)' : 'var(--beige-light)',
                  border: '1px solid var(--beige-dark)',
                }}
              >
                <StarRating count={t.rating} />
                <p
                  className="mb-6 leading-relaxed text-sm"
                  style={{
                    color: i % 3 === 2 ? 'var(--beige-light)' : 'var(--text-mid)',
                    fontStyle: 'italic',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.05rem',
                  }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{
                        color: i % 3 === 2 ? 'var(--cream)' : 'var(--brown-dark)',
                        fontFamily: 'DM Sans',
                      }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: i % 3 === 2 ? 'var(--brown-light)' : 'var(--text-light)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: 'var(--beige)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, var(--brown) 0px, var(--brown) 1px, transparent 1px, transparent 40px)',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="section-label mb-4">Ready to Indulge?</div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: 'var(--brown-dark)',
            }}
          >
            Order Your Milky Donuts Today
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'var(--text-mid)', lineHeight: 1.8 }}>
            Available for pick-up and delivery. WhatsApp us to place your order — minimum 6 pieces per order.
          </p>
          <a
            href="https://wa.me/601112345678?text=Hi! I want to order Milky Donuts"
            className="btn-primary text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  )
}
