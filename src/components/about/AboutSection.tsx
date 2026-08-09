"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import styles from "./about.module.css";
import {
  cultureSliderImages,
  cultureStats,
  cultureVideoSrc,
  globeImage,
} from "./aboutData";

/** Same breakpoint query used throughout hero.module.css / heroMotion.ts. */
const MOBILE_QUERY =
  "(orientation: portrait) and (max-width: 800px), (orientation: landscape) and (max-width: 1200px) and (max-height: 600px)";

const REVEAL_EASE: [number, number, number, number] = [0.155, 0.055, 0.14, 1];

/**
 * "Howdy, we're Rogue" — the editorial statement section immediately
 * after Select Partners / Featured Work.
 *
 * Only `.homeCulture__top` + `.homeCulture__mid` + `.homeCulture__slider`
 * are implemented here (the "Culture" snippets subsection further down
 * the original page is a separate phase). Client component throughout:
 * the slider needs scroll position, and reveal-on-scroll needs
 * `whileInView`, matching the pattern already used in ProjectCard.
 */
export default function AboutSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    setIsDesktop(!mq.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(!e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Desktop-only scroll-linked horizontal drift for the image strip —
  // mirrors the original's `pal-moveX` slider. Mobile uses plain native
  // horizontal swipe (see .slider { overflow-x: auto } in the CSS
  // module), so the transform is left inert there to avoid fighting
  // the user's own scroll gesture.
  const { scrollYProgress } = useScroll({
    target: sliderRef,
    offset: ["start end", "end start"],
  });
 const trackX = useTransform(scrollYProgress, [0, 1], ["2rem", "-50rem"]);
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.top}>
        <div>
          <span className={styles.sectionHeader}>Howdy, we&apos;re Rogue</span>

          {/* Desktop line breaks */}
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: REVEAL_EASE }}
          >
            <span className={styles.headingLine}>Making culture visible</span>
            <span className={styles.headingLine}>
              <span className={styles.swear}>through design, tech,</span>
            </span>
            <span className={styles.headingLine}>
              and <span className={styles.cilati}>A LITTLE MAGIC</span>
            </span>
          </motion.h2>

          {/* Mobile line breaks — a genuinely different composition, not
              a scaled-down copy of the desktop heading. */}
          <motion.h2
            className={styles.headingMobile}
            initial={{ opacity: 0, y: "2rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: REVEAL_EASE }}
          >
            <span className={styles.headingLine}>Making culture</span>
            <span className={styles.headingLine}>
              visible <span className={styles.swear}>through</span>
            </span>
            <span className={styles.headingLine}>
              <span className={styles.swear}>design, tech, </span>and
            </span>
            <span className={styles.headingLine}>
              <span className={styles.cilati}>A LITTLE MAGIC</span>
            </span>
          </motion.h2>
        </div>

        <motion.div
          className={styles.globe}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2, ease: REVEAL_EASE }}
        >
          <picture>
            <source
              srcSet={`${globeImage.mobile1x} 1x, ${globeImage.mobile2x} 2x`}
              media="(max-width: 800px)"
            />
            <source
              srcSet={`${globeImage.desktop1x} 1x, ${globeImage.desktop2x} 2x`}
              media="(min-width: 801px)"
            />
            <img src={globeImage.desktop1x} alt="Globe" />
          </picture>
        </motion.div>
      </div>

      <div className={styles.mid}>
        <div className={styles.midContent}>
          <img className={styles.star} src="/images/gold_star.svg" alt="" />

          <motion.p
            className={styles.blurb}
            initial={{ opacity: 0, y: "1.5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: REVEAL_EASE }}
          >
            <span className={styles.blurbSpacer} aria-hidden="true" />
            Infusing <em>playfulness</em> into everything we touch, creating
            distinctive brand solutions with extraordinary outcomes.
          </motion.p>

          <div className={styles.stats}>
            {cultureStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className={styles.stat}
                initial={{ opacity: 0, y: "1.5rem" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.08,
                  ease: REVEAL_EASE,
                }}
              >
                <h3 className={styles.statHeading}>{stat.heading}</h3>
                <span className={styles.statText}>{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.midImage}
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: REVEAL_EASE }}
        >
          <iframe
            src={cultureVideoSrc}
            title="Rogue Studio reel"
            allow="autoplay; fullscreen"
          />
        </motion.div>
      </div>

      <div ref={sliderRef} className={styles.slider}>
        <motion.div
          className={styles.sliderTrack}
          style={
            isDesktop && !shouldReduceMotion ? { x: trackX } : undefined
          }
        >
          {cultureSliderImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={styles.sliderImage}
              initial={{ opacity: 0, y: "1.5rem" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: REVEAL_EASE,
              }}
            >
              <img
                src={image.src1x}
                srcSet={`${image.src1x} 1x, ${image.src2x} 2x`}
                alt={image.alt}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
