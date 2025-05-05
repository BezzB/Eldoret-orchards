'use client';

import Image from 'next/image';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'John Kimani',
    role: 'Commercial Farmer, Nakuru',
    quote: 'The pixie tangerine seedlings I purchased from Eldoret Orchards have thrived beyond my expectations. Within two years, my trees started bearing fruit, and the yield has been excellent. Their expert guidance on proper planting and maintenance has been invaluable, especially their advice on fertigation techniques which significantly improved my yield.',
    image: '/images/The next Frontier.jpg',
  },
  {
    id: 2,
    name: 'Sarah Omondi',
    role: 'Agricultural Consultant, Nairobi',
    quote: 'I recommend Eldoret Orchards to all my clients looking for quality fruit seedlings. Their attention to grafting techniques ensures healthy, productive trees with excellent yields. What sets them apart is their focus on root development and their willingness to provide ongoing support even months after purchase.',
    image: '/images/Perfect quality.jpg',
  },
  {
    id: 3,
    name: 'David Mwangi',
    role: 'Small-scale Farmer, Eldoret',
    quote: 'After visiting their demonstration farm in Kipkenyo, I was convinced to start my own small orchard. Their apple seedlings have adapted well to my land, and I&apos;m expecting a good first harvest. The team has been supportive throughout my journey, providing timely advice when I faced challenges with pests.',
    image: '/images/Chief-Consultant.jpg',
  },
  {
    id: 4,
    name: 'Jane Wanjiku',
    role: 'Estate Owner, Kitale',
    quote: 'I transformed my 5-acre estate with fruit trees from Eldoret Orchards. Their Hass avocado seedlings are now producing abundantly, and I&apos;ve even started exporting to regional markets. The consistent quality of their seedlings and the health of their rootstock is unmatched in my experience.',
    image: '/images/The Daisy Tangerine 2 years old.jpg',
  },
  {
    id: 5,
    name: 'Samuel Kipchirchir',
    role: 'Agricultural Teacher, Kericho',
    quote: 'Our school started an agricultural project using seedlings from Eldoret Orchards. The students have learned valuable skills through the process, and the citrus trees are now providing fruit for our school kitchen. The staff at Eldoret Orchards were particularly helpful in designing a suitable project for our educational needs.',
    image: '/images/Start Citriculture4.jpg',
  },
  {
    id: 6,
    name: 'Grace Adhiambo',
    role: 'Restaurant Owner, Kisumu',
    quote: 'I started growing my own fruit to supply my farm-to-table restaurant, and Eldoret Orchards&apos; seedlings have been a game-changer. The papaya trees started producing within months, and my customers always comment on the exceptional flavor of the fruits from these trees.',
    image: '/images/quality papaya seedlings3.jpg',
  },
];

// Success Story data
const successStories = [
  {
    title: 'From Empty Land to Thriving Orchard',
    farmer: 'Robert Kiptanui',
    location: 'Nandi Hills',
    image: '/images/Start Citriculture3.jpg',
    content: `
      <p>Robert had 2 acres of unused land that wasn't suitable for traditional crops due to the sloping terrain. In 2018, he decided to plant 200 apple seedlings from Eldoret Orchards, specifically choosing the Anna and Dorsett Golden varieties that are well-suited to his elevation of 2100m above sea level.</p>
      
      <p>"The first year was about establishing the trees and ensuring proper care," Robert recalls. "The team from Eldoret Orchards visited twice to provide guidance on pruning and fertilization."</p>
      
      <p>By the third year, Robert's orchard began producing marketable fruits. Today, he harvests approximately 3,000kg of apples annually, which he sells to local markets and supermarkets in Eldoret town.</p>
      
      <p>"What began as an experiment has become my main source of income," says Robert. "The initial investment has paid off many times over, and the demand for locally grown apples continues to exceed my supply."</p>
    `,
  },
  {
    title: 'School Project Becomes Community Resource',
    farmer: 'Eldoret Technical Institute',
    location: 'Uasin Gishu County',
    image: '/images/Sassy Brazilian Cherry.jpg',
    content: `
      <p>In 2019, Eldoret Technical Institute started an agricultural training program with a diverse orchard of 50 fruit trees from Eldoret Orchards, including citrus, apple, and avocado varieties.</p>
      
      <p>"Our goal was to create a living laboratory for our students," explains Principal Janet Kosgei. "What we didn't expect was how quickly it would become a resource for the entire community."</p>
      
      <p>The institute now runs regular workshops for local farmers, using their mature trees as demonstration models. They've expanded to include a small nursery where they propagate seedlings under the guidance of Eldoret Orchards' experts.</p>
      
      <p>"We've trained over 300 farmers in the past two years," Janet notes. "Many have gone on to establish successful orchards of their own, creating a multiplier effect from our initial investment."</p>
    `,
  },
  {
    title: 'Papaya Farming Transforms Family&apos;s Fortunes',
    farmer: 'The Mutai Family',
    location: 'Kitale',
    image: '/images/When papaya decides.jpg',
    content: `
      <p>When drought affected their maize farm three years in a row, the Mutai family decided to diversify with papaya farming using PY F1 Hybrid seedlings from Eldoret Orchards.</p>
      
      <p>"We started with just half an acre as a trial," explains Peter Mutai. "The trees began bearing fruit within 9 months, and we were harvesting twice a week."</p>
      
      <p>The quick returns and consistent income prompted the family to expand to 2 acres of papaya cultivation. They now supply fruits to hotels in Kitale and Eldoret, as well as to traders who export to South Sudan.</p>
      
      <p>"The beauty of papaya is that it produces year-round," says Peter's wife, Mercy. "This has given us consistent cash flow unlike seasonal crops, allowing us to pay school fees without taking loans."</p>
      
      <p>The family has now installed drip irrigation and is experimenting with inter-cropping vegetables between the papaya trees to maximize land use.</p>
    `,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Customer Testimonials</h1>
          <p className="text-xl text-gray-600">
            Hear from farmers and agricultural professionals who have experienced the quality of our seedlings
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-60">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.834-1.029 1.56-1.297.723-.261 1.371-.36 1.93-.296.561.062 1.023.226 1.385.493.363.266.61.58.742.945.13.365.195.645.195.84 0 .525-.058 1.032-.174 1.524-.115.493-.27.937-.466 1.33-.196.394-.432.714-.706.96-.274.247-.546.443-.814.587-.268.144-.45.227-.546.25z"></path>
                  </svg>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              Discover how our seedlings have transformed farms and livelihoods across Kenya
            </p>
          </div>

          {/* Success Stories */}
          {successStories.map((story, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-16 bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="lg:w-2/5 relative">
                <div className="relative h-80 lg:h-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h3>
                <p className="text-green-600 font-medium mb-6">{story.farmer} • {story.location}</p>
                <div 
                  className="prose prose-green max-w-none"
                  dangerouslySetInnerHTML={{ __html: story.content }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Share Your Story */}
        <div className="bg-green-700 text-white rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6">Share Your Story With Us</h2>
              <p className="text-lg mb-8">
                Have you had success with our seedlings? We&apos;d love to hear about your experience and potentially feature your story on our website.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-green-700 hover:bg-green-100 px-8 py-3 rounded-md font-medium transition duration-300 shadow-lg"
              >
                Submit Your Story
              </a>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="/images/typical citrus tree.jpg"
                alt="Share your success story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 