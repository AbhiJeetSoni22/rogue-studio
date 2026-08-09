"use client";

import { motion } from "framer-motion";
import styles from "./hero.module.css";
import { EASE_FADE, bottomTransition } from "./heroMotion";

/**
 * Hero bottom info block — fades in as a whole, matching the original
 * `.homeHeader__bottom { transition: opacity ... }` rule (no stagger on
 * this block, unlike the heading/images).
 */
export default function HeroBottom() {
  return (
    <motion.div
      className={styles.bottom}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: bottomTransition.duration,
        delay: bottomTransition.delay,
        ease: EASE_FADE,
      }}
    >
      <div>
        <span className={styles.smallUpper}>Worldwide Design</span>
        <span className={styles.swearLine}>USA, SA, Tokyo</span>
      </div>
      <div>
        <span className={styles.smallUpper}>Branding and</span>
        <span className={styles.swearLine}>Digital Design</span>
      </div>
    </motion.div>
  );
}
