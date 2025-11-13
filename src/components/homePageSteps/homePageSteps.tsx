import styles from "./homePageSteps.module.css";
import {
  PiTargetDuotone,
  PiTrophyDuotone,
  PiRocketDuotone,
  PiHandshakeDuotone,
} from "react-icons/pi";

export default function HomePageSteps() {
  return (
    <section className={styles.stepsContainer}>
      {/* === Header === */}
      <div className={styles.stepsHeader}>
        <h2 className={styles.stepsTitle}>
          From searching to interviewing, just 4 simple steps.
        </h2>
        <p className={styles.stepsSubtitle}>
          We turn your endless job hunt into a smooth, automated path to
          interview calls.{" "}
          <span className={styles.highlight}>
            You set the goal, Flashfire takes care of the journey.
          </span>
        </p>
      </div>

      {/* === Steps Grid === */}
      <div className={styles.stepsGrid}>
        {/* STEP 1 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 1</h3>
            <h4 className={styles.stepHeading}>You share your goals.</h4>
            <p className={styles.stepDescription}>
              Tell us what you are aiming for, your dream role, location, and
              experience. We learn your story so we can find the right
              opportunities for you.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiTargetDuotone />
          </div>
        </div>

        {/* STEP 2 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 2</h3>
            <h4 className={styles.stepHeading}>
              We build your winning profile.
            </h4>
            <p className={styles.stepDescription}>
              Our AI rewrites your resume and LinkedIn to match top U.S.
              recruiter searches. Your profile starts showing up where it
              matters, on the right screens.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiTrophyDuotone />
          </div>
        </div>

        {/* STEP 3 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 3</h3>
            <h4 className={styles.stepHeading}>
              Flashfire AI applies for you.
            </h4>
            <p className={styles.stepDescription}>
              We apply to 1000+ curated roles for you, based on your goals and
              visa needs. No spam, no mass blasts, only smart, targeted
              applications.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiRocketDuotone />
          </div>
        </div>

        {/* STEP 4 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 4</h3>
            <h4 className={styles.stepHeading}>
              You start getting interview calls.
            </h4>
            <p className={styles.stepDescription}>
              As applications go out, you start getting real calls from real
              recruiters. We track, follow up, and optimize every step so you
              can focus on preparing.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiHandshakeDuotone />
          </div>
        </div>
      </div>
    </section>
  );
}
