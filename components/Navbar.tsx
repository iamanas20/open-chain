import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import styles from '../styles/Navbar.module.scss';

const navlinks = [
  {
    name: 'Governance',
    link: "#",
  },
  {
    name: 'Dev Token',
    link: "#",
  },
  {
    name: 'Blog',
    link: "#",
  },
  {
    name: 'Community',
    link: "#",
  },
  {
    name: 'Twitter',
    link: "#",
  }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(
    function() {
      // disable scroll when menu is open
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const linksElements = useMemo(
    () => navlinks.map(
      (link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={link.name}
        >
          {link.name}
        </a>
      )
    ), [navlinks]
  );

  return (
    <header className={styles.header}>
      <Image src={'/openchain-logo.svg'} width="48" height="48"/>
      <div className={styles.logoText}>
        OpenChain
      </div>
      <div className={styles.rightLinks}>
        {linksElements}
      </div>
      <div className={`${styles.hamburgerToggler} ${isMenuOpen ? styles.isOpenToggler : ''}`} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      {
        isMenuOpen && (
          <div className={styles.menuOverlay} onClick={toggleMenu}/>
        )
      }
      <div className={`${styles.menu} ${isMenuOpen ? styles.isOpenMenu : ''}`}>
        {linksElements}
      </div>
    </header>
  )
}