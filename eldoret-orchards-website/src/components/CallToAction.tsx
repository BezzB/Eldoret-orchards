'use client';

import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fruit Growing Journey?</h2>
          <p className="text-lg md:text-xl mb-10 text-green-100">
            Whether you&apos;re planning a commercial orchard or a backyard garden, our expert team and quality seedlings will help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/order"
              className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Order Seedlings
            </Link>
            <Link
              href="/demo-farm"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Visit Demo Farm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 