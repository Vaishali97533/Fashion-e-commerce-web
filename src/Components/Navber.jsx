import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsHandbag } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';

function Navber() {
  const location = useLocation();

  // Agar home page par hain to ek color, dusre page par dusra color
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const navClass = isHome
    ? " text-white"
    : "bg-white text-black shadow";

  return (
    <header className={`w-full fixed top-0 left-0 z-50 ${navClass} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="flex gap-6 font-semibold"
        >00
          <NavLink to="/home" className="hover:underline">Home</NavLink>
          <NavLink to="/shop" className="hover:underline">Shop</NavLink>
          <NavLink to="/about" className="hover:underline">About Us</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-xs tracking-widest font-light">FEMME</p>
          <h1 className="text-xl italic font-serif">Wardrobe</h1>
          <div className={`w-6 h-[1px] mx-auto mt-1 ${isHome ? "bg-white" : "bg-black"}`} />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <FiSearch className="text-xl cursor-pointer" />
          <div className="relative">
            <BsHandbag className="text-xl cursor-pointer" />
            <span className={`absolute -top-2 -right-2 ${isHome ? "bg-white text-black" : "bg-black text-white"} text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold`}>
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navber;