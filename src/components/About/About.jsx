import React from "react";
import aboutImg from "../../assets/about/about.png";
import cursorIcon from "../../assets/about/cursoricon.png";
import serverIcon from "../../assets/about/servericon.png";
import uiIcon from "../../assets/about/uiicon.png";

import styles  from './About.module.css'

const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutImg} alt="aboutImg" />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="cursorIcon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p> <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p></p>
            </div>
          </li>
         
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>

          <li  className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
