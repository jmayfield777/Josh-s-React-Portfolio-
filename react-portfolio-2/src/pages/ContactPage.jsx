import React, { useState } from "react";

import { emailValidator } from "../utils/emailValidator";

import styles from "./ContactPage.module.css";

export default function Contact() {

  const [ formState, setFormState ] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [ errors, setErrors ] = useState('');
  
  const { name, email, message } = formState;

  function formHandler(e) {
    if (e.target.name === "email") {
      const valid = emailValidator(e.target.value);
      if (!valid) {
        setErrors("Please enter a valid email.");
      } else {
        if (!e.target.value.length) {
          setErrors(`${e.target.name} required.`);
        } else {
          setErrors('');
        }
      }
    }
    

    if (!errors) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Me:</h2>
      <br></br>
      <form className={styles.formContainer}>
        <div>
          <label className={styles.label} for="name">Name: </label>
          <input className={styles.input} type="text" id="name" name="name" defaultValue={name} onBlur={formHandler} />
        </div>
        <div>
          <label className={styles.label} for="email">Email: </label>
          <input className={styles.input} type="email" id="email" name="email" defaultValue={email} onBlur={formHandler}/>
        </div>
        <div>
          <label className={styles.label} for="message">Message: </label>
          <textarea className={styles.textarea} id="message" name="message" defaultValue={message} onBlur={formHandler}></textarea>
        </div>
        { errors && (
          <div>
            <p>{errors}</p>
          </div>
        )}

        <div>
          <button className={styles.submitBtn} type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};