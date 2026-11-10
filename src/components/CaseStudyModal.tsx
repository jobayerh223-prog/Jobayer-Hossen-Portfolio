import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData.ts';

interface CaseStudyModalProps {
  project: typeof PORTFOLIO_PROJECTS[0] | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="casestudy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Client Header */}
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-800 rounded-full">
            {project.category}
          </span>
          <span className="text-xs font-semibold px-3 py-1 bg-[#ff5fcf]/10 text-[#9929ea] rounded-full">
            Client: {project.client}
          </span>
        </div>

        <h3
          id="casestudy-title"
          className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight leading-snug"
        >
          {project.title}
        </h3>

        {/* High-Impact Result Badge */}
        <div className="my-4 py-2.5 px-4 bg-emerald-50 border border-emerald-200 rounded-xl inline-block">
          <span className="text-sm font-bold text-emerald-800">
            📊 Primary Impact: {project.metrics}
          </span>
        </div>

        {/* Hero Image */}
        <div className="my-6 rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Challenge & Solution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 text-sm">
          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-100">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-1.5">
              The Challenge
            </span>
            <p className="text-slate-700 leading-relaxed font-normal">{project.challenge}</p>
          </div>

          <div className="p-5 rounded-2xl bg-purple-50/50 border border-purple-100">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9929ea] block mb-1.5">
              The Strategy & Solution
            </span>
            <p className="text-slate-700 leading-relaxed font-normal">{project.solution}</p>
          </div>
        </div>

        {/* Key Measurable Outcomes */}
        <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Verifiable Client Outcomes
          </span>
          <div className="space-y-2.5">
            {project.results.map((res, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Want similar growth metrics for your company or brand?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss a Project Like This</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
