import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerContainer } from '../../lib/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  id?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}

export function RevealGroup({
  children,
  className,
  id,
  stagger = 0.12,
  delay = 0,
  amount = 0.3,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: RevealProps) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
