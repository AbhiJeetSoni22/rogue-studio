import styles from "./hero.module.css";
import HeroHeading from "./HeroHeading";
import HeroBottom from "./HeroBottom";
import HeroImages from "./HeroImages";

/**
 * Homepage Hero.
 *
 * Stays a server component; the entrance animation is isolated to its
 * three client subcomponents (HeroHeading, HeroBottom, HeroImages) rather
 * than making the whole Hero (or app) a client boundary.
 */
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.center}>
        <HeroHeading />
        <HeroBottom />
      </div>

      <HeroImages />
    </section>
  );
}
