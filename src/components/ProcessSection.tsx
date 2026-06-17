import React from 'react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      idx: '01 / DISCOVER',
      title: 'Discovery Phase',
      desc: 'Deeply clarifying your project mission, target audience coordinates, and direct competitors to form a clear and tactical strategic editorial framework.',
    },
    {
      idx: '02 / IDEA',
      title: 'Concept Drafting',
      desc: 'Drafting contrasting visual routes, material selections, layout configurations, and package structures tailored to tell your unique brand story.',
    },
    {
      idx: '03 / FORM',
      title: 'Meticulous Design',
      desc: 'Refining concepts down to minor details: aligning editorial type rules, selecting physical weights, and creating gorgeous high fidelity prototypes.',
    },
    {
      idx: '04 / HANDOFF',
      title: 'Delivery & Support',
      desc: 'Exporting print-ready files, custom vector packages, and style sheet guidelines to empower your internal launch teams with total asset ownership.',
    },
  ];

  return (
    <section id="process" className="py-12 sm:py-16 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        
        {/* Intro Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-12">
          <div className="md:col-span-5 flex justify-center w-full">
            {/* Grayscale desk workspace hands image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border bg-brand-surface max-w-[420px]">
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop" 
                alt="Hands editing layouts at office desk sketch" 
                className="grayscale-img absolute inset-0 w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center space-x-1.5 border border-white/10 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-text-muted bg-transparent self-start">
              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
              <span>Design Process</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
              Process
            </h2>
            <p className="text-brand-text-muted text-base sm:text-lg max-w-[480px]">
              Crafting extraordinary visual systems that inspire and connect, grounded in clear creative direction and detailed, physical mockups.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <button 
                onClick={onOpenBooking}
                className="bg-white text-black font-semibold rounded-xl px-6 py-3.5 text-xs sm:text-sm hover:bg-white/95 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Book a Free Call
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border border-white/20 hover:bg-white/5 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
              >
                See Projects
              </button>
            </div>
          </div>
        </div>

        {/* Vertical Process Steps with Timeline Connector */}
        <div className="relative max-w-[800px] mx-auto flex flex-col space-y-12 pl-6 sm:pl-16">
          
          {/* Shared Timeline bar connected from step 1 to step 4 */}
          <div className="absolute left-[34px] sm:left-[74px] top-6 bottom-6 w-[1px] bg-white/10 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start space-x-6 sm:space-x-10 z-10 group">
              <div className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] rounded-full bg-brand-dark border-4 border-brand-border-strong group-hover:border-white transition-all duration-300 mt-1.5 shrink-0 ml-[10px] sm:ml-[38px]"></div>
              <div>
                <span className="text-xs font-serif italic text-brand-text-muted block mb-1">{step.idx}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-sans">{step.title}</h3>
                <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed max-w-[620px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
