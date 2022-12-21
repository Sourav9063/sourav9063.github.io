import { React, useRef, useState, useEffect } from 'react'
import About from '../about/About'
import Projects from '../projects/Projects'
import Landing from '../landing/Landing'

import style from './Home.module.css'
import Skills from '../skills/Skills'
import { publish } from '../../global/helper/customEvent/CustomEvent'

export default function Home() {

    const projects = useRef();
    const landing = useRef();
    // const [scrollPositionOfElement, setScrollPositionOfElement] = useState(0);
    // let scrollPositionOfElement = 0;
    let tmp2 = 0;

    useEffect(() => {
        publish("project", { scrollPositionOfElement: 75 })


        return () => {

        }
    }, [])


    return (
        <div className={style.container}
            onScroll={(event) => {
                const setScrollPositionOfElementTmp = landing.current.getBoundingClientRect().top / (landing.current.getBoundingClientRect().height) * 100 * -1;

                // setScrollPositionOfElement(setScrollPositionOfElementTmp);
                // console.log(setScrollPositionOfElementTmp);
                // console.dir(event.target);
                //get the scroll position of the element in percentage
                // scrollPosition = event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight) * 100;
                // console.log(scrollPosition);
                // console.log((event.target.scrollHeight - event.target.clientHeight));
                // console.log(Math.max(0, Math.min(scrollPositionOfElement * .01, 1)));

                landing.current.style.opacity = `${Math.max(0.3, 1 - Math.min(setScrollPositionOfElementTmp * .01, 1))}`;

                // landing.current.style.transform = `translateX(${clamp(setScrollPositionOfElementTmp, 0, 100)}%)`;
                // change blur on scroll
                landing.current.style.filter = `blur(${clamp(setScrollPositionOfElementTmp * .20, 0, 20)}px)`;

                if (Math.abs(tmp2 - setScrollPositionOfElementTmp) > 1 || Math.ceil(setScrollPositionOfElementTmp) % 100 === 0) {
                    tmp2 = setScrollPositionOfElementTmp;
                    if (setScrollPositionOfElementTmp > 75 && setScrollPositionOfElementTmp < 175) {
                        publish("project", { scrollPositionOfElement: setScrollPositionOfElementTmp })
                    }


                    if (setScrollPositionOfElementTmp > 250) {
                        publish("about", { scrollPositionOfElement: setScrollPositionOfElementTmp })
                    }
                }
            }
            }

        // style={{ position: "relative", backgroundColor: "black" }}

        >
            <section id='landing' ref={landing}  >
                <Landing />
            </section>
            <section id='projects' ref={projects}>
                <Projects />
            </section>
            <section >
                <Skills />
            </section>
            <section id='about'>
                <About />
            </section>
        </div >

    )
}


const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

