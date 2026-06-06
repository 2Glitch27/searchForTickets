import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; 

export default function TripCard({ item }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(item.id);

  return (
    <div className="border border-gray-200 rounded-lg p-3 bg-white flex flex-col gap-3 shadow-sm">
      
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-40 object-cover rounded"
      />
      <div>
        <h3 className="font-bold text-gray-800 text-base">{item.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{item.price} p.</p>
      </div>

      <button
        onClick={() => toggleFavorite(item.id)} 
        className={`w-full py-2 rounded text-sm font-medium transition-colors ${
          favorited 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {favorited ? '❤️ В избранном' : '🤍 В избранное'}
      </button>

    </div>
  );
}