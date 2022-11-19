import React from 'react'
import style from './Cv.module.css'

export default function Cv() {
    return (
        <div className={`${style.body}`} >
            <embed src="assets/pdf/Sourav_Ahmed_f.pdf" width="70%" height="110%"
            />
        </div>
    )
}
