
// src/context/authContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  const toggleAuth = () => {
    setIsLoginPage(!isLoginPage);
  };
  

  return (
    <AuthContext.Provider value={{ isLoginPage, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
