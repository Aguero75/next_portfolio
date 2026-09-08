// components/RevealSection.tsx
"use client";
import { motion } from "framer-motion";

const RevealSection = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.16, 1, 0.3, 1], // "expo out" — slow start, dramatic settle
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
