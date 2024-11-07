import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./RegisterForm.module.css";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleFormSubmit = async (e) => {
    const userData = { firstName, lastName, emailAddress };
    try {
      const data = await axios.post(
        "http://localhost:5001/api/users/register",
        userData
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>Register</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="First E-Mail"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
