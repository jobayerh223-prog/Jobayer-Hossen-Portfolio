import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Share2,
  Zap,
  Layout,
  Film,
  Sparkles,
  CheckCircle2,
  Play,
} from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../data/portfolioData.ts';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

const SERVICE_META = [
  {
    caption: 'Growth Core',
    badgeColor: 'text-[#ff5fcf] bg-[#ff5fcf]/10 border-[#ff5fcf]/30',
    icon: Share2,
  },
  {
    caption: 'Autonomous Engine',
    badgeColor: 'text-[#9929ea] bg-[#9929ea]/10 border-[#9929ea]/30',
    icon: Zap,
  },
  {
    caption: 'Brand Systems',
    badgeColor: 'text-pink-600 bg-pink-50 border-pink-200',
    icon: Layout,
  },
  {
    caption: 'Media Multiplier',
    badgeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    icon: Film,
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const lastHoverTriggerPosRef = useRef<{ x: number; y: number; at: number } | null>(null);

  const totalCards = SERVICES_DATA.length;

  const goTo = useCallback(
    (index: number) => {
      if (totalCards === 0) return;
      const next = ((index % totalCards) + totalCards) % totalCards;
      setActiveIndex(next);
    },
    [totalCards]
  );

  const handleHeaderHover = useCallback(
    (index: number, isTop: boolean, e: React.MouseEvent<HTMLDivElement>) => {
      if (isTop) return;
      const now = Date.now();
      const prev = lastHoverTriggerPosRef.current;
      if (prev) {
        const dx = e.clientX - prev.x;
        const dy = e.clientY - prev.y;
        const distSq = dx * dx + dy * dy;
        const elapsed = now - prev.at;
        // Ignore synthetic mouseenter or tiny cursor drift in the same slot while cards roll
        if (distSq === 0 || (elapsed < 380 && distSq <= 144)) return;
      }
      lastHoverTriggerPosRef.current = { x: e.clientX, y: e.clientY, at: now };
      goTo(index);
    },
    [goTo]
  );

  const handleNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const handlePrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-play: bring the card behind to the front every 5 seconds (pauses on hover)
  useEffect(() => {
    if (totalCards <= 1 || isHovered) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % totalCards);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isHovered, totalCards]);

  // Keyboard navigation on container
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  // Cascading layout offsets matching rolling-card-stack specifications
  const desktopWidths = ['100%', '91%', '82%', '73%'];
  const desktopOffsets = [0, 48, 96, 144];

  const springConfig = {
    type: 'spring' as const,
    stiffness: 380,
    damping: 30,
    mass: 0.75,
  };

  return (
    <section
      id="services"
      className="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white select-none relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Rolling services stack"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (No extra box outside - pure white with subtle glassmorphism) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-slate-900">
              My <span className="bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
        </div>

        {/* Rolling Card Stack Stage (Directly in section, white glassmorphic cards) */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center justify-center relative">
          <div
            className="w-full relative flex items-end justify-center transition-all duration-300 h-[520px] sm:h-[460px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              lastHoverTriggerPosRef.current = null;
            }}
          >
            {SERVICES_DATA.map((service, index) => {
              const relativePosition = (index - activeIndex + totalCards) % totalCards;
              const zIndex = totalCards - relativePosition;
              const meta = SERVICE_META[index % SERVICE_META.length];
              const IconComponent = meta.icon;
              const isTop = relativePosition === 0;

              return (
                <motion.div
                  key={service.id}
                  onClick={() => {
                    if (!isTop) {
                      goTo(index);
                    }
                  }}
                  drag={isTop ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.35}
                  onDrag={(_, info) => {
                    if (isTop) setDragOffset(info.offset.x);
                  }}
                  onDragEnd={(_, info) => {
                    setDragOffset(0);
                    if (info.offset.x < -70 || info.velocity.x < -350) {
                      handleNext();
                    } else if (info.offset.x > 70 || info.velocity.x > 350) {
                      handlePrev();
                    }
                  }}
                  layout="position"
                  initial={false}
                  animate={{
                    y: -desktopOffsets[relativePosition],
                    width: desktopWidths[relativePosition],
                    rotate: isTop ? dragOffset * 0.03 : 0,
                    opacity: 1,
                  }}
                  whileTap={isTop ? { scale: 0.995 } : { scale: 0.98 }}
                  transition={springConfig}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    zIndex,
                    transformOrigin: 'bottom center',
                    willChange: 'transform, width',
                  }}
                  className={`rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-2xl border transition-colors duration-200 shadow-[0_16px_45px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.04)] h-[350px] min-h-[350px] max-h-[350px] flex flex-col overflow-hidden ${
                    isTop
                      ? 'cursor-grab active:cursor-grabbing border-slate-300 ring-2 ring-[#ff5fcf]/20'
                      : 'cursor-pointer border-slate-200 hover:border-[#ff5fcf]/60'
                  }`}
                >
                  {/* Solid Opaque Frosted Card Header (Tab) */}
                  <div
                    onMouseEnter={(e) => handleHeaderHover(index, isTop, e)}
                    onMouseMove={(e) => handleHeaderHover(index, isTop, e)}
                    className={`h-13 px-4 sm:px-6 flex items-center justify-between border-b select-none transition-colors duration-200 shrink-0 ${
                      isTop
                        ? 'bg-[#fafaf8] border-slate-200/90'
                        : 'bg-[#f4f4f0] border-slate-200/70 hover:bg-[#eaeae4]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border shadow-2xs ${meta.badgeColor}`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight truncate">
                        {meta.caption}
                      </span>
                      {service.highlighted && (
                        <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] text-white shadow-2xs">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{index + 1}
                      </span>
                      {!isTop && (
                        <span className="text-[10px] text-[#9929ea] font-semibold hidden sm:inline-block">
                          Hover to bring front
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body Content (Visible on top card) */}
                  <div
                    className={`p-4 sm:p-5 flex-1 min-h-0 flex flex-col md:flex-row items-stretch gap-4 sm:gap-5 overflow-hidden transition-opacity duration-300 ${
                      isTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {/* Left: Text & Deliverables */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div>
                        <h3 className="text-lg sm:text-2xl font-sans font-bold text-slate-900 tracking-tight leading-snug mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5 line-clamp-2 sm:line-clamp-3">
                          {service.shortDesc}
                        </p>

                        {/* Quick Deliverable Tags */}
                        <div className="space-y-1.5">
                          {service.deliverables.slice(0, 3).map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-center gap-2 text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff5fcf] shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Rich Interactive Visual Graphic */}
                    <div className="w-full md:w-[300px] lg:w-[340px] shrink-0">
                      {index === 0 && (
                        /* Visual 1: Social Media Growth & Viral Retention Mockup */
                        <div className="w-full h-full rounded-xl bg-slate-50/80 border border-slate-200/80 p-3.5 flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#ff5fcf] to-[#9929ea] flex items-center justify-center text-[10px] font-black text-white">
                                J
                              </div>
                              <span className="text-[11px] font-bold text-slate-900">@jobayer.ai</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/80 border border-emerald-300/80 px-2 py-0.5 rounded-full">
                              +340% REACH
                            </span>
                          </div>

                          <div className="bg-white rounded-lg p-2.5 my-1.5 border border-slate-200 shadow-2xs">
                            <span className="text-[11px] font-black text-slate-900 uppercase tracking-wider block">
                              Stop The Scroll Framework
                            </span>
                            <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">
                              Carousel Retention Rate: 84.6%
                            </span>
                            <div className="mt-2 flex gap-1.5">
                              <div className="h-1.5 flex-1 rounded-full bg-[#ff5fcf]" />
                              <div className="h-1.5 flex-1 rounded-full bg-[#9929ea]" />
                              <div className="h-1.5 flex-1 rounded-full bg-slate-200" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                            <span>LinkedIn · X · Instagram</span>
                            <span className="text-slate-900 font-bold">15M+ Impressions</span>
                          </div>
                        </div>
                      )}

                      {index === 1 && (
                        /* Visual 2: AI Pipeline & Automation Architecture */
                        <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-50/60 to-pink-50/40 border border-purple-200/70 p-3.5 flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between border-b border-purple-200/60 pb-2">
                            <span className="text-[10px] font-mono font-bold text-[#9929ea] tracking-wider uppercase">
                              MAKE.COM + GPT ENGINE
                            </span>
                            <span className="text-[9px] font-bold text-[#9929ea] bg-white border border-[#9929ea]/30 px-2 py-0.5 rounded-full shadow-2xs">
                              24/7 Automated
                            </span>
                          </div>

                          <div className="flex items-center justify-between py-1.5 relative">
                            <div className="bg-white border border-slate-200 rounded-lg p-2 text-center min-w-[60px] shadow-2xs">
                              <span className="text-[10px] font-bold block text-slate-900">Audio</span>
                              <span className="text-[8px] text-slate-500 font-medium">Raw Idea</span>
                            </div>
                            <span className="text-[#9929ea] font-bold text-xs">→</span>
                            <div className="bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] rounded-lg p-2 text-center min-w-[72px] shadow-md shadow-[#ff5fcf]/20 text-white">
                              <span className="text-[10px] font-black block">LLM Hook</span>
                              <span className="text-[8px] text-white/90">3 Variations</span>
                            </div>
                            <span className="text-[#9929ea] font-bold text-xs">→</span>
                            <div className="bg-white border border-slate-200 rounded-lg p-2 text-center min-w-[60px] shadow-2xs">
                              <span className="text-[10px] font-bold block text-slate-900">Publish</span>
                              <span className="text-[8px] text-slate-500 font-medium">Auto-Queue</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium">
                            <span>1 Idea → 15 Formats</span>
                            <span className="text-[#9929ea] font-bold">Zero Friction</span>
                          </div>
                        </div>
                      )}

                      {index === 2 && (
                        /* Visual 3: Figma Design Kit & Brand Tokens */
                        <div className="w-full h-full rounded-xl bg-slate-50/80 border border-slate-200/80 p-3.5 flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                            <span className="text-[10px] font-mono font-bold text-slate-900 tracking-wider">
                              FIGMA BRAND SYSTEM
                            </span>
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5fcf]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#9929ea]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-slate-900" />
                            </div>
                          </div>

                          <div className="space-y-1.5 my-1">
                            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                              <span className="text-[10px] font-bold text-slate-900 font-sans">
                                H1: Archivo Narrow Bold
                              </span>
                              <span className="text-[9px] font-mono text-[#ff5fcf] font-bold">64px</span>
                            </div>
                            <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                              <span className="text-[10px] font-serif italic text-slate-900">
                                Accent: Instrument Serif
                              </span>
                              <span className="text-[9px] font-mono text-[#9929ea] font-bold">Italic</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                            <span>85+ Modular Layouts</span>
                            <span className="text-slate-900 font-bold">Bespoke Assets</span>
                          </div>
                        </div>
                      )}

                      {index === 3 && (
                        /* Visual 4: Short-Form Viral Video Timeline */
                        <div className="w-full h-full rounded-xl bg-slate-50/80 border border-slate-200/80 p-3.5 flex flex-col justify-between shadow-xs">
                          <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                            <div className="flex items-center gap-1.5">
                              <Play className="w-3.5 h-3.5 text-[#ff5fcf] fill-[#ff5fcf]" />
                              <span className="text-[10px] font-mono font-bold text-slate-900">
                                VIRAL CUT TIMELINE
                              </span>
                            </div>
                            <span className="text-[9px] font-mono font-bold text-[#9929ea] bg-[#9929ea]/10 border border-[#9929ea]/20 px-1.5 py-0.5 rounded">
                              9:16 Vertical
                            </span>
                          </div>

                          {/* Timeline Track Graphic */}
                          <div className="space-y-1.5 my-1 bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                            <div className="flex items-center gap-1">
                              <span className="text-[8px] font-mono text-slate-500 font-medium w-8">Subtitles:</span>
                              <div className="flex-1 flex gap-1">
                                <span className="h-2 flex-1 rounded bg-[#ff5fcf]" />
                                <span className="h-2 flex-1 rounded bg-[#9929ea]" />
                                <span className="h-2 flex-1 rounded bg-slate-200" />
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-[8px] font-mono text-slate-500 font-medium w-8">Audio:</span>
                              <div className="flex-1 flex gap-0.5 items-end h-3">
                                <span className="w-1 h-1.5 bg-[#9929ea] rounded" />
                                <span className="w-1 h-3 bg-[#ff5fcf] rounded" />
                                <span className="w-1 h-2 bg-[#ff5fcf] rounded" />
                                <span className="w-1 h-3.5 bg-slate-800 rounded" />
                                <span className="w-1 h-2 bg-[#9929ea] rounded" />
                                <span className="w-1 h-3 bg-[#ff5fcf] rounded" />
                                <span className="w-1 h-1.5 bg-[#9929ea] rounded" />
                                <span className="w-1 h-2.5 bg-[#ff5fcf] rounded" />
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                            <span>Reels · Shorts · TikTok</span>
                            <span className="text-emerald-700 font-bold">92% Retention</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Pagination & Navigation Controls */}
          <div className="mt-8 flex items-center justify-between w-full max-w-xl px-2">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              {SERVICES_DATA.map((service, i) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to service ${i + 1}`}
                  className="p-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5fcf] rounded-full cursor-pointer"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? 'w-8 bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] shadow-[0_0_12px_rgba(255,95,207,0.4)]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Navigation Arrow Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Service Card"
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Service Card"
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 flex items-center justify-center transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
