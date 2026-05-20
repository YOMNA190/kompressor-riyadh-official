'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 z-50 origin-left"
      style={{ scaleX: progress / 100, transformOrigin: '0%' }}
    />
  );
}
