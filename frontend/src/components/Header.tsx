import React, { useState, useEffect } from 'react';
import { TechTrooperzzLogo } from './TechTrooperzzLogo';
import { StarBorder } from './StarBorder';
import GlassSurface from './GlassSurface';

interface HeaderProps {
  onOpenBooking: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      id="navbar" 
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-[840px] ${
        isScrolled ? 'top-4' : 'top-6'
      }`}
    >
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={9999}
        backgroundOpacity={0}
        saturation={1.3}
        distortionScale={-40}
        redOffset={0}
        greenOffset={0}
        blueOffset={0}
        brightness={50}
        className={`w-full transition-all duration-300 shadow-2xl shadow-black/45 ${
          isScrolled 
            ? 'py-2 border border-white/15 bg-[#121214]/90' 
            : 'py-2.5 border border-white/10 bg-[#0B0B0C]/50'
        }`}
        style={{ '--glass-padding': '0px' } as React.CSSProperties}
      >
        <div className="mx-auto flex items-center justify-between w-full px-4 sm:px-5">
          {/* Left container: Logo */}
          <div className="flex-1 flex justify-start">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group"
              id="logo-brand-header"
            >
              <TechTrooperzzLogo height={40} />
            </a>
          </div>

          {/* Center container: Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-slate-300/90" id="desktop-nav">
            {[
              { label: 'Services', target: 'services' },
              { label: 'Projects', target: 'projects' },
              { label: 'Process', target: 'process' },
              { label: 'Testimonials', target: 'testimonials' },
              { label: 'FAQ', target: 'faq' },
            ].map((item) => (
              <button 
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="hover:text-white transition-colors duration-200 cursor-pointer relative py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right container: CTA Actions */}
          <div className="flex-1 flex justify-end items-center space-x-4">
            <StarBorder
              as="button"
              onClick={onOpenBooking}
              id="book-call-header-btn"
              color="white"
              speed="5s"
              thickness={1}
              className="rounded-full shadow-md active:scale-95 transition-transform"
              innerClassName="bg-black/90 hover:bg-neutral-900 text-white font-bold rounded-full px-4 py-1.5 text-xs sm:text-[13px] flex items-center space-x-1.5 cursor-pointer border-none"
            >
              <span className="text-white text-[10px]">✦</span> 
              <span>Book a Call</span>
            </StarBorder>

            {/* Mobile Menu Icon Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
              id="mobile-drawer-toggle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </GlassSurface>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-[calc(100%+12px)] left-0 right-0 bg-[#121214]/95 border border-white/10 rounded-2xl p-6 space-y-4 shadow-2xl backdrop-blur-xl"
          id="mobile-nav-panel"
        >
          {[
            { label: 'Services', target: 'services' },
            { label: 'Projects', target: 'projects' },
            { label: 'Process', target: 'process' },
            { label: 'Testimonials', target: 'testimonials' },
            { label: 'FAQ', target: 'faq' },
          ].map((item) => (
            <button 
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className="block w-full text-left text-slate-400 hover:text-white font-medium text-sm py-2 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
