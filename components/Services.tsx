'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Droplets, Wrench, Shield } from 'lucide-react';
import { useUI } from '@/context/UIContext';

const services = [
  {
    id: 'suction',
    icon: Droplets,
    title: 'شفط البيارات وسحب المجاري بالكمبروسر العملاق',
    description: 'نستخدم أقوى كمبروسرات الشفط لإزالة أي انسداد أو تراكم خلال دقائق. نغطي جميع أنواع البيارات المنزلية والتجارية والصناعية بالرياض.',
    features: ['شفط فائق القوة', 'استجابة طارئة تحت 30 دقيقة', 'دعم الفلل والمجمعات'],
  },
  {
    id: 'jetting',
    icon: Wrench,
    title: 'تسليك وفتح شبكات الصرف بتقنية الضغط الهيدروليكي',
    description: 'تقنية الضغط الهيدروليكي المتطورة تفتح أصعب الانسدادات بدون تكسير أو تخريب. نحافظ على سلامة البنية التحتية لمنزلك أو منشأتك.',
    features: ['بدون تكسير الجدران', 'ضغط مائي عالي', 'ضمان نظافة الموقع'],
  },
  {
    id: 'maintenance',
    icon: Shield,
    title: 'حلول الصيانة وتطهير البيارات والتخلص من الروائح',
    description: 'خدمات صيانة شاملة تشمل تعقيم البيارات والتخلص من الروائح الكريهة نهائياً. نضمن لك بيئة صحية آمنة لعائلتك أو عملائك.',
    features: ['تعقيم وتطهير', 'القضاء على الحشرات', 'فحص دوري مجاني'],
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { setSelectedService, openWhatsAppModal } = useUI();

  const handleServiceClick = (serviceId: string, serviceTitle: string) => {
    setSelectedService(serviceTitle);
    openWhatsAppModal();
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-ice-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">خدمات احترافية</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">
            نقدم حلولاً متكاملة بشفط وتسليك المجاري
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            أحدث التقنيات الألمانية والضغط العالي لضمان نظافة تامة ونتائج فورية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleServiceClick(service.id, service.title)}
                  className="w-full py-3 bg-slate-900 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  اطلب الخدمة الآن
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
