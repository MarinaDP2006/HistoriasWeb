import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/stories/BookCard';

const mockBooks = [
  { id: 1, title: 'The Great Adventure', author: 'John Smith', description: 'An epic tale of adventure.', image: 'https://via.placeholder.com/300x400?text=Book1', rating: 4.5, pages: 432 },
  { id: 2, title: 'Love in the City', author: 'Emma Johnson', description: 'A romantic story.', image: 'https://via.placeholder.com/300x400?text=Book2', rating: 4.2, pages: 328 },
  { id: 3, title: 'Mystery at Midnight', author: 'Robert Brown', description: 'A thrilling mystery.', image: 'https://via.placeholder.com/300x400?text=Book3', rating: 4.8, pages: 412 },
  { id: 4, title: 'Fantasy Kingdom', author: 'Sarah Williams', description: 'A magical world.', image: 'https://via.placeholder.com/300x400?text=Book4', rating: 4.6, pages: 520 },
];

export default function HomePage() {
  const [books] = useState(mockBooks);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Stories</h1>
          <p className="text-xl mb-8 text-blue-100">Discover amazing books and stories from around the world</p>
          <div className="flex justify-center gap-4">
            <Link to="/stories" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">Browse Stories</Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">Featured Books</h2>
          <p className="text-gray-600 mb-8">Check out our latest and most popular stories</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map(book => <BookCard key={book.id} book={book} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/stories" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">View All Stories</Link>
          </div>
        </div>
      </section>
    </div>
  );
}