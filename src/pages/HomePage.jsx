import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "./../components/icons/Logo";

const HomePageStyles = styled.header`
  text-align: center;
  margin: 6rem auto 0;
  svg {
    width: 120px;
  }
  h1 {
    font-size: 2.25rem;
  }
  p {
    padding: 15px 0;
    color: #696975;
  }
  a {
    display: block;
    margin: 1rem auto 0;
    max-width: 320px;
    text-decoration: none;
    width: 90%;
    border: inherit;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: inherit;
    color: #8e979c;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
  }
  a:hover {
    background-color: lightgray;
  }
  .login {
    background: linear-gradient(to top, #3f51b5, #2196f3);
    color: white;
  }
  .register {
    background: linear-gradient(to top, #de1111, #f52415);
    color: white;
  }
`;

const HomePage = () => {
  return (
    <HomePageStyles>
      <Logo />
      <h1>Employee Manager</h1>
      <p>Focus on your employees while we do the paperwork</p>
      <Link className="login" to="/login">Login</Link>
      <Link className="register" to="/register">Register</Link>
    </HomePageStyles>
  );
};

export default HomePage;
