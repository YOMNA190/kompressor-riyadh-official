'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneCall, Navigation, Eye, Wrench, Sparkles, CheckCircle } from 'lucide-react';

const steps = [
  { icon: PhoneCall, title: 'استقبال البلاغ', description: 'تواصل مع فريق الطوارئ عبر الهاتف أو واتساب' },
  { icon: Navigation, title: 'التوجيه الفوري', description: 'نحدد موقعك ونتوجه إليك فوراً بأقرب فريق' },
  { icon: Eye, title: 'المعاينة', description: 'فحص دقيق للمشكلة باستخدام كاميرات متطورة' },
  { icon: Wrench, title: 'التنفيذ', description: 'بدء أعمال الشفط أو التسليك بالكمبروسر الحديث' },
  { icon: Sparkles, title: 'التعقيم والتنظيف', description: 'تطهير الموقع ورش معقمات خالية من الروائح' },
  { icon: CheckCircle, title: 'التأكد من حل المشكلة', description: 'اختبار الشبكة وضمان التدفق المثالي' },
];

export default function ProcessSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="process" className="py-20 md:py-28 bg-gradient-to-b from-ice-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">آلية عمل احترافية</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
            نضمن لك تجربة سلسة من أول اتصال
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            نعمل بمنهجية واضحة لضمان راحتك التامة وحل المشكلة من جذورها
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute right-1/2 transform translate-x-1/2 w-0.5 h-full bg-emerald-200 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-center lg:text-right">
                  <div className="glass-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
