import { React, useRef, useState, useEffect } from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Landing from "../landing/Landing";

import style from "./Home.module.css";
import Skills from "../skills/Skills";
import { publish } from "../../global/helper/customEvent/CustomEvent";
import Contacts from "../contacts/Contacts";
import Stars from "../stars/stars";

export default function Home() {
  const projects = useRef();
  const landing = useRef();
  const [, setScrollPositionOfElement] = useState(0);
  // let scrollPositionOfElement = 0;
  let tmp2 = 0;

  // useEffect(() => {
  //     // publish("project", { scrollPositionOfElement: 30 })

  //     return () => {

  //     }
  // }, [])

  return (
    <div className={style.container}>
      <section id="landing" ref={landing}>
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects" ref={projects}>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Stars />
      </section>
      <section>
        <Contacts />
      </section>
    </div>
  );
}

const clamp = (num, min, max) => Math.max(min, Math.min(num, max));
