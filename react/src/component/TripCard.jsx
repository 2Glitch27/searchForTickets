import React from 'react';
import FavoriteButton from './FavoriteButton';
import { Link } from 'react-router-dom';

export default function TripCard({ item }) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 bg-white flex flex-col gap-3 shadow-sm h-full">
      <Link to={`/trip/${item.id}`} className="flex flex-col gap-3 grow text-inherit no-underline">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-40 object-cover rounded shrink-0"
        />
        <div className="grow">
          <h3 className="font-bold text-gray-800 text-base">{item.title}</h3>
        </div>
        <p className="text-gray-500 text-sm mt-1 text-center font-semibold">
          {item.price} p.
        </p>
      </Link>
      <div className="mt-auto">
        <FavoriteButton item={item} />
      </div>
    
    </div>
  );
}