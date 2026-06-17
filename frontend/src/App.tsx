import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col font-sans antialiased scroll-smooth selection:bg-white selection:text-black">
      
      {/* Sticky Header */}
      <Header 
        onOpenBooking={handleOpenBooking} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* Main Sections */}
      <main className="flex-grow select-text">
        <Hero 
          onOpenBooking={handleOpenBooking} 
          onScrollToSection={handleScrollToSection} 
        />

        <AboutSection />

        <Services />

        <Portfolio />

        <ProcessSection onOpenBooking={handleOpenBooking} />

        <Testimonials onOpenBooking={handleOpenBooking} />

        <FAQSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Grand Call to Action and Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Scheduler Dialog Overlay */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
      />
    </div>
  );
}
