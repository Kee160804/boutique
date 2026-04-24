'use client'

import Link from 'next/link'

export default function Sidebar() {
  const categories = ['Dresses', 'Tops', 'Sweaters', 'Jeans', 'Coats', 'Jackets', 'Activewear', 'Shorts']
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-pink-600">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <Link href="#" className="text-gray-700 hover:text-pink-600">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}