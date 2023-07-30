"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Login() {
  const router = useRouter();


  const naviage = (route) => {
    return router.push(route)
  }
  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <br />
      <button onClick={() => naviage("/login/loginforstudent")}>Go To StudentPage</button>
      <br />
      <br />
      <button onClick={() => naviage("/login/loginforcollage")}>Go to Collage</button>

    </div>
  )
}

export default Login