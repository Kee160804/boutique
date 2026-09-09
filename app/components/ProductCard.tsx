import Image from 'next/image'
import Link from 'next/link'
import { FiHeart, FiShoppingBag, FiStar } from 'react-icons/fi'
import type { Product } from '@/app/types'
import { formatPrice } from '@/app/utils/helpers'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.isSale && (
            <span className="rounded-full bg-pink-600 px-3 py-1 text-xs font-bold text-white">SALE</span>
          )}
          {product.isNew && (
            <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white">NEW</span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">{product.subCategory}</p>
            <Link href={`/product/${product.id}`} className="font-bold text-gray-900 transition hover:text-pink-600">
              {product.name}
            </Link>
          </div>
          <button type="button" aria-label={`Add ${product.name} to wishlist`} className="rounded-full p-2 text-gray-400 transition hover:bg-pink-50 hover:text-pink-600">
            <FiHeart aria-hidden="true" />
          </button>
        </div>

        <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
          <FiStar className="fill-amber-400 text-amber-400" aria-hidden="true" />
          <span className="font-semibold text-gray-700">{product.rating}</span>
          <span>({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xl font-black text-pink-600">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <button type="button" aria-label={`Add ${product.name} to cart`} className="rounded-full bg-gray-900 p-3 text-white transition hover:bg-pink-600">
            <FiShoppingBag aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  )
}
