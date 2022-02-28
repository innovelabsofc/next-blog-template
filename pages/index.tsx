import type { NextPage } from 'next'
import Head from 'next/head'
import Wrapper from '../components/Wrapper'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Burrow | Where Fawaz puts out ideas</title>
        <meta name="description" content="Burrow is Fawaz's personal site where he writes about tech, religion and life in general. The name is inspired from th Weasley's cozy home in Harry Potter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main className={styles .main}>
        <p>This page is currently under construction. Checkout my <strong><Link href="/blog">blog</Link></strong></p>
        <p>To get in touch, contact me via <a href="https://www.linkedin.com/in/fawazsullia/" target="_blank" rel="noreferrer"><u>LinkedIn</u></a></p>
        </main>
      </Wrapper>
      
    </div>
  )
}

export default Home
