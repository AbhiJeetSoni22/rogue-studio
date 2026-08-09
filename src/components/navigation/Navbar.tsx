import styles from "./navbar.module.css";

/**
 * Navbar placeholder for Phase 1.
 *
 * Establishes approximate positioning, typography, and background
 * relationship with the Hero. The full animated menu/mobile nav is
 * implemented in a later phase.
 */
export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <span className={styles.logo}>Rogue</span>
      <button type="button" className={styles.menuTrigger}>
        Menu
      </button>
    </header>
  );
}
