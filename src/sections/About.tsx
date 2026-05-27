import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.15, stagger: 0.08 });

  return (
    <section
      id="about"
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#F5F5F7',
        paddingTop: 'var(--section-pad)',
        paddingBottom: 'var(--section-pad)',
      }}
    >
      <div
        className="mx-auto px-6 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 items-start"
        style={{ maxWidth: 'var(--content-max)' }}
      >
        {/* Left Column - Text */}
        <div>
          <span
            data-reveal
            className="font-mono text-[11px] tracking-[0.15em] uppercase"
            style={{ color: '#9A9A9A' }}
          >
            ABOUT
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
            The Person Behind the Pixels
          </h2>
          <p
            data-reveal
            className="mt-6 text-[15px] leading-relaxed"
            style={{ color: '#6B6B6B', maxWidth: 520 }}
          >
            I'm a Video Editor and Web Developer focused on Shortform Content and Portfolio Websites.
            I have a deep passion for creative work and enjoy helping brands and clients through
            modern, fast, and high-quality visual work.
          </p>

          {/* Stats */}
          <div data-reveal className="flex flex-wrap gap-10 mt-12">
            <div>
              <span className="font-mono text-[13px]" style={{ color: '#1A1A1A' }}>15</span>
              <span
                className="block font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
                style={{ color: '#9A9A9A' }}
              >
                YEARS OLD
              </span>
            </div>
            <div>
              <span className="font-mono text-[13px]" style={{ color: '#1A1A1A' }}>Banyuwangi, East Java</span>
              <span
                className="block font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
                style={{ color: '#9A9A9A' }}
              >
                BASED IN
              </span>
            </div>
            <div>
              <span className="font-mono text-[13px]" style={{ color: '#1A1A1A' }}>Creative Multimedia Leader</span>
              <span
                className="block font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
                style={{ color: '#9A9A9A' }}
              >
                ROLE
              </span>
            </div>
            <div>
              <span className="font-mono text-[13px]" style={{ color: '#1A1A1A' }}>Minimalist & Cinematic</span>
              <span
                className="block font-mono text-[10px] tracking-[0.12em] uppercase mt-1"
                style={{ color: '#9A9A9A' }}
              >
                APPROACH
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div data-reveal className="md:sticky md:top-24">
          <div
            className="overflow-hidden"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: 'var(--card-pad)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
            }}
          >
            <div
              className="overflow-hidden"
              style={{ borderRadius: '8px', aspectRatio: '3/4' }}
            >
              <img
                src="/images/profile-photo.jpg"
                alt="Hizkya Aprilliano Dorantez"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-5">
              <h3
                className="font-medium"
                style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                  color: '#1A1A1A',
                }}
              >
                Hizkya A.D.
              </h3>
              <span
                className="font-mono text-xs mt-1 block"
                style={{ color: '#9A9A9A' }}
              >
                @huzkiy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
