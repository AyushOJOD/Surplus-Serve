"use client";
import { motion } from "framer-motion";

export default function AnimateWrapper({
  children,
  delay = 0.3,
  dir = 0,
}: {
  children: React.ReactNode;
  delay?: number;
  dir?: number;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ y: dir ? 0 : 20, x: dir, opacity: 0 }}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
