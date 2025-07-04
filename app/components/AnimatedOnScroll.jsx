"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedOnScroll({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
