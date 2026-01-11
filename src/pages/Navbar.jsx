import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.png';

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto">
          
          {/* Logo */}
          <div className="flex">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>About</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Products</NavLink>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Blogs</NavLink>
            <NavLink to="/career" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Career</NavLink>
            <NavLink to="/manufacturing-detail" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Manufacturing-detail</NavLink>
            <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Contact us</NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
          <button onClick={() => setSidebarOpen(false)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <NavLink to="/" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Home</NavLink>
          <NavLink to="/about" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>About</NavLink>
          <NavLink to="/products" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Products</NavLink>
          <NavLink to="/blogs" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Blogs</NavLink>
          <NavLink to="/career" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Career</NavLink>
          <NavLink to="/manufacturing-detail" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Manufacturing-detail</NavLink>
          <NavLink to="/contactus" onClick={() => setSidebarOpen(false)} className={({ isActive }) => isActive ? "text-yellow-400 font-semibold" : "text-blue-400 hover:text-blue-500"}>Contact us</NavLink>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black opacity-30 z-40"></div>}
    </nav>
  );
}

export default Navbar;
