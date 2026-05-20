'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'كم تستغرق عملية الشفط أو التسليك؟',
    a: 'متوسط وقت التنفيذ يتراوح بين 30-60 دقيقة حسب حجم المشكلة. فريقنا يصل خلال 30 دقيقة كحد أقصى لأي موقع داخل الرياض.',
  },
  {
    q: 'هل تقدمون ضمان على الخدمة؟',
    a: 'نعم، نقدم ضمان لمدة 6 أشهر على جميع خدمات الشفط والتسليك. وفي حال عودة المشكلة خلال الفترة نتدخل فوراً بدون رسوم إضافية.',
  },
  {
    q: 'ما هي المناطق التي تغطونها؟',
    a: 'نغطي جميع أحياء الرياض بالكامل بما فيها الشمال (الملقا، الياسمين) والشرق والغرب والجنوب، بالإضافة إلى ضواحي مثل الدرعية والحائر.',
  },
  {
    q: 'هل تحتاجون لتكسير الجدران أو الأرضيات؟',
    a: 'لا أبداً. نستخدم تقنيات الضغط الهيدروليكي والكمبروسر الحديثة التي تتيح لنا فتح الانسدادات دون أي تكسير أو تخريب.',
  },
  {
    q: 'كيف أعرف أن البيارة بحاجة لشفط؟',
    a: 'علامات مثل بطء تصريف المياه، روائح كريهة، أو سماع أصوات غريبة. لكن أفضل شيء هو الفحص الدوري كل 6 أشهر للوقاية.',
  },
  {
    q: 'ما هي تكلفة الخدمة؟',
    a: 'الأسعار تختلف حسب نوع الخدمة وحجم البيارة. لكننا نتميز بالشفافية التامة - نعطيك عرض سعر قبل البدء بدون أي رسوم خفية.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">الاستفسارات الشائعة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
            إجابات على أسئلتكم
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            كل ما تود معرفته عن خدماتنا في مكان واحد
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-right bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-navy-900 text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-100"
                  >
                    <p className="p-5 text-slate-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
