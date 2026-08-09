"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import styles from "./hero.module.css";
import { heroImages, type HeroImageData } from "./heroData";
import {
  EASE_REVEAL,
  imagePopBaseDelay,
  imagePopDuration,
  imagePopStep,
  imagePositionTransition,
  HERO_MOBILE_QUERY,
  PARALLAX_MOUSE_UNIT,
  PARALLAX_SCROLL_UNIT,
  PARALLAX_SCROLL_RANGE,
  PARALLAX_SPRING,
} from "./heroMotion";

/**
 * Tracks normalized pointer position (-1..1 per axis, relative to the
 * viewport center) via a single shared `pointermove` listener, rAF-batched
 * so we never write more than once per frame. The raw value feeds a
 * Framer Motion spring, so downstream consumers (each HeroImage) read a
 * smoothed motion value directly — no React state, no re-renders.
 */
function useHeroPointer(enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, PARALLAX_SPRING);
  const springY = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    let frame = 0;
    let queued = false;
    let latestX = 0;
    let latestY = 0;

    const applyFrame = () => {
      queued = false;
      rawX.set(latestX);
      rawY.set(latestY);
    };

    const handlePointerMove = (event: PointerEvent) => {
      latestX = (event.clientX / window.innerWidth) * 2 - 1;
      latestY = (event.clientY / window.innerHeight) * 2 - 1;
      if (!queued) {
        queued = true;
        frame = requestAnimationFrame(applyFrame);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled, rawX, rawY]);

  return { springX, springY };
}

/**
 * Tracks scroll progress over the first PARALLAX_SCROLL_RANGE px of
 * page scroll (0 → 1, clamped), rAF-batched via a single `scroll`
 * listener, spring-smoothed the same way as the pointer.
 */
function useHeroScrollProgress(enabled: boolean) {
  const rawScroll = useMotionValue(0);
  const springScroll = useSpring(rawScroll, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled) {
      rawScroll.set(0);
      return;
    }

    let frame = 0;
    let queued = false;

    const applyFrame = () => {
      queued = false;
      const progress = Math.min(
        Math.max(window.scrollY / PARALLAX_SCROLL_RANGE, 0),
        1,
      );
      rawScroll.set(progress);
    };

    const handleScroll = () => {
      if (!queued) {
        queued = true;
        frame = requestAnimationFrame(applyFrame);
      }
    };

    applyFrame();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [enabled, rawScroll]);

  return springScroll;
}

interface HeroImageProps {
  image: HeroImageData;
  index: number;
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
}

/**
 * A single floating Hero image.
 *
 * Two independent transform layers, matching the original two-stage
 * structure:
 *  - `.image` (outer, unchanged): the one-time entrance settle (x/y/rotate).
 *  - `.imageParallax` (new): the continuous mouse/scroll parallax offset,
 *    driven by motion values so it never touches React state.
 *
 * Movement intensity comes straight from the image's own dataPalX /
 * dataPal factors (the original data-pal-x / data-pal hooks), so images
 * with small factors barely move and images with large factors move
 * more — that's what reads as "depth" rather than uniform drift.
 */
function HeroImage({
  image,
  index,
  springX,
  springY,
  scrollProgress,
}: HeroImageProps) {
  const parallaxX = useTransform(
    springX,
    (v) => v * image.dataPalX * PARALLAX_MOUSE_UNIT,
  );

  const parallaxY = useTransform(
    [springY, scrollProgress],
    ([mouseY, scroll]: number[]) =>
      mouseY * image.dataPal * PARALLAX_MOUSE_UNIT +
      scroll * image.dataPal * PARALLAX_SCROLL_UNIT,
  );

  return (
    <div
      className={styles.imageWrap}
      data-pal-x={image.dataPalX}
      data-pal={image.dataPal}
    >
      <motion.div
        className={styles.image}
        initial={{ x: image.entranceX, y: image.entranceY, rotate: 0 }}
        animate={{ x: 0, y: 0, rotate: image.finalRotate }}
        transition={{
          duration: imagePositionTransition.duration,
          delay: imagePositionTransition.delay,
          ease: EASE_REVEAL,
        }}
      >
        <motion.div
          className={styles.imageParallax}
          style={{ x: parallaxX, y: parallaxY }}
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            loading="eager"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: imagePopDuration,
              delay: imagePopBaseDelay + index * imagePopStep,
              ease: EASE_REVEAL,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * Renders the Hero's floating decorative images with their entrance
 * animation plus a subtle mouse/scroll parallax interaction layer.
 *
 * Parallax is enabled only when the viewport has a fine (mouse-like)
 * pointer, isn't the mobile/tablet Hero breakpoint, and the user hasn't
 * requested reduced motion — re-evaluated live as any of those can
 * change (devtools resize, connecting a mouse, toggling the OS setting)
 * without a reload. `parallaxEnabled` starts false so the very first
 * client render matches the server-rendered static markup; it only
 * flips true after mount, well before parallax would be visible.
 *
 * Plain <img> is used rather than next/image: these are precisely
 * absolute-positioned, rem-scaled decorative elements animated directly
 * via Framer Motion transforms — next/image's wrapper markup and
 * automatic sizing would fight that positioning model.
 */
export default function HeroImages() {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const mobileQuery = window.matchMedia(HERO_MOBILE_QUERY);
    const finePointerQuery = window.matchMedia("(pointer: fine)");

    const evaluate = () => {
      setParallaxEnabled(
        finePointerQuery.matches &&
          !mobileQuery.matches &&
          !reducedMotionQuery.matches,
      );
    };

    evaluate();

    reducedMotionQuery.addEventListener("change", evaluate);
    mobileQuery.addEventListener("change", evaluate);
    finePointerQuery.addEventListener("change", evaluate);
    return () => {
      reducedMotionQuery.removeEventListener("change", evaluate);
      mobileQuery.removeEventListener("change", evaluate);
      finePointerQuery.removeEventListener("change", evaluate);
    };
  }, []);

  const { springX, springY } = useHeroPointer(parallaxEnabled);
  const scrollProgress = useHeroScrollProgress(parallaxEnabled);

  return (
    <div className={styles.images}>
      <div className={styles.imagesInner}>
        {heroImages.map((image, index) => (
          <HeroImage
            key={image.id}
            image={image}
            index={index}
            springX={springX}
            springY={springY}
            scrollProgress={scrollProgress}
          />
        ))}
      </div>
    </div>
  );
}
