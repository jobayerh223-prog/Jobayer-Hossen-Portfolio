import React, { type ComponentPropsWithoutRef, type CSSProperties } from 'react';
import { cn } from '@/lib/utils.ts';

interface RippleProps extends ComponentPropsWithoutRef<'div'> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  brandColors?: boolean;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.28,
  numCircles = 8,
  brandColors = true,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 select-none overflow-hidden mask-[linear-gradient(to_bottom,white,transparent)]',
        className
      )}
      {...props}
    >
      {/* Central Ambient Glow in Brand Pink and Purple */}
      {brandColors && (
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,95,207,0.18) 0%, rgba(153,41,234,0.10) 45%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      )}

      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = Math.max(0.06, mainCircleOpacity - i * 0.025);
        const animationDelay = `${i * 0.18}s`;
        const borderStyle = 'solid';
        const isPink = i % 2 === 0;
        const borderColor = brandColors
          ? isPink
            ? 'rgba(255, 95, 207, 0.45)'
            : 'rgba(153, 41, 234, 0.40)'
          : 'var(--foreground)';
        const shadowColor = isPink
          ? 'rgba(255, 95, 207, 0.12)'
          : 'rgba(153, 41, 234, 0.10)';

        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border shadow-xl will-change-transform"
            style={
              {
                '--i': i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: '1px',
                borderColor,
                boxShadow: `0 0 24px ${shadowColor}`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = 'Ripple';
export default Ripple;
