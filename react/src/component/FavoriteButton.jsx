import React from 'react'
import { useFavorites } from '../context/FavoritesContext'; 
export default function FavoriteButton({item}) {
const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(item.id);
    const handleClick = (e) => {
    e.stopPropagation(); 
    e.preventDefault();
    toggleFavorite(item.id); 
  };
  return (
    <button
        onClick={handleClick} 
        className="w-full py-2 rounded text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200">
        {favorited ? '❤️ В избранном' : '🤍 В избранное'}
      </button>
  )
}
