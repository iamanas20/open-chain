import Image from 'next/image';
import styles from '../styles/HeroSection.module.scss';
import { HeroArt } from './HeroArt';

export function HeroSection () {

  function joinWaitlist() {
    // Decentralized waitlist smart contract calling (?)
    // Maybe centralized waitlist service (?)
  }

  return (
    <section className={styles.heroSection}>
      <div className={styles.leftPart}>
        <h1 className={styles.heading}>
          <span>Decentralized</span> platform for developers
        </h1>
        <p className={styles.mainParagraph}>
          OpenChain is a decentralized hub for developers on web3 powered by the blockchain to bring people and their assets and knowledge together. Ask questions about your issues and pay people crypto to solve them. Create and sell CSS art as NFTs. Talk topics as a community. And more.
        </p>
        <button
          className={styles.button}
          onClick={joinWaitlist}
        >
          Join the waitlist
        </button>
      </div>
      <HeroArt />
    </section>
  )
}