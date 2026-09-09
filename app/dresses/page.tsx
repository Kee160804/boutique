import type { Metadata } from 'next'
import CollectionPage from '@/app/components/CollectionPage'
import { getProductsBySubCategory } from '@/app/data/products'

export const metadata: Metadata = { title: 'Dresses' }

type DressesPageProps = {
  searchParams: Promise<{ sub?: string | string[] }>
}

export default async function DressesPage({ searchParams }: DressesPageProps) {
  const { sub } = await searchParams
  const selectedSubcategory = typeof sub === 'string' ? sub.replaceAll('-', ' ') : 'dresses'

  return (
    <CollectionPage
      title={selectedSubcategory === 'dresses' ? 'Dresses' : `Dresses · ${selectedSubcategory}`}
      description="From easy daytime shapes to polished occasion styles, find your next favorite dress."
      products={getProductsBySubCategory('dresses')}
    />
  )
}
