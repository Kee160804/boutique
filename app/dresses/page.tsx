'use client'

import { useSearchParams } from 'next/navigation'
import ProductSection from '@/app/components/ProductSection'

export default function DressesPage() {
  const searchParams = useSearchParams()
  const subcategory = searchParams.get('sub')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Dresses {subcategory ? `- ${subcategory.replace(/-/g, ' ')}` : ''}
      </h1>
      <ProductSection />
    </div>
  )
}