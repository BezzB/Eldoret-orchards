'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'John Kimani',
    role: 'Commercial Farmer, Nakuru',
    quote: 'The pixie tangerine seedlings I purchased from Eldoret Orchards have thrived beyond my expectations. Their expert guidance on proper planting and maintenance has been invaluable.',
    image: '/images/The next Frontier.jpg',
  },
  {
    name: 'Sarah Omondi',
    role: 'Agricultural Consultant, Nairobi',
    quote: 'I recommend Eldoret Orchards to all my clients looking for quality fruit seedlings. Their attention to grafting techniques ensures healthy, productive trees with excellent yields.',
    image: '/images/Perfect quality.jpg',
  },
  {
    name: 'David Mwangi',
    role: 'Small-scale Farmer, Eldoret',
    quote: 'After visiting their demonstration farm in Kipkenyo, I was convinced to start my own small orchard. Their apple seedlings have adapted well to my land, and I\'m expecting a good first harvest.',
    image: '/images/Chief-Consultant.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from farmers and agricultural professionals who have experienced the quality of our seedlings.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-green-600 mb-4">
                  <svg className="w-10 h-10 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.834-1.029 1.56-1.297.723-.261 1.371-.36 1.93-.296.561.062 1.023.226 1.385.493.363.266.61.58.742.945.13.365.195.645.195.84 0 .525-.058 1.032-.174 1.524-.115.493-.27.937-.466 1.33-.196.394-.432.714-.706.96-.274.247-.546.443-.814.587-.268.144-.45.227-.546.25zm-3.877 1.53c.213 0 .417-.022.613-.066.194-.045.376-.111.54-.197.166-.085.32-.196.46-.334.14-.138.253-.306.337-.504.085-.198.128-.427.128-.687 0-.3-.085-.556-.255-.77-.17-.213-.427-.32-.77-.32-.3 0-.556.096-.77.287-.214.192-.384.436-.51.734-.125.298-.214.598-.266.9-.05.3-.08.536-.08.707zm11.008-1.614c0-.88-.23-1.618-.69-2.217-.326-.412-.77-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.834-1.029 1.56-1.297.723-.261 1.37-.36 1.93-.296.56.062 1.022.226 1.384.493.362.266.61.58.742.945.13.365.195.645.195.84 0 .525-.058 1.032-.174 1.524-.115.493-.27.937-.466 1.33-.196.394-.432.714-.706.96-.274.247-.546.443-.814.587-.268.144-.45.227-.546.25zm-3.877 1.53c.213 0 .417-.022.613-.066.194-.045.376-.111.54-.197.166-.085.32-.196.46-.334.14-.138.253-.306.337-.504.085-.198.128-.427.128-.687 0-.3-.085-.556-.255-.77-.17-.213-.427-.32-.77-.32-.3 0-.556.096-.77.287-.214.192-.384.436-.51.734-.125.298-.214.598-.266.9-.05.3-.08.536-.08.707z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button 
                className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition duration-300"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition duration-300"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 