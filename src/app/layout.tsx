import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rogue Studio",
  description: "Branding and Digital Design — Worldwide Design, USA, SA, Tokyo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
