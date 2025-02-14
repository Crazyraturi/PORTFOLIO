import React from "react";
import email from "../../assets/contact/emailicon.png"
import github from "../../assets/contact/githubicon.png"
import linkedin from "../../assets/contact/linkedinicon.png"


import styles from "./Contact.module.css";


 const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:subodhraturi23@gmail.com">subodhraturi23@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/subodh-raturi-403009250/">linkedin.com/subodhraturi</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/Crazyraturi">github.com/crazyraturi</a>
        </li>
      </ul>
    </footer>
  );
};
export default Contact