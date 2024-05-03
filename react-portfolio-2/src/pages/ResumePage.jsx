import React from "react";

import styles from "./ResumePage.module.css";

export default function Resume() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>Resume</h1>
      </div>
      <div>
        <a href={require("../assets/Resume/Joshua_Mayfield_Resume_OLD.pdf")} download>
          <h4 className={styles.resumeTitle}>Download my resume here!</h4>
        </a>
      </div>
    </section>
  );
}