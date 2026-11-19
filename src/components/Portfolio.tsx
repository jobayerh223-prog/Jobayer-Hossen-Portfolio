import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import {
  ArrowUpRight,
  Sparkles,
  LayoutGrid,
  List as ListIcon,
  Layers as LayersIcon,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData.ts';
import { filterProjects, type ProjectItem } from '../utils/portfolioLogic.ts';

interface PortfolioProps {
  onSelectProject: (project: typeof PORTFOLIO_PROJECTS[0]) => void;
  onOpenBooking: () => void;
}

type ViewMode = 'card' | 'list' | 'pack';

const snappySpring = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 32,
  mass: 0.8,
};

const fadeMeta = {
  duration: 0.2,
  ease: [0.2, 0, 0, 1] as const,
};

// Physical deck fanned poses for 'pack' view matching useLayouts
const PACK_POSE = [
  { rotate: -8, x: -18, y: 8, scale: 0.98 },
  { rotate: 6, x: 16, y: -4, scale: 1.0 },
  { rotate: -3, x: -6, y: 18, scale: 1.02 },
  { rotate: 9, x: 18, y: 6, scale: 1.04 },
];

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject, onOpenBooking }) => {
  // CRITICAL REQUIREMENT: Card view will stay by default!
  const [view, setView] = useState<ViewMode>('card');
  const [activeTag, setActiveTag] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const tags = ['All', 'Social Media Strategy', 'AI Automation', 'Visual Design'];
  const filtered = filterProjects(PORTFOLIO_PROJECTS as unknown as ProjectItem[], activeTag);

  return (
    <section id="portfolio" className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight text-slate-900">
              My <span className="bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] bg-clip-text text-transparent">Projects</span>
            </h2>
          </div>

          {/* Animated Collection Layout Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <LayoutGroup id="ac-tabs">
              <div
                role="tablist"
                aria-label="Collection layout"
                className="flex items-center rounded-full bg-slate-100 p-1 border border-slate-200/80 shadow-2xs"
              >
                {/* List View Tab */}
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === 'list'}
                  onClick={() => setView('list')}
                  className={`relative flex h-9 items-center justify-center gap-1.5 rounded-full px-3.5 text-xs font-bold outline-none transition-colors duration-150 cursor-pointer ${
                    view === 'list' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {view === 'list' && (
                    <motion.div
                      layoutId="ac-active-tab"
                      className="pointer-events-none absolute inset-0 rounded-full bg-slate-900 shadow-xs"
                      transition={snappySpring}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <ListIcon className="w-3.5 h-3.5" />
                    <span>List</span>
                  </span>
                </button>

                {/* Cards View Tab (Default) */}
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === 'card'}
                  onClick={() => setView('card')}
                  className={`relative flex h-9 items-center justify-center gap-1.5 rounded-full px-3.5 text-xs font-bold outline-none transition-colors duration-150 cursor-pointer ${
                    view === 'card' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {view === 'card' && (
                    <motion.div
                      layoutId="ac-active-tab"
                      className="pointer-events-none absolute inset-0 rounded-full bg-slate-900 shadow-xs"
                      transition={snappySpring}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>Cards</span>
                  </span>
                </button>

                {/* Pack View Tab */}
                <button
                  type="button"
                  role="tab"
                  aria-selected={view === 'pack'}
                  onClick={() => setView('pack')}
                  className={`relative flex h-9 items-center justify-center gap-1.5 rounded-full px-3.5 text-xs font-bold outline-none transition-colors duration-150 cursor-pointer ${
                    view === 'pack' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {view === 'pack' && (
                    <motion.div
                      layoutId="ac-active-tab"
                      className="pointer-events-none absolute inset-0 rounded-full bg-slate-900 shadow-xs"
                      transition={snappySpring}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <LayersIcon className="w-3.5 h-3.5" />
                    <span>Pack</span>
                  </span>
                </button>
              </div>
            </LayoutGroup>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                activeTag === tag
                  ? 'bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] text-white shadow-xs font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Animated Collection Container */}
        <div className="relative min-h-[460px]">
          <LayoutGroup id="ac-items">
            <motion.div
              layout
              initial={false}
              transition={snappySpring}
              className={`relative w-full ${
                view === 'list' ? 'flex flex-col gap-3.5' : ''
              } ${
                view === 'card' ? 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8' : ''
              } ${
                view === 'pack'
                  ? 'h-[460px] flex items-center justify-center relative'
                  : ''
              }`}
            >
              {filtered.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const pose = PACK_POSE[index % PACK_POSE.length];

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={false}
                    transition={snappySpring}
                    onClick={() => onSelectProject(item as unknown as typeof PORTFOLIO_PROJECTS[0])}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`group cursor-pointer select-none ${
                      view === 'list'
                        ? 'w-full flex items-center gap-4 sm:gap-6 bg-slate-50/80 hover:bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/80 hover:border-[#ff5fcf]/40 shadow-xs hover:shadow-md transition-all'
                        : ''
                    } ${
                      view === 'card'
                        ? 'w-full flex flex-col items-start bg-slate-50/60 hover:bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 hover:border-[#ff5fcf]/50 shadow-xs hover:shadow-xl transition-all'
                        : ''
                    } ${
                      view === 'pack'
                        ? 'absolute w-72 sm:w-80 aspect-[16/11] items-center justify-center'
                        : ''
                    }`}
                    style={{
                      zIndex:
                        view === 'pack'
                          ? isHovered
                            ? 50
                            : filtered.length - index
                          : 1,
                    }}
                    animate={
                      view === 'pack'
                        ? isHovered
                          ? { rotate: 0, x: 0, y: -20, scale: 1.08 }
                          : pose
                        : { rotate: 0, x: 0, y: 0, scale: 1 }
                    }
                  >
                    {/* Media Image Thumbnail */}
                    <motion.div
                      layout
                      initial={false}
                      transition={snappySpring}
                      className={`relative shrink-0 overflow-hidden bg-slate-100 outline outline-1 outline-black/5 ${
                        view === 'list'
                          ? 'w-20 h-20 sm:w-24 sm:h-24 rounded-xl'
                          : ''
                      } ${
                        view === 'card'
                          ? 'aspect-[16/10] w-full rounded-2xl shadow-xs overflow-hidden'
                          : ''
                      } ${
                        view === 'pack'
                          ? 'w-full h-full rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.2)] border-2 border-white'
                          : ''
                      }`}
                    >
                      <motion.img
                        layout
                        initial={false}
                        transition={snappySpring}
                        src={item.image}
                        alt={item.title}
                        className="pointer-events-none block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Click overlay indicator */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                        <span className="text-white text-xs font-bold inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                          <span>View Details</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </motion.div>

                    {/* Metadata Section for List & Cards */}
                    {view !== 'pack' && (
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={fadeMeta}
                        className={`min-w-0 flex-1 ${view === 'card' ? 'w-full mt-4' : ''}`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-[#9929ea] tracking-wide uppercase">
                            {item.client}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug tracking-tight group-hover:text-[#ff5fcf] transition-colors truncate">
                          {item.title}
                        </h3>
                      </motion.div>
                    )}

                    {/* Pack View Title Overlay when hovered */}
                    {view === 'pack' && isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-14 inset-x-0 bg-white/95 backdrop-blur-md rounded-xl p-2.5 text-center shadow-lg border border-slate-200 pointer-events-none"
                      >
                        <span className="text-xs font-bold text-slate-900 block truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-[#ff5fcf] font-mono block">
                          Click for Project Details ↗
                        </span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </LayoutGroup>

          {/* Pack Mode Bottom Subtitle Indicator */}
          <AnimatePresence initial={false}>
            {view === 'pack' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={fadeMeta}
                className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1 text-center pointer-events-none"
              >
                <p className="m-0 text-sm font-semibold text-slate-700">
                  {filtered.map((item) => item.client).join(' · ')}
                </p>
                <p className="m-0 text-xs font-mono text-slate-400">
                  Click any card to inspect full case study details & metrics
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
