import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import firebaseApp from "firebase/firebaseConfig";
import AuthContext from "auth/AuthContext";

const AppBarStyles = styled.nav`
  box-shadow: 0 0 3px 1px gray;
  padding: 1rem;
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    margin: 0 1rem 0;
  }
  a {
    text-decoration: none;
    color: gray;
  }
  a:hover {
    color: lightpink;
  }
  button {
    border: inherit;
    font-size: 1rem;
    color: gray;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  }
  button:hover {
    color: tomato;
    cursor: pointer;
  }
`;

const AppBar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    firebaseApp.auth().signOut();
    auth.authenticated = false;
    // redirect to the home page
    history.push("/");
  };

  return (
    <AppBarStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button onClick={handleLogout}>sign out</button>
        </li>
      </ul>
    </AppBarStyles>
  );
};

export default AppBar;
