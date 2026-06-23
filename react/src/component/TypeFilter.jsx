import React from 'react';

export default function TypeFilter({ activeType, setActiveType }) {
  return (
      <div className="w-full sm:w-48">
        <select
          value={activeType}
          onChange={(e) => setActiveType(e.target.value)}
          className="w-full h-9 px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none text-sm cursor-pointer text-gray-700 font-medium"
        >
          <option value="Все">Все варианты</option>
          <option value="Город">Город</option>
          <option value="Пляж">Пляж</option>
          <option value="Культура">Культура</option>
        </select>
      </div>
  );
}