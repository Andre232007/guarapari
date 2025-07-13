import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      const savedFavorites = localStorage.getItem(`guarapari_favorites_${user.id}`);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      } else {
        setFavorites(user.favoriteBeaches || []);
      }
    } else {
      setFavorites([]);
    }
  }, [user]);

  const addToFavorites = (beachId) => {
    if (!user) return;
    
    const newFavorites = [...favorites, beachId];
    setFavorites(newFavorites);
    localStorage.setItem(`guarapari_favorites_${user.id}`, JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (beachId) => {
    if (!user) return;
    
    const newFavorites = favorites.filter(id => id !== beachId);
    setFavorites(newFavorites);
    localStorage.setItem(`guarapari_favorites_${user.id}`, JSON.stringify(newFavorites));
  };

  const isFavorite = (beachId) => {
    return favorites.includes(beachId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};