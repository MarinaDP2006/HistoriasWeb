import React, { useState } from 'react';

const mockEditions = [
  { id: 1, title: 'The Great Adventure - First Edition', author: 'John Smith', year: 2020, format: 'Hardcover', price: 29.99 },
  { id: 2, title: 'Love in the City - Revised Edition', author: 'Emma Johnson', year: 2022, format: 'Paperback', price: 14.99 },
  { id: 3, title: 'Mystery at Midnight - Deluxe Edition', author: 'Robert Brown', year: 2023, format: 'Hardcover', price: 34.99 },
  { id: 4, title: 'Fantasy Kingdom - E-book Edition', author: 'Sarah Williams', year: 2021, format: 'E-book', price: 9.99 },
];

export default function EditionsPage() {
  const [selectedFormat, setSelectedFormat] = useState('All');
  const [sortBy, setSortBy] = useState('year');

  const formats = ['All', 'Hardcover', 'Paperback', 'E-book'];

  let filteredEditions = mockEditions;
  if (selectedFormat !== 'All') filteredEditions = filteredEditions.filter(e => e.format === selectedFormat);

  filteredEditions.sort((a, b) => {
    switch (sortBy) {
      case 'year': return b.year - a.year;
      case 'price': return a.price - b.price;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Editions</h1>
        <p className="text-gray-600 mb-8">Explore different editions and formats</p>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
              <select value={selectedFormat} onChange={(e) => setSelectedFormat(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                {formats.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                <option value="year">Year</option>
                <option value="price">Price</option>
              </select>
            </div>
            <div className="flex items-end">
              <div className="text-sm text-gray-600">Found <span className="font-bold text-blue-600">{filteredEditions.length}</span> edition(s)</div>
            </div>
          </div>
        </div>

        {filteredEditions.length > 0 ? (
          <div className="space-y-6">
            {filteredEditions.map(edition => (
              <div key={edition.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{edition.title}</h3>
                <p className="text-gray-600 mb-4">by {edition.author}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">Format: {edition.format} | Year: {edition.year}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">${edition.price}</p>
                    <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center"><p className="text-gray-600">No editions found</p></div>
        )}
      </div>
    </div>
  );
}