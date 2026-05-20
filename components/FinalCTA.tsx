'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export default function FinalCTASection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { selectedService, isLoading, formSuccess, formError, setLoading, setFormSuccess, setFormError, clearFormMessages } = useUI();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearFormMessages();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (name && phone) {
      setFormSuccess('تم استلام طلبك بنجاح! سنتصل بك خلال 10 دقائق.');
      setName('');
      setPhone('');
      setMessage('');
      setLoading(false);
    } else {
      setFormError('الرجاء إدخال الاسم ورقم الجوال');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-ice-50 to-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">جاهزون لخدمتك</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
              عندك مشكلة طارئة؟ احنا بالخدمة 24 ساعة
            </h2>
            <p className="text-slate-600 text-lg">
              اتصل الآن أو اترك طلبك وفريق الطوارئ يتواصل معك فوراً
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-6 h-6 text-emerald-600" />
                <h3 className="text-2xl font-bold text-navy-900">اتصل مباشرة</h3>
              </div>
              <a
                href="tel:+966576807249"
                className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-2xl font-bold transition-all shadow-lg mb-4"
              >
                +966576807249
              </a>
              <p className="text-slate-500 text-center text-sm">طوارئ على مدار الساعة</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">طلب خدمة سريع</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="رقم الجوال"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                  required
                />
                <textarea
                  placeholder="تفاصيل المشكلة (اختياري)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 transition-colors"
                />
                {selectedService && (
                  <div className="text-sm text-emerald-600 bg-emerald-50 p-2 rounded-lg">
                    الخدمة المختارة: {selectedService}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>جاري الإرسال...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      إرسال الطلب
                    </>
                  )}
                </button>
                {formSuccess && (
                  <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    {formSuccess}
                  </div>
                )}
                {formError && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    {formError}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
