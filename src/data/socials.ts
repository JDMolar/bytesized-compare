export interface SocialPlatform {
  id: string;
  name: string;
  category: string;
  handle: string;
  url: string;
  icon: string;
  iconColor: string;
  bgGlow: string;
  borderColor: string;
  hoverBorder: string;
  statusText: string;
  badgeColor: string;
  description: string;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'Community & Feeds',
    handle: '@bytesizedai',
    url: 'https://facebook.com',
    icon: 'fa-brands fa-facebook-f',
    iconColor: 'text-blue-500',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
    borderColor: 'border-blue-900/40',
    hoverBorder: 'hover:border-blue-500/60',
    statusText: 'Official Page',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    description: 'Long-form video drops, technical discussions, and AI engineering community updates.'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'Visual & Reels',
    handle: '@bytesized.ai',
    url: 'https://instagram.com',
    icon: 'fa-brands fa-instagram',
    iconColor: 'text-pink-400',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]',
    borderColor: 'border-pink-900/40',
    hoverBorder: 'hover:border-pink-500/60',
    statusText: 'Active Stories',
    badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    description: 'Short-form visual breakdowns, kinetic UI motion snippets, and design token reels.'
  },
  {
    id: 'threads',
    name: 'Threads',
    category: 'Micro-Discussions',
    handle: '@bytesized.ai',
    url: 'https://threads.net',
    icon: 'fa-brands fa-threads',
    iconColor: 'text-slate-100',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]',
    borderColor: 'border-slate-800',
    hoverBorder: 'hover:border-slate-500/70',
    statusText: 'Live Stream',
    badgeColor: 'bg-slate-700/30 text-slate-200 border-slate-600/40',
    description: 'Daily quick-fire prompt engineering tips, benchmark polls, and casual dev chatter.'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'Video & Tutorials',
    handle: '@bytesizedAI',
    url: 'https://youtube.com',
    icon: 'fa-brands fa-youtube',
    iconColor: 'text-red-500',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]',
    borderColor: 'border-red-900/40',
    hoverBorder: 'hover:border-red-500/60',
    statusText: '4K Shorts & Deep Dives',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
    description: 'Comprehensive model architecture teardowns, automated agent workflows, and Remotion demos.'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'Short-Form Kinetic',
    handle: '@bytesizedai',
    url: 'https://tiktok.com',
    icon: 'fa-brands fa-tiktok',
    iconColor: 'text-cyan-400',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]',
    borderColor: 'border-cyan-900/40',
    hoverBorder: 'hover:border-cyan-400/60',
    statusText: 'Trending Tech',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    description: 'Rapid 60-second AI tool comparisons, coding tips, and viral workflow automation hacks.'
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    category: 'Real-Time News',
    handle: '@bytesizedai',
    url: 'https://x.com',
    icon: 'fa-brands fa-x-twitter',
    iconColor: 'text-white',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.25)]',
    borderColor: 'border-slate-800',
    hoverBorder: 'hover:border-white/50',
    statusText: 'Breaking Intel',
    badgeColor: 'bg-white/10 text-white border-white/20',
    description: 'First-to-know LLM release evaluations, live latency telemetry, and code benchmark threads.'
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    category: 'Design & Visuals',
    handle: '@bytesizedai',
    url: 'https://pinterest.com',
    icon: 'fa-brands fa-pinterest',
    iconColor: 'text-rose-500',
    bgGlow: 'hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.3)]',
    borderColor: 'border-rose-900/40',
    hoverBorder: 'hover:border-rose-500/60',
    statusText: 'Design Moodboards',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    description: 'Curated design systems, AI dashboard layout templates, and generative UI component boards.'
  }
];
