import React from 'react';
import FavoriteButton from './FavoriteButton';

export default function TripCard({item}) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 bg-white flex flex-col gap-3 shadow-sm ">
      
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-40 object-cover rounded shrink-0"
      />
      <div className='grow'>
        <h3 className="font-bold text-gray-800 text-base">{item.title}</h3>
      </div>
      <p className="text-gray-500 text-sm mt-1 text-center">{item.price} p.</p>
      <FavoriteButton item={item}/>

    </div>
  );
}