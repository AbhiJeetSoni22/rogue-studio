"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import styles from "./work.module.css";

interface CardSlotProps {
  children: React.ReactNode;
  index: number;
  rowIndex: number;
}

export default function CardSlot({ children, index, rowIndex }: CardSlotProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /*
   * Different movement for each card creates the
   * staggered / zig-zag feeling while scrolling.
   */
  const movements = [-5, 7, -3, 5, -7, 3];

  const movement = movements[rowIndex * 3 + index] ?? 0;

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`${movement}rem`, "0rem", `${movement * -0.7}rem`],
  );

  return (
    <motion.div ref={ref} className={styles.cardSlot} style={{ y }}>
      {children}
    </motion.div>
  );
}
