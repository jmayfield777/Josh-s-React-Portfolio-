import React from "react";

import styles from './ProfilePage.module.css';
import { getImage } from '../utils/getImageHelper';

export default function Profile() {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Welcome to my Portfolio!</h1>
      <p className={styles.description}>
        I'm a full stack developer with experience usiing React and NodeJS.
      </p>
      <a className={styles.contactBtn} href="mailto:josh.mayfield45@gmail.com">
        Contact Me
      </a>
    </div>
    <img 
      className={styles.profileImg} 
      src={getImage("Profile-Image/Profile.png")} 
      alt="profile image" 
    />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
  </section>
  );
};