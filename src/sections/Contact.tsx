import { useState } from 'react';
import { Mail, MessageCircle, Instagram } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

const contacts: ContactItem[] = [
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'hizkyaad@gmail.com',
    href: 'mailto:hizkyaad@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: '+62 823 3893 1790',
    href: 'https://wa.me/6282338931790',
  },
  {
    icon: Instagram,
    label: 'INSTAGRAM',
    value: '@doornteiz',
    href: 'https://instagram.com/doornteiz',
  },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com/doornteiz', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/6282338931790', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:hizkyaad@gmail.com', label: 'Email' },
];

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.1, stagger: 0.1 });
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (value: string, index: number) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: '#F5F5F7',
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
          GET IN TOUCH
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
          Let's Work Together
        </h2>
        <p
          data-reveal
          className="mt-6 text-[15px] leading-relaxed"
          style={{ color: '#6B6B6B', maxWidth: 480 }}
        >
          I'm open for freelance work, collaborations, and creative projects of any kind.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.label}
                data-reveal
                className="flex flex-col items-center text-center p-8"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  borderRadius: '12px',
                }}
              >
                <Icon size={24} style={{ color: '#6B6B6B' }} />
                <span
                  className="font-mono text-[10px] tracking-[0.12em] uppercase mt-4"
                  style={{ color: '#9A9A9A' }}
                >
                  {c.label}
                </span>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[15px] mt-2 transition-colors duration-200 hover:opacity-70"
                  style={{ color: '#1A1A1A' }}
                >
                  {c.value}
                </a>
                <button
                  onClick={() => handleCopy(c.value.replace('@', ''), i)}
                  className="font-mono text-[11px] mt-3 transition-colors duration-200"
                  style={{ color: copiedIndex === i ? '#1A1A1A' : '#9A9A9A' }}
                >
                  {copiedIndex === i ? 'Copied!' : 'Copy'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        <div data-reveal className="flex justify-center gap-4 mt-12">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: '1px solid #E5E5E5',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = '#1A1A1A';
                  el.style.borderColor = '#1A1A1A';
                  const svg = el.querySelector('svg');
                  if (svg) svg.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = 'transparent';
                  el.style.borderColor = '#E5E5E5';
                  const svg = el.querySelector('svg');
                  if (svg) svg.style.color = '#6B6B6B';
                }}
              >
                <Icon size={18} style={{ color: '#6B6B6B', transition: 'color 200ms' }} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
