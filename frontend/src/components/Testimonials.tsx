import React, { useEffect, useState, useRef } from 'react';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const [completeCount, setCompleteCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    // Count up completes (target: 180)
    let currentCompletes = 0;
    const completesTimer = setInterval(() => {
      currentCompletes += 3;
      if (currentCompletes >= 180) {
        setCompleteCount(180);
        clearInterval(completesTimer);
      } else {
        setCompleteCount(currentCompletes);
      }
    }, 15);

    // Count up satisfaction (target: 96)
    let currentSatisfaction = 0;
    const satisfactionTimer = setInterval(() => {
      currentSatisfaction += 2;
      if (currentSatisfaction >= 96) {
        setSatisfactionCount(96);
        clearInterval(satisfactionTimer);
      } else {
        setSatisfactionCount(currentSatisfaction);
      }
    }, 15);

    // Count up experience (target: 15)
    let currentExperience = 0;
    const experienceTimer = setInterval(() => {
      currentExperience += 1;
      if (currentExperience >= 15) {
        setExperienceCount(15);
        clearInterval(experienceTimer);
      } else {
        setExperienceCount(currentExperience);
      }
    }, 40);

    return () => {
      clearInterval(completesTimer);
      clearInterval(satisfactionTimer);
      clearInterval(experienceTimer);
    };
  }, [isIntersecting]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
        
        {/* Split Header Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center mb-12">
          <div className="md:col-span-5 flex justify-center w-full order-last md:order-first">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border bg-brand-surface max-w-[420px]">
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                alt="Collaborative workspace overview" 
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
              <span>Verified Feedback</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tight leading-[1.05]">
                Client Reviews
            </h2>
            <p className="text-brand-text-muted text-base sm:text-lg max-w-[480px]">
              Word of mouth from our creative collaborations. We focus deeply on design details so our projects achieve exceptional market response.
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
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border border-white/20 hover:bg-white/5 rounded-xl px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all cursor-pointer"
              >
                See Services
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Testimonial Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Testimonial 1 */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col justify-between space-y-8">
            <p className="text-brand-text-muted font-sans text-sm sm:text-base leading-relaxed">
              "Working with TechTrooperzz completely transformed our digital ecosystem. The custom web application and intelligent automation flow they engineered are incredibly fast and reliable. Our operations are now fully streamlined, saving us thousands of hours."
            </p>
            <div className="flex items-center justify-between border-t border-brand-border-subtle pt-6">
              <div className="flex items-center space-x-3.5">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                  alt="Elena Rostova close-up avatar portrait" 
                  className="w-12 h-12 rounded-full object-cover grayscale" 
                  loading="lazy" 
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">Elena Rostova</h4>
                  <p className="text-xs text-brand-text-muted">Founder, Bloom Cosmetics</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#facc15] font-sans font-bold flex items-center justify-end space-x-1">
                  <span>5.0</span>
                  <span className="tracking-widest">★★★★★</span>
                </div>
                <span className="text-[10px] text-brand-text-muted">Verified Booking</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 flex flex-col justify-between space-y-8">
            <p className="text-brand-text-muted font-sans text-sm sm:text-base leading-relaxed">
              "Meticulous design, seamless communication, and a rare attention to typographical detail. The visual systems designed for our technical platforms are outstanding. Truly exceptional craftsmanship of editorial quality."
            </p>
            <div className="flex items-center justify-between border-t border-brand-border-subtle pt-6">
              <div className="flex items-center space-x-3.5">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" 
                  alt="Marcus Thorn close-up avatar portrait" 
                  className="w-12 h-12 rounded-full object-cover grayscale" 
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-white font-sans">Marcus Thorn</h4>
                  <p className="text-xs text-brand-text-muted">Design Director, Aether Lab</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-[#facc15] font-sans font-bold flex items-center justify-end space-x-1">
                  <span>5.0</span>
                  <span className="tracking-widest">★★★★★</span>
                </div>
                <span className="text-[10px] text-brand-text-muted">Verified Booking</span>
              </div>
            </div>
          </div>

        </div>

        {/* Custom Interactive Stats Counter Bar Card */}
        <div 
          ref={statsRef}
          id="stats-bar" 
          className="bg-brand-surface border border-brand-border rounded-2xl p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center">
            
            <div className="flex flex-col space-y-2">
              <div className="text-4xl sm:text-5xl font-serif text-white font-bold select-none">
                <span>{completeCount}</span><span>+</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-text-muted font-sans uppercase tracking-wider">Design projects completed</p>
            </div>

            <div className="flex flex-col space-y-2 justify-center md:border-x md:border-brand-border-subtle">
              <div className="text-4xl sm:text-5xl font-serif text-white font-bold select-none">
                <span>{satisfactionCount}</span><span>%</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-text-muted font-sans uppercase tracking-wider">Client satisfaction rate</p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="text-4xl sm:text-5xl font-serif text-white font-bold select-none">
                <span>{experienceCount}</span><span>+</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-text-muted font-sans uppercase tracking-wider">Years of experience</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
