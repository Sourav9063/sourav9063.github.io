
import React, { useRef, useState } from 'react'
import style from './Landing.module.css'
import { useEffect } from 'react';

export default function Landing() {

    const left = useRef();
    const fancy = useRef();

    let quote = {
        fancy: "Design ",
        normal: "is intelligence made visible."
    }


    let quotes = [
        {
            fancy: "Design ",
            normal: "is intelligence made visible."
        },
        {
            fancy: "Engineers ",
            normal: "turn dreams into reality."
        },
        {
            fancy: "Design ",
            normal: "is intelligence made visible."
        },
        {
            fancy: "Design ",
            normal: "is intelligence made visible."
        },
        {
            fancy: "Design ",
            normal: "is intelligence made visible."
        },
    ]

    const mouseMove = (e) => {

        // console.log(e.clientX / window.innerWidth * 100);
        // console.log(props.scrollPercent);

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
    // const [scrollPercent, setScrollPercent] = useState(props.scrollPercent);


    // useEffect(() => {

    //     console.log(props.scrollPercent);
    //     return () => {

    //     }
    // }, [scrollPercent])



    return (
        <div className={`${style.body}`}

            onMouseMove={mouseMove}

            onTouchMove={(event) => mouseMove(event.touches[0])}

        >

            <div className={`${style.side} ${style.left_side}`} ref={left} style={{ backgroundSize: `${window.innerWidth}px` }}>

                <h2 className={`${style.title}`}>
                    <span className={`${style.fancy}`} ref={fancy}>{quotes[1].fancy} </span>
                    {quotes[1].normal}
                </h2>
            </div>
            <div className={`${style.side} ${style.right_side}`}>
                <h2 className={`${style.title}`}>
                    <span className={`${style.fancy}`}>{quotes[1].fancy} </span>
                    {quotes[1].normal}
                </h2>
            </div>



        </div >
    )
}
