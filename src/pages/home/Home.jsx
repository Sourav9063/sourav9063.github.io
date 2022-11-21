import React from 'react'
import About from '../about/About'
import Projects from '../projects/Projects'

import style from './Home.module.css'

export default function Home() {
    return (
        <div className={style.container}>
            <section id='projects'>
                <Projects />
            </section>
            <section id='about'>
                <About />
            </section>
        </div >

    )
}
