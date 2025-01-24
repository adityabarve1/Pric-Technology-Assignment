import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <span>CRUD App</span>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            onClick={() => onNavigate('home')}
            className="text-white hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/users"
            onClick={() => onNavigate('users')}
            className="text-white hover:text-gray-400"
          >
            User List
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
