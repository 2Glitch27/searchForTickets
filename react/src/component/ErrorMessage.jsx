import React from 'react'

export default function ErrorMessage({error}) {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 text-center text-red-500 bg-red-50 rounded-lg border border-red-200 my-5">
          Ошибка: {error}.
        </div>
  )
}
