import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-gray-500 my-4 text-sm">Страница не найдена</p>
      <Link to="/" className="text-blue-600 font-medium text-sm">
        На главную
      </Link>
    </div>
  );
}