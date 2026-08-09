"use client";
import Link from "next/link";
import styles from "./work.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "./workData";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CardSlot from "./CardSlot";
/**
 * Partners / Featured Work — the section immediately following the Hero.
 *
 * Stays a server component: every interaction in this section (card
 * image hover, the two dot-links) is pure CSS `:hover`, so nothing here
 * needs to run in the browser.
 *
 * The six projects render as two rows of three (desktop) / a single
 * column (mobile), split at the midpoint to mirror the source's own
 * row grouping rather than letting a single wrapping grid reflow them.
 */
export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

const creamOpacity = useTransform(scrollYProgress, [0.82, 0.98], [0, 1]);

const contentColor = useTransform(
  scrollYProgress,
  [0.82, 0.98],
  ["#ffffff", "#000000"],
);
  const midpoint = Math.ceil(projects.length / 2);
  const rows = [projects.slice(0, midpoint), projects.slice(midpoint)];

  return (
    <section ref={sectionRef} className={styles.section}>
      <motion.div
        className={styles.creamOverlay}
        style={{ opacity: creamOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className={styles.sectionContent}
        style={{ color: contentColor }}
      >
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

        <div className={styles.outro}>
          <Link href="/work" className={styles.outroButton}>
            <span className={styles.dot} />
            See All Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
