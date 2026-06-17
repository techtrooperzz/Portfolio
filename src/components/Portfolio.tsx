import React from 'react';

export const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      title: 'Finance & Investment Club, Miranda House',
      category: 'Web Portal & Student Community Hub',
      image: '/Mirandahouse.jpg',
      fallback: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
      link: 'https://ficmh.vercel.app/',
    },
    {
      title: 'Gokhale Memorial ID Card ERP',
      category: 'Student Portal & Database System',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      link: 'https://studentregistrationform-kohl.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 bg-brand-dark">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
        
        {/* Header area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center space-x-1.5 border border-white/10 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-text-muted bg-transparent self-start mb-6">
              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              </svg>
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight">
                Recent Works
            </h2>
          </div>
          <p className="text-brand-text-muted max-w-[400px] text-sm leading-relaxed">
            Highly functional production-grade applications built with precision engineering, clean schemas, and responsive layouts.
          </p>
        </div>

        {/* Portfolio Tiles Grid (Optimized for 2 premium items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {caseStudies.map((item, idx) => (
            <a 
              key={idx} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-brand-surface aspect-[4/3] border border-brand-border/45 cursor-pointer rounded-xl block shadow-xl shadow-black/25"
            >
              <img 
                referrerPolicy="no-referrer"
                src={item.image} 
                alt={item.title} 
                className="grayscale-img absolute inset-0 w-full h-full object-cover transition-all group-hover:scale-105 duration-500" 
                loading="lazy"
                onError={(e) => {
                  if ('fallback' in item && item.fallback) {
                    e.currentTarget.src = item.fallback;
                  }
                }}
              />
              {/* Hover Slide-up overlay optimized for responsiveness */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#0c0c0e]/95 md:bg-white text-white md:text-black py-4 px-6 flex justify-between items-center transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out z-10 rounded-b-xl border-t border-white/10 md:border-none">
                <div>
                  <h4 className="font-sans font-bold text-[15px] sm:text-base leading-tight text-white md:text-brand-dark">{item.title}</h4>
                  <p className="text-[11px] text-white/60 md:text-black/60 font-medium font-mono uppercase mt-1">{item.category}</p>
                </div>
                <span className="text-lg font-bold text-violet-400 md:text-brand-purple">↗</span>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};
