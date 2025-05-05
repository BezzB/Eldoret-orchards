'use client';

import { useState } from 'react';

// Product categories for order form
const productCategories = [
  {
    name: 'Citrus Seedlings',
    options: [
      'Pixie Tangerine',
      'Minneola Tangelo',
      'Satsuma',
      'Mediterranean Sweet',
      'Washington Navel',
      'Cleopatra Rootstocks',
    ],
  },
  {
    name: 'Papaya',
    options: [
      'Quality Papaya Seedlings',
      'Hybrid Papaya',
    ],
  },
  {
    name: 'Apple Seedlings',
    options: [
      'Braeburn',
      'Anna',
      'Golden Dorsett',
    ],
  },
  {
    name: 'Avocado',
    options: [
      'Hass Avocado',
    ],
  },
  {
    name: 'Other Varieties',
    options: [
      'PY F1 Hybrid',
      'Brazilian Cherry',
      'Hybrid Guava',
      'Other (Please specify)',
    ],
  },
];

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    county: '',
    orderType: 'individual',
    products: [{ product: '', quantity: 1 }],
    preferredContact: 'phone',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (index: number, field: string, value: string | number) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };
    setFormData((prev) => ({ ...prev, products: updatedProducts }));
  };

  const addProduct = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { product: '', quantity: 1 }],
    }));
  };

  const removeProduct = (index: number) => {
    if (formData.products.length > 1) {
      const updatedProducts = [...formData.products];
      updatedProducts.splice(index, 1);
      setFormData((prev) => ({ ...prev, products: updatedProducts }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        county: '',
        orderType: 'individual',
        products: [{ product: '', quantity: 1 }],
        preferredContact: 'phone',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Seedlings</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to request your seedlings. Our team will get back to you with availability and pricing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white p-12 rounded-lg shadow-md text-center">
              <div className="text-green-600 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Thank You for Your Order!</h3>
              <p className="text-gray-600 text-lg mb-6">
                We&apos;ve received your order request and will contact you shortly to confirm availability and pricing.
              </p>
              <p className="text-gray-600 mb-8">
                For urgent inquiries, please call us at 0768 666113 / 0724 402174.
              </p>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition duration-300"
                onClick={() => setIsSubmitted(false)}
              >
                Place Another Order
              </button>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredContact" className="block text-gray-700 font-medium mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="phone">Phone Call</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Information</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                        Delivery Address/Location
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="county" className="block text-gray-700 font-medium mb-2">
                        County
                      </label>
                      <input
                        type="text"
                        id="county"
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Order Type */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Type</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="orderType"
                        value="individual"
                        checked={formData.orderType === 'individual'}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-green-600"
                      />
                      <span className="ml-2 text-gray-700">Individual/Small Farm</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="orderType"
                        value="commercial"
                        checked={formData.orderType === 'commercial'}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-green-600"
                      />
                      <span className="ml-2 text-gray-700">Commercial Farm</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="orderType"
                        value="wholesale"
                        checked={formData.orderType === 'wholesale'}
                        onChange={handleChange}
                        className="form-radio h-5 w-5 text-green-600"
                      />
                      <span className="ml-2 text-gray-700">Wholesale/Reseller</span>
                    </label>
                  </div>
                </div>

                {/* Product Selection */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Selection</h2>
                  
                  {formData.products.map((product, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 mb-4 p-4 border border-gray-200 rounded-md">
                      <div className="flex-grow">
                        <label htmlFor={`product-${index}`} className="block text-gray-700 font-medium mb-2">
                          Seedling Type
                        </label>
                        <select
                          id={`product-${index}`}
                          value={product.product}
                          onChange={(e) => handleProductChange(index, 'product', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        >
                          <option value="">Select a product</option>
                          {productCategories.map((category) => (
                            <optgroup key={category.name} label={category.name}>
                              {category.options.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                      <div className="w-full md:w-32">
                        <label htmlFor={`quantity-${index}`} className="block text-gray-700 font-medium mb-2">
                          Quantity
                        </label>
                        <input
                          type="number"
                          id={`quantity-${index}`}
                          value={product.quantity}
                          onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value) || 1)}
                          min="1"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div className="flex items-end mb-2">
                        <button
                          type="button"
                          onClick={() => removeProduct(index)}
                          className="text-red-500 hover:text-red-700 transition duration-200"
                          disabled={formData.products.length <= 1}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addProduct}
                    className="mt-2 flex items-center text-green-600 hover:text-green-800 transition duration-200"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Another Product
                  </button>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Additional Notes or Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Any specific requirements, preferred delivery date, questions, etc."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Submit Order Request'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Information Note */}
          <div className="mt-8 bg-green-50 p-6 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Process Information</h3>
            <p className="text-gray-600 mb-4">
              After submitting your order request, our team will contact you to confirm availability, pricing, and delivery options.
              Payment details will be provided upon confirmation.
            </p>
            <p className="text-gray-600">
              For urgent orders or bulk purchases, please call us directly at 0768 666113 / 0724 402174.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 