import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParticleCanvas from '../components/ParticleCanvas';

interface HeroProps {
  loaded: boolean;
}

export default function Hero({ loaded }: HeroProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#F5F5F7' }}
    >
      <ParticleCanvas />

      {/* Hero Content */}
      <div
        className="relative flex flex-col items-center justify-center h-full px-6 text-center"
        style={{ zIndex: 10 }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] tracking-[0.15em] uppercase"
          style={{ color: '#6B6B6B' }}
        >
          VIDEO EDITOR & WEB DEVELOPER
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold mt-4"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: '#1A1A1A',
            maxWidth: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Hizkya Aprilliano Dorantez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-[15px] leading-relaxed"
          style={{ color: '#6B6B6B', maxWidth: 500 }}
        >
          Creating modern visuals and minimalist digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-row gap-3 mt-10"
        >
          <button
            onClick={() => scrollToSection('#work')}
            className="px-7 py-3 text-[13px] font-medium text-white transition-colors duration-200"
            style={{
              backgroundColor: '#1A1A1A',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#333333';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#1A1A1A';
            }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-7 py-3 text-[13px] font-medium transition-all duration-200"
            style={{
              backgroundColor: 'transparent',
              border: '1px solid #E5E5E5',
              color: '#1A1A1A',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor = '#6B6B6B';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor = '#E5E5E5';
            }}
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ zIndex: 10 }}
      >
        <div className="relative w-px h-8" style={{ backgroundColor: '#9A9A9A' }}>
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            style={{
              backgroundColor: '#9A9A9A',
              animation: 'scroll-dot 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <span
          className="font-mono text-[9px] tracking-[0.2em] mt-2"
          style={{ color: '#9A9A9A' }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
