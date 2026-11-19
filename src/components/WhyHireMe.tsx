import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData.ts';
import { AnimatedNumber } from './AnimatedNumber.tsx';

interface WhyHireMeProps {
  onOpenBooking: () => void;
}

export const WhyHireMe: React.FC<WhyHireMeProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-10 sm:py-14 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Circular Cutout Photo with Doodle Rays Matching Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[340px] aspect-square">
              {/* Circular Backdrop with Pink & Purple Gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#9929ea] via-[#c432d6] to-[#ff5fcf] shadow-[0_20px_50px_rgba(153,41,234,0.35)]"
              />

              {/* Doodle accents */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 text-[#ff5fcf] font-mono text-xl select-none rotate-12"
              >
                ✦ ✦ ✦
              </div>

              {/* Photo */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden flex items-end justify-center">
                <img
                  src="/assets/aistudio/jobayer_cutout.png"
                  alt="Why Hire Jobayer Hossen"
                  className="w-[95%] h-[95%] object-contain object-bottom filter drop-shadow-lg select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating micro-badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-md whitespace-nowrap text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Agency Overhead</span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Stats Matching Mockup */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff5fcf] block">
              The Unfair Advantage
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
              Why You{' '}
              <span className="font-serif italic text-[#ff5fcf] font-normal drop-shadow-sm">
                Hire Me
              </span>{' '}
              for Your Next Projects?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Direct execution. Agency-grade branding and autonomous AI pipelines without the overhead.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Direct Communication
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Rapid 48h Iteration
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                AI-Powered Multipliers
              </span>
            </div>

            {/* Key Stats Row (Matching Mockup: 600+ Project Completed / 50+ Industry Covered) */}
            <div className="pt-4 grid grid-cols-2 gap-8 border-y border-slate-200 py-6">
              <div>
                <AnimatedNumber
                  value={BRAND_INFO.stats.projectsCompleted}
                  trigger="inView"
                  className="block text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight"
                />
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mt-1">
                  Projects Completed
                </span>
              </div>
              <div>
                <AnimatedNumber
                  value={BRAND_INFO.stats.industriesCovered}
                  trigger="inView"
                  className="block text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight"
                />
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider block mt-1">
                  Industries Covered
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white text-base font-semibold rounded-full shadow-[0_8px_25px_rgba(255,95,207,0.35)] hover:shadow-[0_12px_35px_rgba(255,95,207,0.5)] hover:scale-102 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
