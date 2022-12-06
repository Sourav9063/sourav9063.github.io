import React from 'react'
import style from './Cv.module.css'

export default function Cv() {
    return (
        <div className={`${style.body}`} >
            {/* <embed src="assets/pdf/Sourav_Ahmed_f.pdf" width="70%" height="110%"

            /> */}

            <object data="assets/pdf/Sourav_Ahmed_f.pdf" type="application/pdf" width="70%" height="100%">
                <div className={`${style.alternative}`}>
                    <p>Alternative link to<a href="https://github.com/Sourav9063/CV/blob/main/Sourav_Ahmed_f.pdf"> view the RESUME.</a></p>
                    <p><a href="assets/pdf/Sourav_Ahmed_f.pdf" download>Click here</a> to download the RESUME.</p>
                </div>
            </object>
        </div>
    )
}
