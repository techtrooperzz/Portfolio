import React from 'react';
import { motion } from 'motion/react';
import { STATISTICS } from '../data';
import { LucideIcon } from './LucideIcon';

export const Statistics: React.FC = () => {
  return (
    <section 
      id="statistics" 
      className="py-24 bg-[#050505] relative border-b border-white/5 scroll-mt-20 overflow-hidden"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-[10%] w-72 h-72 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-[10%] w-72 h-72 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
          {STATISTICS.map((stat, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-3 relative p-4 rounded-xl hover:bg-white/5 transition-colors group"
              >
                {/* Number styling in giant sleek monospace text */}
                <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter bg-gradient-to-r from-white via-white to-brand-purple-light bg-clip-text text-transparent block font-mono">
                  {stat.number}
                </span>

                {/* Accent vertical line overlay on hover */}
                <div className="w-12 h-[2px] bg-brand-purple rounded-full transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <span className="text-brand-secondary text-xs sm:text-sm font-light uppercase tracking-widest block">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
