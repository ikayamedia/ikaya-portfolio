import { Project, ServiceCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'amorshots',
    title: 'Amor Shots',
    subtitle: 'Cinematic storytelling for weddings that deserve more than a template.',
    client: 'Amor Shots',
    description: 'A complete identity and custom interactive shopping system designed for the future of digital-physical fashion.',
    category: 'brand',
    categoryLabel: 'Brand Identity / UI/UX',
    year: '2026',
    image: '/images/amor_cover.PNG',
    services: [
      'Brand Strategy',
      'Lead Generation',
      'Content Strategy & Production',
      'Social Media Management',
      'AI Automations'
    ],
    overview: "Amor Shots is a fine-art wedding film and photography studio based in Jaipur, serving couples across Rajasthan, Delhi, and Udaipur. Ikaya Media was brought in to drive consistent, qualified enquiries and take the day-to-day weight of content and social media off the founder's plate — without diluting the brand's editorial, high-society positioning.",
    challenge: "High-value wedding clients don't respond to volume-driven lead gen or generic posting cadences — the brand had to keep its 'never generic' identity intact while still generating a reliable pipeline of Atelier- and Studio-tier enquiries, and doing it without a large in-house content team.",
    solution: 'Ikaya built a tiered lead-generation engine targeting destination-wedding couples and planners, paired with a structured content system across seven post formats (teasers, real wedding stories, behind-the-frame, styling, etc.) and AI-driven social automation to handle scheduling, response triage, and repost/UGC workflows at scale — freeing the founder to focus on shooting while enquiries and content kept moving in the background.',
    accentColor: '#FAF6F0',
    colors: ['#D9A79C', '#5C1F2E', '#6366f1', '#2A2320', '#5B6B4B']
  },
  {
    id: 'bannabizz',
    title: 'bannabizz',
    subtitle: 'Immersive Space for Heritage Perfumes',
    client: 'Bannabizz',
    description: 'An architectural digital experience celebrating two centuries of watchmaking expertise and collector archives.',
    category: 'all',
    categoryLabel: 'Digital Experience / Web',
    year: '2026',
    image: '/images/cover.png',
    services: [
      'Social media management & content strategy',
      'Brand visual storytelling & creative direction',
      'Paid media (Meta & Google Ads)',
      'Product photography & reels',
      'Influencer & community outreach'
    ],
    overview: 'BANNABIZZ is an Indian luxury Extrait de Parfum house — no aqua, no shortcuts. Built for fragrance-literate consumers tired of recycled scent directions and trend-led hype. Premium positioning, artisanal craft, rooted in Indian heritage.',
    challenge: 'Marketing a quiet luxury brand in a loud, cluttered fragrance market — without compromising its restraint.',
    solution: 'Build authority through depth — craft-led content, targeted paid media, and storytelling that lets the brand speak without shouting.',
    accentColor: '#F3F5EE',
    colors: ['#000000', '#C9A84C', '#F3F5EE']
  },
  {
    id: 'kavira',
    title: 'Kavira',
    subtitle: 'Turning monthly content into consistent brand recall and engagement',
    client: 'Kavira',
    description: 'Transforming complex statistical trading feeds into an authoritative, beautifully minimalist brand system.',
    category: 'direction',
    categoryLabel: 'Creative Direction / Brand',
    year: '2026',
    image: '/images/kaviracover2.png',
    services: [
      'Social Media Management',
      'Content & Calendar Strategy',
      'Graphic Design & Creative Posts',
      'Script Writing & Video Editing'
    ],
    overview: 'Kavira is a B2B ube powder brand looking to build stronger brand awareness and a consistent social media presence. Ikaya Media was brought on as their retained content and social partner — handling everything from strategy to shoot to publish.',
    challenge: 'Kavira needed a way to build trust and product visibility at scale without an in-house content team — balancing founder-storytelling, product education, and behind-the-scenes brand-building across a steady monthly cadence, not one-off campaigns.',
    solution: "Ikaya took over Kavira's content and social media presence end-to-end — planning, producing, and publishing a consistent stream of founder-led and product-focused content every month. By building a structured content pipeline instead of one-off posts, we gave Kavira a professional, reliable brand presence that strengthened trust, improved product visibility, and kept the audience consistently engaged.",
    accentColor: '#ffb4d1',
    colors: ['#c1ffbb', '#73b87a', '#ffb4d1']
  },
  {
    id: 'pestpro',
    title: 'PestPro Jaipur',
    subtitle: 'Turning local visibility into consistent, qualified leads. ',
    client: 'Pest Pro',
    description: 'A tactile, science-driven design framework for premium organic botanical skincare from Kyoto.',
    category: 'brand',
    categoryLabel: 'Packaging / Identity',
    year: '2026',
    image: '/images/pestprocover.png',
    services: [
      'Social Media Management',
      'SEO Audits & Optimization',
      'Lead Generation',
      'Google Ads & WhatsApp Campaign Management'
    ],
    overview: 'PestPro is a pest control brand looking to strengthen digital visibility and generate qualified local leads. Ikaya Media was brought on to run their full marketing engine — content, social, ads, SEO, and lead systems — under one connected strategy.',
    challenge: 'Pacific Co. needed consistent, trust-building content and a real demand-generation system working together — not just posts for visibility, but a pipeline that could turn local search intent and ad traffic into tracked, qualified enquiries, with visibility into what was actually working each month.',
    solution: 'Ikaya built a connected content and growth engine for Pacific Co. — combining consistent social media content with performance marketing, SEO, and automated lead workflows. By tying creative output directly to demand generation and reporting, we gave Pacific Co. a system that turned visibility into trackable leads, with clear monthly insight into what was driving results.',
    accentColor: '#82bb41',
    colors: ['#ffffff', '#004120', '#cff7c7','#595558']
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    id: 'strategy',
    title: 'BRAND STRATEGY AND IDENTITY',
    subtitle: 'PERSPECTIVE',
    items: [
      'Brand Strategy',
      'PR & Events',
      'SEO Audit',
      'Market and Competitor Analysis',

    ]
  },
  {
    id: 'visual-identity',
    title: 'Content & Creative Studio',
    subtitle: 'Visual Experience',
    items: [
      'Content Creation & Shoots',
      'Editing',
      'Dynamic Brand Color Palettes',
      'Content Writing',
    ]
  },
  {
    id: 'digital-design',
    title: 'Digital Distribution & Growth',
    subtitle: 'INTERACTION',
    items: [
      'Social Media Management',
      'Performance Marketing',
      'Influencer Marketing',
      'Meta & Google Ads'
    ]
  },
  {
    id: 'development',
    title: 'Digital Experience',
    subtitle: 'AI and TECH',
    items: [
      'Website Designing',
      'Ai Automations',
      'Animations',
      'SEO & Performance Optimization',
    ]
  }
];
