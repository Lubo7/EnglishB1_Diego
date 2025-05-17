import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // This will ensure links work correctly on GitHub Pages
  const basePath = import.meta.env.BASE_URL || '/';
  
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">🎓</span>
          <Link to={basePath} className="text-xl font-bold">English B1 Course</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to={basePath} className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to={`${basePath}grammar`} className="hover:underline">Grammar</Link>
          </li>
          {/* Add your other nav links similarly */}
          <li>
            <Link to={`${basePath}listening`} className="hover:underline">Listening</Link>
          </li>
          <li>
            <Link to={`${basePath}reading`} className="hover:underline">Reading</Link>
          </li>
          <li>
            <Link to={`${basePath}speaking`} className="hover:underline">Speaking</Link>
          </li>
          <li>
            <Link to={`${basePath}writing`} className="hover:underline">Writing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;