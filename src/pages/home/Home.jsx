import { React, useRef } from 'react'
import About from '../about/About'
import Projects from '../projects/Projects'
import Landing from '../landing/Landing'

import style from './Home.module.css'

export default function Home() {

    const projects = useRef();
    const landing = useRef();



    return (
        <div className={style.container}
            onScroll={(event) => {

                console.log(landing.current.getBoundingClientRect().top / (window.innerHeight * .99) * 100);

            }
            }

        >
            <section id='landing' ref={landing}>
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
