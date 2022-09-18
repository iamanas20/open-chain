import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components'
import { Benefits } from '../components/Benefits'
import { HeroSection } from '../components/HeroSection'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>OpenChain — Decentralized platform for developers</title>
        <meta name="description" content="Decentralized platform for developers" />
        <link rel="icon" href="/openchain-logo.svg" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <Benefits />
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Home;