import React, { useState, useEffect } from 'react';

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

  return (
    <nav
      className={`${navbarBackground} fixed top-0 left-0 right-0 z-50 transition duration-300`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-white hover:text-yellow-400 transition duration-300">
              𝓐𝓵𝓪𝓶𝓲𝓷
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
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
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          mobileMenuOpen ? 'block' : 'hidden'
        } md:hidden transition-all duration-300`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-800">
        <a
            href="#home"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
