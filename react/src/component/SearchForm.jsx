import React from 'react'

export default function SearchForm({searchQuery, setSearchQuery}) {
  return (
    <input
      type="text"
      placeholder="Поиск"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full px-3 py-1.5 border border-gray-300 rounded bg-gray-50 focus:bg-white focus:outline-none text-sm transition-colors"
    />
  )
}
