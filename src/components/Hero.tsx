import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Star, Quote, ChevronDown } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData.ts';
import { Ripple } from './magicui/ripple.tsx';
import { BookCallButton } from './BookCallButton.tsx';
import { FloatingHeroIcons } from './FloatingHeroIcons.tsx';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplorePortfolio }) => {
  const [orbPos, setOrbPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animId: number;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xPercent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const yPercent = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

      targetX = xPercent;
      targetY = yPercent;
    };

    const updateOrbs = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setOrbPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(updateOrbs);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(updateOrbs);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen max-h-[100dvh] min-h-0 w-full overflow-hidden flex flex-col justify-between pt-[82px] sm:pt-[106px] pb-1 px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* 1. MagicUI Concentric Ripple Background in Brand Colors */}
      <Ripple mainCircleSize={180} numCircles={8} />

      {/* Subtle cursor-following ambient highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(circle 450px at ${orbPos.x}% ${orbPos.y}%, rgba(255, 95, 207, 0.08) 0%, rgba(153, 41, 234, 0.04) 45%, transparent 75%)`,
        }}
      />

      {/* Floating Black Designer Icons (AI, Claude, ChatGPT, Gemini, AI Studio, Branding, Socials, Vibe Coding) */}
      <FloatingHeroIcons />

      {/* 2. Top Header Zone (Badge + Headline) - Clears fixed navbar */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center shrink-0">
        {/* Playful Hello Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-xs text-xs font-semibold text-slate-800">
          <span className="text-[#ff5fcf] font-mono text-[11px] select-none">\ | /</span>
          <span>Hello! 👋</span>
        </div>

        {/* Display Headline */}
        <h1 className="mt-0.5 text-center tracking-tight">
          <span className="block text-2xl sm:text-4xl lg:text-5xl font-sans font-black text-slate-900 leading-[1.08]">
            I'm{' '}
            <span className="font-serif italic font-normal text-[#ff5fcf] tracking-normal drop-shadow-xs">
              Jobayer
            </span>
            ,
          </span>
          <span className="block mt-0 text-xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-slate-900 leading-[1.1]">
            Social Media & AI Specialist
          </span>
        </h1>
      </div>

      {/* 3. Center Showcase: Cutout image spans from directly under 'Social Media & AI Specialist' down flush to the horizontal line, with buttons ON the image */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-end min-h-0 -mt-2 sm:-mt-4">
        <div className="relative w-full h-full flex items-end justify-center">
          {/* Left Floating Card: Clients Scaled */}
          <div className="hidden lg:flex flex-col gap-0.5 absolute left-2 xl:left-8 top-1/2 -translate-y-1/2 w-[170px] bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] z-10 transition-transform duration-300 hover:scale-103 text-left">
            <div className="flex items-center gap-1.5 text-[#ff5fcf]">
              <Quote className="w-3 h-3 fill-[#ff5fcf]/20" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Track Record</span>
            </div>
            <span className="text-xl font-black text-slate-900 font-sans tracking-tight">
              {BRAND_INFO.stats.clientsServed}
            </span>
            <span className="text-xs font-semibold text-slate-600">
              Clients Scaled
            </span>
            <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full self-start mt-0.5">
              ✓ Verified Growth
            </span>
          </div>

          {/* Center Showcase: Cutout Portrait reaching right up close under the text down flush to the horizontal line */}
          <div className="relative flex flex-col items-center justify-end h-full">
            {/* Cutout Portrait Container: Sits directly on the horizontal line, sized to close the gap to the text */}
            <div className="relative z-20 w-[330px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-[310px] sm:h-[350px] md:h-[390px] lg:h-[430px] max-h-full flex items-end justify-center select-none">
              <img
                src="/assets/aistudio/jobayer_cutout.png"
                alt="Jobayer Hossen - Freelance Social Media Manager & AI Specialist"
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_16px_32px_rgba(153,41,234,0.22)] transition-transform duration-300 hover:scale-102 pointer-events-auto"
                referrerPolicy="no-referrer"
              />

              {/* Capsule Buttons positioned ON the image (overlaying the lower suit, resting right above the horizontal line) */}
              <div className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center p-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_24px_rgba(0,0,0,0.15)] gap-2 whitespace-nowrap">
                <button
                  type="button"
                  onClick={onExplorePortfolio}
                  className="flex items-center gap-1.5 px-5 sm:px-6 py-2 bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] text-white text-xs sm:text-sm font-bold rounded-full shadow-[0_4px_16px_rgba(255,95,207,0.35)] hover:shadow-[0_8px_24px_rgba(255,95,207,0.55)] hover:scale-102 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5fcf]"
                >
                  <span>Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex items-center gap-1.5 px-5 sm:px-6 py-2 bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-bold rounded-full shadow-xs cursor-pointer hover:scale-102 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Floating Card: Years Experience & Rating */}
          <div className="hidden lg:flex flex-col gap-0.5 absolute right-2 xl:right-8 top-1/2 -translate-y-1/2 w-[170px] bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] z-10 transition-transform duration-300 hover:scale-103 text-left">
            <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xl font-black text-slate-900 font-sans tracking-tight">
              {BRAND_INFO.stats.yearsExperience} Years
            </span>
            <span className="text-xs font-semibold text-slate-600">
              AI & Design Expert
            </span>
            <span className="text-[9px] text-[#9929ea] font-bold bg-[#9929ea]/10 px-2 py-0.5 rounded-full self-start mt-0.5">
              ★ Top Rated
            </span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Proof Strip (Compact, single screen layout, 0 vertical scroll needed) */}
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-1.5 pb-1 border-t border-slate-200/60 shrink-0">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center items-center">
          <div>
            <span className="block text-base sm:text-xl font-sans font-black text-slate-900">
              {BRAND_INFO.stats.projectsCompleted}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-500 block truncate">
              Projects Delivered
            </span>
          </div>
          <div>
            <span className="block text-base sm:text-xl font-sans font-black text-slate-900">
              {BRAND_INFO.stats.organicImpressions}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-500 block truncate">
              Organic Reach
            </span>
          </div>
          <div>
            <span className="block text-base sm:text-xl font-sans font-black text-slate-900">
              {BRAND_INFO.stats.industriesCovered}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-500 block truncate">
              Brands Scaled
            </span>
          </div>
          <div>
            <span className="block text-base sm:text-xl font-sans font-black text-[#ff5fcf]">
              {BRAND_INFO.stats.averageRating}
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-slate-500 block truncate">
              Client Rating
            </span>
          </div>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="flex justify-center mt-0.5 text-slate-400 text-[10px] font-medium items-center gap-1 select-none">
          <a
            href="#portfolio"
            className="hover:text-slate-700 transition-colors flex items-center gap-1 py-0.5"
          >
            <span>Explore Projects</span>
            <ChevronDown className="w-2.5 h-2.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
