"use client";

import Link from "next/link";
import styles from "./work.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "./workData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CardSlot from "./CardSlot";

/**
 * Partners / Featured Work section.
 *
 * The section contains:
 * - Select Partners intro
 * - Two rows of project cards
 * - See All Work CTA
 * - A dedicated transition marker at the very end
 *
 * The black -> cream transition is intentionally driven by the
 * transition marker rather than the whole section. This makes the
 * background change happen only after the work content has finished.
 */
export default function WorkSection() {
  const transitionRef = useRef<HTMLDivElement | null>(null);

  /*
   * Track only the dedicated marker at the END of the work section.
   *
   * start 100%:
   *   marker is at the bottom edge of the viewport
   *
   * start 15%:
   *   marker has moved close to the top of the viewport
   *
   * The actual color change happens in a very small range near the end,
   * giving the abrupt black -> cream transition from the reference.
   */
  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ["start 100%", "start 15%"],
  });

  const creamOpacity = useTransform(transitionProgress, [0.88, 0.92], [0, 1]);

  const contentColor = useTransform(
    transitionProgress,
    [0.88, 0.92],
    ["#ffffff", "#000000"],
  );

  const midpoint = Math.ceil(projects.length / 2);

  const rows = [projects.slice(0, midpoint), projects.slice(midpoint)];

  return (
    <section className={styles.section}>
      {/* Black -> cream background layer */}
      <motion.div
        className={styles.creamOverlay}
        style={{ opacity: creamOpacity }}
        aria-hidden="true"
      />

      {/* All Work content */}
      <motion.div
        className={styles.sectionContent}
        style={{ color: contentColor }}
      >
        {/* Intro */}
        <div className={styles.intro}>
          <span className={styles.count}>
            ({String(projects.length).padStart(2, "0")})
          </span>

          <h2 className={styles.heading}>
            Select
            <span className={styles.headingAccent}>Partners</span>
          </h2>

          <Link href="/work" className={styles.introLink}>
            <span className={styles.dot} />
            See All Projects
          </Link>
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {rows.map((row, rowIndex) => (
            <div className={styles.row} key={rowIndex}>
              {row.map((project, index) => (
                <CardSlot key={project.id} index={index} rowIndex={rowIndex}>
                  <ProjectCard project={project} index={rowIndex * 3 + index} />
                </CardSlot>
              ))}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.outro}>
          <Link href="/work" className={styles.outroButton}>
            <span className={styles.dot} />
            See All Work
          </Link>
        </div>

        {/*
         * IMPORTANT:
         * This marker must stay AFTER the entire grid and CTA.
         * It is the only element responsible for triggering the
         * black -> cream transition.
         */}
        <div
          ref={transitionRef}
          className={styles.transitionMarker}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
