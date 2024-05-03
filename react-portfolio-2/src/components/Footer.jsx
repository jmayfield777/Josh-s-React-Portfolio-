import React from "react";
import { getImage } from "../utils/getImageHelper";

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img 
            src={getImage("Contact/emailIcon.png")} 
            alt="Email icon" 
          />
          <a href="mailto:josh.mayfield45@gmail.com">
            josh.mayfield45@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img 
            src={getImage("Contact/githubIcon.png")} 
            alt="Github icon" 
          />
          <a href="https://www.github.com/jmayfield777">
            github.com/jmayfield777
          </a>
        </li>
      </ul>
    </footer>
  );
};