import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/NftShowcase.module.scss';

export function NftShowcase() {
  const [timeLeft, setTimeLeft] = useState('');
  useEffect(
    () => {
      const remainingTime = new Date;
      remainingTime.setDate(remainingTime.getDate() + 1);

      setInterval(
        () => {
          const now = new Date;
          var seconds = Math.floor((remainingTime.getTime() - now.getTime()) / 1000);
          var minutes = Math.floor(seconds / 60);
          var hours = Math.floor(minutes / 60);
          var days = Math.floor(hours / 24);

          hours = hours - (days * 24);
          minutes = minutes - (days * 24 * 60) - (hours * 60);
          seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

          setTimeLeft(`${addZeros(hours, 2)}h : ${addZeros(minutes, 2)}m : ${addZeros(seconds, 2)}s`);
        }, 1000
      )
    }, []
  );

  function addZeros(num: number, totalLength: number) {
    return String(num).padStart(totalLength, '0');
  }

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
              {timeLeft}
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