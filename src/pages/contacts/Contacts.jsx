import React from 'react'
import style from './Contacts.module.css'
import { useRive } from '@rive-app/react-canvas';
import keyboard from "./keyboard.riv"

export default function Contacts() {

    const { RiveComponent, rive } = useRive({
        src: keyboard,
        autoplay: false,
    })


    return (
        <div className={`${style.body}`} >
            <RiveComponent className={`${style.rive}`}

                onMouseEnter={() => rive && rive.play()}
            />
        </div>
    )
}
