import { React } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Landing from "../landing/Landing";

import style from "./Home.module.css";
import Skills from "../skills/Skills";

import Contacts from "../contacts/Contacts";
import Stars from "../stars/stars";
import Experience from "../experience/Experience";
import Links from "../../global/components/links/Links";
import GlobalProvider from "../../global/provider/GlobalProvider";

export default function Home() {
  return (
    <GlobalProvider>
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
        <section>
          <Experience />
        </section>
        <section>
          <Contacts />
        </section>
        <Links />
      </div>
    </GlobalProvider>
  );
}
