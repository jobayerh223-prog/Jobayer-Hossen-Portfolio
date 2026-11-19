import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, ChevronDown, Sparkles, BookOpen, Search, Check } from 'lucide-react';
import { BLOG_POSTS, type BlogPostItem } from '../data/portfolioData.ts';

interface BlogSectionProps {
  onSelectPost: (post: BlogPostItem) => void;
}

// Deterministic jitter helper derived from Math.sin (stable across renders, no React state)
function deterministicJitter(index: number, factor: number, seed: number) {
  const r = 43758.5453 * Math.sin((index + 1) * 12.9898 + 78.233 * seed);
  return (2 * (r - Math.floor(r)) - 1) * factor;
}

function getCollapsedX(index: number) {
  const step = Math.floor(index / 2) + 1;
  const dir = index % 2 === 0 ? 1 : -1;
  const jitter = deterministicJitter(index, 0.15, 1);
  return `${dir * step * 0.4 + jitter}rem`;
}

// Spread configurations matching unlumen UI TeamStack geometry
const SPREAD_X = [0, -11.5, 11.5, -21, 21];
const SPREAD_Y = [-2.8, -1.4, -1.4, 2, 2];
const SPREAD_ROTATE = [0, -7, 7, -18, 18];

interface StackCardProps {
  post: BlogPostItem;
  index: number;
  total: number;
  isExpanded: boolean;
  isMobile: boolean;
  isActive: boolean;
  onActivate: (idx: number | null) => void;
  onExpand: () => void;
  onSelectPost: (post: BlogPostItem) => void;
}

const StackCard: React.FC<StackCardProps> = ({
  post,
  index,
  total,
  isExpanded,
  isMobile,
  isActive,
  onActivate,
  onExpand,
  onSelectPost,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [pillHovered, setPillHovered] = useState(false);
  const pillLabelRef = useRef<HTMLSpanElement>(null);
  const [pillWidth, setPillWidth] = useState(120);

  const isCardActive = isHovered || (isMobile && isActive);
  const isPillActive = isCardActive || pillHovered;
  const isFeatured = index === 0;

  useLayoutEffect(() => {
    if (pillLabelRef.current) {
      setPillWidth(Math.ceil(pillLabelRef.current.scrollWidth + 48));
    }
  }, [post.readTime]);

  const handleCardClick = useCallback(() => {
    if (isMobile) {
      if (!isExpanded) {
        onExpand();
        onActivate(index);
        return;
      }
      if (!isActive) {
        onActivate(index);
        return;
      }
      onSelectPost(post);
      return;
    }
    onSelectPost(post);
  }, [isMobile, isExpanded, isActive, index, post, onExpand, onActivate, onSelectPost]);

  const cardX = isExpanded ? `${SPREAD_X[index] ?? 0}rem` : getCollapsedX(index);
  const cardY = isExpanded ? `${SPREAD_Y[index] ?? 0}rem` : `${deterministicJitter(index, 0.1, 2)}rem`;
  const cardRotate = isExpanded ? `${SPREAD_ROTATE[index] ?? 0}deg` : `${deterministicJitter(index, 6, 3)}deg`;
  const cardScale = isExpanded ? (isCardActive ? 1.04 : 1) : (isCardActive ? 1 : 0.94);
  const cardZIndex = isCardActive ? total + 15 : total - index;

  return (
    <motion.article
      onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
      onMouseLeave={isMobile ? undefined : () => setIsHovered(false)}
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectPost(post);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Read article: ${post.title}`}
      animate={{
        x: cardX,
        y: cardY,
        rotate: cardRotate,
        scale: cardScale,
      }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 22,
        mass: 0.55,
      }}
      style={{ zIndex: cardZIndex }}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between rounded-4xl border p-4 sm:p-5 transition-[height,box-shadow] duration-300 w-60 sm:w-68 cursor-pointer select-none ${
        isCardActive ? 'h-[23.5rem] sm:h-[26rem]' : 'h-[22.5rem] sm:h-[25rem]'
      } ${
        isFeatured
          ? 'border-slate-800 bg-slate-950 text-white shadow-[0_24px_55px_rgba(153,41,234,0.22)]'
          : 'bg-white/95 backdrop-blur-md border-slate-200/90 text-slate-900 shadow-[0_14px_38px_rgba(0,0,0,0.08)] hover:border-[#ff5fcf]/40'
      }`}
    >
      {/* 1. Spring-Animated Expanding CTA Pill */}
      <div
        className="group absolute top-3.5 right-3.5 z-20 inline-flex"
        onClick={(e) => {
          e.stopPropagation();
          onSelectPost(post);
        }}
        onMouseEnter={() => setPillHovered(true)}
        onMouseLeave={() => setPillHovered(false)}
      >
        <span className="sr-only">Read Post</span>
        <motion.span
          aria-hidden="true"
          animate={{ width: isPillActive ? pillWidth : 36 }}
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          className={`relative inline-flex h-9 items-center justify-end overflow-hidden rounded-full shadow-sm cursor-pointer transition-colors duration-200 ${
            isFeatured
              ? 'bg-gradient-to-r from-[#ff5fcf] to-[#9929ea] text-white'
              : isPillActive
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-800 hover:bg-slate-900 hover:text-white'
          }`}
        >
          {/* Unblurring Label Text */}
          <motion.span
            ref={pillLabelRef}
            animate={{
              opacity: isPillActive ? 1 : 0,
              filter: isPillActive ? 'blur(0px)' : 'blur(4px)',
              x: isPillActive ? 0 : -2,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="pointer-events-none absolute left-3.5 whitespace-nowrap text-xs font-bold tracking-tight"
          >
            Read Article
          </motion.span>

          {/* Rotating Icon Circle */}
          <motion.span
            animate={{
              scale: isPillActive ? 1.08 : 1,
              rotate: isPillActive ? 45 : 0,
            }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            className="relative flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full"
          >
            <ArrowUpRight className="size-4.5" />
          </motion.span>
        </motion.span>
      </div>

      {/* 2. Visual Cover Thumbnail */}
      <div className="relative overflow-hidden rounded-2xl aspect-[16/10] w-full bg-slate-100/50">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Category Badge */}
        <div
          className={`absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${
            isFeatured
              ? 'bg-black/60 text-[#ff5fcf] border border-[#ff5fcf]/40'
              : 'bg-white/90 text-[#9929ea] border border-slate-200/60'
          }`}
        >
          {post.category}
        </div>
      </div>

      {/* 3. Card Typography */}
      <div className="mt-3.5 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div
            className={`flex items-center gap-1.5 text-[11px] font-medium ${
              isFeatured ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <Clock className="w-3 h-3 text-[#ff5fcf]" />
            <span>{post.readTime}</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>

          <h3
            className={`font-display font-bold text-base sm:text-lg leading-snug line-clamp-2 tracking-tight transition-colors ${
              isFeatured
                ? 'text-white group-hover:text-[#ff5fcf]'
                : 'text-slate-900 group-hover:text-[#9929ea]'
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`text-xs line-clamp-2 leading-relaxed ${
              isFeatured ? 'text-slate-300/80' : 'text-slate-600'
            }`}
          >
            {post.snippet}
          </p>
        </div>

        {/* Card Author Signature */}
        <div
          className={`mt-3 pt-2.5 border-t flex items-center justify-between text-xs ${
            isFeatured ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#9929ea] to-[#ff5fcf] flex items-center justify-center text-white text-[9px] font-bold">
              J
            </div>
            <span className="font-semibold text-[11px]">Jobayer Hossen</span>
          </div>

          <span
            className={`text-[10px] font-bold ${
              isFeatured ? 'text-[#ff5fcf]' : 'text-[#9929ea]'
            }`}
          >
            {isFeatured ? '★ Featured' : 'Read ↗'}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridSectionRef = useRef<HTMLDivElement>(null);

  // Responsive breakpoint detector
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Collapse stack on outside pointer click
  useEffect(() => {
    if (!isMobile || !isExpanded) return;
    const handleOutsideClick = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
        setActiveCardIndex(null);
      }
    };
    document.addEventListener('pointerdown', handleOutsideClick);
    return () => document.removeEventListener('pointerdown', handleOutsideClick);
  }, [isMobile, isExpanded]);

  // Handle Explore More button click
  const handleToggleExploreMore = () => {
    setShowAllPosts((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          gridSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 120);
      }
      return next;
    });
  };

  // Categories list
  const categories = ['All', 'Visual Design', 'AI & Automation', 'Social Media Strategy', 'Growth & Strategy'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#ff5fcf]/8 via-[#9929ea]/6 to-transparent rounded-full blur-3xl opacity-70"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
            From my <span className="bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] bg-clip-text text-transparent">blog post</span>
          </h2>
        </div>

        {/* 1. TeamStack Interactive Deck Showcase */}
        <div className="relative mt-4 sm:mt-6">
          <div
            ref={containerRef}
            className="flex h-[28rem] sm:h-[32rem] items-center justify-center select-none"
            onMouseEnter={isMobile ? undefined : () => setIsExpanded(true)}
            onMouseLeave={
              isMobile
                ? undefined
                : () => {
                    setIsExpanded(false);
                    setActiveCardIndex(null);
                  }
            }
            onClick={
              isMobile
                ? () => {
                    if (!isExpanded) setIsExpanded(true);
                  }
                : undefined
            }
          >
            {/* Stack Deck Wrapper */}
            <div className="relative h-[25rem] w-full max-w-5xl sm:h-[28rem]">
              {BLOG_POSTS.slice(0, 5).map((post, index) => (
                <StackCard
                  key={post.id}
                  post={post}
                  index={index}
                  total={Math.min(BLOG_POSTS.length, 5)}
                  isExpanded={isExpanded}
                  isMobile={isMobile}
                  isActive={activeCardIndex === index}
                  onActivate={setActiveCardIndex}
                  onExpand={() => setIsExpanded(true)}
                  onSelectPost={onSelectPost}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 2. Explore More Button under the stack */}
        <div className="flex flex-col items-center justify-center mt-2">
          <motion.button
            type="button"
            onClick={handleToggleExploreMore}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-[0_8px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(153,41,234,0.25)] transition-all cursor-pointer font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5fcf]"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff5fcf] animate-pulse" />
            <span>{showAllPosts ? 'Collapse All Posts View' : 'Explore More Posts (5)'}</span>
            <motion.div
              animate={{ rotate: showAllPosts ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
            </motion.div>
          </motion.button>
        </div>

        {/* 3. Smoothly Animated All Posts Collection Grid */}
        <AnimatePresence>
          {showAllPosts && (
            <motion.div
              ref={gridSectionRef}
              initial={{ opacity: 0, height: 0, y: 30 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-10 border-t border-slate-200/80 overflow-hidden"
            >
              {/* Filter controls and Search */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white shadow-sm scale-102'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>

                {/* Search Input */}
                <div className="relative min-w-[220px]">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full border border-slate-200 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf]"
                  />
                </div>
              </div>

              {/* Grid of All Cards */}
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    onClick={() => onSelectPost(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectPost(post);
                      }
                    }}
                    className="group bg-white rounded-3xl p-5 border border-slate-200/90 hover:border-[#ff5fcf]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#9929ea] shadow-xs">
                          {post.category}
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#ff5fcf]" />
                        <span>{post.readTime}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-[#9929ea] transition-colors line-clamp-2 leading-snug tracking-tight">
                        {post.title}
                      </h3>

                      {/* Snippet */}
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                        {post.snippet}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#9929ea] to-[#ff5fcf] flex items-center justify-center text-white text-[10px] font-bold">
                          J
                        </div>
                        <span className="text-xs font-semibold text-slate-700">Jobayer Hossen</span>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#ff5fcf] group-hover:to-[#9929ea] transition-all group-hover:scale-108 shadow-xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                  <p className="text-sm">No articles found matching your search.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
