/**
 * "Howdy, we're Rogue" / homeCulture section — data.
 *
 * All URLs and copy below are sourced directly from the original Rogue
 * Studio homepage markup (`.homeCulture__*`), matching the same
 * "preserve exact CDN asset" approach used in workData.ts.
 */

export interface CultureStat {
  id: string;
  heading: string;
  text: string;
}

/**
 * 58+ Awards / 75+ launches / 4 Team Members / 100% Remote — in original
 * DOM order (drives the flex-wrap layout in about.module.css).
 */
export const cultureStats: CultureStat[] = [
  {
    id: "awards",
    heading: "58+ Awards",
    text: "For design & brand innovation",
  },
  {
    id: "launches",
    heading: "75+ launches",
    text: "For happy, amazing clients",
  },
  {
    id: "team",
    heading: "4",
    text: "Team Members",
  },
  {
    id: "remote",
    heading: "100%",
    text: "Remote workplace",
  },
];

/** `.homeCulture__globe` — responsive picture sources. */
export const globeImage = {
  mobile1x:
    "https://rogue-studio.transforms.svdcdn.com/staging/globe.jpg?h=275&q=85&auto=format&fit=crop&dm=1689577916&s=cf0b93f0b14f44d400c8d3d1db5235b1",
  mobile2x:
    "https://rogue-studio.transforms.svdcdn.com/staging/globe.jpg?h=550&q=85&auto=format&fit=crop&dm=1689577916&s=73bc3a36b1873efe4182a5d695ea4f0f",
  desktop1x:
    "https://rogue-studio.transforms.svdcdn.com/staging/globe.jpg?h=550&q=85&auto=format&fit=crop&dm=1689577916&s=73bc3a36b1873efe4182a5d695ea4f0f",
  desktop2x:
    "https://rogue-studio.transforms.svdcdn.com/staging/globe.jpg?h=1100&q=85&auto=format&fit=crop&dm=1689577916&s=34707cad1ae542ae070b786c7fa4e80f",
};

/** `.homeCulture__mid .homeCulture__image` — autoplaying background reel. */
export const cultureVideoSrc =
  "https://player.vimeo.com/video/846728294?controls=0&loop=1&muted=1&autopause=0";

export interface CultureSliderImage {
  id: string;
  src1x: string;
  src2x: string;
  alt: string;
}

/**
 * `.homeCulture__slider` — the horizontal editorial image strip, in
 * original DOM order (odd/even indices get different sizing in CSS —
 * see .sliderTrack img:nth-child rules in about.module.css).
 */
export const cultureSliderImages: CultureSliderImage[] = [
  {
    id: "cs_01",
    src1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/cs_01.png?h=500&q=85&auto=format&fit=crop&dm=1689577910&s=fc6bba471981e664ead21036d63e3af3",
    src2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/cs_01.png?h=1000&q=85&auto=format&fit=crop&dm=1689577910&s=12c52126cfca8b1baea9f3986dc631de",
    alt: "Cs 01",
  },
  {
    id: "big_01",
    src1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/Big-01.png?h=500&q=85&auto=format&fit=crop&dm=1689577897&s=a5e98f2a1e63efce8a0543d016d59c30",
    src2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/Big-01.png?h=1000&q=85&auto=format&fit=crop&dm=1689577897&s=6a0889d22dae90edcc8b1fc59bd8c66c",
    alt: "Big 01",
  },
  {
    id: "cs_03",
    src1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/cs_03.png?h=500&q=85&auto=format&fit=crop&dm=1689577911&s=c947d68f90328e73ff5d7feb555b5098",
    src2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/cs_03.png?h=1000&q=85&auto=format&fit=crop&dm=1689577911&s=a3e3b6c40e7171cc120c178affab525d",
    alt: "Cs 03",
  },
  {
    id: "cs_04",
    src1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/cs_04.png?h=500&q=85&auto=format&fit=crop&dm=1689577911&s=89d9a2797973b0d2a9c2e236f32d2d58",
    src2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/cs_04.png?h=1000&q=85&auto=format&fit=crop&dm=1689577911&s=bb007bbf3f7e0bfadd50d699c4ec8c36",
    alt: "Cs 04",
  },
  {
    id: "small_03",
    src1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/Small-03.png?h=500&q=85&auto=format&fit=crop&dm=1689577935&s=f2a931d3af46fd41db1b3ab75e9861f6",
    src2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/Small-03.png?h=1000&q=85&auto=format&fit=crop&dm=1689577935&s=dd20575038f979e9c4abe3c4e8835b52",
    alt: "Small 03",
  },
  {
    id: "big_image_04",
    src1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/Big-Image-04.png?h=500&q=85&auto=format&fit=crop&dm=1689577901&s=39e0a6e21c09383d6d1ac8c935ddaf8a",
    src2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/Big-Image-04.png?h=1000&q=85&auto=format&fit=crop&dm=1689577901&s=9aa18a23c68b7b643f3f5e05e5029815",
    alt: "Big Image 04",
  },
];
