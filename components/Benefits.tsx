import Image from 'next/image';
import styles from '../styles/Benefits.module.scss';
import { Features } from './Features';
import { NftShowcase } from './NFTShowcase';
import { Testimonials } from './Testimonials';

export function Benefits() {
  return (
    <section className={styles.benefits}>
      <Testimonials />
      <Features />
      <NftShowcase />
    </section>
  )
}