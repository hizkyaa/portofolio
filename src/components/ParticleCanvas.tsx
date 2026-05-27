import { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
}

const H_MATRIX = [
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
];

const U_MATRIX = [
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,1,1,1,1],
];

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const rafRef = useRef<number>(0);
  const dprRef = useRef(1);

  const generateParticles = useCallback((canvas: HTMLCanvasElement) => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const isMobile = rect.width < 768;
    const gridSpacingX = isMobile ? 20 : 28;
    const gridSpacingY = isMobile ? 24 : 32;

    const particles: Particle[] = [];

    const createLetterParticles = (
      matrix: number[][],
      offsetX: number,
      offsetY: number
    ) => {
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === 1) {
            const ox = offsetX + col * gridSpacingX;
            const oy = offsetY + row * gridSpacingY;
            particles.push({
              x: ox + (Math.random() - 0.5) * 4,
              y: oy + (Math.random() - 0.5) * 4,
              originX: ox,
              originY: oy,
              vx: 0,
              vy: 0,
              size: 2,
            });
          }
        }
      }
    };

    const hOffsetX = isMobile
      ? rect.width * 0.3 - (5 * gridSpacingX) / 2
      : rect.width * 0.25 - 70;
    const uOffsetX = isMobile
      ? rect.width * 0.7 - (5 * gridSpacingX) / 2
      : rect.width * 0.75 - 70;
    const offsetY = rect.height * 0.5 - (7 * gridSpacingY) / 2;

    createLetterParticles(H_MATRIX, hOffsetX, offsetY);
    createLetterParticles(U_MATRIX, uOffsetX, offsetY);

    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    generateParticles(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = dprRef.current;
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (e.clientY - rect.top) * dpr;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        generateParticles(canvas);
      }, 150);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      const dpr = dprRef.current;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 * dpr) {
            const force = ((150 * dpr - dist) / (150 * dpr)) * 3;
            p.vx -= (dx / (dist || 1)) * force;
            p.vy -= (dy / (dist || 1)) * force;
          }
        }

        // Spring to origin
        p.vx += (p.originX - p.x) * 0.05;
        p.vy += (p.originY - p.y) * 0.05;

        // Damping
        p.vx *= 0.9;
        p.vy *= 0.9;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#1A1A1A';
        ctx.fill();
      }

      // Draw connections
      ctx.lineWidth = 0.5 * dpr;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 100 * dpr;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(26, 26, 26, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [generateParticles]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Interactive H U particle animation"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
}
