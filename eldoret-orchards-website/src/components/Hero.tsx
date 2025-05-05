'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/pixie seedlings.jpg"
          alt="Eldoret Orchards"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Top-Quality Fruit Seedlings for a Healthier Future
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Expert growing techniques, demonstration farm, and wide variety of premium grafted seedlings in Eldoret.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/demo-farm"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Visit the Demo Farm
            </Link>
            <Link
              href="/products"
              className="bg-white hover:bg-gray-100 text-green-800 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 