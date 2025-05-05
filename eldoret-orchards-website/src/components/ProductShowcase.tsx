'use client';

import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: 'Pixie Tangerine',
    category: 'Citrus',
    image: '/images/pixie tangerines.jpg',
    description: 'Sweet, seedless, easy-to-peel citrus fruit that grows well in various altitudes.',
    link: '/products#citrus',
  },
  {
    name: 'Papaya Seedlings',
    category: 'Papaya',
    image: '/images/quality papaya seedlings1.jpg',
    description: 'Fast-growing, high-yield papaya varieties suitable for commercial farming.',
    link: '/products#papaya',
  },
  {
    name: 'Apple Seedlings',
    category: 'Apple',
    image: '/images/apple seedlings.jpg',
    description: 'Varieties include Braeburn, Anna, and Golden Dorsett, ideal for highlands.',
    link: '/products#apple',
  },
  {
    name: 'Hass Avocado',
    category: 'Avocado',
    image: '/images/Hass Avocado Seedling.jpg',
    description: 'Premium avocado variety with excellent export potential and local demand.',
    link: '/products#avocado',
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our selection of premium quality fruit seedlings, ready for your farm or garden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-orange-500 mb-1">{product.category}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href={product.link}
                  className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md shadow-lg transition duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase; 