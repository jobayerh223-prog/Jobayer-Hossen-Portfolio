export interface ServiceItem {
  id: string;
  title: string;
  highlighted?: boolean;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  timeline: string;
  idealFor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metrics: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  snippet: string;
  content: string;
}

export const BRAND_INFO = {
  name: 'Jobayer Hossen',
  title: 'Freelance Social Media Manager & AI Tools & Automation Specialist',
  shortTitle: 'Social Media & AI Specialist',
  coreValueProp: 'High-impact visual design & autonomous AI content systems.',
  targetAudience: 'Founders, early-stage startups, content creators, and small businesses seeking agency-quality branding and social media execution without agency overhead.',
  email: 'jobayerh223@gmail.com',
  location: 'Available Worldwide · Remote',
  stats: {
    clientsServed: '120+',
    yearsExperience: '6+',
    projectsCompleted: '150+',
    industriesCovered: '35+',
    organicImpressions: '15M+',
    averageRating: '4.9/5',
  },
  socials: {
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    github: 'https://github.com',
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media-strategy',
    title: 'Social Media Strategy & Management',
    highlighted: false,
    shortDesc: 'High-retention content calendars, viral hook engineering, and multi-channel distribution across LinkedIn, X, and Instagram.',
    fullDesc: 'A complete organic social operating system. High-retention content pillars, viral hooks, and cadence engineered to convert followers into inbound clients.',
    deliverables: [
      'Multi-channel organic content roadmap & monthly calendars',
      'High-converting hook scripting and copywriting',
      'Community engagement & comment response playbooks',
      'Weekly performance analytics & audience retention audits',
      'Platform-specific format optimization (Carousels, Threads, Reels)',
    ],
    tools: ['Notion', 'Buffer', 'Typefully', 'Canva Pro', 'Figma'],
    timeline: 'Ongoing Monthly Retainer (or 4-week Sprint)',
    idealFor: 'Founders and startups looking for consistent organic inbound without spending hours posting manually.',
  },
  {
    id: 'ai-tools-automation',
    title: 'AI Tools & Workflow Automation',
    highlighted: true,
    shortDesc: 'Autonomous AI content pipelines that generate, repurpose, caption, and schedule multi-format assets with zero manual friction.',
    fullDesc: 'Transform 1 core idea into 15+ multi-platform assets automatically. Custom automated pipelines connecting LLMs, voice transcription, and distribution channels.',
    deliverables: [
      'Custom Make.com & Zapier autonomous workflow pipelines',
      'Automated podcast/video-to-carousel & thread repurposing',
      'Custom GPT prompt libraries tuned to your brand voice',
      'Auto-captioning, audio cleanup, and asset formatting bots',
      'Self-updating content repository & airtable database integration',
    ],
    tools: ['Make.com', 'Zapier', 'OpenAI API', 'Claude', 'Airtable', 'Descript'],
    timeline: '2–3 Week Custom Build + Training',
    idealFor: 'Busy creators and lean teams wanting agency-level output with solo-founder resources.',
  },
  {
    id: 'visual-design-creatives',
    title: 'High-Impact Visual & Creative Design',
    highlighted: false,
    shortDesc: 'Agency-grade visual design: high-retention carousels, striking brand kits, YouTube thumbnails, and ad creatives.',
    fullDesc: 'Visuals that demand attention in crowded algorithmic feeds. Bold typographic hierarchy, high-contrast color theory, and bespoke layouts that elevate credibility.',
    deliverables: [
      'Bespoke multi-slide carousel templates (LinkedIn & Instagram)',
      'High-CTR YouTube thumbnails & short-form cover graphics',
      'Full social media brand identity kit (fonts, palette, badges)',
      'Paid social ad creative variations (Facebook, IG, TikTok)',
      'Vector icon sets and custom illustrative infographic assets',
    ],
    tools: ['Figma', 'Adobe Photoshop', 'Illustrator', 'Midjourney', 'After Effects'],
    timeline: '1–2 Weeks per asset sprint',
    idealFor: 'Brands with great ideas that need visually stunning assets to match their technical credibility.',
  },
  {
    id: 'short-form-repurposing',
    title: 'Short-Form Video & Content Repurposing',
    highlighted: false,
    shortDesc: 'Transform long-form podcasts, webinars, and voice memos into viral vertical clips, carousels, and threaded summaries.',
    fullDesc: 'Maximize the ROI of every word you record. Fast-turnaround AI-assisted editing, dynamic kinetic typography, and multi-platform distribution designed for maximum retention.',
    deliverables: [
      'High-velocity vertical video editing (Reels, Shorts, TikTok)',
      'Dynamic animated subtitles & hook transitions',
      'Long-form video to 10-slide carousel conversions',
      'Thread extractions and quote graphics for X & LinkedIn',
      'Batch scheduling and automated publishing workflows',
    ],
    tools: ['Premiere Pro', 'Descript', 'CapCut Pro', 'Make.com', 'Figma'],
    timeline: 'Weekly sprints / Recurring retainer',
    idealFor: 'Podcasters, founders, and creators with existing long-form media wanting 10x distribution reach.',
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Social Media Strategist & AI Specialist',
    company: 'Independent Consultant / Apex Scale',
    period: '2022 – Present',
    location: 'Remote',
    description: 'Partnering with early-stage tech founders, AI startups, and creator businesses to build automated organic growth engines and high-impact visual branding.',
    achievements: [
      'Scaled 35+ brand accounts across LinkedIn, Twitter/X, and Instagram to over 15M combined organic views',
      'Engineered automated AI content pipelines cutting weekly content production time from 20 hours to under 4 hours per client',
      'Achieved average 320% increase in qualified inbound DM inquiries across B2B clients',
    ],
  },
  {
    id: 'exp-2',
    role: 'Senior Growth & Content Manager',
    company: 'ViralScale Creative Studio',
    period: '2020 – 2022',
    location: 'New York / Remote',
    description: 'Directed cross-channel organic social media campaigns for 25+ fast-growing SaaS and consumer tech clients, supervising creative workflows and automation.',
    achievements: [
      'Managed content calendar execution generating 12M+ monthly impressions across client portfolio',
      'Pioneered early AI transcription and automated asset resizing workflows across a team of 6 designers',
      'Maintained a 94% client retention rate over 24 consecutive months',
    ],
  },
  {
    id: 'exp-3',
    role: 'Creative Designer & Visual Strategist',
    company: 'HyperGrowth Digital Agency',
    period: '2018 – 2020',
    location: 'Hybrid',
    description: 'Designed high-converting visual assets, carousels, and landing pages for DTC and tech brands seeking distinctive digital presence.',
    achievements: [
      'Designed over 450+ high-retention carousels with an average save rate of 14.8%',
      'Developed modular brand design systems adopted across 30+ startup clients',
      'Boosted paid social ROAS by an average of 42% through iterative creative hook testing',
    ],
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'project-1',
    title: 'ScaleSaaS — Autonomous AI Multi-Channel Content Machine',
    category: 'AI Automation',
    tags: ['AI Automation', 'Make.com', 'SaaS Growth'],
    metrics: '4.2M Organic Views in 90 Days · 28 Hours Saved / Week',
    client: 'CloudScale AI',
    description: 'Architected an automated multi-channel content engine that ingests the CEO’s weekly voice memos, extracts core insights via custom prompt pipelines, and formats them into LinkedIn carousels, X threads, and newsletter drafts ready for 1-click review.',
    image: '/src/assets/images/portfolio_ai_automation_1794063324207.jpg',
    challenge: 'The founding team had incredible domain knowledge but zero time to produce regular content, leaving their brand invisible to prospective enterprise buyers.',
    solution: 'Built an end-to-end Make.com automation that connects Whisper, GPT-4o, and Airtable to draft 12 high-retention posts weekly from a 20-minute audio memo.',
    results: [
      'Over 4.2 million organic impressions in the first 90 days',
      '28 hours saved per week for the executive leadership team',
      '84 high-intent enterprise demo requests attributed directly to LinkedIn',
    ]
  },
  {
    id: 'project-2',
    title: 'Fintech NextGen — Stop-The-Scroll Carousel & Visual Identity',
    category: 'Visual Design',
    tags: ['Visual Design', 'Carousels', 'Brand Identity'],
    metrics: '+340% Engagement Rate · 45K New Followers',
    client: 'Vaultly Financial',
    description: 'Complete overhaul of the social visual language for a modern consumer fintech brand. Introduced high-contrast editorial typography, vibrant neon accent framing, and swipe-inducing carousel hooks that drove record bookmark rates.',
    image: '/src/assets/images/portfolio_social_growth_1794063322459.jpg',
    challenge: 'Previous social graphics were flat, corporate, and continually scrolled past in mobile feeds with less than 0.8% average engagement.',
    solution: 'Engineered a distinctive dark-mode visual system with Archivo Narrow display typography, neon purple-pink accents, and data visualizations that made complex finance topics visually irresistible.',
    results: [
      'Engagement rate spiked from 0.8% to 3.52%',
      '45,000 targeted followers gained within 5 months',
      'Carousel save/bookmark rate reached 18.4% (platform benchmark is 3%)',
    ]
  },
  {
    id: 'project-3',
    title: 'Velo Studio — Minimalist Brand Identity & Social Design Suite',
    category: 'Visual Design',
    tags: ['Visual Design', 'Brand Identity', 'Templates'],
    metrics: 'Complete Brand Suite · 85 High-Converting Templates',
    client: 'Velo Creative Tech',
    description: 'Designed an agency-grade brand identity system and social asset ecosystem tailored for rapid digital deployment, featuring modular Figma components, custom palette palettes, and ready-to-post story assets.',
    image: '/src/assets/images/portfolio_brand_identity_1794063324689.jpg',
    challenge: 'The brand suffered from inconsistent visual execution across different team members, undermining brand authority with potential enterprise clients.',
    solution: 'Delivered an exhaustive social brand toolkit with foolproof typography pairings, 85 modular component templates, and detailed style rules.',
    results: [
      '100% brand consistency achieved across all digital customer touchpoints',
      'Creative production turnaround slashed from 3 days to under 30 minutes',
      'Brand won multiple visual design mentions in leading design newsletters',
    ]
  },
  {
    id: 'project-4',
    title: 'Agentic Summit — Viral Launch Campaign & Organic Funnel',
    category: 'Social Media Strategy',
    tags: ['Social Media Strategy', 'Campaign Launch', 'Growth'],
    metrics: '14,500 Waitlist Registrations · $0 Paid Ad Spend',
    client: 'Agentic AI Global',
    description: 'Executed an aggressive organic social media teaser and thought-leadership campaign on X and LinkedIn for a flagship virtual AI event, driving viral sharing loops and exponential waitlist expansion.',
    image: '/src/assets/images/blog_content_strategy_1794063323736.jpg',
    challenge: 'Organizers had an ambitious goal of 10,000 attendees with only 6 weeks until kickoff and zero paid media budget.',
    solution: 'Designed a high-urgency countdown campaign with speaker quote carousels, sneak-peek keynote slides, and automated reply bots for bonus whitepaper downloads.',
    results: [
      '14,500 qualified registrations generated 100% organically',
      'Over 6,200 retweets and LinkedIn reposts during the 4-week push',
      'Sponsorship revenue exceeded initial target by 180%',
    ]
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'CloudPulse SaaS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&h=180&q=80',
    rating: 5,
    quote: 'Jobayer transformed our social presence from a ghost town into our #1 customer acquisition channel. The AI automation workflows he set up save our team over 25 hours every week while our impressions grew by 4x.',
    metrics: '+410% Qualified Inbound',
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Head of Brand & Growth',
    company: 'NexusAI Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=180&h=180&q=80',
    rating: 5,
    quote: 'Finding someone who has genuine high-taste visual design chops AND knows the technical ins-and-outs of AI pipelines is practically impossible. Jobayer is that rare unicorn. He gave us agency quality without agency overhead.',
    metrics: '2.8M Viral Impressions',
  },
  {
    id: 'test-3',
    name: 'David K. Miller',
    role: 'Creator & Tech Investor',
    company: 'The Signal Newsletter',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&h=180&q=80',
    rating: 5,
    quote: 'His stop-the-scroll carousels are unmatched. Every single asset he delivers is razor-sharp, beautifully typeset, and scientifically formatted for high retention. Working with Jobayer was an immediate ROI from month one.',
    metrics: '+38K LinkedIn Followers',
  },
  {
    id: 'test-4',
    name: 'Sophia Chen',
    role: 'Co-founder',
    company: 'FinAura Digital',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=180&h=180&q=80',
    rating: 5,
    quote: 'Before Jobayer, we were drowning in content creation chaos. His custom Make.com pipeline and brand templates turned our weekly strategy into a seamless 30-minute review process. Absolute game changer.',
    metrics: '92% Production Speedup',
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'blog-1',
    title: 'Stop the Scroll: 7 Visual Design Rules for 2026 Social Feeds',
    category: 'Visual Design',
    date: 'March 2026',
    readTime: '5 min read',
    image: '/src/assets/images/portfolio_social_growth_1794063322459.jpg',
    snippet: 'Why standard templates fail and how high-contrast typography, asymmetrical layout math, and kinetic pacing double your average swipe retention.',
    content: `In 2026, social feeds are more saturated than ever. With millions of AI-generated posts flooding LinkedIn, Instagram, and X every minute, audience fatigue has reached an all-time peak.

Here are the 7 core design rules I use to ensure our clients consistently stop the scroll:

1. The 1.2-Second Hook Test: If your cover slide doesn't make a provocative or high-value visual claim within 1.2 seconds, 85% of users will keep scrolling.
2. Typographic Contrast: Never pair two generic sans-serifs. Pair an architectural condensed face (like Archivo Narrow) with an editorial serif (like Instrument Serif) to create immediate depth.
3. 60-30-10 Color Discipline: Reserve your vibrant focal accent (such as #ff5fcf or #9929ea) strictly for hooks, focal words, and data highlights.
4. Negative Space As A Magnet: Don't cram every square pixel. Generous breathing room signals premium confidence.
5. Micro-Data Badges: Anchor subjective claims with concrete numbers and verifiable metrics.
6. Asymmetrical Visual Offsets: Perfect symmetry feels robotic and boring; slight off-center weights keep eyes scanning.
7. Clear Single-Action Exit: Every carousel must end with a single, unambiguous next step—never three competing buttons.`,
  },
  {
    id: 'blog-2',
    title: 'Building an Autonomous AI Content Pipeline: A Founder’s Practical Blueprint',
    category: 'AI & Automation',
    date: 'February 2026',
    readTime: '7 min read',
    image: '/src/assets/images/portfolio_ai_automation_1794063324207.jpg',
    snippet: 'How busy founders can turn 30 minutes of unstructured voice notes into 12 multi-platform, high-retention assets every week using Make and LLMs.',
    content: `The biggest misconception about AI content is that it produces generic slop. The problem isn't the AI—it's the absence of a structured extraction framework.

When you feed raw prompts into ChatGPT without your unique brand context, you get vanilla fluff that destroys credibility.

The 4-stage pipeline we implement for tech founders:

Stage 1: Raw Knowledge Capture
The founder records a spontaneous 15-minute voice memo on Loom or WhatsApp answering a client question or breaking down a recent company challenge.

Stage 2: Semantic Hook Extraction
Whisper transcribes the audio, and a custom GPT pipeline extracts 3 distinct core ideas, drafting 5 viral hook variations for each.

Stage 3: Multi-Format Transformation
The pipeline automatically branches:
- Track A: A 7-slide carousel outline with concise bullet points
- Track B: A punchy 250-word LinkedIn thought leadership post
- Track C: A 5-tweet micro-thread for X

Stage 4: 1-Click Human Approval
Drafts populate an Airtable queue. The founder or marketing lead reviews in 10 minutes, approves or tweaks, and the scheduler pushes it live.

Total founder time: 25 minutes. Total output: 12 high-retention assets.`,
  },
  {
    id: 'blog-3',
    title: 'Beyond Aesthetics: How High-Impact Visuals Directly Drive Inbound DMs',
    category: 'Social Media Strategy',
    date: 'January 2026',
    readTime: '4 min read',
    image: '/src/assets/images/portfolio_brand_identity_1794063324689.jpg',
    snippet: 'The psychology behind visual credibility and why enterprise buyers judge your service competence based on the design quality of your social content.',
    content: `Perception is reality in B2B. When a prospective buyer or startup investor discovers your personal profile or brand page, they form a snap judgment within 300 milliseconds.

If your graphics look like generic Canva templates with default fonts, they subconsciously assume your underlying service or software is equally mediocre.

When you invest in high-craft visual identity:
- Perceived Value Multiplies: Prospects are significantly less price-sensitive when communicating with a brand that looks agency-tier.
- DMs Replace Cold Outbound: Instead of sending 100 cold emails with 1% conversion, decision makers reach out directly with "Love your carousels—can we talk?"
- Organic Repost Velocity: Other creators and industry leaders proudly repost your assets because sharing high-taste content elevates their own aesthetic status.`,
  },
  {
    id: 'blog-4',
    title: 'The Viral Hook Formula: Analyzing 15M+ Impressions Across B2B Niches',
    category: 'Growth & Strategy',
    date: 'December 2025',
    readTime: '6 min read',
    image: '/src/assets/images/blog_content_strategy_1794063323736.jpg',
    snippet: 'Dissecting the top 20 performing carousel opening lines and the psychological triggers that boost click-through by 310%.',
    content: `After generating over 15 million organic impressions for B2B tech clients, one pattern became indisputable: your hook accounts for 80% of your post's success.

Here is the exact anatomy of high-retention hooks:

1. The Counter-Intuitive Truth: Challenge accepted dogma. "Why publishing daily on LinkedIn is hurting your reach (and what to do instead)."
2. Specific Quantitative Staking: Vague claims get ignored. "How we scaled an AI startup from $0 to $45K MRR using only 3 carousels per week."
3. Open Information Gap: Create curiosity that can only be resolved by swiping to slide two.
4. Visual Pacing: The first slide must have 40% more negative space than subsequent slides to reduce cognitive load.`,
  },
  {
    id: 'blog-5',
    title: 'Autonomous Repurposing: From 1 Keynote to 30 Social Touchpoints',
    category: 'AI & Automation',
    date: 'November 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    snippet: 'The exact node architecture, custom prompt chains, and automated quality filters we use to syndicate executive thought leadership.',
    content: `Most executives waste thousands of hours giving brilliant webinars, keynote speeches, or internal team talks that vanish into oblivion.

By building an autonomous repurposing loop:
- Audio Extraction: High-fidelity audio parsed into structured timestamps.
- Quote Clustering: Semantic models identify high-impact soundbites and contrarian opinions.
- Asymmetrical Carousels: Graphic assets generated with pre-tested Figma layout tokens.
- Distribution Scheduling: Staggered release over 6 weeks across LinkedIn, X, and newsletters.

The result is ubiquitous authority with zero ongoing founder friction.`,
  },
];
