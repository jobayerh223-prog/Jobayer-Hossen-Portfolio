import React, { useEffect, useRef, useState } from 'react';
import {
  type WaterRipple,
  type WaterSplashParticle,
  createRipple,
  createSplashParticles,
  updateRipple,
  updateSplashParticle,
  shouldEmitMovementRipple,
} from '../utils/waterDropLogic.ts';

export const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isInsideWindow, setIsInsideWindow] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover pointer
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse && !('ontouchstart' in window)) {
      setIsPointerDevice(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let nextId = 1;
    const ripples: WaterRipple[] = [];
    const splashParticles: WaterSplashParticle[] = [];

    let lastEmitX = -100;
    let lastEmitY = -100;

    // Handle high DPI display
    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const emitRipple = (x: number, y: number, isClick: boolean = false) => {
      const colors: Array<'pink' | 'purple' | 'cyan'> = isClick
        ? ['pink', 'purple', 'cyan']
        : ['pink', 'purple'];
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];

      ripples.push(createRipple(x, y, isClick, nextId++, chosenColor));

      if (isClick) {
        // Multi-ring concentric liquid impact
        setTimeout(() => {
          ripples.push(createRipple(x, y, false, nextId++, 'purple'));
        }, 80);
        setTimeout(() => {
          ripples.push(createRipple(x, y, false, nextId++, 'pink'));
        }, 160);

        // Splash micro-droplets
        const splashes = createSplashParticles(x, y, 6, nextId);
        nextId += 6;
        splashParticles.push(...splashes);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setCursorPos({ x, y });
      if (!isInsideWindow) setIsInsideWindow(true);

      // Check hover state on interactable elements
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Movement water ripple emission
      if (shouldEmitMovementRipple(lastEmitX, lastEmitY, x, y, 32)) {
        emitRipple(x, y, false);
        lastEmitX = x;
        lastEmitY = y;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      emitRipple(e.clientX, e.clientY, true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsInsideWindow(false);
    };

    // Also support tap ripple on touch devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        emitRipple(touch.clientX, touch.clientY, true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    // 60FPS Fluid Render Loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Render active water ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const isAlive = updateRipple(r);

        if (!isAlive) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);

        // Water ripple gradient ring with soft pink / purple / cyan liquid refraction
        let strokeColor = `rgba(255, 95, 207, ${r.alpha.toFixed(3)})`;
        if (r.colorType === 'purple') {
          strokeColor = `rgba(153, 41, 234, ${r.alpha.toFixed(3)})`;
        } else if (r.colorType === 'cyan') {
          strokeColor = `rgba(147, 197, 253, ${r.alpha.toFixed(3)})`;
        }

        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = r.lineWidth;
        ctx.stroke();

        // Inner secondary subtle refraction echo
        if (r.radius > 15) {
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(1, r.radius - 6), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${(r.alpha * 0.45).toFixed(3)})`;
          ctx.lineWidth = Math.max(0.5, r.lineWidth * 0.6);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 2. Render splash micro-droplets
      for (let i = splashParticles.length - 1; i >= 0; i--) {
        const p = splashParticles[i];
        const isAlive = updateSplashParticle(p);

        if (!isAlive) {
          splashParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 95, 207, ${p.alpha.toFixed(3)})`;
        ctx.fill();

        // Specular highlight on droplet
        ctx.beginPath();
        ctx.arc(p.x - p.radius * 0.3, p.y - p.radius * 0.3, p.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${(p.alpha * 0.9).toFixed(3)})`;
        ctx.fill();

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
      cancelAnimationFrame(animId);
    };
  }, [isInsideWindow]);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Interactive Water Ripple Fluid Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 w-full h-full"
      />

      {/* Floating Translucent Liquid Droplet at Cursor Tip */}
      {isInsideWindow && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
          }}
        >
          {/* Liquid Water Droplet Bead with Glass Specular Highlight */}
          <div
            className={`rounded-full transition-all duration-200 backdrop-blur-xs flex items-center justify-center ${
              isClicking
                ? 'scale-130 bg-gradient-to-tr from-[#9929ea]/60 to-[#ff5fcf]/70 ring-2 ring-[#ff5fcf]/50'
                : isHovered
                ? 'scale-115 bg-gradient-to-tr from-[#9929ea]/35 to-[#ff5fcf]/45 ring-1.5 ring-[#ff5fcf]/40'
                : 'scale-100 bg-white/40 ring-1 ring-[#9929ea]/20'
            }`}
            style={{
              width: isHovered ? '14px' : '10px',
              height: isHovered ? '14px' : '10px',
              boxShadow: '0 2px 8px rgba(153, 41, 234, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
            }}
          >
            {/* Top-left specular sunlight glint on droplet */}
            <div className="w-1.5 h-1.5 rounded-full bg-white/90 -mt-0.5 -ml-0.5" />
          </div>
        </div>
      )}
    </>
  );
};
