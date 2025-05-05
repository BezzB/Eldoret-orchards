'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-orange-400">Eldoret</span>
            <span className="ml-1">Orchards</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-orange-300 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-300 transition duration-200">
              About Us
            </Link>
            <Link href="/products" className="hover:text-orange-300 transition duration-200">
              Products
            </Link>
            <Link href="/agronomy-tips" className="hover:text-orange-300 transition duration-200">
              Agronomy Tips
            </Link>
            <Link href="/demo-farm" className="hover:text-orange-300 transition duration-200">
              Demo Farm
            </Link>
            <Link href="/gallery" className="hover:text-orange-300 transition duration-200">
              Gallery
            </Link>
            <Link href="/testimonials" className="hover:text-orange-300 transition duration-200">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-orange-300 transition duration-200">
              Contact
            </Link>
            <Link 
              href="/order" 
              className="bg-orange-500 px-4 py-1 rounded-md hover:bg-orange-600 transition duration-200"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <Link href="/" className="hover:text-orange-300 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-orange-300 transition duration-200">
              About Us
            </Link>
            <Link href="/products" className="hover:text-orange-300 transition duration-200">
              Products
            </Link>
            <Link href="/agronomy-tips" className="hover:text-orange-300 transition duration-200">
              Agronomy Tips
            </Link>
            <Link href="/demo-farm" className="hover:text-orange-300 transition duration-200">
              Demo Farm
            </Link>
            <Link href="/gallery" className="hover:text-orange-300 transition duration-200">
              Gallery
            </Link>
            <Link href="/testimonials" className="hover:text-orange-300 transition duration-200">
              Testimonials
            </Link>
            <Link href="/contact" className="hover:text-orange-300 transition duration-200">
              Contact
            </Link>
            <Link 
              href="/order" 
              className="bg-orange-500 px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200 inline-block w-fit"
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 