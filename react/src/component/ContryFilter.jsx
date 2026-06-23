import React from 'react';

export default function ContryFilter({ items, activeCountry, setActiveCountry }) {
  const uniqueCountries = Array.from(new Set(items.map((item) => item.country)));
  const countries = ['Все страны', ...uniqueCountries];

  return (
    <div className="w-full sm:w-48">
      <select
        value={activeCountry}
        onChange={(e) => setActiveCountry(e.target.value)}
        className="w-full h-9 px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none text-sm cursor-pointer text-gray-700 font-medium"
      >
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}