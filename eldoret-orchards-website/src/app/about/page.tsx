'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Eldoret Orchards</h1>
          <p className="text-xl text-gray-600">
            Learn about our journey in providing top-quality fruit seedlings for Kenyan farmers
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/Chief-Consultant.jpg" 
              alt="Eldoret Orchards Team" 
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Eldoret Orchards and Nursery Investment Ltd was founded with a vision to revolutionize fruit farming in Kenya through quality seedlings and expert agricultural guidance.
            </p>
            <p className="text-gray-600 mb-4">
              Located in the highlands of Eldoret, our nursery benefits from ideal growing conditions that allow us to cultivate a wide range of fruit seedlings suitable for various altitudes and climates across Kenya.
            </p>
            <p className="text-gray-600">
              Over the years, we have expanded our offerings from basic citrus varieties to a comprehensive selection of fruit seedlings, including specialty varieties that thrive in Kenyan conditions.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white p-12 rounded-xl shadow-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Our Mission
              </h2>
              <p className="text-gray-600">
                To empower Kenyan farmers with high-quality fruit seedlings, expert agricultural knowledge, and continuous support to improve yields, incomes, and food security across the nation.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Our Vision
              </h2>
              <p className="text-gray-600">
                To be the leading provider of premium fruit seedlings in East Africa, known for innovation, quality, and commitment to sustainable agricultural practices.
              </p>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Pruning Techniques</h3>
              <p className="text-gray-600">
                Our seedlings receive formative pruning from an early stage, encouraging stronger growth patterns and better fruit production in maturity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Correct Grafting Height</h3>
              <p className="text-gray-600">
                We maintain the optimal grafting height for each variety, ensuring proper development and preventing common issues that affect yields.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Rootstocks</h3>
              <p className="text-gray-600">
                We select robust, disease-resistant rootstocks for all our grafted plants, providing seedlings with a strong foundation for healthy growth.
              </p>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-green-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you&apos;re a commercial farmer or a backyard gardener, we invite you to experience the quality and care that goes into every Eldoret Orchards seedling.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 