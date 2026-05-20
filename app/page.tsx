'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/Services';
import WhyUsSection from '@/components/WhyUs';
import CoverageSection from '@/components/Coverage';
import ProcessSection from '@/components/Process';
import TestimonialsSection from '@/components/Testimonials';
import FaqSection from '@/components/Faq';
import FinalCTASection from '@/components/FinalCTA';
import StickyMobileBar from '@/components/StickyMobileBar';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppModal from '@/components/WhatsAppModal';
import EmergencyCallbackModal from '@/components/EmergencyCallbackModal';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useUI } from '@/context/UIContext';
import { useEffect } from 'react';

export default function Home() {
  const scrollDirection = useScrollDirection();
  const { stickyCTAVisible, setStickyCTAVisible } = useUI();

  useEffect(() => {
    if (scrollDirection === 'down') {
      setStickyCTAVisible(false);
    } else if (scrollDirection === 'up') {
      setStickyCTAVisible(true);
    }
  }, [scrollDirection, setStickyCTAVisible]);

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyUsSection />
      <CoverageSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCTASection />
      <StickyMobileBar />
      <WhatsAppModal />
      <EmergencyCallbackModal />
    </main>
  );
}
