'use client'

import { useMemo, useState } from 'react'
import ProductCard from '@/app/components/ProductCard'
import type { Product } from '@/app/types'

type CollectionPageProps = {
  title: string
  description: string
  products: Product[]
}

export default function CollectionPage({ title, description, products }: CollectionPageProps) {
  const [sortBy, setSortBy] = useState('featured')
  const sortedProducts = useMemo(() => {
    const sorted = [...products]
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating)
    return sorted
  }, [products, sortBy])

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-pink-50 to-purple-50 px-6 py-10 sm:px-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-pink-600">ClothesStore collection</p>
        <h1 className="text-4xl font-black tracking-tight text-gray-900">{title}</h1>
        <p className="mt-3 max-w-2xl text-gray-600">{description}</p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">{products.length} {products.length === 1 ? 'product' : 'products'} found</p>
        <label className="flex items-center gap-3 text-sm font-semibold text-gray-700">
          Sort by
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </label>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sortedProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 py-20 text-center text-gray-500">
          No products are available in this collection yet.
        </div>
      )}
    </section>
  )
}
