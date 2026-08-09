/**
 * Hero entrance animation constants.
 *
 * Every duration/delay/easing value here is reverse-engineered from the
 * original style.min.css `.homeHeader` transition rules (the `.in` /
 * `:not(.in)` state pair). Centralized so the timing can be tuned in one
 * place without touching component markup.
 */

/** cubic-bezier(.075,.82,.165,1) — used for heading lines + image reveal */
export const EASE_REVEAL: [number, number, number, number] = [
  0.075, 0.82, 0.165, 1,
];

/** cubic-bezier(.645,.045,.355,1) — used for the bottom info fade-in */
export const EASE_FADE: [number, number, number, number] = [
  0.645, 0.045, 0.355, 1,
];

/**
 * Media query matching the mobile/tablet breakpoint used throughout
 * hero.module.css (`orientation:portrait, max-width:800px` OR
 * `orientation:landscape, max-width:1200px, max-height:600px`). Framer
 * Motion needs numeric per-breakpoint values (see headingLineTransitions
 * and drukY below), so this same query is checked client-side via
 * matchMedia rather than relying on CSS alone for those two properties.
 */
export const HERO_MOBILE_QUERY =
  "(orientation: portrait) and (max-width: 800px), (orientation: landscape) and (max-width: 1200px) and (max-height: 600px)";

/**
 * "Creating" / "Brands*" / "To Ignore" — translateY(13.5rem) -> rest.
 *
 * Lines 1–2 settle to 0 (their normal flow position). Line 3 ("To
 * Ignore") settles to a *further* offset instead of 0 — the reference's
 * `.homeHeader__heading.in .h-line:nth-child(3)` rule pushes it down an
 * extra 26rem (desktop) / 8.8rem (mobile) past 0. This is what creates
 * the intended gap/overlap rhythm against "IMPOSSIBLE" directly below
 * it; omitting it is what caused the excessive overlap.
 */
export const headingLineTransitions = [
  { duration: 0.75, delay: 2.15, restY: { desktop: "0rem", mobile: "0rem" } },
  { duration: 0.725, delay: 2.1, restY: { desktop: "0rem", mobile: "0rem" } },
  {
    duration: 0.725,
    delay: 2.1,
    restY: { desktop: "26rem", mobile: "8.8rem" },
  },
] as const;

/** "IMPOSSIBLE" (druk line) — scaleY(0) -> 1, slight upward settle */
export const drukTransition = { duration: 0.6, delay: 2.075 };
/**
 * Original transform composes translateY(-13.5rem or -5rem, depending on
 * breakpoint) translateY(Xem) — the em part is relative to the druk
 * line's own font-size, which is itself 31rem on desktop but 10.6rem on
 * mobile. Pre-computed to rem per breakpoint since Framer Motion needs
 * numeric values to interpolate and can't resolve an em against a
 * media-query-driven font-size on its own. A flat desktop-only value
 * (as before) left mobile using the desktop offset, contributing to the
 * mobile heading overlap/overflow.
 */
export const drukY = {
  from: { desktop: "-11.95rem", mobile: "-4.47rem" },
  to: { desktop: "-9.47rem", mobile: "-3.622rem" },
};

/** Bottom info block (Worldwide Design / Branding and Digital Design) */
export const bottomTransition = { duration: 0.8, delay: 2.5 };

/** Floating image wrapper — settles from scattered offset to final position */
export const imagePositionTransition = { duration: 1.5, delay: 3.9 };

/** Floating image itself — scale/opacity pop-in, staggered per image index */
export const imagePopBaseDelay = 2.7;
export const imagePopStep = 0.075;
export const imagePopDuration = 0.4;

/* -------------------------------------------------------------------------
   Floating image parallax (interaction layer, Phase 3)

   The reference markup exposes `data-pal-x` / `data-pal` per image (kept
   on heroData as dataPalX / dataPal). These are unitless intensity
   factors — small values (~0.0001–0.001, see "hh1") barely move, larger
   ones (2–3, either sign) move more and in different directions. The
   sign/magnitude spread is what reads as "depth": nothing about the
   original snippet gives away its exact pixel scale, so the units below
   are a deliberately conservative reproduction rather than a literal
   port, tuned so the strongest factor (~3) still only nudges an image a
   few percent of its own size.
   ------------------------------------------------------------------------- */

/** Spring used to smooth both pointer and scroll parallax inputs. */
export const PARALLAX_SPRING = {
  stiffness: 55,
  damping: 20,
  mass: 0.6,
} as const;

/** px of movement per unit of dataPalX/dataPal at full pointer travel (edge of viewport). */
export const PARALLAX_MOUSE_UNIT = 4;

/** px of movement per unit of dataPal at full scroll travel (see PARALLAX_SCROLL_RANGE). */
export const PARALLAX_SCROLL_UNIT = 1.6;

/** Scroll distance (px) over which scroll parallax ramps up to its full, still-subtle offset. */
export const PARALLAX_SCROLL_RANGE = 700;
