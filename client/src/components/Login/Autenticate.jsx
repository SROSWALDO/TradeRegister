// AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import useStore from '../Global/Store';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const { users, setUsers } = useStore();

  const login = (userData, authToken) => {
    setIsAuthenticated(true);
    setUsers(userData);
    setToken(authToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsers(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, users, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
