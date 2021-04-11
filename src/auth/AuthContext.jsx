import React, { useState } from "react";

const AuthContext = React.createContext(null);

const AuthProvider = (props) => {
  return (
    <AuthContext.Provider
      value={{ role: "admin", uid: null, authenticated: false }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
