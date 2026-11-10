import React from 'react';

// Crisp, bespoke monochrome SVG icons in pure black
const ClaudeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 2.5L12 6.2L10.5 2.5H8.2L10.8 7.5L6 6.8V9L10.8 9.5L6.8 12.8L8.2 14.5L12 11.2L15.8 14.5L17.2 12.8L13.2 9.5L18 9V6.8L13.2 7.5L15.8 2.5H13.5ZM12 12.5L10.5 21.5H13.5L12 12.5Z" />
  </svg>
);

const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.28 10.37a5.53 5.53 0 0 0-.44-4.22 5.63 5.63 0 0 0-4.89-2.82 5.57 5.57 0 0 0-2.3.5A5.57 5.57 0 0 0 10.1.75a5.62 5.62 0 0 0-4.66 2.56 5.58 5.58 0 0 0-3.6 2.62 5.62 5.62 0 0 0 .54 6.44 5.57 5.57 0 0 0-.48 4.22 5.63 5.63 0 0 0 4.89 2.82c.8 0 1.58-.17 2.3-.5a5.57 5.57 0 0 0 4.54 3.08 5.62 5.62 0 0 0 4.66-2.56 5.58 5.58 0 0 0 3.6-2.62 5.62 5.62 0 0 0-.54-6.44h-.13ZM12 14.28a2.28 2.28 0 1 1 0-4.56 2.28 2.28 0 0 1 0 4.56Zm-1.8-6.19a3.86 3.86 0 0 1 3.6 0l4.3 2.48a3.86 3.86 0 0 1 1.93 3.34v.32l-3.32-1.92a2.3 2.3 0 0 0-2.28 0l-4.23 2.44v-6.66Zm-5.74 3.31a3.86 3.86 0 0 1 1.8-3.41l4.3-2.48v6.66l-4.23 2.44a2.3 2.3 0 0 0-1.14 1.98v-.32a3.86 3.86 0 0 1-.73-4.87Zm1.44 7.62a3.86 3.86 0 0 1-.13-3.86l4.3 2.48v5.77a3.86 3.86 0 0 1-4.17-.53v-.32l3.32-1.92a2.3 2.3 0 0 0 1.14-1.98l-4.46-2.57v.93Zm7.9 3.41a3.86 3.86 0 0 1-3.6 0l-4.3-2.48a3.86 3.86 0 0 1-1.93-3.34v-.32l3.32 1.92a2.3 2.3 0 0 0 2.28 0l4.23-2.44v6.66Zm5.74-3.31a3.86 3.86 0 0 1-1.8 3.41l-4.3 2.48v-6.66l4.23-2.44a2.3 2.3 0 0 0 1.14-1.98v.32a3.86 3.86 0 0 1 .73 4.87Zm-1.44-7.62a3.86 3.86 0 0 1 .13 3.86l-4.3-2.48V3.19a3.86 3.86 0 0 1 4.17.53v.32l-3.32 1.92a2.3 2.3 0 0 0-1.14 1.98l4.46 2.57v-.93Z" />
  </svg>
);

const GeminiIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

const GoogleAIStudioIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fillOpacity="0.15" />
    <path d="M12 4L14.2 8.5L19 9.2L15.5 12.6L16.3 17.5L12 15.2L7.7 17.5L8.5 12.6L5 9.2L9.8 8.5L12 4Z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const AiChipIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M9 9h6v6H9z" fill="currentColor" fillOpacity="0.2" />
    <path d="M9 1h1v3H9zM14 1h1v3h-1zM9 20h1v3H9zM14 20h1v3h-1zM1 9h3v1H1zM1 14h3v1H1zM20 9h3v1h-3zM20 14h3v1h-3z" />
    <path d="M9 12h6M12 9v6" strokeWidth="1.5" />
  </svg>
);

const BrandingIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 19 7-7 3 3-7 7-3-3z" fill="currentColor" fillOpacity="0.15" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <circle cx="9" cy="9" r="2" fill="currentColor" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.42a6.33 6.33 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.19 8.19 0 0 0 4.97 1.67V6.93a4.83 4.83 0 0 1-1.2-.24Z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const VibeCodingIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

interface FloatingIconItem {
  id: string;
  name: string;
  category: string;
  component: React.FC<{ className?: string }>;
  position: string; // Tailwind coordinate positioning
  sizeClasses: string; // Dimensions
  iconSizeClasses: string;
  animationClass: string;
  animationDelay: string;
  badgeContent?: string;
  hideOnMobile?: boolean;
}

export const FloatingHeroIcons: React.FC = () => {
  const icons: FloatingIconItem[] = [
    // 1. Claude AI (Upper Left)
    {
      id: 'claude',
      name: 'Claude 3.7',
      category: 'Reasoning AI',
      component: ClaudeIcon,
      position: 'left-[4%] sm:left-[7%] xl:left-[9%] top-[19%]',
      sizeClasses: 'w-11 h-11 sm:w-13 sm:h-13',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-1',
      animationDelay: '0s',
    },
    // 2. ChatGPT (Mid-High Left)
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'LLM Engine',
      component: ChatGPTIcon,
      position: 'left-[2%] sm:left-[4%] xl:left-[6%] top-[34%]',
      sizeClasses: 'w-12 h-12 sm:w-14 sm:h-14',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-2',
      animationDelay: '1.4s',
    },
    // 3. AI Neural Chip (Inner Upper-Left)
    {
      id: 'ai-chip',
      name: 'AI Agent',
      category: 'Autonomous Nodes',
      component: AiChipIcon,
      position: 'left-[20%] sm:left-[23%] xl:left-[26%] top-[23%]',
      sizeClasses: 'w-9 h-9 sm:w-11 sm:h-11',
      iconSizeClasses: 'w-5 h-5 sm:w-6 sm:h-6',
      animationClass: 'animate-hero-float-3',
      animationDelay: '0.8s',
      hideOnMobile: true,
    },
    // 4. X / Twitter (Mid-Low Left)
    {
      id: 'x-twitter',
      name: 'X (Twitter)',
      category: 'Viral Reach',
      component: XIcon,
      position: 'left-[2.5%] sm:left-[5%] xl:left-[7%] top-[67%]',
      sizeClasses: 'w-9 h-9 sm:w-10 sm:h-10',
      iconSizeClasses: 'w-4 h-4 sm:w-5 sm:h-5',
      animationClass: 'animate-hero-float-1',
      animationDelay: '2.2s',
    },
    // 5. LinkedIn (Lower Left Flank)
    {
      id: 'linkedin',
      name: 'LinkedIn',
      category: 'B2B Authority',
      component: LinkedInIcon,
      position: 'left-[14%] sm:left-[16%] xl:left-[19%] top-[78%]',
      sizeClasses: 'w-10 h-10 sm:w-11 sm:h-11',
      iconSizeClasses: 'w-5 h-5 sm:w-5.5 sm:h-5.5',
      animationClass: 'animate-hero-float-2',
      animationDelay: '3.1s',
      hideOnMobile: true,
    },
    // 6. Google AI Studio (Upper Right)
    {
      id: 'ai-studio',
      name: 'Google AI Studio',
      category: 'Gemini Pro / Flash',
      component: GoogleAIStudioIcon,
      position: 'right-[4%] sm:right-[7%] xl:right-[9%] top-[19%]',
      sizeClasses: 'w-11 h-11 sm:w-13 sm:h-13',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-2',
      animationDelay: '0.5s',
    },
    // 7. Gemini (Mid-High Right)
    {
      id: 'gemini',
      name: 'Gemini 2.5',
      category: 'Multimodal AI',
      component: GeminiIcon,
      position: 'right-[2%] sm:right-[4%] xl:right-[6%] top-[34%]',
      sizeClasses: 'w-12 h-12 sm:w-14 sm:h-14',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-1',
      animationDelay: '1.8s',
    },
    // 8. Branding / Vector Pen (Inner Upper-Right)
    {
      id: 'branding',
      name: 'Branding Kit',
      category: 'Design Systems',
      component: BrandingIcon,
      position: 'right-[18%] sm:right-[21%] xl:right-[24%] top-[21%]',
      sizeClasses: 'w-9 h-9 sm:w-11 sm:h-11',
      iconSizeClasses: 'w-5 h-5 sm:w-6 sm:h-6',
      animationClass: 'animate-hero-float-3',
      animationDelay: '2.7s',
      hideOnMobile: true,
    },
    // 9. Instagram (Mid-Low Right)
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'Stop-The-Scroll',
      component: InstagramIcon,
      position: 'right-[2.5%] sm:right-[5%] xl:right-[7%] top-[67%]',
      sizeClasses: 'w-9 h-9 sm:w-10 sm:h-10',
      iconSizeClasses: 'w-4 h-4 sm:w-5 sm:h-5',
      animationClass: 'animate-hero-float-1',
      animationDelay: '1.1s',
    },
    // 10. Vibe Coding Capsule (Lower Right Flank)
    {
      id: 'vibe-coding',
      name: 'Vibe Coding',
      category: 'Full-Stack Rapid AI',
      component: VibeCodingIcon,
      position: 'right-[12%] sm:right-[15%] xl:right-[18%] top-[78%]',
      sizeClasses: 'h-9 sm:h-10 px-3',
      iconSizeClasses: 'w-4 h-4',
      animationClass: 'animate-hero-float-2',
      animationDelay: '2.5s',
      badgeContent: 'vibe:coding',
    },
    // 11. TikTok & Shorts (Left flank floating)
    {
      id: 'tiktok',
      name: 'TikTok & Shorts',
      category: 'Viral Vertical Video',
      component: TikTokIcon,
      position: 'left-[1%] sm:left-[3%] top-[49%]',
      sizeClasses: 'w-8 h-8 sm:w-9 sm:h-9',
      iconSizeClasses: 'w-4 h-4',
      animationClass: 'animate-hero-float-3',
      animationDelay: '3.6s',
      hideOnMobile: true,
    },
    // 12. YouTube (Right flank floating)
    {
      id: 'youtube',
      name: 'YouTube',
      category: 'Long-Form & Pods',
      component: YouTubeIcon,
      position: 'right-[1%] sm:right-[3%] top-[49%]',
      sizeClasses: 'w-8 h-8 sm:w-9 sm:h-9',
      iconSizeClasses: 'w-4 h-4',
      animationClass: 'animate-hero-float-1',
      animationDelay: '4.2s',
      hideOnMobile: true,
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-15 overflow-hidden select-none"
    >
      {icons.map((item) => {
        const IconComponent = item.component;
        return (
          <div
            key={item.id}
            style={{ animationDelay: item.animationDelay }}
            className={`absolute ${item.position} ${item.animationClass} ${
              item.hideOnMobile ? 'hidden sm:flex' : 'flex'
            } pointer-events-auto group cursor-pointer`}
          >
            {/* High-end minimalist black icon container */}
            <div
              className={`relative flex items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md border border-slate-900/15 shadow-[0_6px_20px_rgba(0,0,0,0.07)] text-slate-950 transition-all duration-300 group-hover:scale-115 group-hover:border-slate-950 group-hover:shadow-[0_10px_28px_rgba(0,0,0,0.18)] ${item.sizeClasses}`}
            >
              <IconComponent className={`${item.iconSizeClasses} text-slate-950 transition-transform duration-300 group-hover:rotate-6`} />

              {/* Optional capsule text for vibe coding */}
              {item.badgeContent && (
                <span className="ml-1.5 font-mono text-[11px] sm:text-xs font-bold text-slate-950 tracking-tight whitespace-nowrap">
                  &lt;{item.badgeContent}/&gt;
                </span>
              )}

              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-30">
                <div className="px-2 py-0.5 rounded-md bg-slate-950 text-white text-[10px] font-semibold tracking-wide shadow-md flex items-center gap-1">
                  <span>{item.name}</span>
                  <span className="text-slate-400 text-[9px]">· {item.category}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
