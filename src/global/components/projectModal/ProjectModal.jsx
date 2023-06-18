import React from "react";
import style from "./ProjectModal.module.css";
import GlassDiv from "../glassDiv/GlassDiv";

export default function ProjectModal({ setShowModal, selectedProject }) {
  return (
    <div
      className={`${style.outer}`}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <GlassDiv className={`${style.inner}`}>
        <div className={`${style.main}`}>
          <section className={style.left}>
            <h1>{selectedProject.title}</h1>

            <div className={`${style.linksDiv}`}>
              <a
                href={selectedProject.links[0]}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  className={style.svgGitHub}
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              {selectedProject.links[1] && (
                <a
                  href={selectedProject.links[1]}
                  rel="noreferrer"
                  target="_blank"
                >
                  {/* <svg className={style.svgGitHub} xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="currentColor" viewBox="0 0 16 16"> <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" fill="white"></path> <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" fill="white"></path> </svg> */}
                  <svg
                    className={style.svgGitHub}
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9479 9.05232C18.8652 11.9727 18.8252 16.6548 15.9655 19.5303C15.9601 19.5362 15.9537 19.5426 15.9479 19.5484L12.6666 22.8297C9.77258 25.7237 5.06414 25.7233 2.17053 22.8297C-0.723511 19.9361 -0.723511 15.2271 2.17053 12.3336L3.98235 10.5218C4.46282 10.0413 5.29026 10.3606 5.31506 11.0396C5.3467 11.905 5.50188 12.7743 5.78821 13.6139C5.88518 13.8982 5.81589 14.2126 5.60349 14.425L4.96448 15.064C3.59602 16.4325 3.5531 18.6607 4.90808 20.0426C6.27644 21.438 8.52556 21.4463 9.90442 20.0675L13.1857 16.7867C14.5622 15.4102 14.5564 13.1853 13.1857 11.8145C13.005 11.6342 12.8229 11.494 12.6807 11.3961C12.5801 11.327 12.4971 11.2354 12.4382 11.1285C12.3793 11.0217 12.3462 10.9025 12.3415 10.7806C12.3222 10.2646 12.505 9.73293 12.9127 9.32522L13.9407 8.29714C14.2103 8.02756 14.6332 7.99446 14.9458 8.21262C15.3038 8.4626 15.6391 8.74358 15.9479 9.05232ZM22.8295 2.17039C19.9359 -0.723267 15.2274 -0.723657 12.3334 2.17039L9.05212 5.45164C9.04626 5.4575 9.03992 5.46384 9.03455 5.4697C6.17488 8.34529 6.13479 13.0274 9.05212 15.9477C9.36085 16.2565 9.69615 16.5374 10.0541 16.7874C10.3667 17.0055 10.7897 16.9724 11.0592 16.7029L12.0872 15.6748C12.4949 15.2671 12.6778 14.7354 12.6584 14.2194C12.6537 14.0975 12.6206 13.9783 12.5618 13.8715C12.5029 13.7646 12.4198 13.673 12.3192 13.6039C12.177 13.506 11.995 13.3658 11.8143 13.1855C10.4435 11.8147 10.4378 9.58982 11.8143 8.21331L15.0955 4.93254C16.4744 3.55369 18.7235 3.56199 20.0919 4.95745C21.4468 6.33928 21.404 8.56751 20.0355 9.93596L19.3965 10.575C19.1841 10.7874 19.1148 11.1018 19.2117 11.3861C19.4981 12.2257 19.6532 13.095 19.6849 13.9604C19.7097 14.6394 20.5371 14.9587 21.0176 14.4782L22.8294 12.6664C25.7235 9.77292 25.7235 5.06394 22.8295 2.17039Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </a>
              )}
            </div>
            {selectedProject.description !== "" && (
              <p className={style.description}>{selectedProject.description}</p>
            )}
            <ul className={style.tech}>
              {selectedProject.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </section>
          <div className={`${style.hr}`} />
          <section className={style.right}>
            <div className={`${style.imgContainer}`}>
              {selectedProject.images.map((img, index) => (
                <img src={img} alt={selectedProject.title} key={index} />
              ))}
            </div>
          </section>
        </div>
      </GlassDiv>
    </div>
  );
}
