'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone, HelpCircle } from 'lucide-react';
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ك</span>
            </div>
            <span className="text-navy-900 font-bold text-lg md:text-xl tracking-tight">
              كمبروسر الرياض <span className="text-emerald-600">المطور</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  activeSection === link.href.substring(1)
                    ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1'
                    : 'text-slate-700'
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
            className="lg:hidden text-navy-900 p-2"
            aria-label="القائمة"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-right px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-emerald-50 text-emerald-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={openEmergencyModal}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <Phone className="w-4 h-4" />
              طوارئ 24 ساعة
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
