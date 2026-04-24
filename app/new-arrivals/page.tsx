import ProductCard from '@/app/components/ProductsCard';
import { getNewArrivals } from '@/app/data/products';

export default function NewArrivalsPage() {
  const products = getNewArrivals();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          New Arrivals
        </h1>
        <p className="text-gray-600">Be the first to shop our latest collection</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}