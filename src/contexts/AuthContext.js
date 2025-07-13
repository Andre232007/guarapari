import React, { createContext, useContext, useState, useEffect } from 'react';
import { users } from '../mock/data';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('guarapari_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Mock login - in real app, this would be an API call
      const foundUser = users.find(u => u.email === email);
      if (foundUser && password === '123456') { // Mock password
        setUser(foundUser);
        localStorage.setItem('guarapari_user', JSON.stringify(foundUser));
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, error: 'Credenciais inválidas' };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Erro ao fazer login' };
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      // Mock registration - in real app, this would be an API call
      const newUser = {
        id: users.length + 1,
        ...userData,
        registrationDate: new Date().toISOString().split('T')[0],
        favoriteBeaches: [],
        reviews: []
      };
      
      setUser(newUser);
      localStorage.setItem('guarapari_user', JSON.stringify(newUser));
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return { success: false, error: 'Erro ao criar conta' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('guarapari_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};