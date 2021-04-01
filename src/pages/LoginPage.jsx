import React from "react";

import styled from "styled-components";
import fireBaseApp from './../firebase/firebaseConfig';
import FormInput from "components/forms/FormInput";
import Button from "components/buttons/Button";

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
  const handleLogin = (e) => {
    fireBaseApp.auth().signInWithEmailAndPassword('chris@home.com', 'password')
    .then(userCredential => {
    })
  }

  return (
    <LoginPageStyles>
      <header>
        <h1>Login</h1>
      </header>

      <FormInput inputType="email" label="email" />
      <FormInput inputType="password" label="password" />
      <Button onClick={handleLogin} label="login" uiStyle="login" />
    </LoginPageStyles>
  );
};

export default LoginPage;
