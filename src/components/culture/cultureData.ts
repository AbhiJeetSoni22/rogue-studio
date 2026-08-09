/**
 * "Folks call us when they need" — .homeServices — data.
 *
 * URLs and copy sourced directly from the reference `view-source` HTML +
 * `style.min.css` (`.homeServices*` rules), the same "preserve exact CDN
 * asset" approach used in workData.ts / aboutData.ts.
 */

export interface ServiceImage {
  mobile1x: string;
  mobile2x: string;
  desktop1x: string;
  desktop2x: string;
  alt: string;
}

export interface ServiceRow {
  id: string;
  /** DOM order for this row: image, word, image OR word, image, word. */
  layout: "image-word-image" | "word-image-word";
  images: ServiceImage[];
  words: string[];
}

/**
 * Three rows, in original DOM order. The middle "Digital / Design" row is
 * word-image-word (its two words get the converging slide-in treatment —
 * see `.homeServices__row:nth-child(3) .homeServices__word` in the
 * reference CSS); the other two are image-word-image.
 */
export const serviceRows: ServiceRow[] = [
  {
    id: "branding",
    layout: "image-word-image",
    words: ["Branding"],
    images: [
      {
        mobile1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_1.jpg?h=110&q=85&auto=format&fit=crop&dm=1689577933&s=c4012f2165e38afb09be9ee60d184a92",
        mobile2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_1.jpg?h=220&q=85&auto=format&fit=crop&dm=1689577933&s=b37ee8e75239769a9903e31d271fcc07",
        desktop1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_1.jpg?h=400&q=85&auto=format&fit=crop&dm=1689577933&s=ae72cfd65a3f984eb5c3270bfda3e1d4",
        desktop2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_1.jpg?h=800&q=85&auto=format&fit=crop&dm=1689577933&s=78dab0835864059df89f6b8e7bf486be",
        alt: "Service 1",
      },
      {
        mobile1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_2.jpg?h=110&q=85&auto=format&fit=crop&dm=1689577933&s=0442df53c6b24d5a9372bba7a3298dfb",
        mobile2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_2.jpg?h=220&q=85&auto=format&fit=crop&dm=1689577933&s=7d3f888b10deed9e12598d045f75a52e",
        desktop1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_2.jpg?h=400&q=85&auto=format&fit=crop&dm=1689577933&s=5672b7fb6fcc0e35041607f9b0e80ad6",
        desktop2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_2.jpg?h=800&q=85&auto=format&fit=crop&dm=1689577933&s=25f68944fa52a5376143f8c81542fac2",
        alt: "Service 2",
      },
    ],
  },
  {
    id: "digital-design",
    layout: "word-image-word",
    words: ["Digital", "Design"],
    images: [
      {
        mobile1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_3.jpg?h=110&q=85&auto=format&fit=crop&dm=1689577934&s=bc0f55bac8ac3efba119c908b50fd4e8",
        mobile2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_3.jpg?h=220&q=85&auto=format&fit=crop&dm=1689577934&s=69ec9c6083e2912ea385eb505d0ff3c8",
        desktop1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_3.jpg?h=400&q=85&auto=format&fit=crop&dm=1689577934&s=a1bdc0c5e0f260ba35cc724b60edfcb3",
        desktop2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_3.jpg?h=800&q=85&auto=format&fit=crop&dm=1689577934&s=de38528f118de89141134c45f1ecaa45",
        alt: "Service 3",
      },
    ],
  },
  {
    id: "storytelling",
    layout: "image-word-image",
    words: ["Storytelling"],
    images: [
      {
        mobile1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/Storytelling_2023-07-28-150356_xgyb.png?h=110&q=85&auto=format&fit=crop&dm=1690556637&s=bd37b3ecc44c8b5043dd3e29db8f309f",
        mobile2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/Storytelling_2023-07-28-150356_xgyb.png?h=220&q=85&auto=format&fit=crop&dm=1690556637&s=e587f5ca2dffc97bba4d9ba900577123",
        desktop1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/Storytelling_2023-07-28-150356_xgyb.png?h=400&q=85&auto=format&fit=crop&dm=1690556637&s=1dc676d4f51319c271a844ad83fa9eff",
        desktop2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/Storytelling_2023-07-28-150356_xgyb.png?h=800&q=85&auto=format&fit=crop&dm=1690556637&s=fa1771a2336d9a7f29294926fc10e437",
        alt: "Storytelling",
      },
      {
        mobile1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_5.jpg?h=110&q=85&auto=format&fit=crop&dm=1689577934&s=e7a95bf3dfc7f4984730f849677378a1",
        mobile2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_5.jpg?h=220&q=85&auto=format&fit=crop&dm=1689577934&s=707c93b90c5c9486ae70f0ef60c1ef4f",
        desktop1x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_5.jpg?h=400&q=85&auto=format&fit=crop&dm=1689577934&s=f4cf5d75cffee16f3952d8d945ff1111",
        desktop2x:
          "https://rogue-studio.transforms.svdcdn.com/staging/service_5.jpg?h=800&q=85&auto=format&fit=crop&dm=1689577934&s=011cd6bc65fbdcfd6bc8c7e0642cf53b",
        alt: "Service 5",
      },
    ],
  },
];
