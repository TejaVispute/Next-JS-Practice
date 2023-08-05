"use client"
import React, { useState } from 'react'
import style from "./practice.module.css"
const Practice = () => {
    let [color, setColor] = useState(false)
    return (
        <div>
            <h1 className={!color ? style.red : style.green}>Practice Route</h1>
            <button onClick={() => setColor(prev => !prev)}>change color</button>
            <h2 id={style.orange}>This is Id styling</h2>
        </div>
    )
}

export default Practice