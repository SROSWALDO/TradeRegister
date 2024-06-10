import React, { createContext, useState, useContext, useEffect } from 'react';
import useStore from '../Global/Store';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedToken = localStorage.getItem('token');
    return !!storedToken;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const { users, setUsers } = useStore();

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, [setUsers]);

  

  const login = (userData, authToken) => {
    setIsAuthenticated(true);
    setUsers(userData);
    setToken(authToken);
    localStorage.setItem('users', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsers(null);
    setToken(null);
    localStorage.removeItem('users');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, users, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
