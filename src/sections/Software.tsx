import { useScrollReveal } from '../hooks/useScrollReveal';
import { Clapperboard, Smartphone, Sun, Figma, Code, Palette } from 'lucide-react';

const software = [
  { name: 'After Effects', icon: Clapperboard },
  { name: 'CapCut', icon: Smartphone },
  { name: 'Alight Motion', icon: Smartphone },
  { name: 'Lightroom', icon: Sun },
  { name: 'Figma', icon: Figma },
  { name: 'VS Code', icon: Code },
  { name: 'Canva', icon: Palette },
];

export default function Software() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.04 });

  return (
    <section
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#F5F5F7',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: 'var(--content-max)' }}>
        <span
          data-reveal
          className="font-mono text-[11px] tracking-[0.15em] uppercase"
          style={{ color: '#9A9A9A' }}
        >
          TOOLS
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
          Software I Work With
        </h2>

        <div
          className="grid gap-4 mt-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}
        >
          {software.map((sw) => {
            const Icon = sw.icon;
            return (
              <div
                key={sw.name}
                data-reveal
                className="flex flex-col items-center justify-center aspect-square transition-all duration-200 cursor-default"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  borderRadius: '12px',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = '#1A1A1A';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)';
                  const icon = el.querySelector('svg');
                  if (icon) icon.style.color = '#1A1A1A';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = '#E5E5E5';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                  const icon = el.querySelector('svg');
                  if (icon) icon.style.color = '#6B6B6B';
                }}
              >
                <Icon size={24} style={{ color: '#6B6B6B', transition: 'color 200ms' }} />
                <span
                  className="font-mono text-[11px] mt-3 text-center"
                  style={{ color: '#6B6B6B' }}
                >
                  {sw.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
