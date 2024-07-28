
// src/context/authContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isAuth,setIsAuth] = useState(!!localStorage.getItem("token"))

  const login = (token)=>{
    localStorage.setItem("token", token)
    setIsAuth(true)
  }
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };


  const toggleAuth = () => {
    setIsLoginPage(!isLoginPage);
  };
  

  return (
    <AuthContext.Provider value={{ isLoginPage, toggleAuth,isAuth,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
