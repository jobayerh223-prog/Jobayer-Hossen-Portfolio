import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Experience } from './components/Experience.tsx';
import { WhyHireMe } from './components/WhyHireMe.tsx';
import { Portfolio } from './components/Portfolio.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { MarqueeBanner } from './components/MarqueeBanner.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CursorEffect } from './components/CursorEffect.tsx';

import { BookingModal } from './components/BookingModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { ServiceModal } from './components/ServiceModal.tsx';
import { BlogModal } from './components/BlogModal.tsx';

import {
  PORTFOLIO_PROJECTS,
  type ServiceItem,
  type BlogPostItem
} from './data/portfolioData.ts';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialEmail, setBookingInitialEmail] = useState('');

  const [selectedProject, setSelectedProject] = useState<typeof PORTFOLIO_PROJECTS[0] | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);

  const handleOpenBooking = () => {
    setBookingInitialEmail('');
    setIsBookingOpen(true);
  };

  const handleExplorePortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#ff5fcf] selection:text-white flex flex-col font-sans">
      {/* Interactive Custom Cursor Follower */}
      <CursorEffect />

      {/* 1. Top Floating Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section (with Jobayer's portrait, arch gradient, stats & quotes) */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onExplorePortfolio={handleExplorePortfolio}
        />

        {/* 2. My Projects (Portfolio showcase) */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenBooking={handleOpenBooking}
        />

        {/* 3. My Services (Rolling stack / deliverables) */}
        <Services onSelectService={(service) => setSelectedService(service)} />

        {/* 4. My Work Experience Timeline (Matching reference layout) */}
        <Experience />

        {/* 5. Why You Hire Me for Your Next Projects? (Cutout portrait + stats) */}
        <WhyHireMe onOpenBooking={handleOpenBooking} />

        {/* 8. Testimonials that Speak to My Results (Dark rounded container) */}
        <Testimonials />

        {/* 9. High-Energy Marquee Ticker Banner (Brand gradient) */}
        <MarqueeBanner />

        {/* 11. From my blog post (Editorial articles + reader modal) */}
        <BlogSection onSelectPost={(post) => setSelectedPost(post)} />
      </main>

      {/* 12. Footer ("Let's Connect there") */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingOpen}
        initialEmail={bookingInitialEmail}
        onClose={() => setIsBookingOpen(false)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenBooking={handleOpenBooking}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={handleOpenBooking}
      />

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenBooking={handleOpenBooking}
      />
    </div>
  );
}
