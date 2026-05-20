'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Zap, Home, Users, MapPin, DollarSign } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const reasons = [
  { icon: Clock, title: 'استجابة سريعة 24/7', description: 'فريقنا يصل خلال 30 دقيقة في جميع أنحاء الرياض', color: 'emerald' },
  { icon: Zap, title: 'معدات ضغط وتقنية حديثة', description: 'كمبروسرات ألمانية وضغط هيدروليكي فائق القوة', color: 'emerald' },
  { icon: Home, title: 'بدون تكسير', description: 'نحافظ على سلامة منزلك ومرافقك بالكامل', color: 'emerald' },
  { icon: Users, title: 'فنيين محترفين', description: 'كادر سعودي مدرب بأعلى المعايير', color: 'emerald' },
  { icon: MapPin, title: 'تغطية كاملة للرياض', description: 'نخدم جميع الأحياء والضواحي والمحافظات', color: 'emerald' },
  { icon: DollarSign, title: 'أسعار واضحة', description: 'تسعير شفاف بدون رسوم خفية', color: 'emerald' },
];

export default function WhyUsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">لماذا نتميز</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            شركة وطنية رائدة بحلول الصرف الصحي
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            خبرة سنوات وسمعة ممتازة تجعلنا الخيار الأول في الرياض
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="glass-card rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-slate-300 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">
              <AnimatedCounter target={5280} suffix="+" inView={inView} />
            </div>
            <p className="text-slate-300 text-sm mt-2">مشروع منجز</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">
              <AnimatedCounter target={98} suffix="%" inView={inView} />
            </div>
            <p className="text-slate-300 text-sm mt-2">رضا العملاء</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">
              <AnimatedCounter target={15} suffix=" دقيقة" inView={inView} />
            </div>
            <p className="text-slate-300 text-sm mt-2">متوسط وقت الاستجابة</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">
              <AnimatedCounter target={45} suffix=" فني" inView={inView} />
            </div>
            <p className="text-slate-300 text-sm mt-2">فني متخصص</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
