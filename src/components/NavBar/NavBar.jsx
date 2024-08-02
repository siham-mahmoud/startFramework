import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navy fixed top-0 right-0 left-0 mb-2 z-10">
      <div className="pb-2 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
        <NavLink to="/" className="logo-1 font-bold whitespace-nowrap text-white uppercase text-2xl">Start Framework</NavLink>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={` w-1/2 md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col ms-auto  md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <NavLink to="about" className="block text-base uppercase font-bold py-2 px-3 text-white" aria-current="page">About</NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="block text-base uppercase font-bold py-2 px-3 text-white" aria-current="page">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="contact" className="block text-base uppercase font-bold py-2 px-3 text-white" aria-current="page">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
