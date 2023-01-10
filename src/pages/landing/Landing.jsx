
import React, { useRef } from 'react'
import style from './Landing.module.css'

import headR from './headRS1.png';
import headL from './headLS1.png';
import code from './code.jpg';
import design from './design.jpg';


export default function Landing() {

    const left = useRef();
    const fancy = useRef();


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
                {/* <img className={`${style.headL}`} src={"https://user-images.githubusercontent.com/53114581/211598847-c8db40bb-b1d9-4da7-b234-4fe4b7fa89a2.png"} alt="headL" /> */}
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
                {/* <img className={`${style.headR}`} src={"https://user-images.githubusercontent.com/53114581/211598601-821b4a48-0539-4a16-a884-23f052f7ad43.png"} alt="headR" /> */}
                <img className={`${style.headR}`} src={headR} alt="headR" />
                <div className={`${style.design}`} style={{ backgroundImage: ` url(${design})` }}></div>


            </div>




        </div >
    )
}


// let quote = {
//     fancy: "Design ",
//     normal: "is intelligence made visible."
// }


// let quotes = [
//     {
//         fancy: "Design ",
//         normal: "is intelligence made visible."
//     },
//     {
//         fancy: "Engineers ",
//         normal: "turn dreams into reality!"
//     },
//     {
//         fancy: "Design ",
//         normal: "is intelligence made visible."
//     },
//     {
//         fancy: "Design ",
//         normal: "is intelligence made visible."
//     },
//     {
//         fancy: "Design ",
//         normal: "is intelligence made visible."
//     },
// ]