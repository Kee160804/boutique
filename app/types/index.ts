export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  subCategory: string;
  images: string[];
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
}