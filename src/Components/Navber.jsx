// import React from 'react';
// import { FiSearch } from 'react-icons/fi';
// import { BsHandbag } from 'react-icons/bs';
// import { NavLink, useLocation } from 'react-router-dom';

// function Navber() {
//   const location = useLocation();

//   // Agar home page par hain to ek color, dusre page par dusra color
//   const isHome = location.pathname === "/" || location.pathname === "/home";
//   const navClass = isHome
//     ? " text-white"
//     : "bg-white text-black shadow";

//   return (
//     <header className={`w-full fixed top-0 left-0 z-50 ${navClass} transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Left Nav */}
//         <nav className="flex gap-6 font-semibold"
//         >00
//           <NavLink to="/home" className="hover:underline">Home</NavLink>
//           <NavLink to="/shop" className="hover:underline">Shop</NavLink>
//           <NavLink to="/about" className="hover:underline">About Us</NavLink>
//           <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
//         </nav>

//         {/* Center Logo */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-xs tracking-widest font-light">FEMME</p>
//           <h1 className="text-xl italic font-serif">Wardrobe</h1>
//           <div className={`w-6 h-[1px] mx-auto mt-1 ${isHome ? "bg-white" : "bg-black"}`} />
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-6">
//           <FiSearch className="text-xl cursor-pointer" />
//           <div className="relative">
//             <BsHandbag className="text-xl cursor-pointer" />
//             <span className={`absolute -top-2 -right-2 ${isHome ? "bg-white text-black" : "bg-black text-white"} text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold`}>
//               0
//             </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navber;


import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { BsHandbag } from 'react-icons/bs';
import { NavLink, useLocation } from 'react-router-dom';

function Navber() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const navClass = isHome ? 'text-white' : 'bg-white text-black shadow';

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 ${navClass} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Left Nav (Desktop Only) */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <NavLink to="/home" className="hover:underline">Home</NavLink>
          <NavLink to="/shop" className="hover:underline">Shop</NavLink>
          <NavLink to="/about" className="hover:underline">About Us</NavLink>
          <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
        </nav>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-xs tracking-widest font-light">FEMME</p>
          <h1 className="text-xl italic font-serif">Wardrobe</h1>
          <div className={`w-6 h-[1px] mx-auto mt-1 ${isHome ? 'bg-white' : 'bg-black'}`} />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <FiSearch className="text-xl cursor-pointer" />
          <div className="relative">
            <BsHandbag className="text-xl cursor-pointer" />
            <span
              className={`absolute -top-2 -right-2 ${
                isHome ? 'bg-white text-black' : 'bg-black text-white'
              } text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold`}
            >
              0
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-md transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="p-6 flex flex-col gap-6 font-semibold">
          <NavLink to="/home" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/shop" onClick={toggleMenu}>Shop</NavLink>
          <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink>
        </div>
      </div>

      {/* Overlay for closing sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Navber;
