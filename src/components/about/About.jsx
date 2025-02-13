import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src="/assets/images.jpeg"
          alt="aboutImg"
          className={styles.aboutImage}
        />
    

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src="/assets/icons8-developer-64.png" alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3><u>Full-Stack Developer</u></h3><br />
              <p>
                Developer with experience in building responsive and optimized
                websites.
              </p>
            </div>
          </li> */}
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            
              <h3 className={styles.aboutItem}><u>Frontend Developer </u> <img src="/assets/icons8-developer-64.png" alt="cursor" /></h3><br />
              <ul><li className={styles.aboutItem}>
               I specialize in using HTML, CSS, and JavaScript to build the parts of websites and apps that users see and interact with.</li><br />
               <li className={styles.aboutItem}> My goal is to create smooth, responsive designs that work across all devices, ensuring that the user experience is as intuitive and enjoyable as possible. </li><br />
               <li className={styles.aboutItem}> I also utilize modern frameworks/libraries like Reactjs and  to streamline development and improve performance.</li><br />
               <li className={styles.aboutItem}> Whether it’s optimizing performance or ensuring cross-browser compatibility, I’m dedicated to making every aspect of the user interface sleek and user-friendly.</li>
               </ul>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src="/assets/icons8-developer-64.png" alt="cursor" /> */}
            {/* <div className={styles.aboutItemText}>
              <h3><u>Backend Developer</u></h3><br />
              <p>
                Developer with experience in building responsive and optimized
                API websites with Node.js .
              </p>
            </div> */}
          </li>
        </ul>
      </div>
    </section>
  );
};
