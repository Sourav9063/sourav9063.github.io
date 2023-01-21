import React from 'react'
import style from './ProjectModal.module.css'
import GlassDiv from '../glassDiv/GlassDiv'

export default function ProjectModal({ setShowModal }) {
    return (
        <div className={`${style.outer}`} onClick={() => {
            setShowModal(false)
        }}  >

            <GlassDiv className={`${style.inner}`} > <h1>Project Modal</h1> </GlassDiv>

        </div>
    )
}
