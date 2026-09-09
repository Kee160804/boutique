import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductDetails from '@/app/components/ProductDetails'
import { getProductById, products } from '@/app/data/products'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  return product
    ? { title: product.name, description: product.description }
    : { title: 'Product not found' }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const relatedProducts = products
    .filter((candidate) => candidate.category === product.category && candidate.id !== product.id)
    .slice(0, 4)

  return <ProductDetails product={product} relatedProducts={relatedProducts} />
}
