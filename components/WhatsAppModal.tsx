'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send } from 'lucide-react';
import { useUI } from '@/context/UIContext';
import { useState } from 'react';

export default function WhatsAppModal() {
  const { isWhatsAppModalOpen, closeWhatsAppModal, selectedService } = useUI();
  const [customMessage, setCustomMessage] = useState('');

  const getDefaultMessage = () => {
    let msg = 'السلام عليكم، أحتاج خدمة طوارئ من كمبروسر الرياض المطور';
    if (selectedService) {
      msg += ` - الخدمة: ${selectedService}`;
    }
    return msg;
  };

  const handleSendWhatsApp = () => {
    const finalMessage = customMessage || getDefaultMessage();
    const encodedMessage = encodeURIComponent(finalMessage);
    window.open(`https://wa.me/966576807249?text=${encodedMessage}`, '_blank');
    closeWhatsAppModal();
  };

  return (
    <AnimatePresence>
      {isWhatsAppModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeWhatsAppModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-navy-900">تواصل عبر واتساب</h3>
              </div>
              <button onClick={closeWhatsAppModal} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-600 mb-4">
              يمكنك تخصيص رسالتك أو إرسال الرسالة الافتراضية
            </p>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder={getDefaultMessage()}
              rows={4}
              className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 mb-4"
            />
            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              إرسال عبر واتساب
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
