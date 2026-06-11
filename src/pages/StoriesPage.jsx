import React, { useState, useEffect } from 'react';
import BookCard from '../components/stories/BookCard';

const mockBooks = [
  { id: 1, title: 'The Great Adventure', author: 'John Smith', description: 'Epic adventure.', image: 'https://via.placeholder.com/300x400?text=Book1', rating: 4.5, pages: 432, genre: 'Adventure' },
  { id: 2, title: 'Love in the City', author: 'Emma Johnson', description: 'Romantic story.', image: 'https://via.placeholder.com/300x400?text=Book2', rating: 4.2, pages: 328, genre: 'Romance' },
  { id: 3, title: 'Mystery at Midnight', author: 'Robert Brown', description: 'Thrilling mystery.', image: 'https://via.placeholder.com/300x400?text=Book3', rating: 4.8, pages: 412, genre: 'Mystery' },
  { id: 4, title: 'Fantasy Kingdom', author: 'Sarah Williams', description: 'Magical world.', image: 'https://via.placeholder.com/300x400?text=Book4', rating: 4.6, pages: 520, genre: 'Fantasy' },
];

export default function StoriesPage() {
  const [books] = useState(mockBooks);
  const [filteredBooks, setFilteredBooks] = useState(mockBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('title');

  const genres = ['All', ...new Set(mockBooks.map(book => book.genre))];

  useEffect(() => {
    let result = books;
    if (selectedGenre !== 'All') result = result.filter(book => book.genre === selectedGenre);
    if (searchTerm) result = result.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    
    switch (sortBy) {
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    setFilteredBooks(result);
  }, [books, searchTerm, selectedGenre, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">All Stories</h1>
        <p className="text-gray-600 mb-8">Browse our complete collection</p>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Genre</label>
              <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="title">Title</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-gray-600">Found <span className="font-bold text-blue-600">{filteredBooks.length}</span> story(ies)</div>
            </div>
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-600 text-lg">No stories found</p>
          </div>
        )}
      </div>
    </div>
  );
}