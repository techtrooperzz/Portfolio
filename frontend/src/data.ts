import { Service, Testimonial } from './types';

// Company logo structures for the animated marquee
export const CLIENT_LOGOS = [
  { name: 'Vercel', logoText: '▲' },
  { name: 'OpenAI', logoText: '⎈' },
  { name: 'Linear', logoText: '⚿' },
  { name: 'Stripe', logoText: '⚡' },
  { name: 'Figma', logoText: '❖' },
  { name: 'Github', logoText: '🐙' },
  { name: 'Notion', logoText: '▤' },
  { name: 'Retool', logoText: '☍' },
  { name: 'Sentry', logoText: '🎯' },
  { name: 'Framer', logoText: '⩓' },
  { name: 'Clerk', logoText: '🔑' },
  { name: 'Supabase', logoText: '⚡' },
  { name: 'Loom', logoText: '☼' },
  { name: 'Tailwind', logoText: '✦' }
];

// 6 Core agency services requested by user
export const SERVICES_LIST = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Bespoke interfaces crafted to make your brand unforgettable. We focus on premium, modern aesthetics inspired by Awwwards standards.',
    icon: 'Palette',
    tag: 'Aesthetic'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'We construct timeless design systems, typography guidelines, modern logomarks, and assets that position your brand at the absolute pinnacle.',
    icon: 'Layers',
    tag: 'Positioning'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Ultra-fast, fully responsive React & Next.js builds. Clean architectures, micro-interactions, and flawless speed optimize your digital footprint.',
    icon: 'Code',
    tag: 'Next.js'
  },
  {
    id: 'growth-marketing',
    title: 'Growth Marketing',
    description: 'Data-driven customer acquisition. We construct performance funnels, organic entity structures, and CRO flows that directly scale LTV.',
    icon: 'TrendingUp',
    tag: 'Acquisition'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User journeys maps, responsive layouts, interactive high-fidelity prototypes, and rigorous user-testing engineered around modern product pipelines.',
    icon: 'Smartphone',
    tag: 'Product'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Custom LLM integrations, search grounding vectors, automated content assets, and conversational flows designed to elevate your scaling efficiency.',
    icon: 'Sparkles',
    tag: 'Intelligence'
  }
];

// Featured work showcase details
export const FEATURED_WORK = [
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    projectName: 'Aero - AI Automation Workspace',
    industry: 'Enterprise Software',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    results: '240% Trial sign-ups increase within 90 days',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ai-startup',
    title: 'AI Startup',
    projectName: 'Cognitive.ai - Developer Playground',
    industry: 'Artificial Intelligence',
    tech: ['TypeScript', 'Vite', 'Motion', 'Tailwind'],
    results: 'Reached 120,000+ developer accounts in month 1',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    projectName: 'Acuity Financial Ecosystem',
    industry: 'Financial Technology',
    tech: ['React', 'D3.js', 'Tailwind CSS', 'Radix UI'],
    results: 'Managed $45M+ in transaction volumes safely',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ecommerce-brand',
    title: 'E-commerce Brand',
    projectName: 'Elysian Wellness Accessories',
    industry: 'Premium Lifestyle',
    tech: ['Next.js', 'Vercel CDN', 'Tailwind', 'Motion'],
    results: '142% conversion rate uplift at checkout',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200'
  }
];

// Counters
export const STATISTICS = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '25M+', label: 'Users Reached' },
  { number: '8+', label: 'Years Experience' }
];

// 4 Progress timeline steps
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We run technical, brand positioning, and user-flow scans to locate bottlenecks and establish targeted trajectories.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'A detailed architecture blueprint outlining user acquisition models, checkout CRO repairs, and premium layouts.'
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'Elite designer sprints constructing beautiful high-fidelity mockups, which translate to custom web systems.'
  },
  {
    step: '04',
    title: 'Launch & Growth',
    description: 'Deployment with optimization parameters, live SEO indexing, multi-channel performance media, and growth metrics.'
  }
];

// Testimonials data
export const PREMIUM_TESTIMONIALS = [
  {
    id: 'test-1',
    author: 'Serena Thorne',
    role: 'Head of Growth',
    company: 'Linear Labs',
    avatar: 'ST',
    feedback: 'Digital Growth Solutions entirely re-engineered our organic acquisition pipeline. In under 6 months, our organic trial sign-ups surpassed our total paid campaigns combined. True growth experts who care deeply about business metrics over vanity metrics.',
    industry: 'SaaS'
  },
  {
    id: 'test-2',
    author: 'Kaelen Pierce',
    role: 'Vice President Product',
    company: 'Aura Fintech',
    avatar: 'KP',
    feedback: 'Their CRO framework is mathematical. Without increasing our marketing spend by a single dollar, our checkout completion rate doubled in 60 days. The design looks spectacular and completely repositioned our enterprise reputation.',
    industry: 'B2B'
  },
  {
    id: 'test-3',
    author: 'Elena Rostova',
    role: 'Co-Founder & COO',
    company: 'Scribe AI',
    avatar: 'ER',
    feedback: 'The level of attention to fine typographic spacing, beautiful animation velocity, and absolute unit economic accountability with this team is unmatched. They are the $20,000+ design partner that modern brands dream of.',
    industry: 'SaaS'
  }
];

// Interactive FAQs data
export const FAQS = [
  {
    question: 'How long do typical custom design and development campaigns require?',
    answer: 'Our standard high-end website projects require between 4 to 8 weeks of active sprint work. This includes complete research discovery, high-fidelity brand design blueprints, customized responsive react animations, and pixel-precise launch verification.'
  },
  {
    question: 'How does your conversion-rate optimization (CRO) system actually double leads?',
    answer: 'We analyze real human session activities with detailed click heatmapping and funnel logs, then restructure standard checkouts into minimalist multi-step pathways. Removing psychological friction points yields compounding conversions on the traffic you already possess.'
  },
  {
    question: 'Will we possess full ownership of the custom codebase and asset files?',
    answer: 'Absolutely. Every asset, custom design blueprint, component library, and Figma file is entirely owned by your organization under complete proprietary rights once the launch completes.'
  },
  {
    question: 'What is your operational method for supporting high-volume startups?',
    answer: 'We operate as a highly focused, embedded engineering and design force. You will speak directly to the lead architects and brand strategists via a private Slack workstation with rapid daily progress streams.'
  },
  {
    question: 'Is continuous growth support and technical SEO auditing included?',
    answer: 'Yes, we provide premium retainer tiers for companies seeking daily conversion refinement, continuing SEO entity building, content production, and ad-media creative coordination.'
  }
];

// Premium pricing plans requested
export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '$4,500',
    description: 'Perfect for startups needing a high-end, world-class landing experience and pristine brand positioning.',
    features: [
      'Custom 3D-feeling landing homepage',
      'Pristine modern brand system design',
      'Full Next.js / React microcode',
      'SEO entity crawl tuning',
      'Standard micro-animations',
      'Mobile responsiveness optimization',
      '14-day post-launch support and handoff'
    ],
    popular: false,
    cta: 'Connect Starter Design'
  },
  {
    name: 'Growth',
    price: '$8,500',
    description: 'Our most sought-after plan. Complete digital pipeline construction with interactive conversion systems.',
    features: [
      'Up to 5 custom layout pages',
      'Complete high-end brand identity playbook',
      'Multi-step high-converting lead forms',
      'Interactive ROI custom calculators',
      'Framer / Motion complex micro-interactions',
      'Speed optimization (Lighthouse score 95+)',
      '30-day comprehensive support & Slack access'
    ],
    popular: true,
    cta: 'Secure Growth Architect'
  },
  {
    name: 'Enterprise',
    price: '$15k+',
    description: 'All-inclusive custom engineering, bespoke integrations, advanced interactive visuals, and custom AI tooling.',
    features: [
      'Unlimited high-fidelity components & subpages',
      'Bespoke Interactive dashboard mockups',
      'Full CRM, OAuth, HubSpot & Stripe proxy setup',
      'Bespoke AI LLM integrations & search grounding',
      'Custom complex canvas visual flow engines',
      'Full-funnel attribution and CRO audit logs',
      'Priority dedicated CTO advisory & Slack workspace'
    ],
    popular: false,
    cta: 'Initiate Premium Consultation'
  }
];
