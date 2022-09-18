import Image from 'next/image';
import styles from '../styles/Features.module.scss';

const features = [
  {
    image: 'rewards.svg',
    text: 'Crypto bounties for code problems',
  },
  {
    image: 'nft-css.svg',
    text: 'Sell and collect CSS Art as NFTs',
  },
  {
    image: 'community.svg',
    text: 'Truly decentralized community forums',
  },
  {
    image: 'articles.svg',
    text: 'Write and collect on-chain blog posts',
  },
  {
    image: 'blockchain.svg',
    text: 'Decentralized autonomous platform',
  },
]

export function Features() {
  return (
    <div className={styles.features}>
      <h3>What to expect</h3>
      <div className={styles.featuresContainer}>
        {
          features.map(
            (feat, i) => (
              <div className={styles.feat} key={i}>
                <Image src={'/' + feat.image} width="60" height="60"/>
                <p>
                  {feat.text}
                </p>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}