import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero/hero.png";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Subodh </h1>
        <p className={styles.description}>
          I'm a full-stack Web Developer with 1 year of Experience  using React and NodeJS Reach out if you'd like to learn more.
        </p>
        <a href="mailto:subodhraturi23@gmail.com" className={styles.contactBtn}> contact me</a>
      </div>
      <img className={styles.heroImg} src={heroImg} alt=" heroImg" />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
