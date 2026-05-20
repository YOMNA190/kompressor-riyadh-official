'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  inView: boolean;
}

export default function AnimatedCounter({ target, suffix = '', inView }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}
