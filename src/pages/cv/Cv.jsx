import React from "react";
import style from "./Cv.module.css";

export default function Cv() {
  return (
    <div className={`${style.body}`}>
      {/* <embed src="assets/pdf/RESUME.pdf" width="70%" height="110%"

            /> */}

      <iframe
        className={`${style.cv}`}
        src="assets/pdf/RESUME.pdf"
        type="application/pdf"
        title="CV"
      ></iframe>
      <div className={`${style.alternative}`}>
        <p>
          Alternative link to
          <a target='_blank' rel='noreferrer' href="https://github.com/Sourav9063/CV/blob/main/RESUME.pdf">
            {" "}
            view the RESUME.
          </a>
        </p>
        <p>
          <a href="assets/pdf/RESUME.pdf" download="SouravAhmedResume.pdf">
            Click here
          </a>{" "}
          to download the RESUME.
        </p>
      </div>
    </div>
  );
}
