import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

export function Navbar() {
  return (
    <header className={styles.header}>
      <Image src={'/openchain-logo.svg'} width="48" height="48"/>
      <div className={styles.logoText}>
        OpenChain
      </div>
      <div className={styles.rightLinks}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Governance
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Token
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Community
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </header>
  )
}