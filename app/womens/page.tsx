import type { Metadata } from 'next'
import CollectionPage from '@/app/components/CollectionPage'
import { getProductsByCategory } from '@/app/data/products'

export const metadata: Metadata = { title: "Women's Fashion" }

export default function WomensPage() {
  return (
    <CollectionPage
      title="Women's Fashion"
      description="Modern layers, effortless dresses, and versatile pieces designed for repeat wear."
      products={getProductsByCategory('womens')}
    />
  )
}
