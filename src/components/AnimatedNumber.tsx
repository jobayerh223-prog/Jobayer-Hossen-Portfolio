import React, { useEffect, useMemo, useRef, useState } from 'react';
import { formatMetricProgress, parseMetricValue } from '../utils/numberAnimation.ts';

interface AnimatedNumberProps {
  value: string;
  durationMs?: number;
  trigger?: 'mount' | 'inView';
  className?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  durationMs = 1500,
  trigger = 'mount',
  className = '',
}) => {
  const parsed = useMemo(() => parseMetricValue(value), [value]);
  const spanRef = useRef<HTMLSpanElement>(null);
  const hasStartedRef = useRef(false);

  const [display, setDisplay] = useState<string>(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return value;
    }
    return formatMetricProgress(parsed, value, 0);
  });

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !parsed.valid) {
      setDisplay(value);
      return;
    }

    let frameId: number | null = null;
    let observer: IntersectionObserver | null = null;

    const startAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        setDisplay(formatMetricProgress(parsed, value, progress));
        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    if (trigger === 'mount') {
      startAnimation();
    } else if (spanRef.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            startAnimation();
            observer?.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(spanRef.current);
    } else {
      startAnimation();
    }

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      observer?.disconnect();
    };
  }, [durationMs, parsed, trigger, value]);

  return (
    <span ref={spanRef} className={`${className} tabular-nums`.trim()} aria-label={value}>
      {display}
    </span>
  );
};
