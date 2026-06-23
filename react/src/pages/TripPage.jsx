import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../component/Loader';

export default function TripPage({ trips }) {
  const { id } = useParams();
  const trip = trips.find((item) => item.id == id);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-5 bg-white rounded shadow mt-5">
      <Link to="/" className="text-blue-600 text-sm hover:underline">Назад к списку</Link>
      <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover rounded my-3" />
      <h1 className="text-xl font-bold">{trip.title}</h1>
      <p className="text-gray-500 text-sm my-1">{trip.country} | {trip.type}</p>
      <p className="text-gray-600 my-2 text-sm">{trip.description}</p>
      <p className="font-bold text-lg text-blue-600 mt-4">{trip.price} р.</p>
    </div>
  );
}