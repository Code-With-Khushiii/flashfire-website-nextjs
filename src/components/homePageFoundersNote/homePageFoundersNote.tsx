import Image from "next/image";
import styles from "./homePageFoundersNote.module.css";
import { FaLinkedin } from "react-icons/fa";

export default function HomePageFoundersNote() {
  return (
    <section className={styles.founderSection}>
      <div className={styles.container}>
        {/* === LEFT COLUMN === */}
        <div className={styles.leftColumn}>
          <p className={styles.greeting}>
            To Every Job Seeker Who’s Ready to Move Forward,
          </p>

          <p>
            I know how exhausting the job search can be. You keep sending out
            applications, waiting for replies, and start to wonder if it’s you.
            Especially in the U.S., where hundreds apply for the same role, even
            the most talented people begin to lose hope.
          </p>

          <p>
            Flashfire was born from that same feeling. I watched my sister—
            smart, capable, and hardworking—apply to hundreds of roles and still
            get no response. It wasn’t her fault. The system had stopped seeing
            people for who they are.
          </p>

          <blockquote className={styles.quote}>
            The problem was never the people. It was the process.
          </blockquote>

          <p>
            That’s when <span className={styles.highlight}>Pranjal</span> joined
            me. He had been through the same struggle—preparing hard, clearing
            rounds, yet still falling short. Not because he wasn’t good enough,
            but because the process wasn’t fair.
          </p>

          <p>
            Together, we started building Flashfire with belief, empathy, and
            persistence. What began as a way to help one person is now helping
            hundreds find their “yes.”
          </p>
        </div>

        {/* === RIGHT COLUMN === */}
        <div className={styles.rightColumn}>
          <div className={styles.founderCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/partner-adit-jain.jpg"
                alt="Adit Jain"
                width={320}
                height={320}
                className={styles.founderImage}
              />

              <div className={styles.badge}>🔥</div>

              <div className={styles.infoOverlay}>
                <div>
                  <p className={styles.role}>Partner</p>
                  <p className={styles.name}>Adit</p>
                </div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinIcon}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
