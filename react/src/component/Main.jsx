import React, { useState } from 'react';
import TripCard from './TripCard'; 

export default function Main({ items, searchQuery }) {
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    let matchesPrice = true;
    if (priceFilter === 'cheap') {
      matchesPrice = item.price <= 300;
    } else if (priceFilter === 'expensive') {
      matchesPrice = item.price > 300;
    }

    return matchesSearch && matchesPrice;
  });

  return (
    <main className="max-w-6xl mx-auto px-5 py-8">
      
      <div className="flex justify-end mb-6 bg-gray-50 p-3 rounded border border-gray-200">
        <div className="w-full sm:w-48">
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none text-sm cursor-pointer"
          >
            <option value="all">Все цены</option>
            <option value="cheap">До 300 $</option>
            <option value="expensive">От 300 $</option>
          </select>
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded border border-dashed border-gray-300">
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
