// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import useStore from '../Global/Store';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { users, setUsers } = useStore();

  const login = (userData) => {
    setIsAuthenticated(true);
    setUsers(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsers(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, users, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
