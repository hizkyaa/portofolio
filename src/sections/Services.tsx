import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    num: '01',
    title: 'Shortform Editing',
    desc: 'Fast-paced, engaging short videos optimized for TikTok, Reels, and Shorts. Designed to grab attention in the first second.',
  },
  {
    num: '02',
    title: 'Motion Graphics',
    desc: 'Animated graphics and visual effects that bring static designs to life with smooth, professional motion.',
  },
  {
    num: '03',
    title: 'Typography Editing',
    desc: 'Creative text animations and kinetic typography that make words part of the visual experience.',
  },
  {
    num: '04',
    title: 'Promotional Video',
    desc: 'High-impact promotional content that tells your brand story and drives engagement.',
  },
  {
    num: '05',
    title: 'Cinematic Editing',
    desc: 'Film-style editing with color grading, pacing, and atmosphere for emotional storytelling.',
  },
  {
    num: '06',
    title: 'Landing Page',
    desc: 'Clean, conversion-focused single-page websites built for speed and clarity.',
  },
  {
    num: '07',
    title: 'Company Profile',
    desc: 'Professional multi-page websites that establish credibility and showcase your business.',
  },
  {
    num: '08',
    title: 'UMKM Website',
    desc: 'Affordable, beautiful websites for small businesses looking to grow their online presence.',
  },
  {
    num: '09',
    title: 'Personal Portfolio',
    desc: 'Standout portfolio websites for creatives who want their work to speak for itself.',
  },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.06 });

  return (
    <section
      id="services"
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: 'var(--section-pad)',
        paddingBottom: 'var(--section-pad)',
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--content-max)' }}>
        <span
          data-reveal
          className="font-mono text-[11px] tracking-[0.15em] uppercase"
          style={{ color: '#9A9A9A' }}
        >
          SERVICES
        </span>
        <h2
          data-reveal
          className="font-semibold mt-4"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          How I Can Help You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div
              key={s.num}
              data-reveal
              className="p-7 transition-all duration-300 cursor-default"
              style={{
                backgroundColor: '#F5F5F7',
                border: '1px solid #E5E5E5',
                borderRadius: '12px',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)';
                el.style.borderColor = '#D0D0D0';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                el.style.borderColor = '#E5E5E5';
              }}
            >
              <span
                className="font-mono text-[11px] block mb-4"
                style={{ color: '#9A9A9A' }}
              >
                {s.num}
              </span>
              <h3
                className="font-medium"
                style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                  color: '#1A1A1A',
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm mt-2 leading-relaxed"
                style={{ color: '#6B6B6B' }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
