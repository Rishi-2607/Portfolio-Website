import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";  // Assuming this function handles asset path correctly

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "assets/icons8-close-window-50.png" : "assets/icons8-menu-48.png"}
          alt="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItem} ${menuOpen ? styles.menuOpen : ""}`} onClick={() => setMenuOpen(false)}>
          <br /><li><a href="#About">About Me</a></li>
          <li><a href="#Experience">Experience</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
