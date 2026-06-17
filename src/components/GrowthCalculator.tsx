import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from './LucideIcon';

interface GrowthCalculatorProps {
  onUnlockStrategy: (simulatedLift: string, selectedDetails: string) => void;
}

export const GrowthCalculator: React.FC<GrowthCalculatorProps> = ({ onUnlockStrategy }) => {
  // Inputs
  const [traffic, setTraffic] = useState<number>(25000);
  const [conversionRate, setConversionRate] = useState<number>(1.6);
  const [dealValue, setDealValue] = useState<number>(180);
  
  // Growth levers
  const [trafficLever, setTrafficLever] = useState<number>(60); // +60% target growth
  const [conversionLever, setConversionLever] = useState<number>(40); // +40% target CRO lift

  // Calculated baselines
  const [currentRev, setCurrentRev] = useState<number>(0);
  const [projectedRev, setProjectedRev] = useState<number>(0);
  const [revenueLift, setRevenueLift] = useState<number>(0);

  useEffect(() => {
    const baselineSales = traffic * (conversionRate / 100);
    const baselineRevenue = baselineSales * dealValue;

    const targetTraffic = traffic * (1 + trafficLever / 100);
    const targetConversionRate = conversionRate * (1 + conversionLever / 100);
    const targetSales = targetTraffic * (targetConversionRate / 100);
    const targetRevenue = targetSales * dealValue;

    const lift = targetRevenue - baselineRevenue;

    setCurrentRev(Math.round(baselineRevenue));
    setProjectedRev(Math.round(targetRevenue));
    setRevenueLift(Math.round(lift));
  }, [traffic, conversionRate, dealValue, trafficLever, conversionLever]);

  // Format currency
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleApplyToForm = () => {
    const details = `Current Traffic: ${traffic.toLocaleString()}/mo, Conversion Rate: ${conversionRate}%, Average Value: $${dealValue}. Selected Targets: +${trafficLever}% Organic Traffic, +${conversionLever}% Conversion Lift. Estimated Monthly Revenue Benefit: ${formatCurrency(revenueLift)}`;
    onUnlockStrategy(formatCurrency(revenueLift), details);
  };

  return (
    <section 
      id="roi-calculator" 
      className="py-32 bg-[#050505] border-b border-white/5 relative overflow-hidden"
    >
      {/* Delicate background blur spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-20">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/5 border border-white/5 px-4 py-1.5 rounded-full text-brand-purple-light text-xs font-mono uppercase tracking-[0.15em]">
            <LucideIcon name="TrendingUp" size={12} className="text-brand-purple-light" />
            <span>Interactive Profit Estimator</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[0.95] font-display">
            SIMULATE YOUR <span className="bg-gradient-to-r from-white via-brand-purple-light to-brand-purple bg-clip-text text-transparent">UNREALIZED REVENUE</span>
          </h2>
          <p className="text-brand-secondary text-base font-light leading-relaxed">
            Adjust your metrics below to calculate how strategic entity SEO traffic growth combined with direct CRO landing page lifts compounds your monthly run-rate.
          </p>
        </div>

        {/* Dynamic Board Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left panel is the sliders input */}
          <div className="lg:col-span-12 xl:col-span-7 bg-[#0f0f0f] border border-white/5 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-8 text-left shadow-xl shadow-black/20">
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2.5 font-sans">
                <LucideIcon name="Coins" size={15} className="text-brand-purple-light" />
                <span>Your Baseline Business Metrics</span>
              </h3>

              {/* Slider 1: Traffic */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono text-white/80">
                  <label htmlFor="traffic-slider" className="font-bold uppercase tracking-wider text-xs">Monthly Visitor Traffic</label>
                  <span className="text-brand-purple-light font-bold">{traffic.toLocaleString()} /mo</span>
                </div>
                <input 
                  id="traffic-slider"
                  type="range" 
                  min="2000" 
                  max="100000" 
                  step="1000"
                  value={traffic} 
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#050505] border border-white/5 rounded-full appearance-none cursor-pointer accent-brand-purple outline-none"
                />
                <div className="flex justify-between text-[9px] text-white/40 font-mono">
                  <span>2,000/mo</span>
                  <span>50,000/mo</span>
                  <span>100,000/mo</span>
                </div>
              </div>

              {/* Slider 2: Conversion rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono text-white/80">
                  <label htmlFor="conversion-slider" className="font-bold uppercase tracking-wider text-xs">Funnel Conversion Rate</label>
                  <span className="text-brand-purple-light font-bold">{conversionRate}%</span>
                </div>
                <input 
                  id="conversion-slider"
                  type="range" 
                  min="0.2" 
                  max="8.0" 
                  step="0.1"
                  value={conversionRate} 
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#050505] border border-white/5 rounded-full appearance-none cursor-pointer accent-brand-purple outline-none"
                />
                <div className="flex justify-between text-[9px] text-white/40 font-mono">
                  <span>0.2% (Cold)</span>
                  <span>4.0% (Average)</span>
                  <span>8.0% (Premier)</span>
                </div>
              </div>

              {/* Slider 3: Deal Value */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono text-white/80">
                  <label htmlFor="deal-value-slider" className="font-bold uppercase tracking-wider text-xs">Average Customer LTV / order</label>
                  <span className="text-brand-purple-light font-bold">${dealValue}</span>
                </div>
                <input 
                  id="deal-value-slider"
                  type="range" 
                  min="10" 
                  max="1500" 
                  step="10"
                  value={dealValue} 
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#050505] border border-white/5 rounded-full appearance-none cursor-pointer accent-brand-purple outline-none"
                />
                <div className="flex justify-between text-[9px] text-white/40 font-mono">
                  <span>$10</span>
                  <span>$750</span>
                  <span>$1,500</span>
                </div>
              </div>
            </div>

            {/* Target Trajectory Levers */}
            <div className="pt-6 border-t border-white/5 space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center space-x-2.5 font-sans">
                <LucideIcon name="Target" size={15} className="text-brand-purple-light" />
                <span>Projected Scalement Targets</span>
              </h3>

              {/* Lever 1: SEO Traffic boost */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono text-white/80 font-bold">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold uppercase tracking-wider text-xs">Projected traffic increase</span>
                    <span className="bg-brand-purple/10 text-brand-purple-light text-[8px] uppercase tracking-wider px-2 py-0.5 border border-brand-purple/20 rounded-full font-bold">SEO MODULE</span>
                  </div>
                  <span className="text-brand-purple-light font-bold">+{trafficLever}%</span>
                </div>
                <input 
                  id="traffic-lever"
                  type="range" 
                  min="0" 
                  max="200" 
                  step="10"
                  value={trafficLever} 
                  onChange={(e) => setTrafficLever(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#050505] border border-white/5 rounded-full appearance-none cursor-pointer accent-brand-purple outline-none"
                />
              </div>

              {/* Lever 2: Conversion boost */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-mono text-white/80 font-bold">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold uppercase tracking-wider text-xs">landing page Conversion CRO lift</span>
                    <span className="bg-brand-purple/10 text-brand-purple-light text-[8px] uppercase tracking-wider px-2 py-0.5 border border-brand-purple/20 rounded-full font-bold">CRO MODULE</span>
                  </div>
                  <span className="text-brand-purple-light font-bold">+{conversionLever}%</span>
                </div>
                <input 
                  id="conversion-lever"
                  type="range" 
                  min="0" 
                  max="120" 
                  step="5"
                  value={conversionLever} 
                  onChange={(e) => setConversionLever(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#050505] border border-white/5 rounded-full appearance-none cursor-pointer accent-brand-purple outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right panel displays calculated result */}
          <div className="lg:col-span-12 xl:col-span-5 bg-[#0f0f0f] border border-brand-purple/30 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden shadow-2xl shadow-brand-purple/5">
            {/* Ambient inner card reflection */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-purple/10 blur-[55px] pointer-events-none" />
            
            {/* Header */}
            <div className="relative z-10 w-full">
              <div className="text-[10px] font-mono text-brand-purple-light uppercase tracking-[0.2em] block mb-2 font-bold">
                Simulated Financial Yield
              </div>
              <h3 className="text-white font-black text-xl mb-6 leading-tight uppercase tracking-tight font-display">
                Projected Monthly Growth Forecast
              </h3>

              {/* Live Metric */}
              <div className="space-y-4">
                <div className="bg-[#050505] border border-white/5 p-5 rounded-xl">
                  <span className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Net Monthly Revenue Lift</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#ffffff] tracking-tighter mt-1 font-display">
                    {formatCurrency(revenueLift)} <span className="text-xs text-brand-secondary tracking-normal font-mono font-normal">/ mo</span>
                  </div>
                  <p className="text-[9px] text-brand-secondary font-mono mt-1.5 uppercase leading-relaxed font-bold">
                    Targeted output of +{trafficLever}% reach paired with any +{conversionLever}% user funnel friction reduction.
                  </p>
                </div>

                {/* Submetrics comparisons */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#050505] p-3.5 border border-white/5 rounded-xl">
                    <span className="text-white/40 block mb-1 font-mono uppercase text-[9px] tracking-wide font-bold">Current Revenue</span>
                    <span className="text-white font-bold text-sm block">{formatCurrency(currentRev)}/mo</span>
                    <span className="text-[9px] text-brand-purple-light font-mono uppercase mt-0.5 block font-bold">{Math.round(traffic * (conversionRate / 100))} sales</span>
                  </div>
                  <div className="bg-[#050505] p-3.5 border border-white/5 rounded-xl">
                    <span className="text-white/80 block mb-1 font-mono uppercase text-[9px] tracking-wide font-bold">Target Run-Rate</span>
                    <span className="text-white font-bold text-sm block">{formatCurrency(projectedRev)}/mo</span>
                    <span className="text-[9px] text-brand-purple-light font-mono uppercase mt-0.5 block font-bold">
                      +{Math.round((projectedRev - currentRev) / (currentRev || 1) * 100)}% lift
                    </span>
                  </div>
                </div>
              </div>

              {/* Explanatory pointers */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                <div className="flex items-start space-x-2.5 text-xs text-white/85 leading-relaxed">
                  <div className="rounded-full bg-brand-purple/10 p-0.5 border border-brand-purple/20 mt-0.5 flex-shrink-0">
                    <LucideIcon name="Check" size={10} className="text-brand-purple-light stroke-[3]" />
                  </div>
                  <span className="font-mono text-brand-secondary">
                    <strong className="text-white">TRAFFIC:</strong> Unlocked by semantic search entity frameworks harvesting market-wide user intent.
                  </span>
                </div>
                <div className="flex items-start space-x-2.5 text-xs text-white/85 leading-relaxed">
                  <div className="rounded-full bg-brand-purple/10 p-0.5 border border-brand-purple/20 mt-0.5 flex-shrink-0">
                    <LucideIcon name="Check" size={10} className="text-brand-purple-light stroke-[3]" />
                  </div>
                  <span className="font-mono text-brand-secondary">
                    <strong className="text-white">CRO LIFT:</strong> Generated through custom high-fidelity landing speeds and page checkout restructuring.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct connection action down-funnel */}
            <div className="pt-8 relative z-10 text-center w-full">
              <button
                onClick={handleApplyToForm}
                className="w-full bg-white hover:bg-white/90 text-black font-bold py-4 rounded-full flex items-center justify-center space-x-2.5 cursor-pointer text-xs uppercase tracking-[0.15em] transition-all duration-200"
                id="apply-simulation-to-audit"
              >
                <span>DEPLOY STRATEGY BLUEPRINT</span>
                <LucideIcon name="ArrowRight" size={14} className="stroke-[3]" />
              </button>
              <span className="text-[9px] font-mono text-center block text-white/40 tracking-widest mt-3 uppercase font-bold">
                EXPORT ESTIMATES INTO CUSTOM INTAKE BRIEF
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
