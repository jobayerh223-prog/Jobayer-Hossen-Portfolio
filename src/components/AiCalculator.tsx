import React, { useState, useId } from 'react';
import { Sparkles, Clock, ArrowRight, Gauge } from 'lucide-react';
import { calculateAiImpact } from '../utils/portfolioLogic.ts';

interface AiCalculatorProps {
  onOpenBooking: () => void;
}

export const AiCalculator: React.FC<AiCalculatorProps> = ({ onOpenBooking }) => {
  const [postsPerWeek, setPostsPerWeek] = useState(4);
  const [hoursPerPost, setHoursPerPost] = useState(3);
  const [channels, setChannels] = useState(2);

  const postsId = useId();
  const hoursId = useId();
  const channelsId = useId();

  const impact = calculateAiImpact({
    currentPostsPerWeek: postsPerWeek,
    hoursSpentPerPost: hoursPerPost,
    channelsCount: channels,
  });

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#9929ea]/10 text-[#9929ea] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#ff5fcf]" />
              Interactive ROI Tool for Founders
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
              See How Much Time & Reach <span className="text-[#ff5fcf]">AI Automation</span> Unlocks
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Calculate reclaimed production hours and audience velocity with custom AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Posts per week */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <label htmlFor={postsId}>Desired Target Posts / Week</label>
                  <span className="font-mono text-base text-[#9929ea] bg-[#9929ea]/10 px-2.5 py-0.5 rounded-md">
                    {postsPerWeek} posts
                  </span>
                </div>
                <input
                  id={postsId}
                  type="range"
                  min="1"
                  max="14"
                  step="1"
                  value={postsPerWeek}
                  onChange={(e) => setPostsPerWeek(Number(e.target.value))}
                  className="w-full accent-[#ff5fcf] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>1 post</span>
                  <span>7 daily</span>
                  <span>14 twice-daily</span>
                </div>
              </div>

              {/* Slider 2: Hours spent per post */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <label htmlFor={hoursId}>Hours Currently Spent Per Asset (Design + Copy)</label>
                  <span className="font-mono text-base text-[#9929ea] bg-[#9929ea]/10 px-2.5 py-0.5 rounded-md">
                    {hoursPerPost} hrs
                  </span>
                </div>
                <input
                  id={hoursId}
                  type="range"
                  min="1"
                  max="6"
                  step="0.5"
                  value={hoursPerPost}
                  onChange={(e) => setHoursPerPost(Number(e.target.value))}
                  className="w-full accent-[#ff5fcf] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>1 hr (fast)</span>
                  <span>3 hrs (avg)</span>
                  <span>6 hrs (heavy research)</span>
                </div>
              </div>

              {/* Slider 3: Channels */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <label htmlFor={channelsId}>Active Social Channels</label>
                  <span className="font-mono text-base text-[#9929ea] bg-[#9929ea]/10 px-2.5 py-0.5 rounded-md">
                    {channels} {channels === 1 ? 'channel' : 'channels'}
                  </span>
                </div>
                <input
                  id={channelsId}
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={channels}
                  onChange={(e) => setChannels(Number(e.target.value))}
                  className="w-full accent-[#ff5fcf] cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>LinkedIn only</span>
                  <span>LinkedIn + X</span>
                  <span>+ Instagram + TikTok</span>
                </div>
              </div>
            </div>

            {/* Right Display: Impact Metrics */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#0c0b12] to-[#1c182a] text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wider font-semibold">
                    <Clock className="w-4 h-4 text-[#ff5fcf]" />
                    <span>Monthly Reclaimed Time</span>
                  </div>
                  <span className="text-3xl font-display font-black text-[#ff5fcf] tabular-nums">
                    +{impact.monthlyHoursSaved} hrs/mo
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wider font-semibold">
                    <Gauge className="w-4 h-4 text-[#9929ea]" />
                    <span>Repurposing Velocity</span>
                  </div>
                  <span className="text-2xl font-display font-bold text-white tabular-nums">
                    {impact.capacityMultiplier}x Multiplier
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wider font-semibold">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Est. Monthly Organic Reach</span>
                  </div>
                  <span className="text-2xl font-display font-bold text-emerald-400 tabular-nums">
                    ~{(impact.projectedMonthlyImpressions / 1000).toFixed(0)}k impressions
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white text-sm font-semibold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,95,207,0.4)] cursor-pointer"
                >
                  <span>Build This Engine For My Brand</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
