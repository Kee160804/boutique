import type { Metadata } from 'next'
import CollectionPage from '@/app/components/CollectionPage'
import { getProductsByCategory } from '@/app/data/products'

export const metadata: Metadata = { title: "Men's Collection" }

export default function MensPage() {
  return (
    <CollectionPage
      title="Men's Collection"
      description="Clean silhouettes, dependable layers, and elevated essentials for every day."
      products={getProductsByCategory('mens')}
    />
  )
}
