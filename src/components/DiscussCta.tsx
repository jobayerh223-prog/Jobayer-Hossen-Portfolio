import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData.ts';

interface DiscussCtaProps {
  onOpenBookingWithEmail: (email: string) => void;
}

export const DiscussCta: React.FC<DiscussCtaProps> = ({ onOpenBookingWithEmail }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      setError('Please provide a valid work email.');
      return;
    }
    setError('');
    onOpenBookingWithEmail(cleanEmail);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline Matching Mockup */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
          Have An Awesome Project Idea?{' '}
          <span className="font-serif italic text-[#ff5fcf] font-normal drop-shadow-sm">
            Let's Discuss
          </span>
        </h2>

        {/* Email Input Bar Matching Mockup Design */}
        <div className="mt-8 sm:mt-10 max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-full border-2 border-slate-300 focus-within:border-[#ff5fcf] bg-white shadow-md transition-all"
          >
            <div className="flex items-center gap-3 px-4 py-2 w-full">
              <Mail className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className="w-full text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] hover:opacity-95 rounded-full whitespace-nowrap transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Book Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {error && <p className="mt-2 text-xs font-semibold text-rose-600">{error}</p>}
        </div>
      </div>
    </section>
  );
};
