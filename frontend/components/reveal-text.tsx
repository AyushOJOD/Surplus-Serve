import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export const RevealText = ({
  children,
  href,
}: {
  children: any;
  href: any;
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-3xl font-black uppercase sm:text-4xl md:text-5xl lg:text-6xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l: any, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
                opacity: 1,
              },
              hovered: {
                y: "-100%",
                opacity: 1,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l: any, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              hovered: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
