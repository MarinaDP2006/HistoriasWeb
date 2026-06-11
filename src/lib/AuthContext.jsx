import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { APP_CONFIG } from './app-params';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(APP_CONFIG.AUTH_TOKEN_KEY);
    const storedUser = localStorage.getItem(APP_CONFIG.USER_KEY);

    if (storedToken && storedUser) {
      try {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to restore auth state:', err);
        localStorage.removeItem(APP_CONFIG.AUTH_TOKEN_KEY);
        localStorage.removeItem(APP_CONFIG.USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const login = useCallback((userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem(APP_CONFIG.AUTH_TOKEN_KEY, authToken);
    localStorage.setItem(APP_CONFIG.USER_KEY, JSON.stringify(userData));
    setError(null);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(APP_CONFIG.AUTH_TOKEN_KEY);
    localStorage.removeItem(APP_CONFIG.USER_KEY);
    setError(null);
  }, []);

  const updateUser = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem(APP_CONFIG.USER_KEY, JSON.stringify(userData));
  }, []);

  const value = {
    user,
    token,
    isLoading,
    error,
    login,
    logout,
    updateUser,
    isAuthenticated: !!token && !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
}

export default AuthContext;