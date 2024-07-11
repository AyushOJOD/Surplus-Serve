"use client";
import { motion } from "framer-motion";

export default function AnimateWrapper({
  children,
  delay = 0.5,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
    >
      {children}
    </motion.div>
  );
}
