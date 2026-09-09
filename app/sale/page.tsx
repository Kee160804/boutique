import type { Metadata } from 'next'
import CollectionPage from '@/app/components/CollectionPage'
import { getSaleItems } from '@/app/data/products'

export const metadata: Metadata = { title: 'Sale' }

export default function SalePage() {
  return (
    <CollectionPage
      title="The Sale Edit"
      description="Limited-time prices on standout pieces. Once they are gone, they are gone."
      products={getSaleItems()}
    />
  )
}
