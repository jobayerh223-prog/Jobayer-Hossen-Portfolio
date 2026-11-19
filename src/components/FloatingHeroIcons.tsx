import React from 'react';

// Real Official ChatGPT (OpenAI) Vector Logo
const ChatGPTIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.6667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

// Real Official Claude AI Starburst Logo
const ClaudeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
  </svg>
);

// Real Official Facebook Logo
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Real Official Google Gemini 4-Pointed Star
const GeminiIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

// Branding / Vector Pen Tool
const BrandingIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 19 7-7 3 3-7 7-3-3z" fill="currentColor" fillOpacity="0.18" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <circle cx="9" cy="9" r="2" fill="currentColor" />
  </svg>
);

// LinkedIn
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Instagram
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" />
  </svg>
);

// YouTube
const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Vibe Coding
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
    // 1. Real Official ChatGPT (Moved inward on Upper Left)
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'OpenAI Engine',
      component: ChatGPTIcon,
      position: 'left-[10%] sm:left-[18%] lg:left-[20%] xl:left-[22%] top-[25%] sm:top-[22%]',
      sizeClasses: 'w-11 h-11 sm:w-13 sm:h-13',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-1',
      animationDelay: '0s',
    },
    // 2. Real Official Claude AI (Moved down & inward beside portrait)
    {
      id: 'claude',
      name: 'Claude AI',
      category: 'Anthropic Reasoning',
      component: ClaudeIcon,
      position: 'right-[20%] sm:right-[24%] lg:right-[29%] xl:right-[30%] top-[48%] lg:top-[44%]',
      sizeClasses: 'w-11 h-11 sm:w-13 sm:h-13',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-2',
      animationDelay: '0.6s',
    },
    // 3. Branding / Vector Pen (Inner Upper Right)
    {
      id: 'branding',
      name: 'Branding Kit',
      category: 'Design Systems',
      component: BrandingIcon,
      position: 'right-[18%] sm:right-[21%] xl:right-[24%] top-[21%]',
      sizeClasses: 'w-9 h-9 sm:w-11 sm:h-11',
      iconSizeClasses: 'w-5 h-5 sm:w-6 sm:h-6',
      animationClass: 'animate-hero-float-3',
      animationDelay: '2.5s',
      hideOnMobile: true,
    },
    // 4. Facebook (Mid-High Left)
    {
      id: 'facebook',
      name: 'Facebook',
      category: 'Social Growth & Meta',
      component: FacebookIcon,
      position: 'left-[2.5%] sm:left-[5%] xl:left-[7%] top-[45%]',
      sizeClasses: 'w-11 h-11 sm:w-12 sm:h-12',
      iconSizeClasses: 'w-5 h-5 sm:w-6 sm:h-6',
      animationClass: 'animate-hero-float-2',
      animationDelay: '1.8s',
    },
    // 5. Gemini (Moved to left flank beside portrait)
    {
      id: 'gemini',
      name: 'Gemini 2.5',
      category: 'Google DeepMind AI',
      component: GeminiIcon,
      position: 'left-[6%] sm:left-[28%] lg:left-[29%] xl:left-[30%] top-[62%] sm:top-[51%]',
      sizeClasses: 'w-11 h-11 sm:w-13 sm:h-13',
      iconSizeClasses: 'w-6 h-6 sm:w-7 sm:h-7',
      animationClass: 'animate-hero-float-1',
      animationDelay: '1.4s',
    },
    // 7. LinkedIn (Lower Left Flank)
    {
      id: 'linkedin',
      name: 'LinkedIn',
      category: 'B2B Authority',
      component: LinkedInIcon,
      position: 'left-[14%] sm:left-[16%] xl:left-[19%] top-[78%]',
      sizeClasses: 'w-10 h-10 sm:w-11 sm:h-11',
      iconSizeClasses: 'w-5 h-5 sm:w-5.5 sm:h-5.5',
      animationClass: 'animate-hero-float-1',
      animationDelay: '3.1s',
      hideOnMobile: true,
    },
    // 8. Instagram (Mid-Low Right)
    {
      id: 'instagram',
      name: 'Instagram',
      category: 'Stop-The-Scroll',
      component: InstagramIcon,
      position: 'right-[2.5%] sm:right-[5%] xl:right-[7%] top-[65%]',
      sizeClasses: 'w-9 h-9 sm:w-10 sm:h-10',
      iconSizeClasses: 'w-4 h-4 sm:w-5 sm:h-5',
      animationClass: 'animate-hero-float-1',
      animationDelay: '2.1s',
    },
    // 9. YouTube (Moved up & inward on Right Flank)
    {
      id: 'youtube',
      name: 'YouTube',
      category: 'Long-Form & Pods',
      component: YouTubeIcon,
      position: 'right-[9%] sm:right-[10%] lg:right-[10%] xl:right-[11%] top-[37%] lg:top-[31%]',
      sizeClasses: 'w-8 h-8 sm:w-9 sm:h-9',
      iconSizeClasses: 'w-4 h-4',
      animationClass: 'animate-hero-float-3',
      animationDelay: '3.7s',
      hideOnMobile: true,
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
      animationDelay: '2.8s',
      badgeContent: 'vibe:coding',
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
