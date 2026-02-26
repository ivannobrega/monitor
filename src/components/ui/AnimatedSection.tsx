"use client";

import { motion } from "framer-motion";
import { stagger, viewport } from "@/src/lib/animations";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Wrapper de scroll-reveal com stagger automático nos filhos.
// Cada filho direto que usar motion.* recebe o stagger herdado.
export default function AnimatedSection({ children, className, delay = 0 }: Props) {
  const variants = delay
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: delay } } }
    : stagger;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
