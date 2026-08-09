/**
 * Footer section data.
 *
 * URLs/copy sourced directly from the original Rogue Studio `<footer>`
 * markup, matching the "preserve exact CDN asset" approach used in
 * workData.ts / cultureData.ts.
 */

export interface FooterImageSet {
  mobile1x: string;
  mobile2x: string;
  desktop1x: string;
  desktop2x: string;
  alt: string;
}

/** The 3 overlapping fanned photos next to "Our Projects" (in DOM order). */
export const footerImages: FooterImageSet[] = [
  {
    mobile1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_left.jpg?h=250&q=85&auto=format&fit=crop&dm=1689577921&s=e4b7eb68c4f89706f62c952d69e9daee",
    mobile2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_left.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577921&s=fea8f6451cd106b9b450d017479442fe",
    desktop1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_left.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577921&s=fea8f6451cd106b9b450d017479442fe",
    desktop2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_left.jpg?h=1000&q=85&auto=format&fit=crop&dm=1689577921&s=2baf33573902bff7d049514b39acdf48",
    alt: "Hh left",
  },
  {
    mobile1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_right.jpg?h=250&q=85&auto=format&fit=crop&dm=1689577922&s=40e9d00a39b3da698d33c068ec2a736e",
    mobile2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_right.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577922&s=d55eeeef965a0bed9b3e9f1d9a19cbce",
    desktop1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_right.jpg?h=500&q=85&auto=format&fit=crop&dm=1689577922&s=d55eeeef965a0bed9b3e9f1d9a19cbce",
    desktop2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/hh_right.jpg?h=1000&q=85&auto=format&fit=crop&dm=1689577922&s=2830bfb15378b4bd9ed590a3a5ba0cee",
    alt: "Hh right",
  },
  {
    mobile1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/FooterMiddle.png?h=250&q=85&auto=format&fit=crop&dm=1689577915&s=a26e5c6c040a2f40184a19f08f408fd5",
    mobile2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/FooterMiddle.png?h=500&q=85&auto=format&fit=crop&dm=1689577915&s=a16fc7dfbf1c1eb33d21f0b3e9aaaabe",
    desktop1x:
      "https://rogue-studio.transforms.svdcdn.com/staging/FooterMiddle.png?h=500&q=85&auto=format&fit=crop&dm=1689577915&s=a16fc7dfbf1c1eb33d21f0b3e9aaaabe",
    desktop2x:
      "https://rogue-studio.transforms.svdcdn.com/staging/FooterMiddle.png?h=1000&q=85&auto=format&fit=crop&dm=1689577915&s=e27502e43508b722f46a814fdc38ed57",
    alt: "Footer Middle",
  },
];

export interface FooterLink {
  label: string;
  href: string;
  comingSoon?: boolean;
}

/** "Our Work / Culture (Soon) / Ideas (Soon) / Contact Us" */
export const footerLinks: FooterLink[] = [
  { label: "Our Work", href: "/work" },
  { label: "Culture (Soon)", href: "/", comingSoon: true },
  { label: "Ideas (Soon)", href: "/", comingSoon: true },
  { label: "Contact Us", href: "mailto:hello@rogue.studio" },
];

export interface SocialLink {
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Dribbble", href: "https://dribbble.com/roguestudio" },
  { label: "Behance", href: "https://www.behance.net/RogueStudio" },
  { label: "Twitter", href: "https://twitter.com/studio_rogue?lang=en" },
  { label: "Instagram", href: "https://www.instagram.com/rogue.worldwide/" },
];
