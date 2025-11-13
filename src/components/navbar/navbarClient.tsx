"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import type { NavLink, NavbarCTA } from "../../types/navbarData";

type Props = {
  links: NavLink[];
  ctas: NavbarCTA;
};

export default function NavbarClient({ links, ctas }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className={styles.navContainer}
      style={{
        backdropFilter: 'blur(120px)',
        WebkitBackdropFilter: 'blur(120px)',
      }}
    >
      <div className={styles.navInner}>
        {/* Left Section: Logo */}
        <div className={styles.navLeft}>
          <Link href="/" className={styles.navLogoText}>
            FLASHFIRE
          </Link>
        </div>

        {/* Center Section: Links (Desktop) */}
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href} className={styles.navLinkItem}>
              <a href={link.href} className={styles.navLinkText}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section: CTAs (Desktop) */}
        <div className={styles.navRight}>
          <Link
            href={ctas.secondary.href}
            className={styles.navSecondaryButton}
          >
            {ctas.secondary.label}
          </Link>
          <Link href={ctas.primary.href} className={styles.navPrimaryButton}>
            {ctas.primary.label}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={styles.navMenuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={isMenuOpen ? styles.iconClose : styles.iconHamburger}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className={styles.navMobileMenu}>
          <ul className={styles.navMobileLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navMobileLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navMobileButtons}>
            <a href={ctas.secondary.href} className={styles.navMobileSecondary}>
              {ctas.secondary.label}
            </a>
            <a href={ctas.primary.href} className={styles.navMobilePrimary}>
              {ctas.primary.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
