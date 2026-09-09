import ProductCard from '@/app/components/ProductCard'
import { featuredProducts } from '@/app/data/products'

type ProductSectionProps = {
  title?: string
  description?: string
}

export default function ProductSection({
  title = 'Featured Products',
  description = 'Fresh picks selected for your wardrobe',
}: ProductSectionProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-pink-600">Shop the edit</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-500">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
