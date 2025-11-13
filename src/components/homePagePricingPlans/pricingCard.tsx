"use client";

import styles from "./pricingCard.module.css";
import { FaBolt } from "react-icons/fa";

interface PricingCardProps {
  title: string;
  tag?: string;
  subTitle: string;
  description: string;
  price: string;
  oldPrice?: string;
  features: string[];
  addOn?: boolean;
  highlight?: boolean;
  paymentLink?: string;
}

export default function PricingCard({
  title,
  tag,
  subTitle,
  description,
  price,
  oldPrice,
  features,
  addOn,
  highlight,
  paymentLink,
}: PricingCardProps) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlightCard : ""}`}>
      {tag && (
        <div
          className={styles.tag}
          data-tag-type={tag === "MOST POPULAR" ? "popular" : "default"}
        >
          {tag}
        </div>
      )}

      <h4 className={styles.planTitle}>{title}</h4>
      <h2 className={styles.appCount}>{subTitle}</h2>
      <p className={styles.subText}>{description}</p>

      <hr className={styles.cardHR} />

      <ul className={styles.featuresList}>
        {features.map((feature, i) => (
          <li key={i}>
            <FaBolt className={styles.icon} /> {feature}
          </li>
        ))}
      </ul>

      {addOn && (
        <div className={styles.addOnSection}>
          <h5>Booster Add-On</h5>
          <p>Add more application to boost your reach & visibility.</p>
          <ul>
            <li>☐ +250 Extra Applications — $130</li>
            <li>☐ +500 Extra Applications — $220</li>
            <li>☐ +1000 Extra Applications — $380</li>
          </ul>
        </div>
      )}

      <div className={styles.priceRow}>
        <h3>{price}</h3>
        {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
      </div>

      <p className={styles.totalIncluded}>
        Total {subTitle.toLowerCase()} included
      </p>

      <button 
        className={styles.ctaButton}
        onClick={() => {
          if (paymentLink) {
            window.open(paymentLink, '_blank');
          }
        }}
      >
        Get Me Interview →
      </button>
    </div>
  );
}
