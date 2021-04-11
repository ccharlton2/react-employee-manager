import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./auth/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/404";
import AppBar from "./components/appbar/AppBar";

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
