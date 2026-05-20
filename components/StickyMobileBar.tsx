'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export default function StickyMobileBar() {
  const { stickyCTAVisible, openWhatsAppModal, openEmergencyModal } = useUI();

  return (
    <AnimatePresence>
      {stickyCTAVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl">
            <div className="flex items-center justify-around py-3 px-4">
              <button
                onClick={openEmergencyModal}
                className="flex flex-col items-center gap-1 text-emerald-600"
              >
                <Phone className="w-6 h-6" />
                <span className="text-xs font-semibold">اتصال</span>
              </button>
              <button
                onClick={openWhatsAppModal}
                className="flex flex-col items-center gap-1 text-emerald-600"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs font-semibold">واتساب</span>
              </button>
              <a
                href="tel:+966576807249"
                className="flex flex-col items-center gap-1 text-emerald-600"
              >
                <Clock className="w-6 h-6" />
                <span className="text-xs font-semibold">طوارئ</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
