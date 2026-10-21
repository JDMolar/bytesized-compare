export interface SocialPlatform {
  id: string;
  name: string;
  category: string;
  handle: string;
  url: string;
  icon: string;
  iconColor: string;
  iconBg?: string;
  brandColor?: string;
  statusText: string;
  stats: string;
  description: string;
  // Legacy compatibility
  bgGlow?: string;
  borderColor?: string;
  hoverBorder?: string;
  badgeColor?: string;
}

export const socialPlatforms: SocialPlatform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    category: 'Community & Feeds',
    handle: '@bytesizedai',
    url: 'https://facebook.com',
    icon: 'fa-brands fa-facebook-f',
    iconColor: 'text-[#1877F2]',
    iconBg: 'bg-[#EFF6FF]',
    brandColor: '#1877F2',
    statusText: 'Official Hub',
    stats: '42.5K Followers',
    description: 'Long-form automated video syndication, technical engineering breakdowns, and enterprise AI community posts.'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    category: 'Visual & Reels',
    handle: '@bytesized.ai',
    url: 'https://instagram.com',
    icon: 'fa-brands fa-instagram',
    iconColor: 'text-[#E1306C]',
    iconBg: 'bg-[#FFF1F2]',
    brandColor: '#E1306C',
    statusText: 'Daily Reels',
    stats: '128K Monthly Reach',
    description: 'Kinetic design systems, short-form automated visual snippets, and dynamic model benchmark cards.'
  },
  {
    id: 'threads',
    name: 'Threads',
    category: 'Discussions',
    handle: '@bytesized.ai',
    url: 'https://threads.net',
    icon: 'fa-brands fa-threads',
    iconColor: 'text-[#1D1D1F]',
    iconBg: 'bg-[#F5F3EF]',
    brandColor: '#1D1D1F',
    statusText: 'Dev Stream',
    stats: '18.4K Devs',
    description: 'Real-time telemetry discussions, AI prompt engineering dispatches, and quick-fire benchmark comparisons.'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    category: 'Video & Tutorials',
    handle: '@bytesizedAI',
    url: 'https://youtube.com',
    icon: 'fa-brands fa-youtube',
    iconColor: 'text-[#FF0000]',
    iconBg: 'bg-[#FEF2F2]',
    brandColor: '#FF0000',
    statusText: '4K Shorts',
    stats: '65.2K Subscribers',
    description: 'Automated Remotion video workflows, deep architectural model teardowns, and multi-agent pipelines.'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    category: 'Short-Form Kinetic',
    handle: '@bytesizedai',
    url: 'https://tiktok.com',
    icon: 'fa-brands fa-tiktok',
    iconColor: 'text-[#1D1D1F]',
    iconBg: 'bg-[#F5F5F7]',
    brandColor: '#1D1D1F',
    statusText: 'Viral Tech',
    stats: '310K Views/mo',
    description: 'Rapid 60-second AI tool comparisons, high-energy coding snippets, and syndication automation hacks.'
  },
  {
    id: 'x',
    name: 'X',
    category: 'Real-Time News',
    handle: '@bytesizedai',
    url: 'https://x.com',
    icon: 'fa-brands fa-x-twitter',
    iconColor: 'text-[#1D1D1F]',
    iconBg: 'bg-[#F5F5F7]',
    brandColor: '#1D1D1F',
    statusText: 'Breaking Intel',
    stats: '89.4K Engagements',
    description: 'Zero-day frontier release coverage, latency and pricing telemetry drops, and AI benchmark threads.'
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    category: 'Design & Visuals',
    handle: '@bytesizedai',
    url: 'https://pinterest.com',
    icon: 'fa-brands fa-pinterest',
    iconColor: 'text-[#E60023]',
    iconBg: 'bg-[#FFF1F2]',
    brandColor: '#E60023',
    statusText: 'Design Moodboards',
    stats: '24.1K Monthly Pins',
    description: 'Curated design systems, generative UI component boards, and automated infographic aesthetics.'
  }
];
