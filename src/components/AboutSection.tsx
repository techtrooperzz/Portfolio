import React from 'react';
import GlassSurface from './GlassSurface';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-6 sm:px-12 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">
        
        {/* Left details column (55%) */}
        <div className="md:col-span-7 flex flex-col space-y-10">
          {/* Small Label Pill */}
          <div className="self-start flex items-center space-x-1.5 border border-white/10 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-text-muted bg-transparent">
            <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="12" r="3.5" fill="currentColor" />
            </svg>
            <span>Our Philosophy</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.1]">
              Precision Meets <br />
              <span className="italic opacity-60">Creative Vision</span>
          </h2>

          <p className="text-brand-text-muted text-base sm:text-lg font-sans leading-relaxed">
            At <strong>TechTrooperzz</strong>, we believe exceptional digital solutions are born from the perfect harmony of technical excellence and artistic sensibility. Every pixel, every line of code, every interaction is thoughtfully crafted to create experiences that resonate.
          </p>

          {/* Core Values / Capability Tags */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {[
              'Technical Excellence',
              'Artistic Sensibility',
              'Engineering',
              'Interface Design',
              'Interaction Design',
              'Brand Strategy',
            ].map((tag) => (
              <GlassSurface 
                key={tag}
                width="auto"
                height="auto"
                borderRadius={9999}
                backgroundOpacity={0.06}
                saturation={1.25}
                brightness={35}
                distortionScale={-50}
                className="shadow-lg hover:scale-[1.03] hover:border-white/20 transition-all duration-200 border border-white/10 cursor-default select-none shrink-0"
                style={{ '--glass-padding': '8px 16px' } as React.CSSProperties}
              >
                <span className="text-white/90 text-[13px] sm:text-[14px] font-sans font-medium tracking-wide">
                  {tag}
                </span>
              </GlassSurface>
            ))}
          </div>

          {/* Pillars List */}
          <div className="space-y-4 pt-4 border-t border-brand-border-subtle">
            {[
              { title: 'Craftsmanship', desc: 'No shortcuts. We build cleanly and purposefully for longevity.' },
              { title: 'Collaboration', desc: 'We align deeply with your goals to construct perfect customized systems.' },
              { title: 'Innovation', desc: 'Blending modern interfaces with resilient underlying technologies.' },
            ].map((row, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row sm:items-start justify-between text-sm sm:text-base border-b border-brand-border-subtle/30 pb-4"
              >
                <span className="font-bold text-white min-w-[150px] mb-1 sm:mb-0">{row.title}</span>
                <span className="text-brand-text-muted text-sm flex-1">{row.desc}</span>
              </div>
            ))}
          </div>

          {/* Recent Works scroll trigger target label */}
          <button 
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="flex items-center space-x-3 text-sm font-medium tracking-wide text-white hover:text-brand-text-muted transition-colors pt-4 self-start cursor-pointer group"
          >
            <span>See Selected Works</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors duration-200">
              <svg className="w-4 h-4 stroke-current transition-transform group-hover:translate-y-1" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>
        </div>

        {/* Right image column (45%) */}
        <div className="md:col-span-5 flex justify-center w-full">
          <div className="relative max-w-[420px] aspect-[3/4] w-full overflow-hidden rounded-2xl border border-brand-border bg-brand-surface group">
            {/* Grayscale high contrast creative studio artwork / office workspace */}
            <img 
              referrerPolicy="no-referrer"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" 
              alt="Creative office studio space" 
              className="grayscale-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
