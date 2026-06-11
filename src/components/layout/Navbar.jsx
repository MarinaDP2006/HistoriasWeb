import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../lib/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">📚</span>
            <span className="text-xl font-bold text-gray-800">Stories</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/stories" className="text-gray-700 hover:text-blue-600 transition">Stories</Link>
            <Link to="/editions" className="text-gray-700 hover:text-blue-600 transition">Editions</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          </div>

          <button onClick={toggleMenu} className="md:hidden flex flex-col space-y-1">
            <span className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/stories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition" onClick={() => setIsOpen(false)}>Stories</Link>
            <Link to="/editions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition" onClick={() => setIsOpen(false)}>Editions</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition" onClick={() => setIsOpen(false)}>About</Link>
          </div>
        )}
      </div>
    </nav>
  );
}