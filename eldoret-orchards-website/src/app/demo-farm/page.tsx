'use client';

import Image from 'next/image';

export default function DemoFarmPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Demo Farm in Kipkenyo</h1>
          <p className="text-xl text-gray-600">
            Experience our techniques and see mature fruit trees in action at our demonstration farm
          </p>
        </div>

        {/* Farm Hero Section */}
        <div className="relative h-96 rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/Start Citriculture5.jpg"
            alt="Eldoret Orchards Demo Farm"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Visit Our Demo Farm</h2>
              <p className="text-xl mb-6">
                Located in Kipkenyo, Eldoret, our demonstration farm showcases various fruit trees at different stages of growth.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What to Expect at Our Demo Farm</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Mature Fruit Trees</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Observe mature fruit trees of various species, including citrus, apple, avocado, and papaya. See firsthand how proper care and maintenance result in healthy, productive trees.
              </p>
              <div className="relative h-60 rounded-lg overflow-hidden mt-auto">
                <Image
                  src="/images/Start Citriculture7.jpg"
                  alt="Mature Fruit Trees"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Expert Demonstrations</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our agricultural experts provide demonstrations of key techniques such as proper pruning, pest management, and irrigation practices. Learn practical skills you can apply to your own farm.
              </p>
              <div className="relative h-60 rounded-lg overflow-hidden mt-auto">
                <Image
                  src="/images/Chief-Consultant.jpg"
                  alt="Expert Demonstrations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Seedling Nursery</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Tour our seedling production area, where you can see how we graft, plant, and nurture young seedlings. Understand the entire journey from grafting to field-ready plants.
              </p>
              <div className="relative h-60 rounded-lg overflow-hidden mt-auto">
                <Image
                  src="/images/Potted Pixie tangerine.jpg"
                  alt="Seedling Nursery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Purchase Seedlings</h3>
              </div>
              <p className="text-gray-600 mb-6">
                After your tour, you can purchase seedlings directly from our farm. Get advice on which varieties would work best for your specific location, soil type, and farming goals.
              </p>
              <div className="relative h-60 rounded-lg overflow-hidden mt-auto">
                <Image
                  src="/images/The best variety of papaya.jpg"
                  alt="Purchase Seedlings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visit Information */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Planning Your Visit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hours
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                <li>Saturday: 9:00 AM - 4:00 PM</li>
                <li>Sunday: Closed (Available by appointment)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              <p className="text-gray-600">
                Kipkenyo, Eldoret, Kenya<br />
                Approximately 15 minutes from Eldoret town center
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </h3>
              <p className="text-gray-600">
                Phone: 0768 666113 / 0724 402174<br />
                Email: eldoretorchard.nursery@gmail.com
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Scheduling a Tour</h3>
            <p className="text-gray-600 mb-6">
              While walk-ins are welcome during business hours, we recommend scheduling your visit in advance, especially for group tours or if you&apos;d like a guided demonstration with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-center"
              >
                Schedule Online
              </a>
              <a
                href="tel:+254768666113"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition duration-300 text-center"
              >
                Call to Book
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Visitors Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.834-1.029 1.56-1.297.723-.261 1.371-.36 1.93-.296.561.062 1.023.226 1.385.493.363.266.61.58.742.945.13.365.195.645.195.84 0 .525-.058 1.032-.174 1.524-.115.493-.27.937-.466 1.33-.196.394-.432.714-.706.96-.274.247-.546.443-.814.587-.268.144-.45.227-.546.25z"></path>
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">
                &quot;Visiting the demo farm was a game-changer for my small orchard. Seeing the mature trees and learning proper pruning techniques directly from the experts gave me confidence to expand my fruit production.&quot;
              </p>
              <div className="font-medium">
                <p className="text-gray-800">David Kiprop</p>
                <p className="text-gray-500">Farmer, Kitale</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.834-1.029 1.56-1.297.723-.261 1.371-.36 1.93-.296.561.062 1.023.226 1.385.493.363.266.61.58.742.945.13.365.195.645.195.84 0 .525-.058 1.032-.174 1.524-.115.493-.27.937-.466 1.33-.196.394-.432.714-.706.96-.274.247-.546.443-.814.587-.268.144-.45.227-.546.25z"></path>
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">
                &quot;I was amazed by the variety of seedlings available at the demo farm. The staff took time to explain which varieties would work best at my altitude, and the seedlings I purchased have established very well.&quot;
              </p>
              <div className="font-medium">
                <p className="text-gray-800">Jane Wambui</p>
                <p className="text-gray-500">Agricultural Teacher, Nakuru</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.834-1.029 1.56-1.297.723-.261 1.371-.36 1.93-.296.561.062 1.023.226 1.385.493.363.266.61.58.742.945.13.365.195.645.195.84 0 .525-.058 1.032-.174 1.524-.115.493-.27.937-.466 1.33-.196.394-.432.714-.706.96-.274.247-.546.443-.814.587-.268.144-.45.227-.546.25z"></path>
                </svg>
              </div>
              <p className="text-gray-600 italic mb-6">
                &quot;Our agricultural student group benefited tremendously from our visit to Eldoret Orchards. The practical demonstrations and hands-on experience complemented our theoretical knowledge perfectly.&quot;
              </p>
              <div className="font-medium">
                <p className="text-gray-800">Prof. Michael Ochieng</p>
                <p className="text-gray-500">University of Eldoret</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-green-700 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Visit Our Demo Farm?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience firsthand the quality of our seedlings and learn valuable farming techniques from our experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Schedule a Visit
            </a>
            <a
              href="/products"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
            >
              Browse Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 