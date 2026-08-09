export interface HeroImageData {
  id: string;
  src: string;
  alt: string;
  /** Reserved for later parallax phase (matches original data-pal-x). */
  dataPalX: number;
  /** Reserved for later parallax phase (matches original data-pal). */
  dataPal: number;
  /** Pre-entrance offset (desktop), from `:not(.in)` translate3d rules. */
  entranceX: string;
  entranceY: string;
  /** Resting rotation (only image 1 is rotated in the reference). */
  finalRotate: number;
}

/**
 * Hero floating image set.
 *
 * Sourced directly from the original Rogue Studio homepage markup
 * (homeHeader__imageWrap, in DOM order — order matters, it drives the
 * nth-child positioning rules in hero.module.css). Src URLs are the
 * original CDN assets, kept temporarily until local files are collected.
 * `dataPalX` / `dataPal` are preserved from the source's parallax hooks
 * for the animation phase; unused for now. `entranceX/Y` and `finalRotate`
 * come from the original `:not(.in)` pre-animation transform rules and
 * drive the Phase 2 entrance animation.
 */
export const heroImages: HeroImageData[] = [
  {
    id: "hh1",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh1.png?h=720&q=85&auto=format&fit=crop&dm=1689577917&s=25319cd5a0cbea37980c45917b934433",
    alt: "Hh1",
    dataPalX: 0.0001,
    dataPal: 1,
    entranceX: "0rem",
    entranceY: "-5rem",
    finalRotate: -5,
  },
  {
    id: "hh4",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh4_2023-07-17-062936_hfib.png?h=720&q=85&auto=format&fit=crop&dm=1689577919&s=5417e3e4d1aaa5ca1f95781f04e75d9b",
    alt: "Hh4",
    dataPalX: -3,
    dataPal: 0.001,
    entranceX: "-53rem",
    entranceY: "-2rem",
    finalRotate: 0,
  },
  {
    id: "hh6a",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh6.png?h=720&q=85&auto=format&fit=crop&dm=1689577920&s=aa43ec1498267f0a0e6cd13749d45e2d",
    alt: "Hh6",
    dataPalX: 2,
    dataPal: -2,
    entranceX: "34rem",
    entranceY: "-38rem",
    finalRotate: 0,
  },
  {
    id: "hh3",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh3_2023-07-17-062930_ienc.png?h=720&q=85&auto=format&fit=crop&dm=1689577918&s=d294ed721cd4eb7aa92178ef723a8ac2",
    alt: "Hh3",
    dataPalX: -2.5,
    dataPal: -1.5,
    entranceX: "-64rem",
    entranceY: "-21rem",
    finalRotate: 0,
  },
  {
    id: "hh5",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh5_2023-07-17-062940_anvs.png?h=720&q=85&auto=format&fit=crop&dm=1689577919&s=9ddfad6097ae852873cfc3378f05ae28",
    alt: "Hh5",
    dataPalX: -2,
    dataPal: 2,
    entranceX: "-49rem",
    entranceY: "30rem",
    finalRotate: 0,
  },
  {
    id: "hh6b",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh6_2023-07-17-062945_fdxn.png?h=720&q=85&auto=format&fit=crop&dm=1689577920&s=f8589fae7ad0cead9a579d04d4949289",
    alt: "Hh6",
    dataPalX: 2,
    dataPal: 2,
    entranceX: "22rem",
    entranceY: "21rem",
    finalRotate: 0,
  },
  {
    id: "hh7",
    src: "https://rogue-studio.transforms.svdcdn.com/staging/hh7.png?h=720&q=85&auto=format&fit=crop&dm=1689577920&s=ea128bd039113fe9473ece165f7d1f11",
    alt: "Hh7",
    dataPalX: 3,
    dataPal: 1,
    entranceX: "64rem",
    entranceY: "7rem",
    finalRotate: 0,
  },
];
