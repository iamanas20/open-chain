import Image from 'next/image';
import styles from '../styles/Testimonials.module.scss';

export function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div>
        <Image src={'/quote.svg'} width="38" height="38"/>
        <p>
          We know that we are living in a complex and stressful world especially for developers and OpenChain strives to make developers&apos; lives better through amazing features and community.
        </p>
        <h3>
          Developer DAO
        </h3>
      </div>
      <div>
        <Image src={'/quote.svg'} width="38" height="38"/>
        <p>
          OpenChain is the platform that every developer should join and use. It will benefit developers in every aspect especially the never-before-seen CSS art to NFTs feature.
        </p>
        <h3>
          OpenZeppelin
        </h3>
      </div>
    </div>
  )
}