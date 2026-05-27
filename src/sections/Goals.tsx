import { useScrollReveal } from '../hooks/useScrollReveal';

const goals = [
  {
    num: '01',
    title: 'Success in the Creative Industry',
    desc: 'Building a career doing what I love — creating visual stories and digital experiences that make an impact.',
  },
  {
    num: '02',
    title: 'Double-Digit Income at a Young Age',
    desc: 'Turning passion into profession, achieving financial independence through creative work before adulthood.',
  },
  {
    num: '03',
    title: 'Mastery in Videography & Photography',
    desc: 'Deepening expertise in visual storytelling, from capturing moments to crafting cinematic narratives.',
  },
  {
    num: '04',
    title: 'Making My Parents Proud',
    desc: 'Honoring the hard work and sacrifice of my parents by building a successful future they can be proud of.',
  },
];

export default function Goals() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.1, translateY: 20 });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#0A0A0A',
        paddingTop: 'var(--section-pad)',
        paddingBottom: 'var(--section-pad)',
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--content-max)' }}>
        <span
          data-reveal
          className="font-mono text-[11px] tracking-[0.15em] uppercase"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          VISION
        </span>
        <h2
          data-reveal
          className="font-semibold mt-4"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
            color: '#FFFFFF',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Where I'm Headed
        </h2>

        <div className="flex flex-col gap-6 mt-12" style={{ maxWidth: 700 }}>
          {goals.map((g) => (
            <div
              key={g.num}
              data-reveal
              className="flex items-start gap-5"
            >
              <span
                className="font-mono text-[13px] flex-shrink-0"
                style={{
                  color: 'rgba(255,255,255,0.3)',
                  width: '32px',
                }}
              >
                {g.num}
              </span>
              <div>
                <h3
                  className="font-medium"
                  style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                    color: '#FFFFFF',
                  }}
                >
                  {g.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed mt-1"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
