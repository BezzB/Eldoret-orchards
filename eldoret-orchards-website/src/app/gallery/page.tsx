'use client';

import { useState } from 'react';
import Image from 'next/image';

// Define TypeScript interface for gallery categories
interface GalleryCategory {
  id: string;
  name: string;
}

// Define TypeScript interface for gallery images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  caption: string;
}

// Agronomy tips data
const galleryCategories: GalleryCategory[] = [
  {
    id: 'all',
    name: 'All Photos',
  },
  {
    id: 'seedlings',
    name: 'Seedlings',
  },
  {
    id: 'farm',
    name: 'Demo Farm',
  },
  {
    id: 'fruits',
    name: 'Fruits & Produce',
  },
  {
    id: 'team',
    name: 'Our Team',
  },
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/pixie tangerines.jpg',
    alt: 'Pixie Tangerines',
    category: 'fruits',
    caption: 'Fresh Pixie tangerines harvested from our demo farm.',
  },
  {
    id: 2,
    src: '/images/Potted Pixie tangerine.jpg',
    alt: 'Potted Pixie Tangerine Seedlings',
    category: 'seedlings',
    caption: 'Healthy potted Pixie tangerine seedlings ready for planting.',
  },
  {
    id: 3,
    src: '/images/Chief-Consultant.jpg',
    alt: 'Chief Consultant - Pomologist',
    category: 'team',
    caption: 'Our Chief Consultant specializing in plant nutrition and pomology.',
  },
  {
    id: 4,
    src: '/images/quality papaya seedlings1.jpg',
    alt: 'Quality Papaya Seedlings',
    category: 'seedlings',
    caption: 'Premium quality papaya seedlings with strong root systems.',
  },
  {
    id: 5,
    src: '/images/When papaya decides.jpg',
    alt: 'Ripe Papaya',
    category: 'fruits',
    caption: 'Ripe papaya fruit from our high-yielding varieties.',
  },
  {
    id: 6,
    src: '/images/Start Citriculture7.jpg',
    alt: 'Citrus Farming',
    category: 'farm',
    caption: 'A section of our citrus demonstration farm in Kipkenyo.',
  },
  {
    id: 7,
    src: '/images/apple seedlings.jpg',
    alt: 'Apple Seedlings',
    category: 'seedlings',
    caption: 'Young apple seedlings cultivated for optimal growth in Kenyan highlands.',
  },
  {
    id: 8,
    src: '/images/apple production.jpg',
    alt: 'Apple Production',
    category: 'fruits',
    caption: 'Apple trees in production at our demonstration farm.',
  },
  {
    id: 9,
    src: '/images/Start Citriculture5.jpg',
    alt: 'Citrus Farm Overview',
    category: 'farm',
    caption: 'Aerial view of our citrus demonstration farm.',
  },
  {
    id: 10,
    src: '/images/Hass Avocado Seedling.jpg',
    alt: 'Hass Avocado Seedling',
    category: 'seedlings',
    caption: 'Premium Hass avocado seedling grafted on disease-resistant rootstock.',
  },
  {
    id: 11,
    src: '/images/HASS AVOCADO.jpg',
    alt: 'Hass Avocado',
    category: 'fruits',
    caption: 'Mature Hass avocados ready for harvesting.',
  },
  {
    id: 12,
    src: '/images/Start Citriculture4.jpg',
    alt: 'Farming Techniques',
    category: 'farm',
    caption: 'Demonstration of proper farming techniques at our farm.',
  },
  {
    id: 13,
    src: '/images/Washington navel.jpg',
    alt: 'Washington Navel Orange',
    category: 'fruits',
    caption: 'Washington Navel oranges, perfect for fresh consumption.',
  },
  {
    id: 14,
    src: '/images/typical citrus tree.jpg',
    alt: 'Typical Citrus Tree',
    category: 'farm',
    caption: 'A well-maintained citrus tree showing ideal structure and pruning.',
  },
  {
    id: 15,
    src: '/images/Top quality Cleopatra Rootstocks.jpg',
    alt: 'Cleopatra Rootstocks',
    category: 'seedlings',
    caption: 'Top quality Cleopatra rootstocks for citrus grafting.',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Filter images based on active category
  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  // Open image modal
  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">
            Explore our collection of images showcasing our seedlings, farm, and produce
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 mb-12 max-w-5xl mx-auto">
          <div className="flex space-x-2">
            {galleryCategories.map((category) => (
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openModal(image)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-700 font-medium text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-500">There are no images in this category yet.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white rounded-lg overflow-hidden">
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                onClick={closeModal}
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-96 md:h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.alt}</h3>
                <p className="text-gray-600">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 