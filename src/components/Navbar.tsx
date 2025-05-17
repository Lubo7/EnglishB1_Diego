import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">🎓</span>
          <Link to="/" className="text-xl font-bold hover:text-yellow-200">English B1 Course</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;