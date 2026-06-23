import React, { useState } from 'react';
import TripCard from './TripCard'; 
import EmtyState from './EmtyState';
import TypeFilter from './TypeFilter';
import ContryFilter from './ContryFilter';


export default function Main({ items, searchQuery }) {
  const [activeType, setActiveType] = useState('Все');
  const [activeCountry, setActiveCountry] = useState('Все страны');
    const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = activeType === 'Все' || item.type === activeType;
    const matchesCountry = activeCountry === 'Все страны' || item.country === activeCountry;
    return matchesSearch && matchesType && matchesCountry;
  });

  return (
    <main className="max-w-6xl mx-auto px-5 py-8">
       <div className="flex flex-col sm:flex-row justify-end items-center gap-3 mb-6 p-3">
      <ContryFilter 
        items={items} 
        activeCountry={activeCountry} 
        setActiveCountry={setActiveCountry} 
      />
     <TypeFilter activeType={activeType} setActiveType={setActiveType} />
     </div>
      {filteredItems.length === 0 ? (
        <EmtyState/>
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
