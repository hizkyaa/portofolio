import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(checkTouch);
    if (checkTouch) return;

    let rafId: number;
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={glowRef}
      className="fixed pointer-events-none"
      style={{
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,26,26,0.03) 0%, transparent 70%)',
        zIndex: 5,
        transition: 'transform 100ms ease-out',
        top: 0,
        left: 0,
        willChange: 'transform',
      }}
    />
  );
}
