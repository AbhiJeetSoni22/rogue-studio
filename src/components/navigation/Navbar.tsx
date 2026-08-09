"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <>
      {/* Permanent Fixed Left Rail Bar */}
      <aside className={styles.rail}>
        <div className={styles.railTop}>
          <Link href="/" className={styles.logoLink} aria-label="Rogue Home">
            <svg
              className={styles.logoIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2.5V7.5H13c1.93 0 3.5 1.57 3.5 3.5 0 1.48-.92 2.75-2.22 3.26L16.5 16.5H14l-1.92-2.12H13v2.12zm0-4.12h1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H13v3z" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          className={styles.menuTrigger}
          data-open={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.menuDot} />
          <span className={styles.menuDot} />
          <span className={styles.menuDot} />
          <span className={styles.menuDotExtra} />
        </button>

        <div className={styles.railBottom}>
          <a href="mailto:hello@rogue.studio" className={styles.startProject}>
            <span className={styles.bullet}>•</span> START A PROJECT
          </a>
        </div>
      </aside>

      {/* Slide-out Drawer Panel */}
      <Sidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        panelId={panelId}
      />
    </>
  );
}
