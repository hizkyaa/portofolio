import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Testimonial() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.2, stagger: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#F5F5F7',
        paddingTop: '100px',
        paddingBottom: '100px',
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--content-max)' }}>
        <span
          data-reveal
          className="font-mono text-[11px] tracking-[0.15em] uppercase block text-center"
          style={{ color: '#9A9A9A' }}
        >
          TESTIMONIAL
        </span>
        <h2
          data-reveal
          className="font-semibold mt-4 text-center"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            color: '#1A1A1A',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          What People Say
        </h2>

        <div
          data-reveal
          className="mx-auto mt-12"
          style={{
            maxWidth: 640,
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: '12px',
            padding: '48px',
          }}
        >
          <span
            className="block font-sans leading-none"
            style={{ fontSize: '64px', color: '#E5E5E5', marginBottom: '-16px' }}
          >
            &ldquo;
          </span>
          <p
            className="text-[17px] leading-[1.8] italic"
            style={{ color: '#1A1A1A' }}
          >
            Hizkya is incredibly ambitious — every task he gets, he tackles immediately.
            He can't stand being idle; there's always something he wants to create or improve.
          </p>
          <div
            className="mt-8 w-10 h-px"
            style={{ backgroundColor: '#E5E5E5' }}
          />
          <div className="mt-5">
            <h4
              className="font-medium"
              style={{
                fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                color: '#1A1A1A',
              }}
            >
              Donny
            </h4>
            <span
              className="font-mono text-[13px]"
              style={{ color: '#6B6B6B' }}
            >
              Teacher
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
