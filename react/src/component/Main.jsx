import React, { useState } from 'react';
import TripCard from './TripCard'; 

export default function Main({ items, searchQuery }) {
  const [activeType, setActiveType] = useState('Все');

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeType === 'Все' || item.type === activeType;
    return matchesSearch && matchesType;

  });

  return (
    <main className="max-w-6xl mx-auto px-5 py-8">
      
      <div className="flex justify-end mb-6  p-3  border-gray-200">
        <div className="w-full sm:w-48">
          <select
            value={activeType}
            onChange={(e) => setActiveType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none text-sm cursor-pointer"
          >
            <option value="Все">Все варианты</option>
            <option value="Город">Город</option>
            <option value="Пляж">Пляж</option>
            <option value="Культура">Культура</option>
          </select>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded border border-solid border-gray-300">
          <p className="text-gray-500 text-base">Ничего не найдено по вашему запросу</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((trip) => (
            <TripCard 
              key={trip.id} 
              item={trip} 
            />
          ))}
        </div>
      )}

    </main>
  );
}
