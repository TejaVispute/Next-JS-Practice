import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <>
            <h1>This is about page</h1>
            <Link href="/login">Go to login</Link>
            <Link href="/">Go to home</Link>
            <br />
            <br />
            <Link href="/about/aboutcollage">About College</Link>
        </>
    )
}

export default About