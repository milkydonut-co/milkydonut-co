import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

/* ──────────────────────────────────────────────────────────────────────────
   CONTENT CONFIG
   Paste the real image URLs and profile links below. Leave a value as an
   empty string ('') and the page will show an on-brand "coming soon"
   placeholder in its place — the layout stays intact either way.
   ────────────────────────────────────────────────────────────────────────── */

// Product showcase photo
const PRODUCT_IMAGE = '' // [PASTE PRODUCT PHOTO LINK]

// Marketing channels — screenshot preview + profile link per platform
const channels = [
  {
    platform: 'TikTok',
    image: 'https://imgur.com/a/hcn6wTw#iXGQpXV',
    link: 'https://www.tiktok.com/@milky.donut.co',
  },
  {
    platform: 'Instagram',
    image: '', // [PASTE INSTAGRAM SCREENSHOT IMAGE LINK]
    link: '', // [PASTE INSTAGRAM PROFILE LINK]
  },
  {
    platform: 'Facebook',
    image: '', // [PASTE FACEBOOK SCREENSHOT IMAGE LINK]
    link: '', // [PASTE FACEBOOK PROFILE LINK]
  },
]

// Financial statements — title + image preview per statement
const statements = [
  {
    title: 'Revenue Statement',
    image: '', // [PASTE REVENUE STATEMENT IMAGE LINK]
  },
  {
    title: 'Balance Sheet',
    image: '', // [PASTE BALANCE SHEET IMAGE LINK]
  },
  {
    title: 'Cash Flow Statement',
    image: '', // [PASTE CASH FLOW STATEMENT IMAGE LINK]
  },
]

const missions = [
  'To produce high-quality milk-based donuts by maintaining authentic taste while incorporating innovative flavors, using only fresh and premium ingredients.',
  'To provide a pleasant, efficient, and customer-oriented service experience through professional and attentive service.',
]

/* On-brand placeholder shown when an image link has not been pasted yet. */
function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="upload-zone w-full h-full flex flex-col items-center justify-center text-center p-8"
      style={{ minHeight: '220px' }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--brown-light)" strokeWidth="1.5" className="mb-3">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <div className="text-xs" style={{ color: 'var(--text-light)', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </div>
  )
}

function ChannelIcon({ platform }: { platform: string }) {
  if (platform === 'Instagram') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
  if (platform === 'Facebook') return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--cream)', paddingTop: '80px' }}>
      {/* ── HEADER ── */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: 'var(--brown-dark)' }}
      >
        <div
          className="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-10"
          style={{ border: '50px solid var(--brown-light)' }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-10"
          style={{ border: '35px solid var(--brown-light)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="section-label mb-6" style={{ color: 'var(--brown-light)' }}>Get to Know Us</div>
          <h1
            className="mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 600,
              color: 'var(--cream)',
              lineHeight: 1.15,
            }}
          >
            About{' '}
            <em style={{ color: 'var(--gold-light)' }}>Milky Donut</em>
          </h1>
          <p style={{ color: 'var(--text-light)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8, fontSize: '1rem' }}>
            Our purpose, our signature product, where to find us, and how the business is doing — all in one place.
          </p>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">What We Stand For</div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                color: 'var(--brown-dark)',
                lineHeight: 1.2,
              }}
            >
              Vision &amp; <em style={{ color: 'var(--brown-light)' }}>Mission</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Vision */}
            <div
              className="p-8 md:p-10 rounded card-hover h-full"
              style={{ background: 'var(--brown-dark)', color: 'var(--cream)' }}
            >
              <div className="section-label mb-4" style={{ color: 'var(--brown-light)' }}>Our Vision</div>
              <h3
                className="mb-5"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--cream)' }}
              >
                Where We&apos;re Headed
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--beige-light)', fontSize: '1.02rem', lineHeight: 1.8 }}>
                Milky Donut.co aspires to become a leading milk-based donut brand by offering high-quality products
                that are soft, fresh, and rich in flavor, while consistently meeting customer expectations.
              </p>
            </div>

            {/* Mission */}
            <div
              className="p-8 md:p-10 rounded card-hover h-full"
              style={{ background: 'var(--beige-light)', border: '1px solid var(--beige-dark)' }}
            >
              <div className="section-label mb-4">Our Mission</div>
              <h3
                className="mb-5"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 600, color: 'var(--brown-dark)' }}
              >
                How We Get There
              </h3>
              <ul className="space-y-4">
                {missions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-mid)', lineHeight: 1.7 }}>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: 'var(--beige)', color: 'var(--brown)', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      {String.fromCharCode(97 + i)}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT ── */}
      <section className="py-24 px-6" style={{ background: 'var(--beige-light)' }}>
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
              The <em style={{ color: 'var(--brown-light)' }}>Milky Donut</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Product image */}
            <div
              className="rounded overflow-hidden"
              style={{ background: 'var(--cream)', border: '1px solid var(--beige-dark)' }}
            >
              {PRODUCT_IMAGE ? (
                <img
                  src={PRODUCT_IMAGE}
                  alt="Freshly prepared milky donuts coated in premium milk powder"
                  className="w-full h-auto block"
                />
              ) : (
                <ImagePlaceholder label="Product photo coming soon" />
              )}
            </div>

            {/* Product description */}
            <div>
              <div className="section-label mb-4">Product Details</div>
              <h3
                className="mb-5"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.6rem',
                  fontWeight: 600,
                  color: 'var(--brown-dark)',
                  lineHeight: 1.1,
                }}
              >
                Soft, Fresh &amp; Creamy
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-mid)', fontSize: '1.02rem', lineHeight: 1.8 }}>
                The milky donuts are freshly prepared by our trusted supplier, utilizing high-quality ingredients to
                guarantee that every serving delivers a satisfying experience for our valued customers. Each donut
                features an exceptionally fluffy and light texture, generously coated with premium milk powder that
                provides a harmonious balance of creamy and sweet flavours. We maintain stringent quality control by
                collaborating with suppliers who prioritize hygiene and the use of superior raw materials to ensure
                excellence in every bite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKETING CHANNELS ── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Find Us Online</div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                color: 'var(--brown-dark)',
                lineHeight: 1.2,
              }}
            >
              Our <em style={{ color: 'var(--brown-light)' }}>Channels</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((channel) => {
              const href = channel.link || '#'
              return (
                <a
                  key={channel.platform}
                  href={href}
                  target={channel.link ? '_blank' : undefined}
                  rel={channel.link ? 'noopener noreferrer' : undefined}
                  className="rounded overflow-hidden card-hover group block"
                  style={{ background: 'var(--beige-light)', border: '1px solid var(--beige-dark)', textDecoration: 'none' }}
                >
                  {/* Screenshot preview */}
                  <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--beige-dark)' }}>
                    {channel.image ? (
                      <img
                        src={channel.image}
                        alt={`${channel.platform} profile preview`}
                        className="w-full h-auto block"
                      />
                    ) : (
                      <ImagePlaceholder label={`${channel.platform} screenshot coming soon`} />
                    )}
                  </div>

                  {/* Card footer */}
                  <div className="p-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--beige)', color: 'var(--brown)' }}
                      >
                        <ChannelIcon platform={channel.platform} />
                      </span>
                      <span
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1.3rem',
                          fontWeight: 600,
                          color: 'var(--brown-dark)',
                        }}
                      >
                        {channel.platform}
                      </span>
                    </div>
                    <span
                      className="flex items-center gap-2 text-xs font-medium transition-all duration-200 group-hover:gap-3"
                      style={{ color: 'var(--brown)', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                    >
                      Visit
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINANCIAL STATEMENT ── */}
      <section className="py-24 px-6" style={{ background: 'var(--beige-light)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label mb-4">The Numbers</div>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 600,
                color: 'var(--brown-dark)',
                lineHeight: 1.2,
              }}
            >
              Financial <em style={{ color: 'var(--brown-light)' }}>Statement</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statements.map((statement) => (
              <div
                key={statement.title}
                className="rounded overflow-hidden card-hover"
                style={{ background: 'var(--cream)', border: '1px solid var(--beige-dark)' }}
              >
                {/* Title bar */}
                <div className="px-5 py-4" style={{ background: 'var(--beige)', borderBottom: '1px solid var(--beige-dark)' }}>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: 'var(--brown-dark)',
                      lineHeight: 1.2,
                    }}
                  >
                    {statement.title}
                  </h3>
                </div>
                {/* Image preview */}
                <div>
                  {statement.image ? (
                    <img
                      src={statement.image}
                      alt={statement.title}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <ImagePlaceholder label={`${statement.title} coming soon`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
