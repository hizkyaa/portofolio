import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  'Creative',
  'Fast Learner',
  'Disciplined',
  'Responsible',
  'Adaptive',
  'Consistent',
  'Detail Oriented',
  'Growth Minded',
  'Open to Feedback',
];

export default function Values() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.04, translateY: 10 });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="mx-auto px-6 text-center" style={{ maxWidth: 'var(--content-max)' }}>
        <span
          data-reveal
          className="font-mono text-[11px] tracking-[0.15em] uppercase"
          style={{ color: '#9A9A9A' }}
        >
          VALUES
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
          What Drives Me
        </h2>

        <div className="flex flex-wrap justify-center gap-3.5 mt-12">
          {values.map((v) => (
            <span
              key={v}
              data-reveal
              className="px-6 py-3 text-sm transition-all duration-200 cursor-default"
              style={{
                border: '1px solid #E5E5E5',
                borderRadius: '100px',
                color: '#1A1A1A',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = '#1A1A1A';
                el.style.color = '#FFFFFF';
                el.style.borderColor = '#1A1A1A';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = 'transparent';
                el.style.color = '#1A1A1A';
                el.style.borderColor = '#E5E5E5';
              }}
            >
              {v}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
