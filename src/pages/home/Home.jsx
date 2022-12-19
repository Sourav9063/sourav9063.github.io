import { React, useRef, useState } from 'react'
import About from '../about/About'
import Projects from '../projects/Projects'
import Landing from '../landing/Landing'

import style from './Home.module.css'

export default function Home() {

    const projects = useRef();
    const landing = useRef();
    const [scrollPositionOfElement, setScrollPositionOfElement] = useState(0);
    // let scrollPositionOfElement = 0;


    return (
        <div className={style.container}
            onScroll={(event) => {
                const setScrollPositionOfElementTmp = landing.current.getBoundingClientRect().top / (window.innerHeight * .99) * 100 * -1;

                // setScrollPositionOfElement(setScrollPositionOfElementTmp);
                // console.log(scrollPositionOfElement);
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

            }
            }

            style={{ position: "relative", backgroundColor: "black" }}

        >
            <section id='landing' ref={landing} >
                <Landing />
            </section>
            <section id='projects' ref={projects}>
                <Projects />
            </section>
            <section id='about'>
                <About />
            </section>
        </div >

    )
}


const clamp = (num, min, max) => Math.max(min, Math.min(num, max));

