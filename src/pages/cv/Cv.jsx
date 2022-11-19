import React from 'react'
import style from './Cv.module.css'

export default function Cv() {
    return (
        <div className={`${style.body}`} >
            {/* <embed src="assets/pdf/Sourav_Ahmed_f.pdf" width="70%" height="110%"

            /> */}

            <object data="assets/pdf/Sourav_Ahmed_f.pdf" type="application/pdf" width="70%" height="100%">
                <p>Alternative text - include a link <a href="https://github.com/Sourav9063/CV/blob/main/Sourav_Ahmed_f.pdf">to the PDF!</a></p>
            </object>
        </div>
    )
}
