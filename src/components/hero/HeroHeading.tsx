"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.css";
import {
  EASE_REVEAL,
  drukTransition,
  drukY,
  headingLineTransitions,
  HERO_MOBILE_QUERY,
} from "./heroMotion";

/**
 * Animated Hero heading — "Creating / Brands* / To Ignore / IMPOSSIBLE".
 *
 * The first three lines slide up from a 13.5rem offset, staggered per
 * line. The druk "IMPOSSIBLE" line reveals with a scaleY(0) -> 1 "grow"
 * plus a small upward settle, on its own timing — matching the original
 * `.h-line` / `.h1-druk` transition rules.
 *
 * "To Ignore" (the 3rd line) and the druk line's rest position both use
 * breakpoint-specific values (see heroMotion.ts) since the reference's
 * final/settled offsets genuinely differ between desktop and mobile, not
 * just proportionally via rem scaling. `isMobile` defaults to false so
 * the very first client render matches the server-rendered desktop
 * markup; it corrects on mount, well before this heading's ~2s reveal
 * delay elapses, so there's no visible flash.
 */
export default function HeroHeading() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(HERO_MOBILE_QUERY);
    setIsMobile(mq.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const bp = isMobile ? "mobile" : "desktop";

  return (
    <h1 className={styles.heading}>
      {[
        "Creating",
        <>
          Brands<em>*</em>
        </>,
        "To Ignore",
      ].map((content, index) => (
        <motion.span
          key={index}
          className={styles.line}
          initial={{ y: "13.5rem" }}
          animate={{ y: headingLineTransitions[index].restY[bp] }}
          transition={{
            duration: headingLineTransitions[index].duration,
            delay: headingLineTransitions[index].delay,
            ease: EASE_REVEAL,
          }}
        >
          {content}
        </motion.span>
      ))}

      <motion.span
        className={`${styles.line} ${styles.druk}`}
        initial={{ y: drukY.from[bp], scaleY: 0 }}
        animate={{ y: drukY.to[bp], scaleY: 1 }}
        transition={{
          duration: drukTransition.duration,
          delay: drukTransition.delay,
          ease: EASE_REVEAL,
        }}
        style={{ transformOrigin: "bottom" }}
      >
        Impossible
      </motion.span>
    </h1>
  );
}
