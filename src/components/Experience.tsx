import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  metrics: string;
  image: string;
}

const EXPERIENCES: ExperienceData[] = [
  {
    id: '01',
    role: 'Lead Social Media Strategist & AI Specialist',
    company: 'Apex Scale / Consultant',
    period: '2022 – Present',
    location: 'Remote',
    description:
      'Partnering with early-stage tech founders, AI startups, and creator businesses to build automated content engines and high-impact visual branding.',
    metrics: '15M+ Organic Views · 35+ Brands Scaled',
    image: '/src/assets/images/portfolio_ai_automation_1794063324207.jpg',
  },
  {
    id: '02',
    role: 'Senior Growth & Content Manager',
    company: 'ViralScale Creative Studio',
    period: '2020 – 2022',
    location: 'New York / Remote',
    description:
      'Directed multi-channel organic campaigns for 25+ fast-growing SaaS and consumer tech clients, supervising creative workflows and automation.',
    metrics: '12M+ Impressions · 94% Retention',
    image: '/src/assets/images/portfolio_social_growth_1794063322459.jpg',
  },
  {
    id: '03',
    role: 'Creative Designer & Visual Strategist',
    company: 'HyperGrowth Digital Agency',
    period: '2018 – 2020',
    location: 'Hybrid',
    description:
      'Designed high-converting visual assets, carousels, and landing pages for DTC and tech brands seeking distinctive digital authority.',
    metrics: '450+ Carousels · 14.8% Save Rate',
    image: '/src/assets/images/portfolio_brand_identity_1794063324689.jpg',
  },
];

const AUTO_PLAY_DURATION = 5000;

const slideTransition = {
  duration: 0.34,
  ease: [0.32, 0.72, 0, 1] as const,
};

const slideVariants = {
  enter: { y: '-100%' },
  center: { y: 0 },
  exit: { y: '100%' },
};

function GallerySlide({
  experience,
  onClick,
}: {
  experience: ExperienceData;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransition}
      className="absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <img
        src={experience.image}
        alt={experience.role}
        className="m-0! block size-full object-cover p-0! transition-transform duration-700 hover:scale-102"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff5fcf] mb-1">
          {experience.metrics}
        </span>
        <span className="text-lg sm:text-xl font-bold font-display text-white">
          {experience.company}
        </span>
        <span className="text-xs text-slate-300">
          {experience.period} · {experience.location}
        </span>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % EXPERIENCES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const active = EXPERIENCES[activeIndex]!;

  return (
    <section id="experience" className="w-full bg-white py-10 sm:py-14 border-t border-slate-100 select-none">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:gap-12">
          {/* Left Column: Vertical Tabs with Progress Bars */}
          <div className="flex flex-col justify-center order-2 pt-2 md:col-span-5 md:order-1">
            <div className="space-y-1 mb-8 sm:mb-10">
              <span className="text-xs font-bold text-[#ff5fcf] uppercase tracking-[0.3em] block ml-0.5">
                (CAREER JOURNEY)
              </span>
              <h2 className="tracking-tight text-balance text-3xl font-black md:text-4xl lg:text-5xl text-slate-900 font-display">
                My Work <span className="bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] bg-clip-text text-transparent">Experience</span>
              </h2>
            </div>

            <div className="flex flex-col space-y-0 pl-4 sm:pl-6">
              {EXPERIENCES.map((exp, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      'group relative flex cursor-pointer items-start gap-4 border-t border-slate-200/70 py-6 text-left transition-[color] duration-150 ease-out first:border-0 md:py-7',
                      isActive
                        ? 'text-slate-900'
                        : 'text-slate-400 hover:text-slate-700'
                    )}
                  >
                    {/* Vertical Progress Bar */}
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2.5px] bg-slate-200 rounded-full overflow-hidden">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff5fcf] to-[#9929ea] origin-top rounded-full"
                          initial={{ height: '0%' }}
                          animate={
                            isPaused ? { height: '0%' } : { height: '100%' }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: 'linear',
                          }}
                        />
                      )}
                    </div>

                    <span className="text-[10px] md:text-xs font-mono font-bold mt-1 tabular-nums text-slate-400">
                      /{exp.id}
                    </span>

                    <div className="flex flex-col gap-1.5 flex-1 pr-2">
                      <span
                        className={cn(
                          'text-xl font-bold tracking-tight transition-colors duration-150 ease-out sm:text-2xl lg:text-3xl font-display',
                          isActive ? 'text-slate-900' : 'text-slate-500'
                        )}
                      >
                        {exp.role}
                      </span>

                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span>{exp.company}</span>
                        <span>·</span>
                        <span className="text-slate-400">{exp.period}</span>
                      </div>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-sm pt-2 pb-1">
                              {exp.description}
                            </p>
                            <span className="inline-block mt-1 text-[11px] font-bold text-[#9929ea] bg-[#9929ea]/10 px-2.5 py-0.5 rounded-full">
                              ✓ {exp.metrics}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sliding Gallery Showcase with Prev/Next Controls */}
          <div className="flex h-full flex-col justify-end order-1 md:col-span-7 md:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl md:aspect-4/3 md:rounded-[2.5rem] lg:aspect-16/11">
                <AnimatePresence initial={false}>
                  <GallerySlide
                    key={active.id}
                    experience={active}
                    onClick={handleNext}
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:text-slate-950 transition-all active:scale-90 cursor-pointer"
                    aria-label="Previous Experience"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center justify-center text-slate-800 hover:bg-white hover:text-slate-950 transition-all active:scale-90 cursor-pointer"
                    aria-label="Next Experience"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
