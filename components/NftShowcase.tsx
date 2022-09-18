import Image from 'next/image';
import React from 'react';
import styles from '../styles/NftShowcase.module.scss';

export function NftShowcase() {
  return (
    <div className={styles.nft}>
      <div className={styles.nftCover}>
        <div className={styles.nftHeader}>
          <h4 className={styles.nftTitle}>
            Inters #23
          </h4>
          <div className={styles.owner}>
            <div className={styles.profile}/>
            <p className={styles.ownerName}>
              shadowy.eth
            </p>
          </div>
        </div>
        <div className={styles.nftPhoto}>
          <Image src={'/nft.png'} layout="fill"/>
        </div>
        <div className={styles.chainData}>
          <div className={styles.timeLeft}>
            <h5 className={styles.time}>
              20h : 35m : 02s
            </h5>
            <p className={styles.timeText}>
              Remaining time
            </p>
          </div>
          <div className={styles.price}>
            <h5 className={styles.priceNumber}>
              28.05 ETH
            </h5>
            <p className={styles.priceText}>
              Price
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}