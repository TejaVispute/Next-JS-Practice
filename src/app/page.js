'use client'
import Image from 'next/image'
import custom from './custom.module.css'
import other from "./other.module.css"
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <main className={custom.main}>
      <h1 className={other.box}>This is home page </h1>
      <Link href="/login">Go to login</Link>
      <Link href="/about">Go to About</Link>
      <div>
        <button onClick={() => router.push("/login")}>Navigate</button>
      </div>
      <br />
      <br />

      <Link href="/productlist">Go To Product page</Link>
    </main>
  )
}
