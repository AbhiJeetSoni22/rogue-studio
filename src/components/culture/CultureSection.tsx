"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import styles from "./culture.module.css";
import { serviceRows, type ServiceImage, type ServiceRow } from "./cultureData";

const MOBILE_QUERY =
  "(orientation: portrait) and (max-width: 800px), (orientation: landscape) and (max-width: 1200px) and (max-height: 600px)";

const REVEAL_EASE: [number, number, number, number] = [0.155, 0.055, 0.14, 1];
const CURTAIN_EASE: [number, number, number, number] = [0.645, 0.045, 0.355, 1];

/* --------------------------------------------------------------------------
   Giant service word
-------------------------------------------------------------------------- */

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const letterVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.7,
      ease: CURTAIN_EASE,
    },
  },
};

function RevealWord({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion();
  const letters = Array.from(text);

  return (
    <motion.span
      className={styles.wordText}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={wordContainerVariants}
    >
      {letters.map((char, index) => (
        <span key={`${text}-${index}`} className={styles.letterMask}>
          <motion.span
            className={styles.letter}
            variants={shouldReduceMotion ? undefined : letterVariants}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* --------------------------------------------------------------------------
   Floating service image
-------------------------------------------------------------------------- */

function ServiceImageFloat({
  image,
  parallax,
}: {
  image: ServiceImage;
  parallax: number;
}) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [`${parallax * -1}rem`, "0rem", `${parallax}rem`],
  );

  return (
    <motion.div
      ref={wrapRef}
      className={styles.imageWrap}
      initial={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 0,
              scale: 0.96,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: REVEAL_EASE,
      }}
    >
      <motion.span
        className={`${styles.curtain} ${styles.curtainLeft}`}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: CURTAIN_EASE,
        }}
        aria-hidden="true"
      />

      <motion.span
        className={`${styles.curtain} ${styles.curtainRight}`}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: CURTAIN_EASE,
        }}
        aria-hidden="true"
      />

      <picture>
        <source
          srcSet={`${image.mobile1x} 1x, ${image.mobile2x} 2x`}
          media="(max-width: 800px)"
        />

        <source
          srcSet={`${image.desktop1x} 1x, ${image.desktop2x} 2x`}
          media="(min-width: 801px)"
        />

        <motion.img
          src={image.desktop1x}
          alt={image.alt}
          className={styles.image}
          loading="lazy"
          initial={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.08,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: REVEAL_EASE,
          }}
          style={
            shouldReduceMotion
              ? undefined
              : {
                  y: imageY,
                }
          }
        />
      </picture>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Row content
-------------------------------------------------------------------------- */

function RowContent({ row }: { row: ServiceRow }) {
  if (row.layout === "image-word-image") {
    return (
      <>
        <ServiceImageFloat image={row.images[0]} parallax={1.5} />

        <motion.div
          className={styles.word}
          initial={{
            opacity: 0,
            x: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            ease: REVEAL_EASE,
          }}
        >
          <RevealWord text={row.words[0]} />
        </motion.div>

        <ServiceImageFloat image={row.images[1]} parallax={-1.5} />
      </>
    );
  }

  return (
    <>
      <motion.div
        className={`${styles.word} ${styles.wordLeft}`}
        initial={{
          opacity: 0,
          x: "-5rem",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          ease: CURTAIN_EASE,
        }}
      >
        <RevealWord text={row.words[0]} />
      </motion.div>

      <ServiceImageFloat image={row.images[0]} parallax={0} />

      <motion.div
        className={`${styles.word} ${styles.wordRight}`}
        initial={{
          opacity: 0,
          x: "5rem",
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          ease: CURTAIN_EASE,
        }}
      >
        <RevealWord text={row.words[1]} />
      </motion.div>
    </>
  );
}

/* --------------------------------------------------------------------------
   Culture / Services section
-------------------------------------------------------------------------- */

export default function CultureSection() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);

    setIsDesktop(!mq.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(!event.matches);
    };

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <motion.h2
          className={styles.heading}
          initial={{
            opacity: 0,
            y: "2rem",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: REVEAL_EASE,
          }}
        >
          <span>Folks call us</span>
          <span>when they need</span>
        </motion.h2>
      </div>

      <div className={styles.rows}>
        {serviceRows.map((row) => (
          <div key={row.id} className={`${styles.row} ${styles[row.id]}`}>
            <motion.div
              className={styles.divider}
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: CURTAIN_EASE,
              }}
              aria-hidden="true"
            />

            <div className={styles.marqueeTrack}>
              <RowContent row={row} />
            </div>

            {!isDesktop && (
              <div className={styles.marqueeTrack} aria-hidden="true">
                <RowContent row={row} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomCol}>
          <span className={styles.smallUpper}>made with</span>
          <span className={styles.swearLine}>Craft &amp; Heart</span>
        </div>

        <div className={styles.bottomCol}>
          <span className={styles.smallUpper}>Branding and</span>
          <span className={styles.swearLine}>Digital Design</span>
        </div>
      </div>
    </section>
  );
}
