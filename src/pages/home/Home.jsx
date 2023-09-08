import { React, useRef, useState } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Landing from "../landing/Landing";

import style from "./Home.module.css";
import Skills from "../skills/Skills";

import Contacts from "../contacts/Contacts";
import Stars from "../stars/stars";
import Experience from "../experience/Experience";

export default function Home() {
  return (
    <div className={style.container}>
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Stars />
      </section>
      {/* <section>
        <Experience />
      </section> */}
      <section>
        <Contacts />
      </section>
    </div>
  );
}

const clamp = (num, min, max) => Math.max(min, Math.min(num, max));
