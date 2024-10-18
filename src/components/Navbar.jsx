import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState('bg-transparent');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground('bg-gray-800');
      } else {
        setNavbarBackground('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleLinkClick = () => setMobileMenuOpen(false); 

  return (
    <nav
      className={`${navbarBackground} fixed top-0 left-0 right-0 z-50 transition duration-300`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-3xl font-bold text-white hover:text-yellow-400 transition duration-300">
            𝓐𝓵𝓪𝓶𝓲𝓷
          </h1>
          <div className="hidden md:flex space-x-6 ml-auto">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={handleLinkClick}
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden transition-all duration-300`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-800">
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleLinkClick}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
