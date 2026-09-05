import React, { useState } from 'react';
import { faqs } from '../data';

interface FAQSectionProps {
    onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
    const [openIdx, setOpenIdx] = useState<number | null>(0); // First item defaulted open

    

    const handleToggle = (idx: number) => {
        setOpenIdx(openIdx === idx ? null : idx);
    };

    return (
        <section id="faq" className="py-12 sm:py-16 bg-brand-dark">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">

                {/* Left Side Column */}
                <div className="md:col-span-5 flex flex-col space-y-8">
                    <div className="flex items-center space-x-1.5 border border-white/10 rounded-full px-4 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-text-muted bg-transparent self-start">
                        <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2" />
                            <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                        </svg>
                        <span>FAQ'S</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl font-serif text-white tracking-tight">
                        Answers
                    </h2>
                    <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
                        Quick breakdowns of frequently asked deployment guidelines, pricing details, and project coordination frameworks.
                    </p>

                    <button
                        onClick={onOpenBooking}
                        className="self-start bg-white text-black font-semibold rounded-xl px-6 py-3.5 text-xs sm:text-sm hover:bg-white/95 transition-all duration-200 active:scale-95 cursor-pointer"
                    >
                        Book a Free Call
                    </button>

                    {/* Abstract grayscale 3D artwork image */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-brand-surface pt-4">
                        <img
                            referrerPolicy="no-referrer"
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                            alt="Minimalist abstract curves"
                            className="grayscale-img absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Right Side Accordions */}
                <div className="md:col-span-7 flex flex-col space-y-4">
                    {faqs.map((item, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                            <div
                                key={idx}
                                onClick={() => handleToggle(idx)}
                                className="faq-row bg-brand-surface border border-brand-border rounded-2xl p-6 sm:p-7 select-none cursor-pointer transition-all duration-300"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h4 className="text-sm sm:text-base font-bold text-white font-sans">{item.question}</h4>
                                    <button
                                        type="button"
                                        className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white text-lg shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 border-white bg-white/10' : ''
                                            }`}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="pointer-events-none">{isOpen ? '×' : '+'}</span>
                                    </button>
                                </div>

                                {/* Collapsible area */}
                                <div
                                    className="faq-answer overflow-hidden transition-all duration-300"
                                    style={{
                                        maxHeight: isOpen ? '160px' : '0px',
                                        marginTop: isOpen ? '16px' : '0px'
                                    }}
                                >
                                    <p className="text-brand-text-muted text-xs sm:text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};
