import { useLayoutEffect, useRef } from 'react';
import styles from '../styles/HeroSection.module.scss';
import { HeroArt } from './HeroArt';
import gsap from 'gsap';

export function HeroSection () {
  const ballRef = useRef<HTMLDivElement | null>(null);
  const ball2Ref = useRef<HTMLDivElement | null>(null);

  const ball3Ref = useRef<HTMLDivElement | null>(null);
  const ball4Ref = useRef<HTMLDivElement | null>(null);

  const timeline = useRef<GSAPTimeline | null>(null);

  function joinWaitlist() {
    // Decentralized waitlist smart contract calling (?)
    // Maybe centralized waitlist service (?)
  }

  useLayoutEffect(
    function () {
      const el = ballRef.current;
      const el2 = ball2Ref.current;
      
      const el3 = ball3Ref.current;
      const el4 = ball4Ref.current;

      timeline.current = gsap.timeline({ delay: 1 });
      const tl = timeline.current;

      gsap.set([el3, el4], { opacity: 0 });

      const oddArray = [el, el3];
      const evenArray = [el2, el4];

      tl.to(
        oddArray,
        {
          duration: 2,
          left: '46%',
          top: '46%',
          translateX: '-46%',
          translateY: '-46%',
          filter: 'blur(30px)',
          height: 200,
          width: 200,
        }
      );

      tl.to(
       evenArray,
        {
          duration: 2,
          left: '54%',
          top: '54%',
          translateX: '-54%',
          translateY: '-54%',
          filter: 'blur(30px)',
          height: 200,
          width: 200,
        },
        '-=2'
      );

      tl.addLabel("rotationMotion", ">-0.7")

      tl.to(
        el,
        {
          duration: 4,
          rotate: 360,
        },
        'rotationMotion'
      )

      tl.to(
        el2,
        {
          duration: 4,
          rotate: 360,
        },
        'rotationMotion'
      )

      tl.to(
        [...oddArray, ...evenArray],
        {
          duration: 4,
          opacity: 1,
          ease: 'power4',
        },
        '<-0.7 rotationMotion'
      )

      tl.to(
        [...oddArray, ...evenArray],
        {
          duration: 3,
          x: 'random(-600, 600)',
          y: 'random(-600, 600)',
          filter: 'blur(190px)',
          opacity: '0.4',
          height: 460,
          width: 460,
          ease: 'power4',
        }
      )

    }, []
  );

  return (
    <section className={styles.heroSection}>

      <div className={styles.ball} ref={ballRef}/>
      <div className={styles.ball2} ref={ball2Ref}/>

      <div className={styles.ball} ref={ball3Ref}/>
      <div className={styles.ball2} ref={ball4Ref}/>

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