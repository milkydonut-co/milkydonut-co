import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Link, useRouterState } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'MilkyDonut.co — Handcrafted Milky Donuts' },
      { name: 'description', content: 'MilkyDonut.co' },
    ],
  }),
  shellComponent: RootDocument,
})

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/team', label: 'Our Team' },
    { to: '/gallery', label: 'Gallery' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(253, 246, 236, 0.95)' : 'rgba(253, 246, 236, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(212, 188, 149, 0.3)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
            style={{ background: 'var(--brown)' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="white" opacity="0.3"/>
              <circle cx="12" cy="12" r="2" fill="white"/>
            </svg>
          </div>
          <div>
            <div
              className="font-semibold tracking-wide leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: 'var(--brown-dark)' }}
            >
              MilkyDonut
            </div>
            <div
              className="text-xs tracking-widest leading-none"
              style={{ fontFamily: 'DM Sans, sans-serif', color: 'var(--text-light)', fontSize: '0.6rem', letterSpacing: '0.2em' }}
            >
              .CO
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${currentPath === link.to ? 'active' : ''}`}
              style={{ color: currentPath === link.to ? 'var(--brown)' : undefined }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#order"
            className="btn-primary text-xs"
          >
            Order Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--brown)',
              transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--brown)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              background: 'var(--brown)',
              transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          background: 'rgba(253, 246, 236, 0.98)',
          borderTop: menuOpen ? '1px solid rgba(212, 188, 149, 0.3)' : 'none',
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="#order" className="btn-primary text-center mt-2" onClick={() => setMenuOpen(false)}>
            Order Now
          </a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'var(--brown-dark)', color: 'var(--beige-light)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10"
        style={{ border: '40px solid var(--brown-light)' }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
        style={{ border: '30px solid var(--brown-light)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: 'var(--cream)' }}
            >
              MilkyDonut.co
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-light)', maxWidth: '320px' }}>
              Handcrafted with love, every milky donut is made fresh daily — pillowy soft, glazed to perfection, and bursting with creamy goodness.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'tiktok'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(196, 149, 106, 0.2)', color: 'var(--brown-light)' }}
                  aria-label={platform}
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="section-label mb-5" style={{ color: 'var(--brown-light)' }}>Quick Links</div>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/team', label: 'Our Team' },
                { to: '/gallery', label: 'Gallery' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors duration-200 hover:text-cream"
                    style={{ color: 'var(--text-light)', textDecoration: 'none' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label mb-5" style={{ color: 'var(--brown-light)' }}>Contact Us</div>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--text-light)' }}>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Universiti Malaysia Sabah
Jalan UMS, 88400 Kota Kinabalu
Sabah, Malaysia</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <a href="https://wa.me/601112345678" className="hover:text-cream transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +60 11-1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href="mailto:hello@milkydonut.co" className="hover:text-cream transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>
                  hello@milkydonut.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon–Fri: 9am – 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(196, 149, 106, 0.2)', color: 'var(--text-light)' }}
        >
          <span>© 2025 MilkyDonut.co — All rights reserved.</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: 'var(--brown-light)' }}>
            Made with love & cream
          </span>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === 'instagram') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
  if (platform === 'facebook') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="noise-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
