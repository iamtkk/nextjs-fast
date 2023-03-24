import Head from 'next/head'
import { useState, useEffect } from 'react'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{time}</h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}
