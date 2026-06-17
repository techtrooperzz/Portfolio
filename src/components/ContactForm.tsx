import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactSubmission } from '../types';
import { LucideIcon } from './LucideIcon';

interface ContactFormProps {
  selectedService: string;
  calculatorDetails: string;
  onClearPreFill: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  selectedService,
  calculatorDetails,
  onClearPreFill
}) => {
  // Current Form state
  const [step, setStep] = useState<number>(1);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  
  const [selectedObjective, setSelectedObjective] = useState<string>('Web Design & Development');
  const [coreChallenge, setCoreChallenge] = useState<string>('');
  const [budgetRange, setBudgetRange] = useState<string>('$5,000 - $10,000 / mo');
  const [urgency, setUrgency] = useState<string>('ASAP (Immediate Audit)');

  // Local submissions cache
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Load existing inquiries on mount
  useEffect(() => {
    const cached = localStorage.getItem('agency_intakes');
    if (cached) {
      try {
        setSubmissions(JSON.parse(cached));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Pre-fill inputs when parent sends signals from clicks
  useEffect(() => {
    if (selectedService) {
      setSelectedObjective(selectedService);
      setStep(1); // focus step 1
    }
  }, [selectedService]);

  useEffect(() => {
    if (calculatorDetails) {
      setCoreChallenge(`SIMULATED METRICS ATTACHED:\n${calculatorDetails}\n\nOur biggest marketing hurdle is: `);
      setStep(2); // focus Step 2 for obstacles
    }
  }, [calculatorDetails]);

  // Handle step increments with verification
  const handleNextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setValidationError(null);
    if (step === 1) {
      if (!fullName.trim() || !email.trim() || !companyName.trim()) {
        setValidationError('Please complete all required fields (Name, Email, Company) to proceed.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handlePrevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    setValidationError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // Submit details
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    if (!fullName.trim() || !email.trim() || !companyName.trim()) {
      setValidationError('Primary contact coordinates are missing. Please return to Step 1.');
      setStep(1);
      return;
    }

    setIsSubmitting(true);

    // Simulate custom database response
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: 'intake-' + Date.now(),
        timestamp: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        fullName,
        email,
        companyName,
        websiteUrl,
        coreChallenge: coreChallenge || 'Enterprise Creative Design Blueprint request.',
        budgetRange,
        status: 'Received'
      };

      const updatedSubmissions = [newSubmission, ...submissions];
      localStorage.setItem('agency_intakes', JSON.stringify(updatedSubmissions));
      setSubmissions(updatedSubmissions);

      // Clear current form
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onClearPreFill();

      // Reset fields
      setFullName('');
      setEmail('');
      setCompanyName('');
      setWebsiteUrl('');
      setCoreChallenge('');
      setStep(1);
    }, 1500);
  };

  const clearInquiryHistory = () => {
    localStorage.removeItem('agency_intakes');
    setSubmissions([]);
  };

  // Simulation step progress bars
  const progressPercent = (step / 3) * 100;

  return (
    <section 
      id="contact" 
      className="py-32 bg-[#050505] overflow-hidden relative border-b border-white/5 scroll-mt-20"
    >
      {/* Large Glowing background spotlight effects for Final CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-purple/10 blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        
        {/* Large full-width Final CTA Headline */}
        <div className="max-w-4xl mx-auto space-y-6 mb-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-purple/5 border border-white/5 px-4 py-1.5 rounded-full text-brand-purple-light text-xs font-mono uppercase tracking-[0.15em]">
            <LucideIcon name="Sparkles" size={12} className="text-brand-purple-light" />
            <span>Ready To Build Something Extraordinary?</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[0.95]" id="cta-main-heading">
            LET'S CREATE A DIGITALLY <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-brand-purple-light to-brand-purple bg-clip-text text-transparent">SUPERIOR POSITIONING</span>
          </h2>
          <p className="text-brand-secondary text-base font-light leading-relaxed max-w-2xl mx-auto">
            Get in touch to construct your custom organic audit, brand trajectory map, or Next.js layout parameters. Fully detailed below.
          </p>
        </div>

        {/* Outer Form Bento Layout */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Brief Info and protocol column */}
          <div className="md:col-span-4 bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl flex flex-col justify-between space-y-8 select-text shadow-xl shadow-black/15">
            <div>
              <span className="text-[10px] uppercase font-mono text-brand-purple-light tracking-widest block mb-2 font-black">ONBOARDING PIPELINE</span>
              <h3 className="text-white font-bold text-sm uppercase pb-3 border-b border-white/5 mb-6 tracking-wide">WHAT OCCURS NEXT?</h3>
              
              <div className="space-y-6 font-mono text-xs text-brand-secondary">
                {/* Protocol Step 1 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-lg bg-brand-purple/10 border border-brand-purple/30 text-brand-purple-light font-mono text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-[11px] tracking-wider">ALIGNMENT SPRINT</h4>
                    <p className="text-brand-secondary text-[10px] leading-normal mt-1 font-sans">We set up a rapid private briefing dashboard with your engineering team.</p>
                  </div>
                </div>

                {/* Protocol Step 2 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-lg bg-brand-purple/10 border border-brand-purple/30 text-brand-purple-light font-mono text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-[11px] tracking-wider">CREATIVE BLUEPRINT</h4>
                    <p className="text-brand-secondary text-[10px] leading-normal mt-1 font-sans">Direct delivery of bespoke Figma brand maps, layouts, and UX parameters.</p>
                  </div>
                </div>

                {/* Protocol Step 3 */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-6 h-6 rounded-lg bg-brand-purple/10 border border-brand-purple/30 text-brand-purple-light font-mono text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-[11px] tracking-wider">PIXEL LAUNCH</h4>
                    <p className="text-brand-secondary text-[10px] leading-normal mt-1 font-sans">We launch with continuous monitoring, optimizing speeds to ensure we rank.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct contact coordinates */}
            <div className="pt-6 border-t border-white/5 text-left font-mono text-xs">
              <span className="text-[9px] text-brand-purple-light uppercase block tracking-widest font-bold">DIRECT CHANNEL</span>
              <span className="text-white font-bold block mt-1">studio@nexuslabs.design</span>
              <span className="text-[9px] text-brand-secondary block mt-0.5 uppercase tracking-wider">GLOBAL WORKZONE EST</span>
            </div>
          </div>

          {/* Form interaction block */}
          <div className="md:col-span-8 bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl relative shadow-xl shadow-black/15 glow-hover">
            
            {/* Step progress bar container */}
            <div className="mb-8" id="intake-progress-header">
              <div className="flex justify-between items-center text-[10px] text-brand-secondary font-mono mb-2 uppercase tracking-widest font-bold">
                <span>Intake Consultation Configurator</span>
                <span className="text-brand-purple-light font-bold">Step {step} of 3</span>
              </div>
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-brand-purple transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div className="mb-6 p-4 bg-red-950/40 border border-red-500/20 rounded-xl text-red-200 text-xs font-mono flex items-center justify-between uppercase tracking-wider leading-snug">
                <div className="flex items-center space-x-3">
                  <LucideIcon name="Check" size={14} className="text-brand-purple-light stroke-[3]" />
                  <span>{validationError}</span>
                </div>
                <button 
                  onClick={() => setValidationError(null)}
                  className="text-red-400 hover:text-white font-bold px-2 select-none cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Success message popup */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-purple-light text-xs font-mono flex items-center justify-between uppercase tracking-wider">
                <div className="flex items-center space-x-3">
                  <LucideIcon name="ShieldCheck" size={14} className="stroke-[3] animate-pulse" />
                  <span>Inquiry dispatched successfully! Our creative architects will reply shortly.</span>
                </div>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="text-brand-purple-light hover:text-white font-bold px-2 select-none"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Main Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6" id="digital-intake-form">
              
              <AnimatePresence mode="popLayout">
                
                {/* STEP 1: Identification */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-white font-bold text-xs uppercase mb-4 border-b border-white/5 pb-2.5 flex items-center space-x-2.5 tracking-wider">
                      <LucideIcon name="Building" size={15} className="text-brand-purple-light" />
                      <span>Configure Brand Profile</span>
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Your Full Name <strong className="text-brand-purple-light font-sans">*</strong></label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="Rachel Vance"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/10 focus:border-brand-purple py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Business Email <strong className="text-brand-purple-light font-sans">*</strong></label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="rachel@vancegrowths.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-white/10 focus:border-brand-purple py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="space-y-2">
                        <label htmlFor="companyName" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Company Name <strong className="text-brand-purple-light font-sans">*</strong></label>
                        <input
                          id="companyName"
                          type="text"
                          required
                          placeholder="Vance Growth Co."
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/10 focus:border-brand-purple py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                        />
                      </div>

                      {/* Site URL */}
                      <div className="space-y-2">
                        <label htmlFor="websiteUrl" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Current Domain Link</label>
                        <input
                          id="websiteUrl"
                          type="url"
                          placeholder="https://vancegrows.com"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="w-full bg-transparent border-b border-white/10 focus:border-brand-purple py-3 text-sm text-white placeholder-white/20 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Objectives & Obstacles */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-white font-bold text-xs uppercase mb-4 border-b border-white/5 pb-2.5 flex items-center space-x-2.5 tracking-wider">
                      <LucideIcon name="Target" size={15} className="text-brand-purple-light" />
                      <span>Specify Core Objectives</span>
                    </h3>

                    {/* Service Priority */}
                    <div className="space-y-2">
                      <label htmlFor="selectedObjective" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Primary Creative Service</label>
                      <select
                        id="selectedObjective"
                        value={selectedObjective}
                        onChange={(e) => setSelectedObjective(e.target.value)}
                        className="w-full bg-[#050505] border border-white/5 focus:border-brand-purple text-white rounded-xl px-4 py-3.5 text-xs font-mono uppercase outline-none transition-colors"
                      >
                        <option>Web Design</option>
                        <option>Brand Identity</option>
                        <option>Web Development</option>
                        <option>Growth Marketing</option>
                        <option>UI/UX Design</option>
                        <option>AI Solutions</option>
                      </select>
                    </div>

                    {/* Obstacle challenge box */}
                    <div className="space-y-2">
                      <label htmlFor="coreChallenge" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Outline Your Key Project Scope / Launch Obstacles</label>
                      <textarea
                        id="coreChallenge"
                        rows={4}
                        placeholder="Need an extremely fast interactive landing experience designed and built on Next.js..."
                        value={coreChallenge}
                        onChange={(e) => setCoreChallenge(e.target.value)}
                        className="w-full bg-transparent border-b border-white/10 focus:border-brand-purple py-3 text-sm text-white placeholder-white/20 outline-none transition-all font-sans"
                      />
                      {calculatorDetails && (
                        <span className="text-[9px] text-brand-purple-light font-mono flex items-center space-x-1 uppercase tracking-wider font-semibold mt-1">
                          <LucideIcon name="Check" size={10} className="stroke-[3]" />
                          <span>Simulation parameters attached successfully. Feel free to modify.</span>
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Fit & Dispatch */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.15 }}
                    className="space-y-6"
                  >
                    <h3 className="text-white font-bold text-xs uppercase mb-4 border-b border-white/5 pb-2.5 flex items-center space-x-2.5 tracking-wider">
                      <LucideIcon name="Coins" size={15} className="text-brand-purple-light" />
                      <span>Confirm Budgetary Fit</span>
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Budget */}
                      <div className="space-y-2">
                        <label htmlFor="budgetRange" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Monthly Marketing/Web Budget</label>
                        <select
                           id="budgetRange"
                           value={budgetRange}
                           onChange={(e) => setBudgetRange(e.target.value)}
                           className="w-full bg-[#050505] border border-white/5 focus:border-brand-purple text-white rounded-xl px-4 py-3.5 text-xs font-mono uppercase outline-none transition-colors"
                        >
                           <option>$2,500 - $5,000 / mo</option>
                           <option>$5,000 - $10,000 / mo</option>
                           <option>$10,000 - $25,000 / mo</option>
                           <option>$25,000+ / mo</option>
                        </select>
                      </div>

                      {/* Launch Speed */}
                      <div className="space-y-2">
                        <label htmlFor="urgency" className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] block font-semibold">Timeline Target Urgency</label>
                        <select
                           id="urgency"
                           value={urgency}
                           onChange={(e) => setUrgency(e.target.value)}
                           className="w-full bg-[#050505] border border-white/5 focus:border-brand-purple text-white rounded-xl px-4 py-3.5 text-xs font-mono uppercase outline-none transition-colors"
                        >
                           <option>ASAP (Immediate Launch)</option>
                           <option>Planning Stage (Next 30 days)</option>
                           <option>Exploratory (Q3/Q4 2026)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-[#050505]/80 border border-white/5 rounded-xl space-y-1">
                      <div className="text-[10px] font-bold text-brand-purple-light uppercase font-mono tracking-widest mb-1">
                        DISPATCH GUARANTEE
                      </div>
                      <p className="text-[9px] font-mono text-brand-secondary leading-relaxed uppercase tracking-wider font-semibold">
                        WE PROMISE ABSOLUTE SECURE DATA PROCESSING CONSTRAINTS. EXPECT A POLISHED CREATIVE FEEDBACK BLUEPRINT DISPATCHED DIRECTLY WITHIN 18 WORKING HOURS.
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="pt-6 border-t border-white/5 flex justify-between items-center gap-4">
                <div>
                  {step > 1 && (
                    <button
                      onClick={handlePrevStep}
                      className="bg-transparent text-brand-secondary hover:text-white border border-white/10 px-6 py-3 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] transition-all cursor-pointer"
                      id="intake-prev-button"
                    >
                      Back
                    </button>
                  )}
                </div>

                <div>
                  {step < 3 ? (
                    <button
                      onClick={handleNextStep}
                      className="bg-brand-purple hover:bg-brand-purple/90 text-white px-6 py-3 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] transition-all flex items-center space-x-1.5 cursor-pointer"
                      id="intake-next-button"
                    >
                      <span>Continue Setup</span>
                      <LucideIcon name="ChevronRight" size={12} className="stroke-[3]" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-purple hover:bg-brand-purple/90 disabled:bg-white/5 text-white disabled:text-white/30 px-6 py-3.5 rounded-full text-[10px] uppercase font-black tracking-[0.15em] transition-all flex items-center space-x-2 cursor-pointer shadow-lg shadow-brand-purple/20"
                      id="intake-submit-button"
                    >
                      <span>{isSubmitting ? 'SCHEDULING PROTOCOL...' : 'CONNECT BLUEPRINT NOW'}</span>
                      {!isSubmitting && <LucideIcon name="ArrowRight" size={12} className="stroke-[3]" />}
                    </button>
                  )}
                </div>
              </div>

            </form>
          </div>
        </div>

        {/* Local session trackerboard of user submissions */}
        {submissions.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mt-20 pt-16 border-t border-white/5 text-left"
            id="executive-review-dashboard"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-white font-black text-lg uppercase flex items-center space-x-2 tracking-tight">
                  <span className="w-2 h-2 bg-brand-purple rounded-full animate-pulse" />
                  <span>SESSION REVIEW TRACKER LOGS</span>
                </h3>
                <p className="text-brand-secondary text-xs font-mono mt-1">
                  Private offline local cache representing currently logged blueprint inquires.
                </p>
              </div>
              <button 
                onClick={clearInquiryHistory}
                className="text-xs font-mono text-brand-secondary hover:text-brand-purple-light uppercase tracking-wider underline transition-colors cursor-pointer"
              >
                Clear History
              </button>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto pr-2 bg-[#0f0f0f] border border-white/5 p-6 rounded-2xl font-mono shadow-inner shadow-black/40">
              {submissions.map((lead) => (
                <div 
                  key={lead.id} 
                  className="bg-[#050505] border border-white/5 p-5 rounded-xl hover:border-brand-purple/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-text"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-bold text-sm uppercase tracking-wide">{lead.companyName}</span>
                      {lead.websiteUrl && (
                        <span className="text-[10px] text-brand-secondary lowercase truncate">({lead.websiteUrl})</span>
                      )}
                    </div>
                    
                    <div className="text-brand-secondary text-xs leading-relaxed max-w-2xl font-sans">
                      <strong className="text-white uppercase font-mono text-[9px] tracking-wider block mb-1">Scope details:</strong> {lead.coreChallenge}
                    </div>

                    <div className="flex items-center space-x-4 text-[9px] text-[#a1a1aa]/45 uppercase tracking-widest font-bold">
                      <span>TIME: {lead.timestamp}</span>
                      <span>•</span>
                      <span>BUDGET: {lead.budgetRange}</span>
                    </div>
                  </div>

                  {/* Active status representation badge */}
                  <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-white/5">
                    <span className="text-[9px] text-brand-secondary block mb-1 uppercase tracking-widest font-bold">STATUS:</span>
                    <span className="bg-brand-purple/10 text-brand-purple-light border border-brand-purple/20 px-3 py-1 rounded-full text-[9px] font-black tracking-widest inline-flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                      <span>LOGGED</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
