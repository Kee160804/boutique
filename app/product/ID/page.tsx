'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { FiStar, FiMinus, FiPlus, FiHeart, FiShare2 } from 'react-icons/fi';
import { getProductById } from '@/app/data/products';
import ProductCard from '@/app/components/ProductsCard';
import { products } from '@//app/data/products';

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  activeImage === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image src={image} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
              ))}
            </div>
            <span className="text-gray-600 ml-2">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <>
                <span className="text-gray-400 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                <span className="text-green-600 ml-2">Save {product.discount}%</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color: {selectedColor || 'Select'}</h3>
            <div className="flex space-x-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color ? 'border-primary' : 'border-gray-300'
                  } hover:border-primary transition-colors`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size: {selectedSize || 'Select'}</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'bg-primary text-white border-primary'
                      : 'border-gray-300 hover:border-primary'
                  } transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button title='Decrease quantity'
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded hover:border-primary transition-colors"
              >
                <FiMinus />
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button title='Increase quantity'
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border rounded hover:border-primary transition-colors"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="btn-primary flex-1">Add to Cart</button>
            <button title='Add to wishlist'
              className="p-3 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <FiHeart />
            </button>
            <button title='Share product'
              className="p-3 border-2 border-gray-300 rounded-full hover:border-primary transition-colors"
            >
              <FiShare2 />
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <p>✓ Free shipping on orders over $75</p>
            <p>✓ 30-day easy returns</p>
            <p>✓ Secure checkout</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}