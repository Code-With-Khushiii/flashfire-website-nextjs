"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./heroSection.module.css";
import { HeroSectionData } from "@/src/types/heroSectionData";

type Props = {
  data: HeroSectionData;
};

export default function HeroSectionClient({ data }: Props) {
  return (
    <section className={styles.heroContainer}>
      {/* === Top Badges === */}
      <div className={styles.heroBadges}>
        {data.badges.map((badge) => (
          <span key={badge} className={styles.heroBadgeItem}>
            {badge}
          </span>
        ))}
      </div>

      {/* === Headline === */}
      <h1 className={styles.heroHeadline}>
        <span className={styles.heroHeadlineText}>{data.headlineMain}</span>
        <span className={styles.heroHeadlineText}>
          <span className={styles.heroHighlight}>{data.headlineHighlight}</span>
          <Image
            src="/images/Flashfire no bg.png"
            alt="Flashfire Logo"
            width={60}
            height={60}
            className={styles.heroLogo}
          />
          <span className={styles.heroHighlight}>{data.headlineSuffix}</span>
        </span>
      </h1>

      {/* === Description === */}
      <p className={styles.heroDescription}>{data.description}</p>

      {/* === CTA Button === */}
      <Link href={data.cta.href} className={styles.heroCTAButton}>
        {data.cta.label}
      </Link>

      {/* === Trusted Users === */}
      <div className={styles.heroUserTrust}>
        <div className={styles.heroUserIcons}>
          {["user1.jpg", "user2.jpg", "user3.jpg"].map((img, i) => (
            <div key={i} className={styles.heroUserCircleWrapper}>
              <Image
                src={`/images/${img}`}
                alt={`User ${i + 1}`}
                fill
                sizes="2.2rem"
                className={styles.heroUserCircle}
              />
            </div>
          ))}
        </div>
        <p className={styles.heroUserText}>{data.trustText}</p>
      </div>

      {/* === Universities Section === */}
      <div className={styles.heroUniversityContainer}>
        <p className={styles.heroUniversityHeading}>{data.universityHeading}</p>

        <div className={styles.heroUniversityWrapper}>
          <div className={styles.heroUniversityStrip}>
            {[...data.universities, ...data.universities].map((uni, index) => (
              <div key={index} className={styles.heroUniversityCard}>
                <Image
                  src={`https://logo.clearbit.com/${uni.domain}`}
                  alt={uni.name}
                  width={120}
                  height={70}
                  className={styles.universityLogo}
                />
                <p className={styles.heroUniversityStripUniName}>{uni.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
