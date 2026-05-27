import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.15, stagger: 0.1 });

  return (
    <section
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
          EXPERIENCE
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
          My Journey So Far
        </h2>

        {/* Timeline */}
        <div className="relative mt-12" style={{ maxWidth: 700 }}>
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ backgroundColor: '#F0F0F0' }}
          />

          {/* Timeline Entry */}
          <div data-reveal className="relative flex items-start">
            {/* Node */}
            <div
              className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5 relative"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #1A1A1A',
                marginLeft: '18px',
                zIndex: 2,
              }}
            />

            {/* Card */}
            <div
              className="ml-10 flex-1"
              style={{
                backgroundColor: '#F5F5F7',
                border: '1px solid #E5E5E5',
                borderRadius: '12px',
                padding: 'var(--card-pad)',
              }}
            >
              <span
                className="font-mono text-[11px]"
                style={{ color: '#9A9A9A' }}
              >
                2025 — 2026
              </span>
              <h3
                className="font-medium mt-2"
                style={{
                  fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                  color: '#1A1A1A',
                }}
              >
                Multimedia Team — SMPK Santyu
              </h3>
              <span
                className="font-mono text-[13px] block mt-1"
                style={{ color: '#6B6B6B' }}
              >
                Leader / Editor
              </span>
              <p
                className="text-[15px] leading-relaxed mt-4"
                style={{ color: '#6B6B6B' }}
              >
                Led the school's creative team and produced various promotional videos,
                documentaries, and short movies with a modern cinematic style.
              </p>
              <div
                className="mt-4 pl-4"
                style={{ borderLeft: '2px solid #1A1A1A' }}
              >
                <p
                  className="text-[15px] leading-relaxed italic"
                  style={{ color: '#1A1A1A' }}
                >
                  "Nearly all school videos were produced by the multimedia team."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
