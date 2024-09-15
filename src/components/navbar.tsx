import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import LogoImage from '../assets/logo/logo-transparent-png.png';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition-all duration-500 ease-in-out ${
        scrolling ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={LogoImage}
            alt="NetEra DigiNest Logo"
            className={`h-12 w-auto transition-transform duration-500 ${
              scrolling ? 'scale-110' : 'scale-130'
            }`}
          />
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a
            href="#services"
            className={`transition-colors duration-300 ease-in-out ${
              scrolling ? 'text-red-600' : 'text-white'
            } hover:text-red-400`}
          >
            Services
          </a>
          <a
            href="#about"
            className={`transition-colors duration-300 ease-in-out ${
              scrolling ? 'text-red-600' : 'text-white'
            } hover:text-red-400`}
          >
            À propos
          </a>
          <a
            href="#temoignages"
            className={`transition-colors duration-300 ease-in-out ${
              scrolling ? 'text-red-600' : 'text-white'
            } hover:text-red-400`}
          >
            Témoignages
          </a>
          <a
            href="#contact"
            className={`transition-colors duration-300 ease-in-out ${
              scrolling ? 'text-red-600' : 'text-white'
            } hover:text-red-400`}
          >
            Contact
          </a>
        </div>
        {/* Icône menu pour mobile */}
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      {/* Menu mobile */}
      <div
        className={`md:hidden bg-white text-black flex flex-col items-center transition-all duration-300 ${
          navOpen ? 'max-h-60' : 'max-h-0 overflow-hidden'
        }`}
      >
        <a href="#services" className="py-2 text-lg text-black hover:text-red-600 ">
          Services
        </a>
        <a href="#about" className="py-2 text-lg text-black  hover:text-red-600">
          À propos
        </a>
        <a href="#testimonials" className="py-2 text-lg text-black  hover:text-red-600">
          Témoignages
        </a>
        <a href="#contact" className="py-2 text-lg text-black  hover:text-red-600">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
