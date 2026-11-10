import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { validateBookingForm, type BookingFormData } from '../utils/portfolioLogic.ts';
import { SERVICES_DATA, BRAND_INFO } from '../data/portfolioData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialEmail = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    serviceType: 'ai-tools-automation',
    targetTimeline: 'within-2-weeks',
    monthlyBudget: 'tier-growth',
    projectBrief: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialEmail) {
      setFormData((prev) => ({ ...prev, email: initialEmail }));
    }
  }, [initialEmail]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
              Discovery Call Requested!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thanks <strong className="text-slate-900">{formData.fullName}</strong>! Jobayer will
              review your details and reply to{' '}
              <strong className="text-[#9929ea]">{formData.email}</strong> within 12 hours with
              calendar slots for our 20-minute strategy session.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-left text-xs space-y-1.5 text-slate-700">
              <div className="flex justify-between font-semibold">
                <span>Selected Focus:</span>
                <span className="text-[#9929ea]">
                  {SERVICES_DATA.find((s) => s.id === formData.serviceType)?.title ||
                    formData.serviceType}
                </span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Direct Contact:</span>
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Turnaround:</span>
                <span className="text-emerald-600 font-bold">Same-day response</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5fcf]/10 text-[#9929ea] text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#ff5fcf]" />
                <span>20-Min Strategy Call</span>
              </div>
              <h3
                id="booking-modal-title"
                className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight"
              >
                Book a Call with <span className="text-[#ff5fcf]">Jobayer</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Tell me about your brand goals. No sales pitch, just actionable strategy.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Vance, Founder"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf] ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-500 font-medium block mt-1">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf] ${
                      errors.email ? 'border-rose-500 bg-rose-50/50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-500 font-medium block mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Service interest */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Area of Interest *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, serviceType: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf] bg-white cursor-pointer"
                >
                  <option value="ai-tools-automation">
                    AI Tools & Workflow Automation (Repurposing, Make.com)
                  </option>
                  <option value="social-media-strategy">
                    Social Media Strategy & Management (Organic Scaling)
                  </option>
                  <option value="visual-design-creatives">
                    High-Impact Visual & Creative Design (Carousels, Brand Kits)
                  </option>
                  <option value="full-growth-bundle">
                    Full Growth Bundle (Strategy + AI Pipelines + Creative)
                  </option>
                </select>
              </div>

              {/* Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Start Date
                  </label>
                  <select
                    value={formData.targetTimeline}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, targetTimeline: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf] bg-white"
                  >
                    <option value="immediate">Immediately (This week)</option>
                    <option value="within-2-weeks">Within 2 weeks</option>
                    <option value="next-month">Next month</option>
                    <option value="just-exploring">Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Monthly Budget Range
                  </label>
                  <select
                    value={formData.monthlyBudget}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, monthlyBudget: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf] bg-white"
                  >
                    <option value="tier-starter">$1,500 – $2,500 / mo</option>
                    <option value="tier-growth">$2,500 – $4,500 / mo (Most Popular)</option>
                    <option value="tier-scale">$4,500+ / mo (Full Omnichannel)</option>
                    <option value="one-time-sprint">One-time Sprint / Project</option>
                  </select>
                </div>
              </div>

              {/* Brief */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief description of your brand or challenge
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We are an early-stage SaaS startup and want to turn our founder's insights into regular LinkedIn carousels with an automated pipeline."
                  value={formData.projectBrief}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, projectBrief: e.target.value }))
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#ff5fcf]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] text-white text-sm font-semibold uppercase tracking-wider hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(255,95,207,0.4)] cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% confidentiality · Direct response from Jobayer Hossen</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
