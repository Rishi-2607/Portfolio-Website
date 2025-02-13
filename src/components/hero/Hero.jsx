import React from 'react';
import { getImageUrl } from '../../utils';
import styles from '../../components/hero/Hero.module.css'; 

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Rishi</h1>
        <ul><p className={styles.description}>I’m a Front-End Developer, passionate about crafting seamless, interactive, and visually engaging web experiences. </p>
        <a href="mailto:rishikyadav2607@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </ul></div>
      <img src="/assets/images.png" alt="Portfolio"  className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
