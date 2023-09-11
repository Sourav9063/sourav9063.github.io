import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles["hs-wrapper"]}>
      <div className={styles["body"]} style={{ top: `calc(0*93vh)` }}>
        <section className={styles["back"]}>
          <h1 className={styles["back-text"]}>Experiences</h1>
          <h1 className={styles["back-text"]}>Achievements</h1>
          <h1 className={styles["back-text"]}>& Educations</h1>
        </section>
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <ExperienceHome />
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <AchievementHome />
      </div>
      <div className={`${styles["body"]} ${styles["t50vw"]} `}>
        <EducationHome />
      </div>
    </div>
  );
}

function ExperienceHome() {
  return (
    <div className={styles["experiment-home"]}>
      <h1 className={styles["back-text-white"]}>Experiences</h1>
    </div>
  );
}
function AchievementHome() {
  return (
    <div className={styles["achievement-home"]}>
      <h1 className={styles["back-text-white"]}>Achievements</h1>
    </div>
  );
}

function EducationHome() {
  return (
    <div className={styles["education-home"]}>
      <h1 className={styles["back-text-white"]}>Educations</h1>
    </div>
  );
}
