'use client';

import Image from 'next/image';
import { useState } from 'react';

// Product category data
const categories = [
  {
    id: 'citrus',
    name: 'Citrus Seedlings',
    description: 'Our citrus varieties are grafted on quality rootstocks, ensuring healthy growth and excellent production.',
    products: [
      {
        name: 'Pixie Tangerine',
        description: 'Sweet, seedless variety that does well in potted containers and field planting. Available as both potted and field-ready seedlings.',
        image: '/images/pixie tangerines.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Minneola Tangelo',
        description: 'Cross between a grapefruit and a tangerine, with a distinctive knob-like formation at the stem end.',
        image: '/images/pixie seedlings.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Satsuma',
        description: 'Easy to peel, sweet, and nearly seedless. Known for its cold hardiness among citrus varieties.',
        image: '/images/Bear lime seedling.png',
        price: 'Contact for pricing',
      },
      {
        name: 'Mediterranean Sweet',
        description: 'Excellent juice orange with smooth skin and few seeds. Does well in medium to high altitudes.',
        image: '/images/Start Citriculture3.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Washington Navel',
        description: 'Large, seedless, easily-peeled orange with a distinctive navel formation. Ideal for altitudes between 1100-1800m above sea level.',
        image: '/images/Washington navel.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Cleopatra Rootstocks',
        description: 'Premium quality rootstocks for citrus grafting. Disease resistant and adaptable to various soil types.',
        image: '/images/Top quality Cleopatra Rootstocks.jpg',
        price: 'Contact for pricing',
      },
    ],
  },
  {
    id: 'papaya',
    name: 'Papaya',
    description: 'Our papaya seedlings are selected for their disease resistance, productivity, and excellent fruit quality.',
    products: [
      {
        name: 'Quality Papaya Seedlings',
        description: 'Fast-growing variety that begins producing fruit within 8-10 months of planting. Each tree can produce dozens of fruits per year.',
        image: '/images/quality papaya seedlings1.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Hybrid Papaya',
        description: 'Selected for disease resistance and high yields. Produces medium to large fruits with sweet, orange-red flesh.',
        image: '/images/hybriid papaya.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Fresh Papaya Fruits',
        description: 'Lush, ripe papayas grown with care at our demonstration farm in Kipkenyo, Eldoret.',
        image: '/images/When papaya decides.jpg',
        price: 'Seasonal availability',
      },
    ],
  },
  {
    id: 'apple',
    name: 'Apple Seedlings',
    description: 'We offer apple varieties specifically chosen for their adaptability to Kenyan growing conditions and reliable fruit production.',
    products: [
      {
        name: 'Braeburn',
        description: 'Sweet-tart, aromatic apple with red-striped skin. Does well in highland areas of Kenya.',
        image: '/images/apple seedlings.jpg',
        price: 'Ksh 1,000 each',
      },
      {
        name: 'Anna',
        description: 'Low-chill variety that produces medium-sized red apples with a slight sweet flavor. Good for warmer climates.',
        image: '/images/Anna Variety.jpg',
        price: 'Ksh 1,000 each',
      },
      {
        name: 'Golden Dorsett',
        description: 'Golden yellow apple that requires minimal cold hours. Crisp, sweet, and productive in Kenya\'s highlands.',
        image: '/images/apple production.jpg',
        price: 'Ksh 1,000 each',
      },
    ],
  },
  {
    id: 'avocado',
    name: 'Avocado (Hass)',
    description: 'Our Hass avocado seedlings are grafted onto disease-resistant rootstocks for superior performance.',
    products: [
      {
        name: 'Hass Avocado',
        description: 'The world\'s most popular avocado variety, known for its nutty flavor and creamy texture. Our seedlings are available in plenty.',
        image: '/images/Hass Avocado Seedling.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Avocado Seedlings',
        description: 'Carefully grafted and nurtured to ensure strong growth and excellent fruit production once mature.',
        image: '/images/Avacado.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'HASS AVOCADO',
        description: 'Premium quality avocado seedlings for commercial farmers and export-oriented growers.',
        image: '/images/HASS AVOCADO.jpg',
        price: 'Contact for bulk pricing',
      },
    ],
  },
  {
    id: 'other',
    name: 'Other Varieties',
    description: 'We continue to research and introduce new varieties that perform well in Kenyan growing conditions.',
    products: [
      {
        name: 'PY F1 Hybrid',
        description: 'Virus-resistant variety with excellent growth characteristics and yield potential.',
        image: '/images/PY F1 Hybrid.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Tempor Tangerine',
        description: 'Currently under evaluation for commercial release. Shows promising results in flavor and productivity.',
        image: '/images/Tempor Variety of tangerines.jpg',
        price: 'Coming soon',
      },
      {
        name: 'Brazilian Cherry',
        description: 'Exotic fruit with a unique sweet-tart flavor. Adaptable to various growing conditions in Kenya.',
        image: '/images/Brazilian Cherry.jpg',
        price: 'Contact for pricing',
      },
      {
        name: 'Hybrid Guava',
        description: 'Grafted guava variety that produces large, sweet fruits with few seeds.',
        image: '/images/Hybrid Guava Grafted.jpg',
        price: 'Contact for pricing',
      },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('citrus');

  // Find the current category object
  const currentCategory = categories.find((cat) => cat.id === activeCategory) || categories[0];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600">
            Explore our selection of premium quality fruit seedlings for your farm or garden
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-12 max-w-5xl mx-auto">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-md font-medium whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentCategory.name}</h2>
          <p className="text-gray-600">{currentCategory.description}</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentCategory.products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-green-600">{product.price}</span>
                  <a
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Bulk Orders */}
        <div className="bg-green-50 p-8 border border-green-200 rounded-lg text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Looking for Bulk Orders?</h3>
          <p className="text-lg text-gray-600 mb-6">
            We offer special pricing for commercial farmers and bulk purchases. Contact us directly for your specific requirements.
          </p>
          <a
            href="/order"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </div>
  );
} 