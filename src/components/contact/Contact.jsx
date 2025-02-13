import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:rishikyadav2607@email.com">
    <img src="/assets/icons8-mail-48.png" alt="Email icon" />
</a>
          <a href="mailto:rishikyadav2607@email.com">My Email</a>
        </li>
        <li className={styles.link}>
         <a href="https://www.linkedin.com/in/rishikant-yadav-010648283/"> <img
            src="/assets/icons8-linkedin-48.png"
            alt="LinkedIn icon"
          /></a>
          <a href="https://www.linkedin.com/in/rishikant-yadav-010648283/">Linkedin Profile</a>
        </li>
        <li className={styles.link}>
         <a href="https://github.com/Rishi-2607"> <img src="/assets/icons8-github-48.png" alt="Github icon" /></a>
          <a href="https://github.com/Rishi-2607">Github Profile</a>
        </li>
      </ul>
    </footer>
  );
};