'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'أبو عبدالله - الملقا',
    text: 'الصدق والاحترافية شي ثاني. كمبروسر الرياض المطور حلوا لي مشكلة البيارة اللي كانت تعاني منها سنين بدون تكسير. أنصح فيهم وبقوة.',
    rating: 5,
  },
  {
    name: 'أم محمد - الياسمين',
    text: 'استجابة خيالية خلال ٢٠ دقيقة وصل الفريق. شفطوا البيارة بالكمبروسر ونظفوا المكان كأنه جديد. شكراً لكم على الخدمة الراقية.',
    rating: 5,
  },
  {
    name: 'المهندس فهد - حطين',
    text: 'تعاملت مع أكثر من جهة لكن هذي المؤسسة مختلفة. تقنيات متطورة وفريق محترم. سعرو الخدمة بشفافية وخلصو الشغل بسرعة.',
    rating: 5,
  },
  {
    name: 'أبو خالد - النرجس',
    text: 'ممتازين والله. تسليك المجاري بالضغط الهيدروليكي سوا فرق كبير. لا تكسير ولا فوضى. أنصحكم تتعاملون معاهم.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-navy-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">شهادات تقدير</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            آراء عملائنا الكرام
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            ثقتكم مصدر فخرنا، وهذه بعض من تجاربكم معنا
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10"
            >
              <Quote className="w-8 h-8 text-emerald-500/50 mb-4" />
              <p className="text-slate-200 text-lg leading-relaxed mb-4">{testimonial.text}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
