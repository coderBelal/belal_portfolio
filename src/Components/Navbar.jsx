import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="relative w-full h-16 flex items-center justify-between px-4 bg-[#10E956]">
 
 
      {/* Hamburger Menu - Visible on all screen sizes */}
      <div className="text-3xl cursor-pointer" onClick={toggleNav}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu overlay - Fullscreen overlay with #10E956 background */}
      <div
        className={`fixed top-12 left-0 h-full   bg-[#10E956] text-black transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close button and menu items */}
        <div className="p-6 flex flex-col items-start space-y-6">
          <div className="flex justify-between w-full items-center">
            
          </div>

          <ul className="mt-8 space-y-8 text-3xl">
            <li className="cursor-pointer flex font-press-start items-center">
          Home
            </li>
            <li className="cursor-pointer  font-press-start flex items-center">
  Work
            </li>
            <li className="cursor-pointer flex font-press-start items-center">
            Writing
            </li>
            <li className="cursor-pointer font-press-start flex items-center">
         Resume
            </li>
            <li className="cursor-pointer font-press-start flex items-center">
         Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
