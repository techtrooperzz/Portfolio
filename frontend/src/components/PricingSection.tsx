import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data';
import { LucideIcon } from './LucideIcon';

interface PricingProps {
  onScrollToSection: (sectionId: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onScrollToSection }) => {
  return (
    <section 
      id="pricing" 
      className="py-32 bg-[#050505] relative border-b border-white/5 scroll-mt-20 overflow-hidden"
    >
      <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-5 mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/5 border border-white/5 px-4 py-1.5 rounded-full text-brand-purple-light text-xs font-mono uppercase tracking-[0.15em]">
            <LucideIcon name="Coins" size={12} className="text-brand-purple-light" />
            <span>Investment Structure Spectrum</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.95]">
            TRANSPARENT, VALUE-DRIVEN <br />
            <span className="bg-gradient-to-r from-white via-brand-purple-light to-brand-purple bg-clip-text text-transparent">PRICING BLUEPRINTS</span>
          </h2>
          <p className="text-brand-secondary text-base font-light leading-relaxed">
            Choose a plan designed perfectly around your scaling tier. No hidden retainers, simple fixed-fee sprints, and absolute creative momentum.
          </p>
        </div>

        {/* Pricing Cards Grid requested */}
        <div className="grid md:grid-cols-3 gap-8 items-start text-left">
          {PRICING_PLANS.map((plan, idx) => {
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-[#0f0f0f] border rounded-3xl p-8 flex flex-col justify-between h-full relative group transition-all duration-300 ${
                  plan.popular 
                    ? 'border-brand-purple shadow-2xl shadow-brand-purple/10 scale-105 md:-translate-y-2' 
                    : 'border-white/5 hover:border-white/20'
                }`}
                id={`pricing-plan-${plan.name.toLowerCase()}`}
              >
                {/* Popular Glow Accent */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-4 py-1.5 rounded-full text-[9px] uppercase font-mono font-black tracking-[0.2em] shadow-lg shadow-brand-purple/40">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Price */}
                  <div>
                    <span className="text-brand-secondary text-[11px] font-mono uppercase tracking-[0.25em] font-bold block mb-1">
                      {plan.name}
                    </span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.price}
                      </span>
                      {plan.name !== 'Enterprise' && (
                        <span className="text-brand-secondary text-xs uppercase tracking-wider font-mono">/ flat</span>
                      )}
                    </div>
                  </div>

                  <p className="text-brand-secondary text-xs sm:text-sm font-light leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Feature lists */}
                  <div className="space-y-3.5 pt-6 border-t border-white/5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-3 text-xs text-white/95">
                        <div className="rounded-full bg-brand-purple/10 p-0.5 border border-brand-purple/20 mt-0.5 flex-shrink-0">
                          <LucideIcon name="Check" size={10} className="text-brand-purple-light stroke-[3]" />
                        </div>
                        <span className="font-light text-brand-secondary hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onScrollToSection('contact')}
                    className={`w-full py-4 rounded-xl text-[10px] uppercase font-black tracking-[0.2em] transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                      plan.popular 
                        ? 'bg-brand-purple text-white hover:bg-brand-purple/90 shadow-lg shadow-brand-purple/30' 
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <LucideIcon name="ArrowRight" size={12} className="stroke-[3]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
