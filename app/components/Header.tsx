'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiChevronDown, FiHeart, FiUser, FiShoppingBag, FiSearch } from 'react-icons/fi'

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const categories = [
    {
      name: 'Dresses',
      href: '/dresses',
      subcategories: ['Summer Dresses', 'Evening Dresses', 'Casual Dresses', 'Maxi Dresses', 'Mini Dresses']
    },
    {
      name: 'Tops',
      href: '/tops',
      subcategories: ['Blouses', 'T-Shirts', 'Crop Tops', 'Tank Tops', 'Button Downs']
    },
    {
      name: 'Sweaters',
      href: '/sweaters',
      subcategories: ['Cardigans', 'Pullovers', 'Turtlenecks', 'Cropped Sweaters', 'Oversized Sweaters']
    },
    {
      name: 'Jeans',
      href: '/jeans',
      subcategories: ['Skinny Jeans', 'Boyfriend Jeans', 'Mom Jeans', 'Flared Jeans', 'Ripped Jeans']
    },
    {
      name: 'Coats',
      href: '/coats',
      subcategories: ['Winter Coats', 'Trench Coats', 'Puffer Jackets', 'Wool Coats', 'Raincoats']
    },
    {
      name: 'Jackets',
      href: '/jackets',
      subcategories: ['Leather Jackets', 'Denim Jackets', 'Bomber Jackets', 'Blazers', 'Varsity Jackets']
    },
    {
      name: 'Activewear',
      href: '/activewear',
      subcategories: ['Leggings', 'Sports Bras', 'Hoodies', 'Joggers', 'Tracksuits']
    },
    {
      name: 'Shorts',
      href: '/shorts',
      subcategories: ['Denim Shorts', 'Athletic Shorts', 'High Waist Shorts', 'Linen Shorts', 'Paperbag Shorts']
    }
  ]

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar - Logo and Icons */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              ClothesStore
            </h1>
            <p className="text-gray-500 text-xs">The biggest choice on the web</p>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
            <FiSearch className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="relative">
              <FiHeart className="text-gray-700 hover:text-pink-600 text-xl transition-colors" />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button title="Account" className="relative">
              <FiUser className="text-gray-700 hover:text-pink-600 text-xl transition-colors" />
            </button>
            <button title="Shopping Bag" className="relative">
              <FiShoppingBag className="text-gray-700 hover:text-pink-600 text-xl transition-colors" />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Categories Bar with Dropdowns */}
        <div className="flex justify-center gap-8 py-3 border-t border-gray-100">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(category.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-pink-600 font-medium py-2 transition-colors">
                {category.name}
                <FiChevronDown className={`text-sm transition-transform duration-300 ${openDropdown === category.name ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {openDropdown === category.name && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl rounded-lg min-w-[200px] z-50 border border-gray-100 overflow-hidden">
                  <div className="py-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={sub}
                        href={`${category.href}?sub=${sub.toLowerCase().replace(/ /g, '-')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-pink-600 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}