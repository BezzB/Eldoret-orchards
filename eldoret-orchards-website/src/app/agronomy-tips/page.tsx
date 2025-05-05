'use client';

import { useState } from 'react';
import Image from 'next/image';

// Agronomy tips data
const agronomyTips = [
  {
    id: 'pruning',
    title: 'Proper Formative Pruning',
    image: '/images/typical citrus tree.jpg',
    content: `
      <h3>The Importance of Proper Pruning</h3>
      <p>Formative pruning is essential for developing strong tree structure and optimizing fruit production. For young fruit trees, proper pruning helps establish a strong framework that will support heavy fruit loads in the future.</p>
      
      <h4>Key Pruning Tips:</h4>
      <ul>
        <li><strong>Timing:</strong> The best time to prune most fruit trees in Kenya is during the dry season when the tree is relatively dormant.</li>
        <li><strong>Central Leader:</strong> For apples and other pome fruits, maintain a clear central leader (main trunk) with well-spaced scaffold branches.</li>
        <li><strong>Open Center:</strong> For citrus and stone fruits, an open center or vase shape allows light to reach all parts of the tree.</li>
        <li><strong>Remove:</strong> Always remove dead, diseased, or crossing branches, as well as any water sprouts or suckers from the rootstock.</li>
        <li><strong>Tools:</strong> Use clean, sharp tools and disinfect them between trees to prevent spreading diseases.</li>
      </ul>
      
      <h4>Specific Guidance for Different Fruits:</h4>
      <p><strong>Citrus:</strong> Light pruning is generally sufficient. Remove water sprouts, crossed branches, and thin out dense areas to improve air circulation.</p>
      <p><strong>Avocado:</strong> Minimal pruning is needed. Focus on shaping the tree in its first 3 years.</p>
      <p><strong>Apple:</strong> Requires more intensive pruning to develop a strong structure and promote fruiting wood.</p>
      <p><strong>Papaya:</strong> Remove lower leaves as they yellow, and prune to a single stem for commercial production.</p>
    `,
  },
  {
    id: 'soil-fertility',
    title: 'Soil Fertility & Crop Nutrition',
    image: '/images/The freshest Quality.jpg',
    content: `
      <h3>Maintaining Optimal Soil Fertility</h3>
      <p>Healthy soil is the foundation of productive fruit farming. Different fruit crops have specific nutritional requirements that must be met for optimal growth and yield.</p>
      
      <h4>Soil Testing:</h4>
      <p>Always begin with a soil test to understand your soil's current fertility status. This will help you apply only what is needed, saving money and preventing environmental issues from over-fertilization.</p>
      
      <h4>Key Nutrients for Fruit Trees:</h4>
      <ul>
        <li><strong>Nitrogen (N):</strong> Essential for vegetative growth. Too much can promote excessive leafy growth at the expense of fruit production.</li>
        <li><strong>Phosphorus (P):</strong> Critical for root development, flowering, and fruit set.</li>
        <li><strong>Potassium (K):</strong> Improves fruit quality, disease resistance, and helps regulate water in plants.</li>
        <li><strong>Calcium (Ca):</strong> Important for cell wall strength and fruit quality. Deficiency can lead to disorders like bitter pit in apples.</li>
        <li><strong>Micronutrients:</strong> Elements like zinc, iron, and boron are needed in small amounts but are essential for proper growth.</li>
      </ul>
      
      <h4>Organic Matter:</h4>
      <p>Incorporate compost or well-rotted manure to improve soil structure, water retention, and microbial activity. Apply mulch around trees (keeping it away from the trunk) to conserve moisture and add organic matter as it breaks down.</p>
      
      <h4>Fertilizer Application:</h4>
      <p>Split fertilizer applications throughout the growing season rather than applying all at once.</p>
      <p>For young trees, focus on balanced nutrition to establish strong growth.</p>
      <p>For mature, bearing trees, adjust the balance toward phosphorus and potassium to support fruit production.</p>
    `,
  },
  {
    id: 'yield-fertilizer',
    title: 'Expected Yield vs. Fertilizer Use',
    image: '/images/vega F1.jpg',
    content: `
      <h3>Optimizing Fertilizer Use for Maximum Yield</h3>
      <p>Understanding the relationship between fertilizer application and expected yield can help farmers make more economical decisions and avoid waste.</p>
      
      <h4>General Guidelines:</h4>
      <p>Fertilizer needs increase as trees mature and fruit loads increase. However, the relationship is not linear - doubling fertilizer rarely doubles yield.</p>
      
      <h4>Yield Expectations by Crop (Mature Trees):</h4>
      <ul>
        <li><strong>Citrus (e.g., Pixie):</strong> 20-40kg per tree annually with proper management.</li>
        <li><strong>Avocado (Hass):</strong> 100-200 fruits per tree in good years.</li>
        <li><strong>Apple:</strong> 15-25kg per tree depending on variety and spacing.</li>
        <li><strong>Papaya:</strong> 25-50kg per plant over its productive life.</li>
      </ul>
      
      <h4>Fertilizer Recommendations:</h4>
      <p><strong>Young Non-Bearing Trees:</strong> Focus on nitrogen for establishment. Apply approximately 100-200g of balanced NPK fertilizer 3-4 times per year.</p>
      <p><strong>Bearing Trees:</strong> Increase potassium and phosphorus to support fruit production.</p>
      <ul>
        <li><strong>Citrus:</strong> 500g-1kg of NPK 17:17:17 split into 3-4 applications per year.</li>
        <li><strong>Avocado:</strong> 1-2kg of NPK 12:24:12 annually, split into several applications.</li>
        <li><strong>Apple:</strong> 300-500g NPK plus additional potassium during fruit development.</li>
      </ul>
      
      <h4>Signs of Over-Fertilization:</h4>
      <ul>
        <li>Excessive vegetative growth but poor fruit set</li>
        <li>Leaf burn or yellowing</li>
        <li>Fruit with poor flavor or keeping quality</li>
        <li>Salt buildup in soil</li>
      </ul>
      
      <h4>Signs of Under-Fertilization:</h4>
      <ul>
        <li>Yellowing leaves (especially older leaves)</li>
        <li>Reduced growth</li>
        <li>Small fruit size</li>
        <li>Premature fruit drop</li>
      </ul>
    `,
  },
  {
    id: 'altitude',
    title: 'Choosing Altitude-Appropriate Plants',
    image: '/images/The Daisy Tangerine 2 years old.jpg',
    content: `
      <h3>Selecting Varieties for Your Elevation</h3>
      <p>Kenya's diverse elevations allow for growing a wide range of fruit crops, but each variety has its optimal altitude range. Choosing the right variety for your location is crucial for success.</p>
      
      <h4>Altitude Ranges in Kenya:</h4>
      <ul>
        <li><strong>Low altitude:</strong> 0-1200m above sea level</li>
        <li><strong>Mid altitude:</strong> 1200-1800m above sea level</li>
        <li><strong>High altitude:</strong> Above 1800m above sea level</li>
      </ul>
      
      <h4>Suitable Crops by Altitude:</h4>
      
      <h5>Low Altitude (0-1200m):</h5>
      <ul>
        <li>Mangoes (most varieties)</li>
        <li>Papayas (Solo types, PY F1 Hybrid)</li>
        <li>Coconuts</li>
        <li>Pineapples</li>
        <li>Guavas</li>
        <li>Some citrus varieties (select heat-tolerant types)</li>
      </ul>
      
      <h5>Mid Altitude (1200-1800m):</h5>
      <ul>
        <li>Most citrus varieties (Pixie, Washington Navel, Minneola Tangelo)</li>
        <li>Avocados (Hass, Fuerte)</li>
        <li>Papayas (with proper care)</li>
        <li>Passion fruit</li>
        <li>Some apple varieties (Anna, Dorsett Golden) with proper management</li>
      </ul>
      
      <h5>High Altitude (Above 1800m):</h5>
      <ul>
        <li>Apples (most varieties thrive, including Braeburn)</li>
        <li>Plums</li>
        <li>Pears</li>
        <li>Peaches (low-chill varieties)</li>
        <li>Strawberries</li>
        <li>Select citrus varieties (Meyer lemon, some mandarins)</li>
      </ul>
      
      <h4>Other Considerations:</h4>
      <p><strong>Microclimate:</strong> Local conditions like slope aspect, proximity to water bodies, and wind patterns can create microclimates that expand or limit what can be grown.</p>
      <p><strong>Cold Air Drainage:</strong> Cold air flows downhill. Avoid planting cold-sensitive crops in low spots or "frost pockets."</p>
      <p><strong>Climate Change Impact:</strong> Be aware that traditional altitude recommendations may shift as climate patterns change.</p>
    `,
  },
];

export default function AgronomyTipsPage() {
  const [activeTab, setActiveTab] = useState('pruning');
  
  // Find the current tip object
  const activeTip = agronomyTips.find((tip) => tip.id === activeTab) || agronomyTips[0];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Agronomy Tips</h1>
          <p className="text-xl text-gray-600">
            Expert advice for growing healthy, productive fruit trees in Kenya
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto pb-4 mb-12">
            <div className="flex space-x-2">
              {agronomyTips.map((tip) => (
                <button
                  key={tip.id}
                  className={`px-6 py-3 rounded-md font-medium whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tip.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-100'
                  }`}
                  onClick={() => setActiveTab(tip.id)}
                >
                  {tip.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tip Content */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-72 lg:h-96">
              <Image
                src={activeTip.image}
                alt={activeTip.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 sm:p-10 text-white">
                  <h2 className="text-3xl font-bold mb-2">{activeTip.title}</h2>
                </div>
              </div>
            </div>
            
            <div className="p-6 sm:p-10">
              <div 
                className="prose prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: activeTip.content }}
              />
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 italic">
                  Note: These recommendations are general guidelines. Specific conditions at your farm may require adjustments.
                  For personalized advice, contact our agronomists at Eldoret Orchards.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-green-50 p-8 rounded-lg border border-green-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Need Expert Advice?</h3>
                <p className="text-gray-600">
                  Visit our demonstration farm in Kipkenyo, Eldoret to see these principles in action.
                </p>
              </div>
              <a
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 shadow-lg"
              >
                Contact Our Agronomists
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 