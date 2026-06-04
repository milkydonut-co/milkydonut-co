import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team')({
  component: TeamPage,
})

const teamMembers = [
  {
    id: 1,
    name: 'Nur Aisyah Razak',
    role: 'Founder & CEO',
    bio: 'The visionary behind MilkyDonut.co. Aisyah turned her grandmother\'s donut recipe into a beloved brand after years of perfecting the milky glaze formula.',
    canva: '#',
    initials: 'NA',
    color: '#7C4A1E',
    bgColor: '#E8D5B5',
    achievement: 'Grew brand from home kitchen to 10K+ monthly sales',
    icon: '🏆',
  },
  {
    id: 2,
    name: 'Muhammad Hakim',
    role: 'Head of Operations',
    bio: 'Hakim oversees all production workflows, supplier relationships, and logistics to ensure every donut reaches customers fresh and on time.',
    canva: '#',
    initials: 'MH',
    color: '#5C3317',
    bgColor: '#D4BC95',
    achievement: 'Optimized production by 40%, reducing waste to under 2%',
    icon: '⚙️',
  },
  {
    id: 3,
    name: 'Siti Fatimah Ibrahim',
    role: 'Head Baker & Recipe Developer',
    bio: 'With 8 years of pastry arts experience, Fatimah is the architect of our signature dough and glaze. She trains every baker to uphold our gold standard.',
    canva: '#',
    initials: 'SF',
    color: '#C4956A',
    bgColor: '#F2E8D5',
    achievement: 'Developed 12 seasonal donut variations, all sold out within hours',
    icon: '👩‍🍳',
  },
  {
    id: 4,
    name: 'Ahmad Firdaus Ismail',
    role: 'Marketing Director',
    bio: 'Firdaus leads our digital storytelling and brand voice. He built our social media presence from zero to 50K organic followers in 18 months.',
    canva: '#',
    initials: 'AF',
    color: '#3D1F08',
    bgColor: '#C4956A',
    achievement: 'Grew Instagram following from 0 to 50K in 18 months',
    icon: '📈',
  },
  {
    id: 5,
    name: 'Nurul Ain Hassan',
    role: 'Customer Relations Manager',
    bio: 'Ain is the warm voice behind every customer interaction. She ensures every order, query, and feedback is handled with genuine care and speed.',
    canva: '#',
    initials: 'NA',
    color: '#7C4A1E',
    bgColor: '#E8D5B5',
    achievement: 'Maintained 4.9-star rating across 1,000+ verified reviews',
    icon: '⭐',
  },
  {
    id: 6,
    name: 'Mohd Rizwan Kamaruddin',
    role: 'Sales & Partnerships Manager',
    bio: 'Rizwan drives B2B sales and corporate partnerships. He secured our first three café distribution deals that tripled monthly revenue.',
    canva: '#',
    initials: 'MR',
    color: '#5C3317',
    bgColor: '#D4BC95',
    achievement: 'Secured 8 corporate partnership deals worth RM120K annually',
    icon: '🤝',
  },
  {
    id: 7,
    name: 'Amirah Osman',
    role: 'Creative Director & Designer',
    bio: 'Amirah shapes everything you see — from packaging design to the website aesthetic. Her eye for beauty keeps the brand consistently stunning.',
    canva: '#',
    initials: 'AO',
    color: '#C4956A',
    bgColor: '#F2E8D5',
    achievement: 'Designed award-winning packaging featured in Kuali magazine',
    icon: '🎨',
  },
  {
    id: 8,
    name: 'Khairul Nizam Abdullah',
    role: 'Quality Assurance Lead',
    bio: 'Nizam\'s meticulous standards ensure every batch meets our exacting requirements. He developed our 47-point quality checklist used daily.',
    canva: '#',
    initials: 'KN',
    color: '#3D1F08',
    bgColor: '#C4956A',
    achievement: 'Zero food safety incidents across 3 years of operations',
    icon: '🔬',
  },
]

function AvatarSVG({ initials, color, bgColor }: { initials: string; color: string; bgColor: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <circle cx="100" cy="100" r="100" fill={bgColor} />
      {/* Decorative circles */}
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="1" opacity="0.2" />
      <circle cx="100" cy="100" r="75" stroke={color} strokeWidth="0.5" opacity="0.15" />
      {/* Body silhouette */}
      <circle cx="100" cy="75" r="32" fill={color} opacity="0.85" />
      <ellipse cx="100" cy="175" rx="55" ry="40" fill={color} opacity="0.7" />
      {/* Initials */}
      <text
        x="100"
        y="83"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="26"
        fontFamily="Cormorant Garamond, serif"
        fontWeight="600"
      >
        {initials}
      </text>
      {/* Decorative dot */}
      <circle cx="150" cy="50" r="8" fill={color} opacity="0.4" />
      <circle cx="165" cy="35" r="4" fill={color} opacity="0.25" />
      <circle cx="40" cy="160" r="6" fill={color} opacity="0.3" />
    </svg>
  )
}

export default function TeamPage() {
  return (
    <div style={{ background: 'var(--cream)', paddingTop: '80px' }}>
      {/* Header */}
      <section
        className="py-20 px-6 text-center relative overflow-hidden"
        style={{ background: 'var(--brown-dark)' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-10"
          style={{ border: '50px solid var(--brown-light)' }}
        />
        <div
          className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-10"
          style={{ border: '35px solid var(--brown-light)' }}
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="section-label mb-6" style={{ color: 'var(--brown-light)' }}>The People Behind the Donuts</div>
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
            Meet Our{' '}
            <em style={{ color: 'var(--gold-light)' }}>Wonderful</em>{' '}
            Team
          </h1>
          <p style={{ color: 'var(--text-light)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8, fontSize: '1rem' }}>
            Eight passionate individuals who pour their hearts into every single donut we make. From bakers to brand builders — this is the crew that makes MilkyDonut.co extraordinary.
          </p>
        </div>
      </section>

      {/* Team count strip */}
      <div
        className="py-6 px-6"
        style={{ background: 'var(--beige)', borderBottom: '1px solid var(--beige-dark)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { value: '8', label: 'Team Members' },
            { value: '3+', label: 'Years Together' },
            { value: '10K+', label: 'Donuts Made' },
            { value: '100%', label: 'Passion' },
          ].map(stat => (
            <div key={stat.value}>
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--brown)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.id}
                className="rounded overflow-hidden card-hover group"
                style={{ background: 'var(--beige-light)', border: '1px solid var(--beige-dark)' }}
              >
                {/* Avatar */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: '220px', background: member.bgColor }}
                >
                  <div className="w-full h-full">
                    <AvatarSVG initials={member.initials} color={member.color} bgColor={member.bgColor} />
                  </div>
                  {/* Achievement badge on hover */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: 'rgba(60, 30, 10, 0.88)' }}
                  >
                    <div className="text-2xl mb-2">{member.icon}</div>
                    <div
                      className="text-xs leading-relaxed font-medium"
                      style={{ color: 'var(--beige-light)', fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontStyle: 'italic' }}
                    >
                      "{member.achievement}"
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div
                    className="mb-0.5"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--brown-dark)',
                    }}
                  >
                    {member.name}
                  </div>
                  <div className="text-xs mb-3 font-medium" style={{ color: 'var(--brown-light)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {member.role}
                  </div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-mid)' }}>
                    {member.bio}
                  </p>

                  {/* Canva portfolio link */}
                  <a
                    href={member.canva}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--brown)', textDecoration: 'none', letterSpacing: '0.05em' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    View Portfolio
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-20 px-6" style={{ background: 'var(--beige-light)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="section-label mb-4">What Drives Us</div>
          <h2
            className="mb-12"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: 'var(--brown-dark)',
            }}
          >
            Our Team Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Craftsmanship',
                desc: 'We take pride in the process. Every step from mixing to glazing is done with intention and skill.',
                symbol: '✦',
              },
              {
                title: 'Togetherness',
                desc: 'Our team is our family. We celebrate wins together and support each other through challenges.',
                symbol: '◈',
              },
              {
                title: 'Excellence',
                desc: 'Good enough is never enough. We push our standards higher with every batch we bake.',
                symbol: '◉',
              },
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl mb-4"
                  style={{ color: 'var(--brown-light)', fontFamily: 'serif' }}
                >
                  {v.symbol}
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--brown-dark)' }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: 'var(--brown)' }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 600,
              color: 'var(--cream)',
            }}
          >
            Want to Join Our Team?
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>
            We are always looking for passionate people who love food, people, and excellence. Drop us a message!
          </p>
          <a
            href="mailto:careers@milkydonut.co"
            className="btn-outline"
            style={{ borderColor: 'var(--beige-dark)', color: 'var(--cream)' }}
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
