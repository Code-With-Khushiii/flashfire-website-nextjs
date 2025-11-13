"use client";

import Image from "next/image";
import styles from "./homePageMilestones.module.css";

export default function HomePageMilestonesClient() {
  const footerCompanies = [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Google", domain: "google.com" },
    { name: "Apple", domain: "apple.com" },
    { name: "Meta", domain: "meta.com" },
    { name: "Netflix", domain: "netflix.com" },
    { name: "Tesla", domain: "tesla.com" },
    { name: "SpaceX", domain: "spacex.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "IBM", domain: "www.ibm.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Adobe", domain: "www.adobe.com" },
    { name: "Salesforce", domain: "salesforce.com" },
    { name: "Twitter (X)", domain: "x.com" },
  ];

  const testimonials = [
    {
      company: "Google",
      domain: "google.com",
      text: "Flashfire guided me through my entire application process — I landed interviews at Google and Meta within 10 days!",
      user: "Arjun Sharma",
      role: "SWE Intern",
    },
    {
      company: "Amazon",
      domain: "amazon.com",
      text: "The resume booster and job tracker saved me hours daily. Got an Amazon offer in just 3 weeks!",
      user: "Sophia Patel",
      role: "Software Engineer",
    },
    {
      company: "Microsoft",
      domain: "microsoft.com",
      text: "From job search chaos to clarity — I received 4 interview calls in my first week using Flashfire!",
      user: "Ravi Kumar",
      role: "Full Stack Developer",
    },
    {
      company: "Apple",
      domain: "apple.com",
      text: "The AI-powered application system was incredible. Landed an Apple interview within 2 weeks!",
      user: "Nisha Jain",
      role: "Product Analyst",
    },
    {
      company: "Meta",
      domain: "meta.com",
      text: "Flashfire made everything structured and automated — helped me secure Meta interviews easily!",
      user: "Karan Mehta",
      role: "Software Engineer",
    },
    {
      company: "SpaceX",
      domain: "spacex.com",
      text: "The automated application system was a game-changer. Landed a SpaceX interview in just 2 weeks!",
      user: "Aryan Verma",
      role: "Aerospace Engineer",
    },
    {
      company: "Deloitte",
      domain: "deloitte.com",
      text: "Flashfire's ATS optimization helped me stand out. Got multiple offers from top consulting firms!",
      user: "Priya Singh",
      role: "Business Analyst",
    },
    {
      company: "IBM",
      domain: "www.ibm.com",
      text: "The personalized cover letters and resume optimization got me noticed. IBM offer secured!",
      user: "Aditya Reddy",
      role: "Data Scientist",
    },
    {
      company: "Salesforce",
      domain: "salesforce.com",
      text: "Tracked 200+ applications effortlessly. Flashfire helped me land my dream role at Salesforce!",
      user: "Ananya Desai",
      role: "Cloud Engineer",
    },
    {
      company: "Netflix",
      domain: "netflix.com",
      text: "The AI-powered resume tailoring was perfect. Received a Netflix offer within a month!",
      user: "Rohan Kapoor",
      role: "UX Designer",
    },
  ];

  return (
    <section className={styles.milestoneContainer}>
      {/* === Section Heading === */}
      <h4 className={styles.sectionHeading}>INTERVIEWS CRACKED BY OUR USERS</h4>

      {/* === Continuous Marquee Testimonials === */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...testimonials, ...testimonials].map((t, i) => {
            return (
              <div key={i} className={styles.marqueeCard}>
                <div className={styles.companyHeader}>
                  <div className={styles.companyLogoIcon}>
                    <Image
                      src={`https://logo.clearbit.com/${t.domain}`}
                      alt={t.company}
                      width={32}
                      height={32}
                      className={styles.companyLogo}
                      onError={(e) => {
                        // Fallback to company name if logo fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className={styles.companyName}>{t.company}</p>
                </div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.userInfo}>
                  <div className={styles.userAvatar}></div>
                  <div>
                    <p className={styles.userName}>{t.user}</p>
                    <p className={styles.userCompany}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* === Top Stats Cards === */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 16L12 11L16 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 3V10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>
            <span className={styles.highlight}>200x</span> Return on Investment
          </h3>
          <p>
            Clients see 200x ROI with higher salaries, faster offers, and
            lasting growth.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>
            <span className={styles.highlight}>300k+</span> Applications Sent
            Smartly
          </h3>
          <p>
            Over 300k applications optimized with ATS-friendly resumes and
            custom cover letters.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>
            <span className={styles.highlight}>1 Week</span> to Your First
            Interview
          </h3>
          <p>
            Flashfire users report getting interview calls within their first 7
            days of usage.
          </p>
        </div>
      </div>

      {/* === Footer Logos === */}
      <div className={styles.footerLogos}>
        {footerCompanies.map((company, i) => (
          <span key={i}>
            <span className={styles.footerIcon}>
              <Image
                src={`https://logo.clearbit.com/${company.domain}`}
                alt={company.name}
                width={24}
                height={24}
                className={styles.footerLogo}
              />
            </span>
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}
