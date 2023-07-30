'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>This is home page </h1>
      <Link href="/login">Go to login</Link>
      <Link href="/about">Go to About</Link>
      <div>
        <button onClick={() => router.push("/login")}>Navigate</button>
      </div>
    </main>
  )
}
