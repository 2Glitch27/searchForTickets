import React, { createContext, useState, useEffect, useContext } from 'react';
const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites_ids');
    return saved ? JSON.parse(saved) : []; 
  });

  useEffect(() => {
    localStorage.setItem('favorites_ids', JSON.stringify(favorites));
  }, [favorites]);

 
const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
       
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        
        return [...prevFavorites, id];
      }
    });
  };


  const isFavorite = (id) => favorites.includes(id);
  const favoriteCount = favorites.length;

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, favoriteCount }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}