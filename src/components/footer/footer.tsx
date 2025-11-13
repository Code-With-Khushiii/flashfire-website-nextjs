import styles from "./footer.module.css";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* === Top Section === */}
      <div className={styles.footerTop}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/flashfire-logo-white.png"
              alt="Flashfire Logo"
              width={40}
              height={40}
            />
            <span className={styles.logoText}>FLASHFIRE</span>
          </div>
        </div>

        {/* Links aligned row-wise with headings */}
        <div className={styles.linksContainer}>
          <div className={styles.linkRow}>
            <h4>QUICK ACCESS</h4>
            <div className={styles.linkItems}>
              <Link href="#">Features</Link>
              <Link href="#">Testimonials</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Blog</Link>
            </div>
          </div>

          <div className={styles.linkRow}>
            <h4>COMPANY STUFF</h4>
            <div className={styles.linkItems}>
              <Link href="/refund-policy" className={styles.footerLink}>Refund Policy</Link>
              <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
              <Link href="/payment-policy" className={styles.footerLink}>Payment Policy</Link>
              <Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
            </div>
          </div>

          <div className={styles.linkRow}>
            <h4>FOLLOW US</h4>
            <div className={styles.socialIcons}>
              <Link
                href="https://www.linkedin.com/company/flashfire-pvt-ltd/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://www.instagram.com/flashfirejobs/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* === Bottom Section === */}
      <div className={styles.footerBottom}>
        <p className={styles.copyText}>
          @ Flashfire 2025 | All Rights Reserved
        </p>
        <p className={styles.companyText}>Flashfire Pvt. Ltd.</p>
      </div>
    </footer>
  );
}
