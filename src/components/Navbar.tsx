import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData.ts';
import { BookCallButton } from './BookCallButton.tsx';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Don't auto-hide if mobile drawer is currently open
      if (mobileMenuOpen) return;

      // Always show when at the top of the page
      if (currentScrollY <= 40) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Hide while scrolling down; reveal when scrolling up with intent
      if (currentScrollY > lastScrollY.current + 6) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 12) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300 transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-28 opacity-0 pointer-events-none'
      }`}
    >
      {/* Transparent Glassmorphism Navigation Pill */}
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-5xl rounded-full transition-all duration-300 px-5 sm:px-8 py-3 flex items-center justify-between backdrop-blur-2xl backdrop-saturate-180 border ${
          isScrolled
            ? 'bg-white/45 border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.9)]'
            : 'bg-white/25 border-white/60 shadow-[0_8px_32px_0_rgba(153,41,234,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.7)]'
        }`}
      >
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5fcf] rounded-full"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#9929ea] to-[#ff5fcf] flex items-center justify-center font-bold text-white shadow-sm text-sm group-hover:scale-105 transition-transform">
            J
          </div>
          <span className="font-display font-black text-lg tracking-tight text-slate-900 group-hover:text-[#9929ea] transition-colors">
            {BRAND_INFO.name}
          </span>
        </a>

        {/* Zone 2: Navigation Links (Single Line, Transparent Glass hover, Desktop) */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-1.5 rounded-full hover:bg-white/40 hover:text-slate-950 transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff5fcf]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Zone 3: Primary Action CTA (Interactive Get-In-Touch Button) */}
        <div className="hidden sm:flex items-center shrink-0">
          <BookCallButton onClick={onOpenBooking} className="h-10 w-38 text-xs" />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] rounded-full shadow-sm"
          >
            Book
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="p-1.5 text-slate-700 hover:text-slate-950 hover:bg-white/40 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5fcf]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Transparent Glassmorphism) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-white/80 backdrop-blur-2xl border border-white/70 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 hover:text-[#9929ea] font-semibold text-base py-2 border-b border-slate-200/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 mt-2 text-sm font-semibold text-white bg-gradient-to-r from-[#9929ea] to-[#ff5fcf] rounded-full text-center flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
