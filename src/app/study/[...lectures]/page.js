"use client"
import React from 'react'


const Lectures = ({ params }) => {
    console.log(params.lectures);
    return (
        <div>
            <h1>Lecture 1 of our college</h1>
        </div>
    )
}

export default Lectures