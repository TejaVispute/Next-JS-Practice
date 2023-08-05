"use client"
import React from 'react'

const ShowDetails = ({price}) => {
    console.log(price);
    return (
        <div>
            <button onClick={() => alert(`product price is ${price}`)}>Get Price</button>
        </div>
    )
}

export default ShowDetails