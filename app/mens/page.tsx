'use client';

import { useState } from 'react';
import ProductCard from '@/app/components/ProductsCard';
import { getProductsByCategory } from '@/app/data/products';

export default function MensPage() {
  const [sortBy, setSortBy] = useState('featured');
  const products = getProductsByCategory('mens');
  
  const sortedProducts = [...products];
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Men's Fashion
        </h1>
        <p className="text-gray-600">Discover the latest trends in men's clothing</p>
      </div>

      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-600">{products.length} products found</p>
        <select title='Sort by'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}