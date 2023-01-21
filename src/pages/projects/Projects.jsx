import React, { useEffect, useRef } from 'react'
import style from './Projects.module.css'
import svg from './pattern.svg'
import svg1 from './pattern1.svg'
import svg2 from './pattern4.svg'
import svg3 from './pattern3.svg'
import ProjectModal from '../../global/components/projectModal/ProjectModal'

import { subscribe, unsubscribe } from '../../global/helper/customEvent/CustomEvent'

let pattern = Math.floor(Math.random() * 4) + 1;

export default function Projects() {

    const gallery = useRef()

    const onMouseMoveFunc = (e) => {
        // console.log(e.clientX, e.clientY)
        const mouseX = e.clientX,
            mouseY = e.clientY;
        const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;

        const maxX = gallery.current.offsetWidth - window.innerWidth,
            maxY = gallery.current.offsetHeight - window.innerHeight;

        const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;

        gallery.current.animate({
            transform: `translate(${panX}px, ${panY}px)`
        }, {

            duration: 5000,
            fill: "forwards",
            easing: "ease"
        })
    }

    // let hallManagement = 0;
    const [scrollPosition, setScrollPosition] = React.useState(-24 * 30);
    const [showModal, setShowModal] = React.useState(false);
    // let pattern;
    // let pattern = useRef(1);
    // const [pattern, setPattern] = React.useState(-1);



    
    useEffect(() => {
    //   pattern === -1 && setPattern( (state) => (Math.floor(Math.random() * 4)));

    
        subscribe("scroll", (e) => {
            const { scrollPositionOfElement } = e.detail;
            // console.log(scrollPositionOfElement);
            
            if (scrollPositionOfElement > 175 && scrollPositionOfElement < 275) {

             const   scrollPositionOfElementTmp =scrollPositionOfElement- 200;
                if (scrollPositionOfElementTmp > 10) {
                // setScrollPosition(700);
                setScrollPosition((state) => (scrollPositionOfElementTmp) * 30);
            }
            else if (scrollPositionOfElementTmp < -10) {
                // setScrollPosition(-700);
                setScrollPosition((state) => (scrollPositionOfElementTmp) * 30);
            }
            else {
                setScrollPosition((state) => 0);
            }

}

        })

        return () => {
            unsubscribe("scroll")
        }
    }, [])


    return (
        <div className={`${style.body}`}>
            {/* <div style={{ position: "fixed", top: "0px", left: "0px", color: "white", zIndex: "100" }}>{scrollPosition}</div> */}
            {/* {console.log(pattern.current)} */}
            <button onClick={() => { 
                setShowModal(true)
                console.log(showModal)
             }} >showModal</button>
        {showModal && <ProjectModal setShowModal={setShowModal} ></ProjectModal>}
            <div className={`${style.gallery}`} ref={gallery}
                style={{ backgroundImage: `url(${pattern === 1 ? svg : pattern === 2 ? svg1 : pattern === 3 ? svg2 : svg3})` }}
                onTouchMove={(event) => onMouseMoveFunc(event.touches[0])}
                onMouseMove={(event) => {
                    onMouseMoveFunc(event);
                }}
            >
                {/* Hall management */}

                <div className={`${style.tile} ${style.hall1}`} onClick={() => {
                    window.open("https://sourav9063.github.io/hall_management_rf/", '_blank')
                }}
                    style={{ transform: `translateX(${scrollPosition}px)` }}
                >
                    <div className={style.title}>Hall Management</div>
                    <img alt="Hall Management " src="https://user-images.githubusercontent.com/53114581/202853827-47a44716-f0b2-4c0c-b831-5b651e6c8688.jpg" />
                </div>
                <div className={`${style.tile} ${style.hall2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/hall_management_rf", '_blank')
                }} >
                    <img alt='Hall Management' src="https://user-images.githubusercontent.com/53114581/202853980-62389a23-3935-4666-9a00-8a5824fb4151.jpg" />
                </div>


                {/* uBookSharing */}
                <div className={`${style.tile} ${style.uBook1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/uBookSharing", '_blank')
                }}
                    style={{ transform: `translateY(${-1 * scrollPosition}px)` }}

                >
                    <div className={style.title} >uBookSharing</div>
                    {/* <img alt="uBook" src="https://user-images.githubusercontent.com/53114581/118112856-61972c00-b407-11eb-8004-1f516bbf91f4.png" /> */}

                    <video muted
                        onMouseOver={event => {
                            event.target.play();
                        }}
                        onMouseOut={event => event.target.pause()}

                        onPointerUp={event => event.target.pause()}
                        onPointerEnter={event => event.target.play()}
                        onPointerLeave={event => event.target.pause()}

                        poster="https://user-images.githubusercontent.com/53114581/118112856-61972c00-b407-11eb-8004-1f516bbf91f4.png"

                        src="https://user-images.githubusercontent.com/53114581/208036045-c13bdbf0-aacb-4b09-af9b-c8f61685230a.mp4" autoPlay loop ></video>

                </div>

                <div className={`${style.tile} ${style.uBook2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/uBookSharing", '_blank')
                }}
                    style={{ transform: `translateX(${-1.3 * scrollPosition}px) rotate(10deg)` }}

                >
                    <img alt='uBookSharing' src="https://user-images.githubusercontent.com/53114581/118114615-a91eb780-b409-11eb-8f46-851c73e3d8fd.png" />
                </div>
                <div className={`${style.tile} ${style.uBook3}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/uBookSharing", '_blank')
                }}
                    style={{ transform: `translateY(${-1.4 * scrollPosition}px) rotate(-10deg)` }}

                >
                    <img alt='uBookSharing' src="https://user-images.githubusercontent.com/53114581/118113292-ebdf9000-b407-11eb-9a5d-d1db4f23ce4d.png" />
                </div>

                {/* Obstacle Detection */}
                <div className={`${style.tile} ${style.obstacle1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/obstacles_detection", '_blank')
                }}
                    style={{ transform: `translateX(${-1 * scrollPosition}px)` }}

                >
                    <div className={style.title}>Obstacle Detection</div>
                    <img alt='obstacle' src="https://user-images.githubusercontent.com/53114581/201062121-35f042c7-a4e4-4fe6-9100-8a0ba1ec8b8f.jpg" />
                </div>

                <div className={`${style.tile} ${style.obstacle2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/obstacles_detection", '_blank')
                }}
                    style={{ transform: `translateX(${-1.4 * scrollPosition}px) rotate(10deg)` }}

                >
                    <img alt="obstacle" src="https://user-images.githubusercontent.com/53114581/201062149-c11e154a-5f92-45c1-bf19-c868e4d543a9.jpg" />
                </div>

                {/* FTP Searcher */}
                <div className={`${style.tile} ${style.ftp}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/ftp_searcher", '_blank')
                }}
                    style={{ transform: `translateX(${1 * scrollPosition}px) ` }}
                >
                    <div className={style.title}>FTP Searcher</div>
                    <img alt='obstacle' src="https://user-images.githubusercontent.com/53114581/190019523-8446eb43-4751-446c-8505-547fe58f3ff6.jpg" />

                </div>
                {/* Hungry Camper */}
                <div className={`${style.tile} ${style.hungry}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Hungry-Camper-scripts", '_blank')
                }}
                    style={{ transform: `translateX(${1 * scrollPosition}px) translateY(${-1 * scrollPosition}px) ` }}
                >
                    <div className={style.title}>Hungry Camper</div>
                    <img alt='hungry camper' src="https://user-images.githubusercontent.com/53114581/148637656-447cdf3b-5267-4e43-99aa-7fb7237184b9.png" />
                </div>
                <div className={`${style.tile} ${style.hungry1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Hungry-Camper-scripts", '_blank')
                }}>
                    <img alt='hungry Camper' src="https://user-images.githubusercontent.com/53114581/148637660-776055e8-1fc3-4f40-84f8-3fdc2cde4e65.png" />
                </div>
                <div className={`${style.tile} ${style.hungry2}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Hungry-Camper-scripts", '_blank')
                }}>
                    <img alt='Hungry Camper' src="https://user-images.githubusercontent.com/53114581/148637665-3e0ccf21-cb50-4c7d-99b3-51d9947b8de3.png" />
                </div>

                {/* News Blog */}
                <div className={`${style.tile} ${style.blog}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Blog-CRUD-by-Nodejs", '_blank')
                }}
                    style={{ transform: `translateY(${1.2 * scrollPosition}px) rotate(-10deg)` }}
                >
                    <div className={style.title}>News Blog</div>
                    <img alt='News Blogs' src="https://user-images.githubusercontent.com/53114581/202858064-3a594637-0e01-4142-a17b-211b5866d448.jpg" />
                </div>
                <div className={`${style.tile} ${style.blog1}`} onClick={() => {
                    window.open("https://github.com/Sourav9063/Blog-CRUD-by-Nodejs", '_blank')
                }}
                    style={{ transform: `translateX(${1.2 * scrollPosition}px) translateY(${1 * scrollPosition}px)  rotate(10deg)` }}

                >
                    <img alt='News Blogs' src="https://user-images.githubusercontent.com/53114581/202858172-af9b10d7-1c8f-4e56-857b-86be59085c47.jpg" />
                </div>


                {/* Touch The Ball */}
                <div className={`${style.tile} ${style.touch}`} onClick={() => {
                    window.open("https://sourav9063.github.io/Touch-The-Ball/", '_blank')
                }}
                    style={{ transform: `translateX(${1.2 * scrollPosition}px) translateY(${1 * scrollPosition}px) ` }}

                >
                    <div className={style.title}>Touch The Ball</div>
                    <img alt='Touch the ball' src="https://user-images.githubusercontent.com/53114581/202858785-0711683e-262e-47ac-9822-f5383d9440de.jpg" />
                </div>


                <div className={`${style.name} trans_header text_not_selectable`}>Projects</div>
            </div >
        </div>

    )
}

// let tmpup = 75;
// let tmpdown = 75;
// let tmp = 0;

                // if (tmp + 1 < scrollPositionOfElement) {
                //     tmp = scrollPositionOfElement;
                //     tmpup = true;
                //     tmpdown = false;
                // }
                // else if (tmp - 1 > scrollPositionOfElement) {
                //     tmp = scrollPositionOfElement;
                //     tmpup = false;
                //     tmpdown = true;
                // }
    
                // if (tmpup) {
                //     if ((scrollPositionOfElement <= 100 || scrollPositionOfElement >= 120))
                //         setScrollPosition((state) => (scrollPositionOfElement - 100) * 30);
                // }
                // else {
                //     // setScrollPosition((scrollPositionOfElement - 100) * 30);
                //     setScrollPosition((state) => (scrollPositionOfElement - 100) * 30);
    
                // }