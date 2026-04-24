// 'use client'

// import { FiShoppingCart } from 'react-icons/fi'

// const featuredProducts = [
//   { name: 'Exemple sint occaecat', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: '$358.96' },
//   { name: 'Lorem ipsum dolor', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: null },
//   { name: 'Sit amet conse cetera', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: '$358.96' },
//   { name: 'Adipiscing elit', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: null },
//   { name: 'Sed do eiusmod tempor incididunt', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: null },
//   { name: 'Do eiusmod tempor incididunt', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$259.96', originalPrice: null },
//   { name: 'Excepteur sint occaecat', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: '$358.96' },
//   { name: 'Eiusmod tempor incididunt', desc: 'Lorem ipsum dolor sit amet conse cetera', price: '$258.96', originalPrice: null },
// ]

// export default function ProductSection() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Featured</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {featuredProducts.map((product, idx) => (
//           <div key={idx} className="border border-gray-200 p-4 rounded-lg hover:shadow-lg transition">
//             <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
//               <span className="text-gray-400 text-sm">Product Image</span>
//             </div>
//             <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
//             <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
//             <div className="flex items-center gap-2 mb-4">
//               <span className="text-xl font-bold text-pink-600">{product.price}</span>
//               {product.originalPrice && (
//                 <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
//               )}
//             </div>
//             <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition flex items-center justify-center gap-2">
//               <FiShoppingCart />
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



'use client'

import Image from 'next/image'
import { FiShoppingCart, FiHeart } from 'react-icons/fi'

const featuredProducts = [
  { 
    id: 1, 
    name: 'Exemple sint occaecat', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: 358.96,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 2, 
    name: 'Lorem ipsum dolor', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: null,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 3, 
    name: 'Sit amet conse cetera', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: 358.96,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 4, 
    name: 'Adipiscing elit', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: null,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 5, 
    name: 'Sed do eiusmod tempor', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: null,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 6, 
    name: 'Do eiusmod tempor', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 259.96, 
    originalPrice: null,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 7, 
    name: 'Excepteur sint occaecat', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: 358.96,
    image: '/api/placeholder/400/500'
  },
  { 
    id: 8, 
    name: 'Eiusmod tempor', 
    desc: 'Lorem ipsum dolor sit amet conse cetera', 
    price: 258.96, 
    originalPrice: null,
    image: '/api/placeholder/400/500'
  },
]

export default function ProductSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Featured Products
      </h1>
      <p className="text-center text-gray-500 mb-10">Discover our latest collection</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Product Image</span>
              </div>
              {/* Wishlist Button */}
              <button title='Add to Wishlist' className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                <FiHeart className="text-gray-600 hover:text-pink-600" />
              </button>
              {/* Sale Badge */}
              {product.originalPrice && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                  SALE
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.desc}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-pink-600">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                <FiShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}