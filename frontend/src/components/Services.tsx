import React from 'react';
import { StarBorder } from './StarBorder';

export const Services: React.FC = () => {
  const serviceCards = [
    {
      idx: '01 / SYSTEM',
      title: 'Custom Software Development',
      desc: 'Tailored and scalable software architectures designed from the ground up to solve your unique business challenges with robust structures.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      idx: '02 / PLATFORM',
      title: 'Web Application Development',
      desc: 'Responsive, performant, and secure client-facing portals configured with modular layouts and refined user journeys.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
    {
      idx: '03 / INFRASTRUCTURE',
      title: 'Full Stack Development',
      desc: 'Seamlessly unifying powerful, resilient backend databases and APIs with elegantly responsive, tactile frontend browser user interfaces.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.358-.02.722-.03 1.086-.03h9.828c.364 0 .728.01 1.086.03m-12 0a1.9 1.9 0 000 3.8h12a1.9 1.9 0 000-3.8m-12 0v7.142A2.25 2.25 0 008.25 20h7.5A2.25 2.25 0 0018 17.75v-7.142m-12 0C6.358 10.6 6.722 10.61 7.086 10.61h9.828c.364 0 .728-.01 1.086-.03m-12 0a1.9 1.9 0 000 3.8h12a1.9 1.9 0 000-3.8m0 0v1.142" />
        </svg>
      ),
    },
    {
      idx: '04 / AUTOMATION',
      title: 'AI & Automation Solutions',
      desc: 'Intelligent workflow automations, predictive modeling integrations, and visual pipeline metrics designed to scale your operations.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      idx: '05 / COMMERCE',
      title: 'E-commerce Development',
      desc: 'High-conversion digital storefronts built with resilient payment flows, fluid catalog navigations, and optimized cart operations.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
    {
      idx: '06 / INTELLIGENCE',
      title: 'Chatbot & AI Assistant Development',
      desc: 'Context-aware conversational agents, multi-agent pipelines, and customized interactive prompts utilizing bleeding-edge LLM infrastructures.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 18c-.387 0-.773-.04-1.154-.12 1.343-.454 2.56-1.254 3.51-2.31C4.386 15.01 3 13.633 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      idx: '07 / SOFTWARE-AS-A-SERVICE',
      title: 'SaaS Product Development',
      desc: 'Multi-tenant cloud-native architectures featuring robust user authorization layers, metered billing systems, and analytical tracking dashboards.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M4.5 19.5h15M5.25 4.5h13.5M9 7.5h6l-3 4.5-3-4.5z" />
        </svg>
      ),
    },
    {
      idx: '08 / OPERATIONS',
      title: 'Technical Support & Maintenance',
      desc: 'Proactive database health scans, system telemetry monitors, dependency security patches, and instant performance tunings.',
      icon: (
        <svg className="w-5 h-5 text-white stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.67 2.67 0 1113.5 17.25l-5.83-5.83m.002 0a15.918 15.918 0 001.342-1.342m-1.342 1.342a15.918 15.918 0 01-1.342-1.342m1.342 1.342L3 3m15.132 15.132a15.918 15.918 0 001.342-1.342M18.132 18.132l-5.83-5.83m6.03-.04a2.25 2.25 0 11-3.18 3.18l-3.18-3.18H15.75m.132-7.132a2.67 2.67 0 113.75 3.75L13.8 15.14m3.033-8.815l-5.83 5.83m-3.033-6.03a2.25 2.25 0 113.18-3.18l3.18 3.18v2.235" />
        </svg>
      ),
    },
  ];

  const marquee1 = [
    { icon: '□', text: 'Custom Software Development' },
    { icon: '⬡', text: 'Web Application Development' },
    { icon: '▱', text: 'Full Stack Development' },
    { icon: '◯', text: 'AI & Automation Solutions' },
    { icon: '⬈', text: 'E-commerce Development' },
    { icon: '▢', text: 'Chatbot & AI Assistant' },
    { icon: '◈', text: 'SaaS Product Development' },
    { icon: '⬡', text: 'Technical Support & Maintenance' },
  ];

  const marquee2 = [
    { icon: '▢', text: 'React & Vite Deployments' },
    { icon: '◯', text: 'Cloud Systems Scaling' },
    { icon: '◈', text: 'API/Backends Integration' },
    { icon: '▱', text: 'UX & Accessibility Opt' },
    { icon: '⬈', text: 'LLM Prompt Architecture' },
    { icon: '⬡', text: 'Robust Storage Schemes' },
    { icon: '◯', text: 'Telemetry Controls' },
    { icon: '◈', text: 'Modern Tailwind Styling' },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        
        {/* Two Column Intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-12">
          <div className="md:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-1.5 border border-white/10 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-text-muted bg-transparent self-start">
              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
              <span>Our Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
                Service we provide
            </h2>
            <p className="text-brand-text-muted text-base sm:text-lg max-w-[440px]">
              We build premier, clean, high-performance digital solutions, customized architectures, secure server layers, and intelligent automation systems optimized for scaling businesses.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="border border-white/20 bg-white/5 text-white/80 rounded-full px-3.5 py-1.5 text-xs font-semibold">Custom Software</span>
              <span className="border border-white/20 bg-white/5 text-white/80 rounded-full px-3.5 py-1.5 text-xs font-semibold">AI Assistant Dev</span>
              <span className="border border-white/20 bg-white/5 text-white/80 rounded-full px-3.5 py-1.5 text-xs font-semibold">Product Engineering</span>
            </div>
          </div>
          
          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border bg-brand-surface max-w-[480px]">
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" 
                alt="Modern interactive clean codebase on screen" 
                className="grayscale-img absolute inset-0 w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
          </div>
        </div>

        {/* 2x2 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {serviceCards.map((card, index) => (
            <StarBorder 
              key={index} 
              as="div"
              color="white"
              speed="9s"
              thickness={1}
              className="w-full h-full rounded-2xl hover:scale-[1.01] transition-transform duration-300 shadow-xl"
              innerClassName="bg-brand-surface border-none text-left p-8 sm:p-10 flex flex-col justify-between h-full items-start"
            >
              <div className="w-full">
                <div className="flex items-center justify-between mb-8 w-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    {card.icon}
                  </div>
                  <span className="text-xs font-serif italic text-brand-text-muted">{card.idx}</span>
                </div>
                <h3 className="text-xl font-bold font-sans text-white mb-3">{card.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            </StarBorder>
          ))}
        </div>

        {/* Twice horizontal scroll tag marquee */}
        <div className="marquee-container space-y-5 overflow-hidden w-full relative z-10 select-none opacity-80">
          
          {/* Row 1 (moving Left) */}
          <div className="flex overflow-hidden">
            <div className="scroll-track-l space-x-4 text-white text-sm md:text-base font-sans tracking-wide">
              {marquee1.concat(marquee1).map((item, idx) => (
                <StarBorder 
                  key={`${item.text}-${idx}`} 
                  as="div"
                  color="white"
                  speed="7s"
                  thickness={1}
                  thin={true}
                  className="rounded-full shrink-0 shadow-sm hover:scale-[1.02] transition-transform duration-200"
                  innerClassName="bg-white/5 hover:bg-white/10 text-white border-none font-medium px-6 py-3 flex items-center space-x-3 rounded-full cursor-default select-none transition-colors"
                >
                  <span className="text-brand-text-accent font-semibold">{item.icon}</span> 
                  <span>{item.text}</span>
                </StarBorder>
              ))}
            </div>
          </div>

          {/* Row 2 (moving Right) */}
          <div className="flex overflow-hidden">
            <div className="scroll-track-r space-x-4 text-white text-sm md:text-base font-sans tracking-wide">
              {marquee2.concat(marquee2).map((item, idx) => (
                <StarBorder 
                  key={`${item.text}-${idx}`} 
                  as="div"
                  color="white"
                  speed="7s"
                  thickness={1}
                  thin={true}
                  className="rounded-full shrink-0 shadow-sm hover:scale-[1.02] transition-transform duration-200"
                  innerClassName="bg-white/5 hover:bg-white/10 text-white border-none font-medium px-6 py-3 flex items-center space-x-3 rounded-full cursor-default select-none transition-colors"
                >
                  <span className="text-brand-text-accent font-semibold">{item.icon}</span> 
                  <span>{item.text}</span>
                </StarBorder>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
