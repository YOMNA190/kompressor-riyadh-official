'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useUI } from '@/context/UIContext';

const navLinks = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'لماذا نحن', href: '#why-us' },
  { name: 'مناطق الخدمة', href: '#coverage' },
  { name: 'آلية العمل', href: '#process' },
  { name: 'آراء العملاء', href: '#reviews' },
  { name: 'الأسئلة', href: '#faq' },
  { name: 'اتصل بنا', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map(link => link.href.substring(1)));
  const { openEmergencyModal } = useUI();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg md:text-xl">ك</span>
            </div>
            <span className={`font-bold text-base md:text-xl tracking-tight whitespace-nowrap ${
              isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'
            }`}>
              كمبروسر الرياض <span className="text-emerald-500">المطور</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  activeSection === link.href.substring(1)
                    ? 'text-emerald-500 border-b-2 border-emerald-500 pb-1'
                    : isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={openEmergencyModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              طوارئ 24 ساعة
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled || isMobileMenuOpen ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-white mt-2 rounded-2xl shadow-xl border border-slate-100"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-right px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.href.substring(1)
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openEmergencyModal();
                  }}
                  className="bg-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mt-2 shadow-lg shadow-emerald-200"
                >
                  <Phone className="w-4 h-4" />
                  طوارئ 24 ساعة
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
