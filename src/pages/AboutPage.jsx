import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-xl text-gray-600 mb-12">Discover the story behind our platform</p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Stories, we believe that everyone should have access to great literature. Our mission is to create a platform where readers can discover amazing books and authors can share their work with the world.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-blue-600 mb-2">📚 Accessibility</h3>
              <p className="text-gray-700">Making quality literature available to everyone.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-green-600 mb-2">🤝 Community</h3>
              <p className="text-gray-700">Building a supportive community of readers and authors.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-purple-600 mb-2">✨ Quality</h3>
              <p className="text-gray-700">Ensuring high-quality content that inspires.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}