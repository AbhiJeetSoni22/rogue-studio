"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./footer.module.css";
import { footerImages, footerLinks, socialLinks } from "./footerData";

const REVEAL_EASE: [number, number, number, number] = [0.155, 0.055, 0.14, 1];

/**
 * Footer / final section — "Our Projects" CTA, fanned photos, subscribe
 * form, social links + copyright.
 *
 * Structure mirrors the original `<footer>` DOM (content, cta, images,
 * bottom, social as siblings) closely enough that the reference's
 * absolute-positioning math for the fanned photos carries over directly.
 * Entrance animation reuses this project's established
 * `whileInView` + REVEAL_EASE convention (see WorkSection/CultureSection)
 * rather than introducing a new animation approach.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No backend wired up yet (frontend-only project) — just acknowledge.
    setStatus("success");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <img
              className={styles.eyebrowStar}
              src="/images/gold_star.svg"
              alt=""
              aria-hidden="true"
            />
            let&apos;s make something
          </span>

          <div className={styles.headingWrap}>
            <Link href="/work" className={styles.heading}>
              <motion.span
                className={styles.headingLine}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease: REVEAL_EASE }}
              >
                Our
              </motion.span>
              <motion.span
                className={styles.headingLine}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, delay: 0.08, ease: REVEAL_EASE }}
              >
                <span className={styles.cilati}>Projects</span>
              </motion.span>
            </Link>
          </div>

          <img
            className={styles.badge}
            src="/images/culture_badge.svg"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className={styles.cta}>
          <span className={styles.sayHello}>Say Hello</span>
          <a className={styles.email} href="mailto:hello@rogue.studio">
            hello@rogue.studio
          </a>
          <a className={styles.button} href="mailto:hello@rogue.studio">
            <span className={styles.buttonDot} />
            <span className={styles.buttonLabel}>Start A Project</span>
          </a>
        </div>

        <div className={styles.images} aria-hidden="true">
          {footerImages.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageWrap}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: REVEAL_EASE,
              }}
            >
              <picture>
                <source
                  srcSet={`${image.mobile1x} 1x, ${image.mobile2x} 2x`}
                  media="(max-width: 800px)"
                />
                <source
                  srcSet={`${image.desktop1x} 1x, ${image.desktop2x} 2x`}
                  media="(min-width: 801px)"
                />
                <img src={image.desktop1x} alt={image.alt} loading="lazy" />
              </picture>
            </motion.div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.links}>
            <span className={styles.linksLabel}>more</span>
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.link} ${link.comingSoon ? styles.linkComingSoon : ""}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.subscribeWrap}>
            <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Hey pal   →  enter your email"
                className={styles.subscribeInput}
                aria-label="Email address"
              />
              <div className={styles.subscribeButtonWrap}>
                <button type="submit" className={styles.subscribeButton}>
                  {status === "success" ? "Thanks!" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>
        </div>

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
          <span className={styles.copyright}>
            &copy;Copyright {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
