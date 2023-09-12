import React from "react";
import styles from "./Experience.module.css";
import { useScrollPosition } from "../../global/provider/GlobalProvider";

export default function Experience() {
  const [scrollPositionOfElement] = useScrollPosition();

  return (
    <div className={styles["hs-wrapper"]}>
      <div className={styles["body"]} style={{ top: `calc(0*93vh)` }}>
        <section className={styles["back"]}>
          <h1
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 20 * Math.max(500 - scrollPositionOfElement, 0)
                  : 200
              }px)`,
            }}
          >
            Experiences
          </h1>
          <h1
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 60 * Math.max(500 - scrollPositionOfElement, 0)
                  : 600
              }px)`,
            }}
          >
            Educations
          </h1>
          <h1
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 40 * Math.max(500 - scrollPositionOfElement, 0)
                  : 400
              }px)`,
            }}
          >
            Achievements
          </h1>
          <h1
            className={styles["back-text"]}
            style={{
              transform: `translateX(${
                scrollPositionOfElement > 470
                  ? 80 * Math.max(500 - scrollPositionOfElement, 0)
                  : 800
              }px)`,
            }}
          >
            & Co-curricular
          </h1>
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

const data = {
  Experiences: [
    {
      at: "ShellBeeHaken Ltd.",
      pos: "Intern Software Engineer",
      from: "February 2023",
      to: "July 2023",
      images: [""],
      logo: "",
    },
    {
      at: "ShellBeeHaken Ltd.",
      pos: "Associate Software Engineer",
      from: "July 2023",
      to: "Current",
      images: [""],
      logo: "",
    },
  ],
  //   SJ Innovation Hackathon
  // - Got Innovative Idea prize in Medical Category. 7 Oct’ 21
  // BdApps National Hackathon 2022
  // - 1st place Regional Round 3: Sylhet out of 100+ teams. Aug’ 22
  // Hack NSU 2022
  // - 5th place in NSU ACM Student Chapter Hackathon. Nov’ 21
  Achievements: [
    {
      at: "SJ Innovation Hackathon",
      from: "Oct 2021",
      pos: "Innovative Idea prize in Medical Category",
      images: [],
    },
    {
      at: "Hack NSU 2022",
      from: "Nov’ 2021",
      pos: "5th place",
    },
    {
      at: "BdApps National Hackathon 2022",
      from: "Aug’ 2022",
      pos: "1st place Regional Round 3: Sylhet",
    },
    {
      at: "Idea Competition of Mobile App Game & Job Festival 2023",
      from: "March 2023",
      pos: "1st Runner Up",
    },
  ],
};
