'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Send } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export default function EmergencyCallbackModal() {
  const { isEmergencyModalOpen, closeEmergencyModal, setLoading, setFormSuccess, setFormError, clearFormMessages } = useUI();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearFormMessages();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (name && phone) {
      setFormSuccess('تم استلام طلب معاودة الاتصال! سنتصل بك فوراً.');
      setName('');
      setPhone('');
      closeEmergencyModal();
    } else {
      setFormError('الرجاء إدخال الاسم ورقم الجوال');
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isEmergencyModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeEmergencyModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-navy-900">طلب معاودة اتصال طارئ</h3>
              </div>
              <button onClick={closeEmergencyModal} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-600 mb-4">
              اترك رقمك وسنتصل بك خلال دقائق لخدمتك الطارئة
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="الاسم الكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <input
                type="tel"
                placeholder="رقم الجوال"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-red-500"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>جاري الإرسال...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    طلب اتصال فوري
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
