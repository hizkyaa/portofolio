import { useEffect, useRef, type RefObject } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  stagger?: number;
  translateY?: number;
  duration?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): RefObject<T | null> {
  const {
    threshold = 0.15,
    stagger = 0.08,
    translateY = 30,
    duration = 500,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll<HTMLElement>('[data-reveal]');
    const targets = children.length > 0 ? Array.from(children) : [el];

    targets.forEach((target) => {
      target.style.opacity = '0';
      target.style.transform = `translateY(${translateY}px)`;
      target.style.transition = `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const entryTargets = children.length > 0 ? Array.from(children) : [el];
            entryTargets.forEach((target, i) => {
              setTimeout(() => {
                target.style.opacity = '1';
                target.style.transform = 'translateY(0)';
              }, i * stagger * 1000);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, stagger, translateY, duration]);

  return ref;
}
