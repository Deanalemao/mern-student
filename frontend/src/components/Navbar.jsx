import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
      <div className="navbar-start flex-1">
        <Link to="/" className="btn btn-ghost text-lg sm:text-xl md:text-2xl font-bold text-white hover:bg-white/10 transition-all duration-300">
          📚 Student Manager
        </Link>
      </div>
      <div className="navbar-end gap-2 sm:gap-3">
        <Link to="/" className="btn btn-ghost btn-xs sm:btn-sm lg:btn-md text-white font-semibold hover:bg-white/10 transition-all duration-300">
          Home
        </Link>
        <Link to="/display" className="btn btn-ghost btn-xs sm:btn-sm lg:btn-md text-white font-semibold hover:bg-white/10 transition-all duration-300">
          View Students
        </Link>
        <Link to="/insert" className="btn btn-xs sm:btn-sm lg:btn-md bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold hover:from-pink-600 hover:to-red-600 shadow-lg border-0 transition-all duration-300">
          + Add Student
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
