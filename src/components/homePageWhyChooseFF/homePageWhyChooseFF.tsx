"use client";

import styles from "./homePageWhyChooseFF.module.css";
import Image from "next/image";

export default function HomePageWhyChooseFF() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919817349846'; // Your phone number with country code
    const message = encodeURIComponent('Hi! I\'m interested in Flashfire\'s AI-powered job search automation. Can you help me get started?');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="feature" className={styles.whySection}>
      {/* === Header === */}
      <header className={styles.header}>
        <h2 className={styles.title}>Why Choose Flashfire?</h2>
        <p className={styles.subtitle}>
          We don’t just apply, we <strong>make you get noticed.</strong>{" "}
          Flashfire combines{" "}
          <span className={styles.highlightAI}>AI precision</span> with{" "}
          <span className={styles.highlightHuman}>human insight</span> to get
          you interviews that actually convert.
        </p>
      </header>

      {/* === Feature Grid === */}
      <div className={styles.featureGrid}>
        <article className={`${styles.featureCard} ${styles.featureCard1}`}>
          <h3>Lightning Fast Applications</h3>
          <p>
            A dedicated team of 4–5 people handles your job hunt, applying to
            1200+ roles in 6–7 weeks. We’ll keep you posted with every update in
            a WhatsApp group made just for you.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCard2}`}>
          <h3>Dynamic Resume Optimization</h3>
          <p>
            We build your base resume from scratch and tailor it for each job,
            making it ATS-friendly and recruiter-visible.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCard3}`}>
          <h3>LinkedIn Profile Optimization</h3>
          <p>
            We professionally optimize your LinkedIn profile to boost recruiter
            visibility and align with your job search goals.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCard4}`}>
          <h3>Dashboard & Analytics</h3>
          <p>
            Access a personalized dashboard to track applications, monitor
            success rates, and get real-time insights to improve your job search
            strategy.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCard5}`}>
          <h3>Precision Targeting</h3>
          <p>
            We only apply to jobs that fit your pay, location, company size, and
            career goals — and only to jobs posted in the last 24–48 hours.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCard6}`}>
          <h3>AI-Powered Matching</h3>
          <p>
            For each and every application, your base resume is automatically
            optimized to the job description with ATS-friendly keywords and
            skills.
          </p>
        </article>
      </div>

      {/* === Bottom Section === */}
      <footer className={styles.bottomSection}>
        <div className={styles.whatsappCard}>
          <div className={styles.whatsappLeft}>
            <h3>Still Confused?</h3>
            <p>Feel free to post your queries over our WhatsApp Support.</p>
            <button 
              className={styles.whatsappButton}
              onClick={handleWhatsAppClick}
            >
               Connect on WhatsApp
            </button>
          </div>

          <div className={styles.whatsappRight}>
            <div className={styles.testimonial}>
              <p className={styles.helpingTag}>HELPING 100+ JOB SEEKERS</p>
              <blockquote className={styles.quote}>
                “I’ve seen brilliant people lose hope. Flashfire exists so they
                don’t have to.”
              </blockquote>
              <div className={styles.author}>
                <div>
                  <p className={styles.authorName}>Adit Jain</p>
                  <p className={styles.authorRole}>Partner</p>
                </div>
                <div className={styles.logoWrapper}>
                  <Image
                    src="/images/flashfire-logo-white.png"
                    alt="Flashfire logo"
                    width={24}
                    height={24}
                  />
                </div>
                <p>Flashfire</p>
              </div>
            </div>

            <div className={styles.authorImage}>
              <Image
                src="/images/adit-jain.png"
                alt="Adit Jain"
                width={65}
                height={50}
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
