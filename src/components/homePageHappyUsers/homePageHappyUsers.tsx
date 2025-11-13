"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./homePageHappyUsers.module.css";

export default function HomePageHappyUsers() {
  const videos = [
    {
      src: "/videos/anjali-shah-ff-review.mp4",
      name: "Anjali Shah",
      company: "Skyworks Solutions, Inc.",
      tilt: "-1deg",
    },
    {
      src: "/videos/rijul-jain-ff-review.mp4",
      name: "Rijul Jain",
      company: "Wise",
      tilt: "2deg",
    },
    {
      src: "/videos/aryan-gupta-ff-review.mp4",
      name: "Aryan Gupta",
      company: "IBM",
      tilt: "-2deg",
    },
  ];

  // Images from happy-users-sc folder
  const reviewImages = [
    "/images/happy-users-sc/image1.jpg",
    "/images/happy-users-sc/image2.jpg",
    "/images/happy-users-sc/image3.jpg",
    "/images/happy-users-sc/image4.jpg",
    "/images/happy-users-sc/image5.jpg",
    "/images/happy-users-sc/image6.jpg",
    "/images/happy-users-sc/image7.jpg",
    "/images/happy-users-sc/image8.jpg",
    "/images/happy-users-sc/image9.png",
    "/images/happy-users-sc/image10.jpg",
    "/images/happy-users-sc/image11.jpg",
    "/images/happy-users-sc/image12.jpg",
    "/images/happy-users-sc/image13.png",
    "/images/happy-users-sc/image14.jpg",
    "/images/happy-users-sc/image15.jpg",
    "/images/happy-users-sc/image16.png",
    "/images/happy-users-sc/image17.png",
    "/images/happy-users-sc/image18.jpg",
    "/images/happy-users-sc/image19.png",
    "/images/happy-users-sc/image20.png",
    "/images/happy-users-sc/image21.png",
    "/images/happy-users-sc/image22.png",
    "/images/happy-users-sc/image23.png",
    "/images/happy-users-sc/image24.png",
    "/images/happy-users-sc/image25.png",
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
    const videoEl = document.getElementById(
      `userVideo-${index}`,
    ) as HTMLVideoElement;
    if (videoEl) {
      videoEl.play();
    }
  };

  return (
    <section id="testimonials" className={styles.happySection}>
      {/* === Top Orange Section === */}
      <div className={styles.orangeSection}>
        <h2 className={styles.title}>100+ Happy User’s Love!</h2>

        {/* Masonry Layout */}
        <div className={styles.masonryGallery}>
          {reviewImages.map((imageSrc, i) => (
            <div key={i} className={styles.masonryItem}>
              <Image
                src={imageSrc}
                alt={`Flashfire user review ${i + 1}`}
                width={400}
                height={600}
                className={styles.reviewImage}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>

        {/* Center Circle */}
        <div className={styles.centerCircle}>
          <div className={styles.logoPlaceholder}>
            <Image
              src="/images/Flashfire no bg.png"
              alt="Flashfire Logo"
              width={180}
              height={180}
              className={styles.centerLogo}
            />
          </div>
        </div>
      </div>

      {/* === Bottom White Section === */}
      <div className={styles.whiteSection}>
        <div className={styles.videoRow}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={styles.videoCard}
              style={{
                transform: `rotate(${video.tilt})`,
              }}
            >
              <video
                id={`userVideo-${index}`}
                className={styles.userVideo}
                controls={playingIndex === index}
                muted
                loop
                playsInline
                onPlay={() => setPlayingIndex(index)}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>

              {/* Play Button Overlay */}
              {playingIndex !== index && (
                <div
                  className={styles.playOverlay}
                  onClick={() => handlePlay(index)}
                >
                  ▶
                </div>
              )}

              {/* User Info (hidden when playing) */}
              {playingIndex !== index && (
                <div className={styles.videoInfo}>
                  <p className={styles.userName}>{video.name}</p>
                  <p className={styles.userCompany}>{video.company}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
