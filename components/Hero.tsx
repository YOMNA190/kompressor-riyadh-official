'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowDown } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export default function Hero() {
  const { openWhatsAppModal, openEmergencyModal } = useUI();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581094288338-1c4b2a8b7f6b?q=80&w=2070&auto=format')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-900/70 to-emerald-900/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-emerald-600/20 backdrop-blur-sm text-emerald-400 px-4 py-1 rounded-full text-sm font-semibold border border-emerald-500/30">
              طوارئ على مدار الساعة
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow-glow"
          >
            شبكة الصرف معطلة شغلك؟{' '}
            <span className="text-emerald-400 block md:inline">
              أبشر، حنا نرجع الأمور لوضعها الطبيعي فوراً وبأحدث تقنية.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto"
          >
            المؤسسة الرائدة بالرياض لشفط وتسليك المجاري بالضغط والكمبروسر الحديث.
            فريقنا جاهز 24 ساعة، بدون أي تكسير، ونضمن لك نظافة تامة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={openEmergencyModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              طلب خدمة فورية
            </button>
            <button
              onClick={openWhatsAppModal}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all border border-white/30 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16"
          >
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white/70 hover:text-white transition-colors flex flex-col items-center gap-2 mx-auto"
            >
              <span className="text-sm">اكتشف خدماتنا</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
