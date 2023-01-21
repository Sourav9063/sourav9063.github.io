import React from 'react'
import style from './Skills.module.css'
import "../../global/css/global.css"
import { subscribe, unsubscribe } from "../../global/helper/customEvent/CustomEvent"

export default function Skills() {

    const cardsRef = React.useRef();

    // let rect;
    let allCards = [];

    React.useEffect(() => {

        allCards = [...cardsRef.current.children];

        subscribe("scroll", (e) => {
            const { scrollPositionOfElement } = e.detail;
            // console.log(scrollPositionOfElement - scrollConst);


            if (scrollPositionOfElement > 250 && scrollPositionOfElement < 350) {
                for (let i = 0; i < allCards.length; i++) {
                    allCards[i].animate(
                        {
                            transform: `translateX(${(scrollPositionOfElement - 300)}%)`,
                            // boxShadow: `-${clamp(scrollPositionOfElement - scrollConst, 2, 20)}px ${clamp(scrollPositionOfElement - scrollConst, 0, 20)}px 25px 5px rgba(8, 5, 25, 0.7)`
                        },
                        {
                            duration: 300,
                            fill: "forwards",
                            easing: "ease",
                            delay: 320 * i
                        }

                    );

                }

            }

        })

        return () => {
            unsubscribe("scroll");
        }

    }, [])



    return (
        <div className={`${style.body}`} >

            <div className={`${style.cards}`}
                ref={cardsRef}
                onMouseMove={(event) => {
                    // console.dir(style)
                    // let x = event.clientX / event.target.clientWidth * 100;
                    // let y = event.clientY / event.target.clientHeight * 100;

                    // event.target.style.setProperty('--mouse-x', x + '%');
                    // event.target.style.setProperty('--mouse-y', y + '%');
                    // console.dir(cardsRef);
                    // for (const card in allCards) {
                    //     console.log(card);
                    // }
                    // console.log(allCards[0]);


                    for (const card of allCards) {

                        // allCards[i].style.setProperty('--mouse-x', event.clientX / event.target.clientWidth * 100 + '%');
                        // allCards[i].style.setProperty('--mouse-y', event.clientY / event.target.clientHeight * 100 + '%');

                        const rect = card.getBoundingClientRect();
                        const x = event.clientX - rect.left;
                        const y = event.clientY - rect.top;
                        card.style.setProperty('--mouse-x', x + 'px');
                        card.style.setProperty('--mouse-y', y + 'px');
                    }



                }


                }

                onTouchMove={(event) => {
                    for (const card of allCards) {

                        const rect = card.getBoundingClientRect();
                        const x = event.touches[0].clientX - rect.left;
                        const y = event.touches[0].clientY - rect.top;
                        card.style.setProperty('--mouse-x', x + 'px');
                        card.style.setProperty('--mouse-y', y + 'px');
                    }

                }}

            >
                <div className={`${style.card} ${style.col13_row11}`}>
                    <div className={`${style.card_content}`}>
                        <div className={`${style.card_image}`}>
                            <i className="fa-duotone fa-apartment"></i>
                        </div>
                        <div className={`${style.card_info_wrapper}`}>
                            <div className={`${style.card_info}`}>
                                <i className="fa-duotone fa-apartment"></i>
                                <div className={`${style.card_info_title}`}>
                                    <h3>Problem Solving</h3>
                                    <h4>- Solved 700+ competitive programming problems in various online judges using C++ and Python.<br></br>
                                        - Have intermediate-level Algorithm and Data Structure knowledge.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} ${style.col25_row22}`}>
                    <div className={`${style.card_content}`}>
                        <div className={`${style.card_image}`}>
                            <i className="fa-duotone fa-unicorn"></i>
                        </div>
                        <div className={`${style.card_info_wrapper}`}>
                            <div className={`${style.card_info}`}>
                                <i className="fa-duotone fa-unicorn"></i>
                                <div className={`${style.card_info_title}`}>
                                    <h3>UI and UX enthusiasm</h3>
                                    <h4>- Love to learn new UI design trends. Likes to experiment with different design approaches i.e Glassmorphism, Neumorphism, Illustrations, and animations like Rive, Lottie, Framer-motion, etc.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} ${style.col11_row23}`}>
                    <div className={`${style.card_content}`}>
                        <div className={`${style.card_image}`}>
                            <i className="fa-duotone fa-blender-phone"></i>
                        </div>
                        <div className={`${style.card_info_wrapper}`}>
                            <div className={`${style.card_info}`}>
                                <i className="fa-duotone fa-blender-phone"></i>
                                <div className={`${style.card_info_title}`}>
                                    <h3>Framework & Library</h3>
                                    <h4>- ASP.NET <br></br> - Android Studio <br></br> - ReactJS <br></br> - ExpressJS <br></br> - NodeJS <br></br> - Flutter <br></br> - Arduino <br></br> - MySQL <br></br> - Firebase <br></br>
                                        - Git & GitHub <br></br> - Docker <br></br> - Unity</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} ${style.col45_row11}`}>
                    <div className={`${style.card_content}`}>
                        <div className={`${style.card_image}`}>
                            <i className="fa-duotone fa-person-to-portal"></i>
                        </div>
                        <div className={`${style.card_info_wrapper}`}>
                            <div className={`${style.card_info}`}>
                                <i className="fa-duotone fa-person-to-portal"></i>
                                <div className={`${style.card_info_title}`}>
                                    <h3>Programming Languages</h3>
                                    <h4>- C++, C#, Java, Python, JavaScript(HTML,CSS), Dart, SQL, LATEX
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} ${style.col23_row33}`}>
                    <div className={`${style.card_content}`}>
                        <div className={`${style.card_image}`}>
                            <i className="fa-duotone fa-person-from-portal"></i>
                        </div>
                        <div className={`${style.card_info_wrapper}`}>
                            <div className={`${style.card_info}`}>
                                <i className="fa-duotone fa-person-from-portal"></i>
                                <div className={`${style.card_info_title}`}>
                                    <h3>Database design</h3>
                                    <h4>- Have a grasp on the path of Requirement analysis to Database design.<br></br>
                                        - Worked with both SQL and NoSQL databases</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.card} ${style.col34_row33}`}>
                    <div className={`${style.card_content}`}>
                        <div className={`${style.card_image}`}>
                            <i className="fa-duotone fa-otter"></i>
                        </div>
                        <div className={`${style.card_info_wrapper}`}>
                            <div className={`${style.card_info}`}>
                                <i className="fa-duotone fa-otter"></i>
                                <div className={`${style.card_info_title}`}>
                                    <h3>Design Pattern implementation</h3>
                                    <h4>- Familiar with different types of design patterns and refactoring processes. <br></br>
                                        - Loves to organize code for future use.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`trans_header ${style.header}`}>Skills</div>

        </div>
    )
}

const clamp = (num, min, max) => Math.max(min, Math.min(num, max));



// body
// :
// "Skills_body__8wXL7"
// card
// :
// "Skills_card__YPqNg"
// card-content
// :
// "Skills_card-content__2fjz0"
// card-image
// :
// "Skills_card-image__xY8zS"
// card-info
// :
// "Skills_card-info__ayHvX"
// card-info-title
// :
// "Skills_card-info-title__fIHUb"
// card-info-wrapper
// :
// "Skills_card-info-wrapper__FvpzI"
// cards
// :
// "Skills_cards__J0Lwh"