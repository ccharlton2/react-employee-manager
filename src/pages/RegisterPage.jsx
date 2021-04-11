import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

import styled from "styled-components";
import AuthContext from 'auth/AuthContext'

import FormInput from "components/forms/FormInput";
import Button from "components/buttons/Button";
import firebaseApp from "./../firebase/firebaseConfig";

const RegisterPageStyles = styled.div`
  max-width: 480px;
  margin: 6rem auto 0;
  header {
    text-align: center;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  button {
    margin-top: 3rem;
  }
  button:hover {
    cursor: pointer;
  }
`;

const RegisterPage = () => {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleRegistration = (e) => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        auth.authenticated = true;
        setIsValid(true);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  if (isValid) {
    return <Redirect to="/login" />;
  } else {
    return (
      <RegisterPageStyles>
        <header>
          <h1>Unlimited Trial Account</h1>

          <p>no credit card required</p>
        </header>

        <FormInput inputType="text" label="name on the account" onChange={(e) => setUsername(e.target.value.trim())} />
        <FormInput inputType="email" label="valid email address" onChange={(e) => setEmail(e.target.value.trim())} />
        <FormInput inputType="password" label="password (8 characters)" onChange={(e) => setPassword(e.target.value.trim())} />
        <Button
          label="create a new account"
          uiStyle="signup"
          onClick={handleRegistration}
        />
      </RegisterPageStyles>
    );
  }
};

export default RegisterPage;
