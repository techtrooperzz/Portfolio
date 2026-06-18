import React from 'react';
import { TechTrooperzzLogo } from './TechTrooperzzLogo';
import GradientText from './GradientText';
import { Twitter, Dribbble, Palette } from 'lucide-react';
import Particles from '@/components/Particles';
interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section 
      id="cta-footer-section" 
      className="relative flex flex-col justify-between pt-12 pb-8 px-6 sm:px-12 bg-brand-dark overflow-hidden"
    >
      {/* Plasma Background Visual from React Bits */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0">
        <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
        />
      </div>

      {/* Centered CTA Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
        {/* Status Indicator Pill */}
        <div className="flex items-center space-x-2 border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-4 text-[13px] font-medium tracking-wide select-none">
          <span className="w-2 h-2 rounded-full bg-emerald-500 block animate-pulse"></span>
          <span className="text-white/95">Available For Work</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white max-w-[850px] leading-[1.1] mb-4">
          <GradientText
            colors={['#000000', '#94a3b8', '#ffffff']}
            animationSpeed={8}
            showBorder={false}
            direction="horizontal"
            yoyo={true}
          >
            Curious about what we can create together? Let’s bring something extraordinary to life!
          </GradientText>
        </h2>

        {/* Solid Social Links Row with Icons */}
        <div className="flex items-center justify-center space-x-4 mt-6 pb-2">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200"
            title="Behance Portfolio"
            aria-label="Behance Portfolio"
          >
            <Palette size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200"
            title="X / Twitter"
            aria-label="X / Twitter"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200"
            title="Dribbble"
            aria-label="Dribbble"
          >
            <Dribbble size={18} />
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full pt-6 flex flex-col items-center justify-center space-y-3.5 text-xs sm:text-sm text-brand-text-muted text-center">
        <TechTrooperzzLogo height={42} className="opacity-95 hover:opacity-100 transition-opacity" />
        <div>
          <span>© {currentYear} TechTrooperzz. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};
