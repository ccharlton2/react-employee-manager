import React, { useState, useContext } from "react";

import styled from "styled-components";
import fireBaseApp from "./../firebase/firebaseConfig";
import AuthContext from "auth/AuthContext";
import FormInput from "components/forms/FormInput";
import Button from "components/buttons/Button";
import { Redirect } from "react-router-dom";

const LoginPageStyles = styled.div`
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

const LoginPage = () => {
  // component logic

  // useState functional approach to building components
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleLogin = (e) => {
    fireBaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        auth.authenticated = true;
        setIsValid(true);
      })
      .catch((error) => {
        auth.authenticated = false;
        console.log(error.code, error.message);
      });
  };

  if (isValid) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <LoginPageStyles>
        <header>
          <h1>Login</h1>
        </header>

        <FormInput
          inputType="email"
          label="email"
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <FormInput
          inputType="password"
          label="password"
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        <Button onClick={handleLogin} label="login" uiStyle="login" />
      </LoginPageStyles>
    );
  }
};

export default LoginPage;
