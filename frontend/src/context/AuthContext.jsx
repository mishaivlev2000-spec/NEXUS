import { createContext, useContext, useMemo, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('nexus-token'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('nexus-user') || 'null'));

  const login = async (payload, mode = 'login') => {
    const method = mode === 'signup' ? api.signup : api.login;
    const response = await method(payload);
    if (response.token) {
      setToken(response.token);
      setUser(response.user);
      localStorage.setItem('nexus-token', response.token);
      localStorage.setItem('nexus-user', JSON.stringify(response.user));
    }
    return response;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('nexus-token');
    localStorage.removeItem('nexus-user');
  };

  const value = useMemo(() => ({ token, user, login, logout }), [token, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
