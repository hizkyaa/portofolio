import { useScrollReveal } from '../hooks/useScrollReveal';

const hardSkills = [
  'Video Editing',
  'Motion Graphics',
  'Typography Editing',
  'Shortform Content',
  'Website Development',
  'Photography & Videography',
];

const softSkills = [
  'Communication',
  'Fast Response',
  'Teamwork',
  'Problem Solving',
  'Time Management',
  'Creativity',
  'Public Speaking',
  'Adaptability',
  'Attention to Detail',
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.04 });

  return (
    <section
      id="skills"
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
          SKILLS
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
          What I Bring to the Table
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Hard Skills */}
          <div data-reveal>
            <span
              className="font-mono text-[10px] tracking-[0.12em] uppercase block mb-5"
              style={{ color: '#9A9A9A' }}
            >
              HARD SKILLS
            </span>
            <div className="flex flex-col gap-3">
              {hardSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#1A1A1A' }}
                  />
                  <span className="text-[15px]" style={{ color: '#1A1A1A' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div data-reveal>
            <span
              className="font-mono text-[10px] tracking-[0.12em] uppercase block mb-5"
              style={{ color: '#9A9A9A' }}
            >
              SOFT SKILLS
            </span>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-[13px] transition-all duration-200 cursor-default"
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
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
