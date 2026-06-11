import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  const { id, title, author, description, image, rating, pages } = book;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden bg-gray-200 h-48">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-600">No image</span>
          </div>
        )}
        {rating && <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-bold">⭐ {rating}</div>}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">by {author}</p>
        {pages && <p className="text-gray-500 text-xs mb-3">📖 {pages} pages</p>}
        <p className="text-gray-700 text-sm mb-4 flex-1 line-clamp-3">{description}</p>
        <Link to={`/stories/${id}`} className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center font-medium">View Story</Link>
      </div>
    </div>
  );
}