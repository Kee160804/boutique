import type { Metadata } from 'next'
import CollectionPage from '@/app/components/CollectionPage'
import { getNewArrivals } from '@/app/data/products'

export const metadata: Metadata = { title: 'New Arrivals' }

export default function NewArrivalsPage() {
  return (
    <CollectionPage
      title="New Arrivals"
      description="Meet the newest pieces in our collection, selected for the season ahead."
      products={getNewArrivals()}
    />
  )
}
