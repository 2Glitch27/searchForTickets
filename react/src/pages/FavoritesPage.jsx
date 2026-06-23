import React from 'react';
import { useFavorites } from '../context/FavoritesContext'; 
import TripCard from '../component/TripCard';

export default function FavoritesPage({trips}) {
  const { favorites } = useFavorites(); 
   const favoriteItems = trips.filter((trip) => 
    favorites.some((favId) => favId == trip.id)
  );

  if (favoriteItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        Ничего нет пока
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favoriteItems.map((trip) => (
          <TripCard 
            key={trip.id} 
            item={trip} 
          />
        ))}
      </div>
    </div>
  );
}