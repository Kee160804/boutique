'use client'

import Image from 'next/image'
import { FiShoppingCart } from 'react-icons/fi'

const featuredProducts = [
  { id: 1, name: 'Cocktail jacket collection', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 2, name: 'Linen dress with a floral pattern', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 3, name: 'Black leather jacket', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 4, name: 'White blouse with a black collar', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 5, name: 'Blue denim skirt', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 6, name: 'Red and white striped shirt', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 7, name: 'Black and white checkered top', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 8, name: 'White t-shirt', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
  { id: 9, name: 'Black and white striped pants', price: '2023.00', originalPrice: '2023.00', image: '/api/placeholder/300/400' },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <div className="relative h-64 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xl font-bold text-pink-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
                <button title="Add to Cart" className="w-full btn-primary inline-flex items-center justify-center space-x-2 py-2">
                  <FiShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}