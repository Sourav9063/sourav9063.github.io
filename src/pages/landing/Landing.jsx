
import React, { useEffect, useRef } from 'react'
import style from './Landing.module.css'

export default function Landing(props) {

    const left = useRef();
    const fancy = useRef();


    const mouseMove = (e) => {

        console.log(e.clientX / window.innerWidth * 100);

        let leftVal = `${e.clientX / window.innerWidth * 100}%`;
        left.current.animate({
            width: leftVal
        }, {
            duration: 1000,
            fill: "forwards",
            easing: "ease"
        })

        fancy.current.animate({
            backgroundPosition: leftVal
        }, {
            duration: 1000,
            fill: "forwards",
            easing: "ease"
        })


    }


    return (
        <div className={`${style.body}`}

            onMouseMove={mouseMove}

            onTouchMove={(event) => mouseMove(event.touches[0])}

        >

            <div className={`${style.side} ${style.left_side}`} ref={left} style={{ backgroundSize: `${window.innerWidth}px` }}>

                <h2 className={`${style.title}`}>
                    <span className={`${style.fancy}`} ref={fancy}>Design </span>
                    is intelligence made visible.
                </h2>
            </div>
            <div className={`${style.side} ${style.right_side}`}>
                <h2 className={`${style.title}`}>
                    <span className={`${style.fancy}`}>Design </span>
                    is intelligence made visible.
                </h2>
            </div>



        </div >
    )
}
