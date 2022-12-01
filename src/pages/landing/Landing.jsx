
import React, { useEffect, useRef } from 'react'
import style from './Landing.module.css'

export default function Landing(props) {

    const body = useRef();

    useEffect(() => {


        console.log(body.current.getBoundingClientRect())
        return () => {

        }
    }, [])


    return (
        <div className={`${style.body}`}
            onScroll={(event) => {

                console.log(body.current.getBoundingClientRect())
            }
            }

            ref={body}

        >

            <h1   >Hii</h1>
        </div>
    )
}
