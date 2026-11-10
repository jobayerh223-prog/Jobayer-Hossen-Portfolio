import React, { useEffect } from 'react';
import { X, Check, ArrowUpRight, Wrench, Clock, Users } from 'lucide-react';
import { type ServiceItem } from '../data/portfolioData.ts';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
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

        <span className="text-xs font-bold uppercase tracking-wider text-[#ff5fcf] block mb-2">
          Scope of Work & Deliverables
        </span>

        <h3
          id="service-modal-title"
          className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight"
        >
          {service.title}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {service.fullDesc}
        </p>

        {/* Deliverables Checklist */}
        <div className="my-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-3">
            What You Receive
          </span>
          <div className="space-y-2.5">
            {service.deliverables.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800"
              >
                <div className="w-5 h-5 rounded-full bg-[#ff5fcf]/20 text-[#9929ea] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Meta details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-xs text-slate-700">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
              <Clock className="w-3.5 h-3.5 text-[#ff5fcf]" />
              <span>Timeline</span>
            </div>
            <span className="font-bold text-slate-900 block">{service.timeline}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
              <Wrench className="w-3.5 h-3.5 text-[#9929ea]" />
              <span>Core Tech Stack</span>
            </div>
            <span className="font-bold text-slate-900 block truncate">
              {service.tools.join(', ')}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 text-slate-500 font-semibold mb-1">
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              <span>Best Suited For</span>
            </div>
            <span className="font-bold text-slate-900 block line-clamp-1">
              Startups & Creators
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Flexible sprint or monthly retainer options available.
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white text-xs font-semibold uppercase tracking-wider hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Strategy Call For This Service</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
