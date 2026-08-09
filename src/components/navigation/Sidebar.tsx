"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { footerLinks, socialLinks } from "@/components/footer/footerData";

const REVEAL_EASE: [number, number, number, number] = [0.155, 0.055, 0.14, 1];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  panelId: string;
}

/**
 * Continuous marquee ticker matching side_bar.mp4:
 * Alternates between UPPERCASE Druk font and Italic Swear Display font.
 */
function MarqueeLabel({ label }: { label: string }) {
  const upper = label.toUpperCase();
  const styled = label.replace(
    /\w\S*/g,
    (word) => word[0].toUpperCase() + word.slice(1).toLowerCase(),
  );

  const unit = (key: string) => (
    <span className={styles.marqueeUnit} key={key}>
      <span className={styles.marqueeUpper}>{upper}</span>
      <span className={styles.marqueeMark} aria-hidden="true">
        ✳
      </span>
      <span className={styles.marqueeStyled}>{styled}</span>
      <span className={styles.marqueeMark} aria-hidden="true">
        ✳
      </span>
    </span>
  );

  return (
    <span className={styles.marqueeViewport} aria-hidden="true">
      <span className={styles.marqueeTrack}>
        {unit("a")}
        {unit("b")}
      </span>
    </span>
  );
}

export default function Sidebar({ isOpen, onClose, panelId }: SidebarProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll lock background
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Accessibility: Focus management & Escape key binding
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="sidebar-overlay"
            className={styles.overlay}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: REVEAL_EASE }}
            aria-hidden="true"
          />

          <motion.div
            key="sidebar-panel"
            id={panelId}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, ease: REVEAL_EASE }}
          >
            <button
              type="button"
              ref={closeButtonRef}
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close menu"
            >
              <span className={styles.closeIcon} aria-hidden="true" />
            </button>

            <nav className={styles.nav} aria-label="Primary">
              {footerLinks.map((link, index) => {
                const label = link.label.replace(/\s*\(soon\)/i, "");
                const rowContent = (
                  <>
                    <span className={styles.navIndex}>
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                    <MarqueeLabel label={label} />
                    {link.comingSoon && (
                      <span className={styles.navSoon}>[Coming Soon]</span>
                    )}
                  </>
                );

                if (link.comingSoon) {
                  return (
                    <span
                      key={link.label}
                      className={`${styles.navRow} ${styles.navRowDisabled}`}
                      aria-disabled="true"
                    >
                      {rowContent}
                    </span>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className={styles.navRow}
                  >
                    {rowContent}
                  </Link>
                );
              })}
            </nav>

            <div className={styles.contact}>
              <span className={styles.contactLabel}>SAY HELLO</span>
              <a
                className={styles.contactEmail}
                href="mailto:hello@rogue.studio"
              >
                hello@rogue.studio
              </a>
              <form
                className={styles.subscribeForm}
                onSubmit={(e) => e.preventDefault()}
              >
                <label
                  htmlFor="sidebar-email"
                  className={styles.subscribeLabel}
                >
                  Hey pal <span aria-hidden="true">&rarr;</span>
                </label>
                <input
                  id="sidebar-email"
                  type="email"
                  placeholder="enter your email"
                  className={styles.subscribeInput}
                />
                <button type="submit" className={styles.subscribeButton}>
                  SUBSCRIBE
                </button>
              </form>
            </div>

            <div className={styles.bottom}>
              <div className={styles.social}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
              <span className={styles.copyright}>
                &copy;COPYRIGHT {new Date().getFullYear()}
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
