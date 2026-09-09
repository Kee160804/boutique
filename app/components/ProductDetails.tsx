'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiHeart, FiMinus, FiPlus, FiShare2, FiShoppingBag, FiStar } from 'react-icons/fi'
import ProductCard from '@/app/components/ProductCard'
import type { Product } from '@/app/types'
import { formatPrice } from '@/app/utils/helpers'

type ProductDetailsProps = {
  product: Product
  relatedProducts: Product[]
}

export default function ProductDetails({ product, relatedProducts }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100">
            <Image src={product.images[activeImage]} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${product.name} image ${index + 1}`}
                  className={`relative h-24 w-20 overflow-hidden rounded-xl border-2 ${activeImage === index ? 'border-pink-600' : 'border-transparent'}`}
                >
                  <Image src={image} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:py-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-pink-600">{product.subCategory}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <div className="flex text-amber-400" aria-label={`${product.rating} out of 5 stars`}>
              {Array.from({ length: 5 }, (_, index) => <FiStar key={index} className={index < Math.round(product.rating) ? 'fill-current' : ''} />)}
            </div>
            <span>{product.rating} · {product.reviews} reviews</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-black text-pink-600">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>}
            {product.discount && <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700">Save {product.discount}%</span>}
          </div>

          <p className="mt-6 text-lg leading-8 text-gray-600">{product.description}</p>

          <fieldset className="mt-8">
            <legend className="mb-3 font-bold text-gray-900">Color: <span className="font-normal text-gray-500">{selectedColor}</span></legend>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button type="button" key={color} onClick={() => setSelectedColor(color)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${selectedColor === color ? 'border-pink-600 bg-pink-50 text-pink-700' : 'border-gray-200 text-gray-600 hover:border-pink-300'}`}>{color}</button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="mb-3 font-bold text-gray-900">Size: <span className="font-normal text-gray-500">{selectedSize}</span></legend>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button type="button" key={size} onClick={() => setSelectedSize(size)} className={`min-w-12 rounded-xl border px-4 py-2.5 text-sm font-bold transition ${selectedSize === size ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}>{size}</button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-2 sm:w-36">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 text-gray-500 hover:text-pink-600"><FiMinus /></button>
              <span className="font-bold">{quantity}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="p-3 text-gray-500 hover:text-pink-600"><FiPlus /></button>
            </div>
            <button type="button" className="btn-primary flex-1 gap-2"><FiShoppingBag /> Add to Cart</button>
            <button type="button" aria-label="Add to wishlist" className="rounded-xl border border-gray-200 p-4 text-gray-600 transition hover:border-pink-300 hover:text-pink-600"><FiHeart /></button>
            <button type="button" aria-label="Share product" className="rounded-xl border border-gray-200 p-4 text-gray-600 transition hover:border-pink-300 hover:text-pink-600"><FiShare2 /></button>
          </div>

          <div className="mt-8 space-y-2 border-t border-gray-100 pt-6 text-sm text-gray-500">
            <p>✓ Free shipping on orders over $99</p>
            <p>✓ 30-day easy returns</p>
            <p>✓ Secure checkout</p>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-black tracking-tight text-gray-900">You may also like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => <ProductCard key={relatedProduct.id} product={relatedProduct} />)}
          </div>
        </section>
      )}
    </div>
  )
}
