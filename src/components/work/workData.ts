/**
 * Responsive image sources for a single project card.
 *
 * The CDN (rogue-studio.transforms.svdcdn.com) signs each width/height
 * transform with an `s` hash computed server-side — there's no way to
 * derive other sizes from one URL client-side, so all four exact URLs
 * (mobile/desktop x 1x/2x) are kept verbatim as they appeared in the
 * reference source rather than built from a template.
 */
export interface ProjectImageSet {
  mobile1x: string;
  mobile2x: string;
  desktop1x: string;
  desktop2x: string;
}

export interface Project {
  id: string;
  /** Client name, shown as a small pill over the image (e.g. "Radical Face"). */
  client: string;
  /** Project description/tagline, shown as the card title. */
  description: string;
  /** Discipline tags, rendered as "+ Design", "+ Dev", etc. */
  categories: string[];
  /** Relative route to the project's case study — not built yet (future phase). */
  href: string;
  alt: string;
  image: ProjectImageSet;
}

/**
 * The six featured projects from the live Rogue Studio homepage "Select
 * Partners" grid, in the same order/grouping as the source (two rows of
 * three). Do not add, remove, or reorder entries without re-checking the
 * reference — this list is meant to mirror the real site exactly, not be
 * a curated subset.
 */
export const projects: Project[] = [
  {
    id: "radical-face-home",
    client: "Radical Face",
    description:
      "A new digital home for musician, artist, and writer Radical Face",
    categories: ["Design", "Dev"],
    href: "/work/radical-face",
    alt: "Screenshot 2025 08 04 at 3 37 00 PM",
    image: {
      mobile1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Screenshot-2025-08-04-at-3.37.00-PM.png?w=180&h=272&q=85&auto=format&fit=crop&dm=1754336302&s=986666c3a3b6176dddebd7744b71c0ab",
      mobile2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Screenshot-2025-08-04-at-3.37.00-PM.png?w=360&h=544&q=85&auto=format&fit=crop&dm=1754336302&s=484ea633177848a197b891ac4bc12d2c",
      desktop1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Screenshot-2025-08-04-at-3.37.00-PM.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1754336302&s=2fd6a983fdbbca06f50d4ca02aef57be",
      desktop2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Screenshot-2025-08-04-at-3.37.00-PM.png?w=1050&h=1490&q=85&auto=format&fit=crop&dm=1754336302&s=ba7663184966fab6703326eeaeb85e18",
    },
  },
  {
    id: "central-on-air",
    client: "Central on Air",
    description: "Central on Air – Amplifying the Local Music Scene",
    categories: ["Design", "Dev", "Branding"],
    href: "/work/central-on-air",
    alt: "Phone Human",
    image: {
      mobile1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Phone-Human.png?w=180&h=272&q=85&auto=format&fit=crop&dm=1754507064&s=0bce2d9419ffac4069cdd32fcaf6320c",
      mobile2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Phone-Human.png?w=360&h=544&q=85&auto=format&fit=crop&dm=1754507064&s=0554ba70b449ab7284d5c93f77126ab6",
      desktop1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Phone-Human.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1754507064&s=09d67b0f9e8b78d3bb1fc67d8cb30d75",
      desktop2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Phone-Human.png?w=1050&h=1490&q=85&auto=format&fit=crop&dm=1754507064&s=721742e98957cc3b559b1d4b7f165920",
    },
  },
  {
    id: "a-light-in-the-woods",
    client: "Radical Face",
    description: "A modern take on a fairytale, A Light in the Woods",
    categories: ["Design", "Dev"],
    href: "/work/a-light-in-the-woods",
    alt: "Alt Cover Image 1",
    image: {
      mobile1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Alt-Cover-Image-1.png?w=180&h=272&q=85&auto=format&fit=crop&dm=1699710750&s=ae137d486da815566ae3e74e440fc533",
      mobile2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Alt-Cover-Image-1.png?w=360&h=544&q=85&auto=format&fit=crop&dm=1699710750&s=261306b7bbdb7871e2851902bf6d5bd0",
      desktop1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Alt-Cover-Image-1.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1699710750&s=3fa9e98e2b5561d77992cc5cfcfc50f4",
      desktop2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Alt-Cover-Image-1.png?w=1050&h=1490&q=85&auto=format&fit=crop&dm=1699710750&s=18cfb1d2e4b2eb8d5381eed58a323b7b",
    },
  },
  {
    id: "brews-grooves",
    client: "Brews & Grooves",
    description:
      "HUMAN-KINDS GREATEST COMBO \u2192 MUSIC & BEER. Paired for your pleasure",
    categories: ["Design", "Branding"],
    href: "/work/brews-grooves",
    alt: "Wc bg",
    image: {
      mobile1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/wc_bg.jpg?w=180&h=272&q=85&auto=format&fit=crop&dm=1689577938&s=0b13630a7b04bce227fc3fc3a464069a",
      mobile2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/wc_bg.jpg?w=360&h=544&q=85&auto=format&fit=crop&dm=1689577938&s=e5aecc309841f2225818a0f486e8e914",
      desktop1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/wc_bg.jpg?w=525&h=745&q=85&auto=format&fit=crop&dm=1689577938&s=eb81bf523e955508d3b14312b956c27a",
      desktop2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/wc_bg.jpg?w=1050&h=1490&q=85&auto=format&fit=crop&dm=1689577938&s=01c995387c340631285308711477de10",
    },
  },
  {
    id: "patch",
    client: "Patch System",
    description: "Clinic marketing made easy with the Patch System",
    categories: ["Design", "Dev"],
    href: "/work/patch",
    alt: "Patch Mobile Cover",
    image: {
      mobile1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Patch-Mobile-Cover.png?w=180&h=272&q=85&auto=format&fit=crop&dm=1738006025&s=160bd2fe9ef9d70ae0891a5784c84bb0",
      mobile2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Patch-Mobile-Cover.png?w=360&h=544&q=85&auto=format&fit=crop&dm=1738006025&s=013842c8fc3aafa79611eb023e793225",
      desktop1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Patch-Mobile-Cover.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1738006025&s=291e4306e6efdbf5fdf6ebc463da7694",
      desktop2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Patch-Mobile-Cover.png?w=1050&h=1490&q=85&auto=format&fit=crop&dm=1738006025&s=475e41bd76cf9d07afc97ca90f81f52c",
    },
  },
  {
    id: "rhythminfluence",
    client: "Rhythm",
    description: "Influence Empowering the voices that define modern culture.",
    categories: ["Design", "Dev", "Branding"],
    href: "/work/rhythminfluence",
    alt: "Rhythm Cover 02",
    image: {
      mobile1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Rhythm-Cover-02.png?w=180&h=272&q=85&auto=format&fit=crop&dm=1737648706&s=4d5b553e9d9eb25a2c70e2aec1d9bbea",
      mobile2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Rhythm-Cover-02.png?w=360&h=544&q=85&auto=format&fit=crop&dm=1737648706&s=acdecf77c937da1e1338c490010d7596",
      desktop1x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Rhythm-Cover-02.png?w=525&h=745&q=85&auto=format&fit=crop&dm=1737648706&s=413a808cc18ee84a098a908d6a347f74",
      desktop2x:
        "https://rogue-studio.transforms.svdcdn.com/staging/Rhythm-Cover-02.png?w=1050&h=1490&q=85&auto=format&fit=crop&dm=1737648706&s=88100243fc436d2fb88d3293f218a5d0",
    },
  },
];
