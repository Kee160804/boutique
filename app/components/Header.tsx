'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from 'react-icons/fi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Women', href: '/womens' },
  { name: 'Men', href: '/mens' },
  { name: 'Dresses', href: '/dresses' },
  { name: 'New Arrivals', href: '/new-arrivals' },
  { name: 'Sale', href: '/sale' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-gray-950 px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        Free shipping on orders over $99
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-2xl text-gray-700 transition hover:bg-gray-100 lg:hidden"
          >
            {mobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>

          <Link href="/" className="shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-3xl">
              ClothesStore
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400 sm:block">
              Style for every day
            </span>
          </Link>

          <label className="hidden max-w-md flex-1 items-center rounded-full bg-gray-100 px-4 py-3 md:flex">
            <span className="sr-only">Search products</span>
            <FiSearch className="shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search products..."
              className="ml-2 w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
            />
          </label>

          <div className="flex items-center gap-1 sm:gap-2">
            <button type="button" aria-label="Wishlist" className="hidden rounded-full p-2.5 text-xl text-gray-700 transition hover:bg-pink-50 hover:text-pink-600 sm:block">
              <FiHeart aria-hidden="true" />
            </button>
            <button type="button" aria-label="Account" className="hidden rounded-full p-2.5 text-xl text-gray-700 transition hover:bg-pink-50 hover:text-pink-600 sm:block">
              <FiUser aria-hidden="true" />
            </button>
            <button type="button" aria-label="Shopping bag with 3 items" className="relative rounded-full p-2.5 text-xl text-gray-700 transition hover:bg-pink-50 hover:text-pink-600">
              <FiShoppingBag aria-hidden="true" />
              <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-pink-600 px-1 text-[10px] font-bold text-white">3</span>
            </button>
          </div>
        </div>

        <nav aria-label="Primary navigation" className="hidden border-t border-gray-100 lg:block">
          <ul className="flex items-center justify-center gap-8 py-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm font-semibold text-gray-700 transition hover:text-pink-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <label className="mb-4 flex items-center rounded-xl bg-gray-100 px-4 py-3 md:hidden">
            <span className="sr-only">Search products</span>
            <FiSearch className="text-gray-400" aria-hidden="true" />
            <input type="search" placeholder="Search products..." className="ml-2 w-full bg-transparent text-sm outline-none" />
          </label>
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-gray-700 transition hover:bg-pink-50 hover:text-pink-600">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
