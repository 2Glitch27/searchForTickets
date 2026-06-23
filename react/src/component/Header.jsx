import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import SearchForm from './SearchForm';

export default function Header({ searchQuery, setSearchQuery }) {
  const { favoriteCount } = useFavorites();

  return (
    <header className="border-b border-gray-200 bg-white px-5 py-3 sticky top-0 z-50 ">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
          <div className="text-xl font-bold flex items-center gap-1">
            <span className="text-blue-600">SearchForTickets</span>
          </div>
          <nav className="flex gap-5 font-medium text-gray-600 text-sm">
            <Link to="/" className="hover:text-blue-600 transition-colors">Главная</Link>
          </nav>
        </div>
        <div className="w-full sm:max-w-xs relative">
          <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        </div>
        <div className="w-full sm:w-auto flex justify-end">
          <Link to="/favorites" className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            <span>Избранное</span>
            {favoriteCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {favoriteCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
