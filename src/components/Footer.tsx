import React, { useState } from 'react';
import { ArrowUpRight, Send, Linkedin, Twitter, Instagram, Github, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData.ts';
import { BookCallButton } from './BookCallButton.tsx';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer id="contact" className="pt-6 pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Container Matching Mockup Bottom Structure */}
        <div className="bg-[#0b0a10] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
          {/* Top Callout Bar Matching Mockup: "Let's Connect there" + Hire me button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5fcf] mb-1 block">
                Start a Conversation
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                Let's <span className="text-[#ff5fcf]">Connect</span> there
              </h3>
            </div>

            <BookCallButton
              onClick={onOpenBooking}
              defaultText="Book Call"
              hoverText="Let's Talk!"
              className="h-12 w-44 text-sm"
            />
          </div>

          {/* 4 Columns Grid Matching Mockup */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 border-b border-white/10">
            {/* Column 1: Brand Info & Socials */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9929ea] to-[#ff5fcf] flex items-center justify-center font-bold text-white text-sm">
                  J
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  {BRAND_INFO.name}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Freelance Social Media Manager &amp; AI Automation Specialist.
              </p>

              {/* Social Icons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={BRAND_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5fcf] hover:text-white text-slate-300 flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter Profile"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5fcf] hover:text-white text-slate-300 flex items-center justify-center transition-all"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5fcf] hover:text-white text-slate-300 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5fcf] hover:text-white text-slate-300 flex items-center justify-center transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                Contact
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                <li className="break-all">
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="hover:text-[#ff5fcf] transition-colors"
                  >
                    {BRAND_INFO.email}
                  </a>
                </li>
                <li>{BRAND_INFO.location}</li>
                <li>
                  <button
                    onClick={onOpenBooking}
                    className="text-left text-[#ff5fcf] hover:underline cursor-pointer"
                  >
                    Schedule Intro Call ↗
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Newsletter */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                Get the latest insights
              </span>
              <p className="text-xs text-slate-400">
                Weekly teardowns on stop-the-scroll visuals and AI growth automations.
              </p>

              <form onSubmit={handleSubscribe} className="relative mt-2">
                <input
                  type="email"
                  placeholder="Email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-xs rounded-full bg-white/10 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#ff5fcf]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] flex items-center justify-center text-white cursor-pointer hover:opacity-90"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Legal bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} {BRAND_INFO.name}. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#terms" className="hover:text-slate-200 transition-colors">
                User Terms & Conditions
              </a>
              <span aria-hidden="true">|</span>
              <a href="#privacy" className="hover:text-slate-200 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
