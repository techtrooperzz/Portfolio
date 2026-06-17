import React from 'react';
import { motion } from 'motion/react';
import GradientText from './GradientText';
import { Plasma } from './Plasma';
import Beams from '@/components/Beams';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToSection }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex flex-col justify-between pt-36 pb-12 px-6 sm:px-12 overflow-hidden bg-brand-dark"
    >
      {/* Plasma Background Visual from React Bits */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-0">
        <Beams
          beamWidth={2.7}
          beamHeight={30}
          beamNumber={11}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={33}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full my-auto flex flex-col items-center text-center">
        {/* Status Indicator Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2.5 border border-white/25 bg-white/5 rounded-full px-5 py-2 mb-8 text-[13px] font-medium tracking-wide"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white block animate-pulse"></span>
          <span className="text-white select-none">Crafting Unique Brand Identities</span>
        </motion.div>

        {/* Giant Typography Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl font-framer-text text-white max-w-[960px] tracking-tight leading-[1.05] mb-8"
        >
            Engineering Innovation, Delivering Excellence <br />
        </motion.h1>

        {/* Restrained Description Header */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-brand-text-muted text-base sm:text-lg max-w-[580px] font-sans leading-relaxed mb-10"
        >
          Elevate your brand with custom identity and physical packaging. Showcase your story through bold, minimal visuals and strategic editorial solutions.
        </motion.p>

        {/* Side-by-Side CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-white text-black font-semibold rounded-xl px-8 py-4 text-[15px] hover:bg-white/95 transition-all active:scale-95 duration-200 cursor-pointer"
          >
            Get Started Now
          </button>
          <button 
            onClick={() => onScrollToSection('projects')}
            className="w-full sm:w-auto text-center border border-white/20 bg-white/5 text-white rounded-xl px-8 py-4 text-[15px] hover:bg-white/10 transition-all active:scale-95 duration-200 cursor-pointer"
          >
            See Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};
