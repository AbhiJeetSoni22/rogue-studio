"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import styles from "./work.module.css";
import type { Project } from "./workData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const PARALLAX_VALUES = [0.01, -4, -2, 0.01, -4, -2];

  const parallax = PARALLAX_VALUES[index] ?? 0;

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`${parallax * -1}rem`, "0rem", `${parallax}rem`],
  );

  return (
    <motion.article
      ref={cardRef}
      className={styles.card}
      initial={{
        opacity: 0,
        y: "4rem",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.08,
        ease: [0.155, 0.055, 0.14, 1],
      }}
    >
      <div className={styles.imageWrap}>
        <picture>
          <source
            srcSet={`${project.image.mobile1x} 1x, ${project.image.mobile2x} 2x`}
            media="(max-width: 800px)"
          />

          <source
            srcSet={`${project.image.desktop1x} 1x, ${project.image.desktop2x} 2x`}
            media="(min-width: 801px)"
          />

          <motion.img
            src={project.image.desktop1x}
            alt={project.description}
            className={styles.image}
            style={{ y: imageY }}
            whileHover={{ scale: 1.02 }}
            transition={{
              duration: 0.6,
              ease: [0.155, 0.055, 0.14, 1],
            }}
          />
        </picture>
      </div>
      <div className={styles.client}>{project.client}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.description}</h3>

        <div className={styles.tags}>
          {project.categories.map((category) => (
            <span key={category} className={styles.tag}>
              + {category}
            </span>
          ))}
        </div>
      </div>

      <Link
        href={project.href}
        className={styles.cardLink}
        aria-label={`${project.client} — ${project.description}`}
      />
    </motion.article>
  );
}
