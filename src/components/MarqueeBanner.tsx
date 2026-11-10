import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    'Social Media Strategy',
    'AI Tools & Automation',
    'Stop-The-Scroll Visuals',
    'High-Converting Carousels',
    'Viral Hook Scripting',
    'Autonomous Content Pipelines',
    '15M+ Organic Reach',
    'Brand Identity Kits',
    'Make & Zapier Automations',
  ];

  return (
    <div
      aria-label="Skill Capabilities Ticker"
      className="py-4 bg-gradient-to-r from-[#9929ea] via-[#c432d6] to-[#ff5fcf] text-white overflow-hidden shadow-inner select-none font-display font-extrabold uppercase tracking-wider text-sm sm:text-base"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Double array to create seamless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={index} className="flex items-center gap-4 mx-4">
            <span>{item}</span>
            <Sparkles className="w-4 h-4 text-white/80 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
