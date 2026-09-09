import type { Category, Product } from '@/app/types'

export const categories: Category[] = [
  { id: '1', name: "Women's Fashion", slug: 'womens', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=1000&fit=crop', itemCount: 4 },
  { id: '2', name: "Men's Collection", slug: 'mens', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=1000&fit=crop', itemCount: 2 },
  { id: '3', name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop', itemCount: 2 },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Linen Midi Dress',
    price: 89,
    originalPrice: 120,
    description: 'An airy linen-blend midi dress made for warm afternoons and easy evenings.',
    category: 'womens',
    subCategory: 'dresses',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=900&h=1100&fit=crop',
    ],
    colors: ['Rose', 'Black', 'Ivory'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 234,
    inStock: true,
    isSale: true,
    discount: 26,
  },
  {
    id: '2',
    name: 'Tailored Casual Blazer',
    price: 120,
    originalPrice: 180,
    description: 'A relaxed, softly tailored blazer that moves easily from work to dinner.',
    category: 'womens',
    subCategory: 'jackets',
    images: [
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&h=1100&fit=crop',
    ],
    colors: ['Black', 'Navy', 'Stone'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: true,
    isSale: true,
    discount: 33,
  },
  {
    id: '3',
    name: 'Ribbed Knit Top',
    price: 45,
    description: 'A soft ribbed knit with a close fit and a clean, versatile neckline.',
    category: 'womens',
    subCategory: 'tops',
    images: [
      'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&h=1100&fit=crop',
    ],
    colors: ['White', 'Black', 'Beige'],
    sizes: ['XS', 'S', 'M', 'L'],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    isNew: true,
  },
  {
    id: '4',
    name: 'Classic Denim Jacket',
    price: 98,
    originalPrice: 149,
    description: 'A timeless denim layer with a comfortable broken-in feel from day one.',
    category: 'womens',
    subCategory: 'jackets',
    images: [
      'https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=900&h=1100&fit=crop',
    ],
    colors: ['Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.9,
    reviews: 278,
    inStock: true,
    isSale: true,
    discount: 34,
  },
  {
    id: '5',
    name: 'Relaxed Oxford Shirt',
    price: 64,
    description: 'A crisp everyday shirt cut with extra room through the body and sleeves.',
    category: 'mens',
    subCategory: 'shirts',
    images: [
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900&h=1100&fit=crop',
    ],
    colors: ['White', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
    reviews: 121,
    inStock: true,
    isNew: true,
  },
  {
    id: '6',
    name: 'Everyday Bomber Jacket',
    price: 135,
    originalPrice: 175,
    description: 'A lightweight bomber jacket with a clean silhouette and subtle utility details.',
    category: 'mens',
    subCategory: 'jackets',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=900&h=1100&fit=crop',
    ],
    colors: ['Black', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.8,
    reviews: 94,
    inStock: true,
    isSale: true,
    discount: 23,
  },
  {
    id: '7',
    name: 'Structured Leather Tote',
    price: 110,
    description: 'A spacious structured tote with room for every workday essential.',
    category: 'accessories',
    subCategory: 'bags',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&h=1100&fit=crop',
    ],
    colors: ['Brown', 'Black'],
    sizes: ['One Size'],
    rating: 4.8,
    reviews: 98,
    inStock: true,
    isNew: true,
  },
  {
    id: '8',
    name: 'Modern Cat-Eye Sunglasses',
    price: 35,
    originalPrice: 59,
    description: 'Lightweight cat-eye frames with full UV protection and polished hardware.',
    category: 'accessories',
    subCategory: 'eyewear',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&h=1100&fit=crop',
      'https://images.unsplash.com/photo-1577803645773-f96470509666?w=900&h=1100&fit=crop',
    ],
    colors: ['Black', 'Tortoise'],
    sizes: ['One Size'],
    rating: 4.5,
    reviews: 67,
    inStock: true,
    isSale: true,
    discount: 41,
  },
]

export const featuredProducts = products.slice(0, 8)

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

export function getProductsBySubCategory(subCategory: string) {
  return products.filter((product) => product.subCategory === subCategory)
}

export function getNewArrivals() {
  return products.filter((product) => product.isNew)
}

export function getSaleItems() {
  return products.filter((product) => product.isSale)
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id)
}
