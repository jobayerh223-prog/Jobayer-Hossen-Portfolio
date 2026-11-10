import React, { useEffect } from 'react';
import { X, Clock, Calendar, ArrowUpRight, BookOpen } from 'lucide-react';
import { type BlogPostItem } from '../data/portfolioData.ts';

interface BlogModalProps {
  post: BlogPostItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onOpenBooking }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && post) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="font-semibold px-2.5 py-0.5 rounded-full bg-[#ff5fcf]/10 text-[#9929ea]">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <h3
          id="blog-modal-title"
          className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight leading-snug"
        >
          {post.title}
        </h3>

        {/* Article image */}
        <div className="my-5 rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Prose */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 whitespace-pre-line font-normal">
          {post.content}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9929ea] to-[#ff5fcf] flex items-center justify-center text-white text-xs font-bold">
              J
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">Jobayer Hossen</span>
              <span className="text-[11px] text-slate-500 block">Social Media & AI Specialist</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Work with Jobayer</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
