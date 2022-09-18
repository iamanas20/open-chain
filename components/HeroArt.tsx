import Image from 'next/image';
import styles from '../styles/HeroArt.module.scss';

export function HeroArt() {
  return (
    <div className={styles.rightPart}>
      <div className={styles.topPart}>
        <div className={styles.globe}>
          <Image src={'/globe.svg'} width="90" height="90"/>
        </div>
        <div className={styles.connect}>
          <div>connect</div>
          <Image src={'/squigly.svg'} width="120" height="60"/>
        </div>
      </div>
      <div className={styles.middlePart}>
        <div className={styles.css}>
          <div className={styles.text}>CSS Art Nfts</div>
          <Image src={'/right.svg'} width="69" height="32"/>
          <div className={styles.art}>
            <Image src={'/art.svg'} width="100" height="100"/>
          </div>
        </div>
        <Image src={'/egypt.png'} width="120" height="120"/>
      </div>
      <div className={styles.bottomPart}>
        <Image src={'/eth-art.png'} width="198" height="120"/>
        <div className={styles.humansEthContainer}>
          <div className={styles.humans}>
            <Image src={'/humans.png'} width="90" height="90"/>
          </div>
          <Image src={'/link.svg'} width="150" height="58"/>
          <div className={styles.humans}>
            <Image src={'/eth.svg'} width="90" height="90"/>
          </div>
        </div>
      </div>
    </div>
  )
}