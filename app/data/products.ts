





import { Product, Category } from '@/app/types'

export const categories: Category[] = [
  { id: '1', name: "Women's Fashion", slug: 'womens', image: '/api/placeholder/400/500', itemCount: 245 },
  { id: '2', name: 'Accessories', slug: 'accessories', image: '/api/placeholder/400/500', itemCount: 189 },
  { id: '3', name: "Men's Collection", slug: 'mens', image: '/api/placeholder/400/500', itemCount: 156 },
]

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Linn Midi Dress',
    price: 89.00,
    originalPrice: 120.00,
    description: 'Elegant midi dress perfect for any occasion.',
    category: 'womens',
    subCategory: 'dresses',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    colors: ['Pink', 'Black', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    discount: 26,
  },
  {
    id: '2',
    name: 'Casual Blazer',
    price: 120.00,
    originalPrice: 180.00,
    description: 'Stylish blazer for a sophisticated look.',
    category: 'womens',
    subCategory: 'jackets',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    colors: ['Black', 'Navy', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    discount: 33,
  },
  {
    id: '3',
    name: 'Ribbed Knit Top',
    price: 45.00,
    originalPrice: 65.00,
    description: 'Comfortable ribbed knit top for daily wear.',
    category: 'womens',
    subCategory: 'tops',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    colors: ['White', 'Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    discount: 31,
  },
  {
    id: '4',
    name: 'Denim Jacket',
    price: 98.00,
    originalPrice: 149.00,
    description: 'Classic denim jacket for a timeless look.',
    category: 'womens',
    subCategory: 'jackets',
    images: ['/api/placeholder/400/500', '/api/placeholder/400/500'],
    colors: ['Blue', 'Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 278,
    inStock: true,
    discount: 34,
  },
]

export const styledProducts: Product[] = [
  {
    id: '5',
    name: 'Floral Maxi Dress',
    price: 79.00,
    originalPrice: 119.00,
    description: 'Beautiful floral print maxi dress.',
    category: 'womens',
    subCategory: 'dresses',
    images: ['/api/placeholder/400/500'],
    colors: ['Floral', 'Blue'],
    sizes: ['S', 'M', 'L'],
    rating: 4.7,
    reviews: 145,
    inStock: true,
  },
  {
    id: '6',
    name: 'Leather Tote Bag',
    price: 59.00,
    originalPrice: 99.00,
    description: 'Stylish leather tote bag.',
    category: 'accessories',
    subCategory: 'bags',
    images: ['/api/placeholder/400/500'],
    colors: ['Brown', 'Black'],
    sizes: ['One Size'],
    rating: 4.8,
    reviews: 98,
    inStock: true,
  },
  {
    id: '7',
    name: 'Sunglasses',
    price: 35.00,
    originalPrice: 59.00,
    description: 'Trendy sunglasses for summer.',
    category: 'accessories',
    subCategory: 'eyewear',
    images: ['/api/placeholder/400/500'],
    colors: ['Black', 'Brown'],
    sizes: ['One Size'],
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
  {
    id: '8',
    name: 'Statement Necklace',
    price: 29.00,
    originalPrice: 49.00,
    description: 'Bold statement necklace.',
    category: 'accessories',
    subCategory: 'jewelry',
    images: ['/api/placeholder/400/500'],
    colors: ['Gold', 'Silver'],
    sizes: ['One Size'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
  },
]

export const products: Product[] = [...featuredProducts, ...styledProducts]

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category)
}

export const getNewArrivals = () => {
  return products.filter(product => product.isNew)
}

export const getSaleItems = () => {
  return products.filter(product => product.isSale || product.discount)
}

export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}