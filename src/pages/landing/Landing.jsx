
import React, { useRef, useState } from 'react'
import style from './Landing.module.css'
import { useEffect } from 'react';
import headR from './headRS.png';
import headL from './headLS.png';
import code from './code.jpg';
import design from './design.jpg';


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
            normal: "turn dreams into reality!"
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


    return (
        <div className={`${style.body}`}

            onMouseMove={mouseMove}

            onTouchMove={(event) => mouseMove(event.touches[0])}

        >

            <div className={`${style.side} ${style.left_side}`} ref={left} style={{ backgroundSize: `${window.innerWidth}px` }}>

                {/* <h2 className={`${style.title}`}>
                <span className={`${style.fancy}`} ref={fancy}>{"<Coders>"}</span>
                    {quotes[1].normal}
                </h2> */}
                <span className={`${style.title} ${style.fancy}`} ref={fancy}>{"{Coder}"}</span>
                <div className={`${style.middle}`}>I enjoy programming a lot!</div>
                <img className={`${style.headL}`} src={headL} alt="headL" />
                <div className={`${style.code}`} style={{ backgroundImage: ` url(${code})` }}></div>
            </div>
            <div className={`${style.side} ${style.right_side}`}>
                {/* <h2 className={`${style.title}`}>
                <span className={`${style.fancy}`}>{quotes[1].fancy} </span>
                    {quotes[1].normal}
                </h2> */}
                <span className={`${style.title} ${style.fancy}`}>{"<Designer>"} </span>
                <div className={`${style.middle}`}>I'm obsessed with designs!</div>
                <img className={`${style.headR}`} src={headR} alt="headL" />
                <div className={`${style.design}`} style={{ backgroundImage: ` url(${design})` }}></div>


            </div>




        </div >
    )
}
