
// src/context/authContext.js
import React, { createContext, useState, useContext,useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(!!localStorage.getItem("token"))

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const login = (token)=>{
    localStorage.setItem("token", token)
    setIsAuth(true)
  }
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };


  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };
  

  return (
    <AuthContext.Provider value={{  toggleAuth,isAuth,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
