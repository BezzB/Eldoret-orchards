'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Eldoret Orchards</h3>
            <p className="text-gray-300 mb-4">
              Top-quality fruit seedlings for a healthier future. Expert growing guides and demonstration
              farm in Kipkenyo, Eldoret.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/agronomy-tips" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Agronomy Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#citrus" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Citrus Seedlings
                </Link>
              </li>
              <li>
                <Link href="/products#papaya" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Papaya
                </Link>
              </li>
              <li>
                <Link href="/products#apple" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Apple Seedlings
                </Link>
              </li>
              <li>
                <Link href="/products#avocado" className="text-gray-300 hover:text-orange-300 transition duration-200">
                  Avocado (Hass)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Phone: 0768 666113 / 0724 402174</p>
            <p className="text-gray-300 mb-2">Email: eldoretorchard.nursery@gmail.com</p>
            <p className="text-gray-300 mb-2">Location: Eldoret, Kenya</p>
            <p className="text-gray-300 mb-4">Hours: Always Open</p>
            
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className="text-white hover:text-orange-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12.07C22 6.53 17.47 2 11.93 2S1.86 6.53 1.86 12.07c0 5.01 3.65 9.15 8.44 9.9v-7.01H7.41v-2.9h2.89v-2.2c0-2.86 1.71-4.44 4.31-4.44 1.25 0 2.55.22 2.55.22v2.8h-1.44c-1.41 0-1.85.88-1.85 1.78v2.13h3.15l-.5 2.9h-2.65v7.01c4.8-.75 8.44-4.9 8.44-9.9z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 14.34c-.22.62-.66 1.1-1.27 1.32-.6.22-1.27.33-2 .36-.68.03-1.34.03-2 .03-1.32 0-2.63-.01-3.95-.03-.73-.03-1.4-.14-2-.36-.61-.22-1.05-.7-1.27-1.32-.21-.61-.34-1.25-.34-2.01 0-1.09 0-2.17.01-3.26.01-1.09.01-2.17.01-3.26 0-.76.13-1.4.34-2.01.22-.62.66-1.1 1.27-1.32.6-.22 1.27-.33 2-.36.68-.02 1.34-.02 2-.02 1.32 0 2.63.01 3.95.03.73.03 1.4.14 2 .36.61.22 1.05.7 1.27 1.32.21.61.34 1.25.34 2.01 0 1.09 0 2.17-.01 3.26-.01 1.09-.01 2.17-.01 3.26 0 .76-.13 1.4-.34 2.01z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-orange-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Eldoret Orchards and Nursery Investment Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 