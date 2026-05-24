export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in cents
  category: string;
  images: string[];
  dimensions?: string;
  wood?: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
