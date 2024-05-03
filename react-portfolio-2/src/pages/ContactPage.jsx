import React, { useState } from "react";
import { EmailValidator } from '../../utils/';

import styles from './ContactPage.module.css';

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
      const valid = EmailValidator(e.target.value);
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
    <section>
      <h2>Contact Me:</h2>
      <br></br>
      <form>
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name" name="name" defaultValue={name} onBlur={formHandler} />
        </div>
        <div>
          <label for="email">Email: </label>
          <input type="email" id="email" name="email" defaultValue={email} onBlur={formHandler}/>
        </div>
        <div>
          <label for="message">Message: </label>
          <textarea id="message" name="message" defaultValue={message} onBlur={formHandler}></textarea>
        </div>
        { errors && (
          <div>
            <p>{errors}</p>
          </div>
        )}

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};