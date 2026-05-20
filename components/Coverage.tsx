'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const zones = [
  { name: 'شمال الرياض', neighborhoods: ['الملقا', 'الياسمين', 'النرجس', 'حطين', 'الوادي'] },
  { name: 'شرق الرياض', neighborhoods: ['الروضة', 'النهضة', 'الغدير', 'المعذر الشمالي'] },
  { name: 'غرب الرياض', neighborhoods: ['العرق', 'الدرعية', 'الهدا', 'البديعة'] },
  { name: 'جنوب الرياض', neighborhoods: ['البطحاء', 'الحاير', 'الشفا', 'عكاظ'] },
];

const premiumNeighborhoods = ['الملقا', 'الياسمين', 'النرجس', 'حطين', 'اليرموك', 'الورود', 'العقيق'];

export default function CoverageSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="coverage" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">تغطية شاملة</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
            نخدم جميع أنحاء مدينة الرياض
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            فريقنا المنتشر يصل إلى أي موقع بسرعة قياسية، بما في ذلك أرقى الأحياء
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zones.map((zone, idx) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-ice-50 rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold text-navy-900">{zone.name}</h3>
              </div>
              <ul className="space-y-2">
                {zone.neighborhoods.map((hood) => (
                  <li key={hood} className="text-slate-600 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                    {hood}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center"
        >
          <p className="text-white/80 text-lg mb-4">بالإضافة إلى جميع الأحياء الفاخرة والمجمعات السكنية:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {premiumNeighborhoods.map((hood) => (
              <span key={hood} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                {hood}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
