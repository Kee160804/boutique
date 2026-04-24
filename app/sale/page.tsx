import ProductCard from '@/app/components/ProductsCard';
import { getSaleItems } from '@/app/data/products';

export default function SalePage() {
  const products = getSaleItems();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Sale
        </h1>
        <p className="text-gray-600">Grab these amazing deals before they're gone!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}