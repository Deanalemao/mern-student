import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="navbar bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl sticky top-0 z-50 border-b border-white/10 backdrop-blur-sm">
          <div className="navbar-start flex-1">
            <Link to="/" className="btn btn-ghost text-lg sm:text-xl md:text-2xl font-bold text-white hover:bg-white/10 transition-all duration-300">
              📚 Student Manager
            </Link>
          </div>
          <div className="navbar-end gap-2 sm:gap-3 hidden lg:flex">
            <Link to="/" className="btn btn-ghost btn-sm text-white font-semibold hover:bg-white/10 transition-all duration-300">
              Home
            </Link>
            <Link to="/display" className="btn btn-ghost btn-sm text-white font-semibold hover:bg-white/10 transition-all duration-300">
              View Students
            </Link>
            <Link to="/insert" className="btn btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold hover:from-pink-600 hover:to-red-600 shadow-lg border-0 transition-all duration-300">
              + Add Student
            </Link>
          </div>
          <div className="navbar-end lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost btn-circle text-white">
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
              </svg>
            </label>
          </div>
        </nav>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-gradient-to-b from-slate-900 to-slate-800 text-white space-y-4">
          <li>
            <Link to="/" className="text-lg font-semibold hover:bg-white/10 rounded-lg p-3">
              🏠 Home
            </Link>
          </li>
          <li>
            <Link to="/display" className="text-lg font-semibold hover:bg-white/10 rounded-lg p-3">
              👥 View Students
            </Link>
          </li>
          <li>
            <Link to="/insert" className="text-lg font-semibold hover:bg-white/10 rounded-lg p-3 bg-gradient-to-r from-pink-500 to-red-500">
              ➕ Add Student
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
