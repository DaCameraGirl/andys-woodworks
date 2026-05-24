export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in cents — set to 0 if priceOnRequest is true
  category: string;
  images: string[];
  dimensions?: string;
  wood?: string;
  inStock: boolean;
  featured?: boolean;
  priceOnRequest?: boolean; // show "Contact for pricing" instead of a price
  imagePosition?: string;  // CSS object-position e.g. "top", "center", "bottom", "50% 20%"
}

export interface CartItem {
  product: Product;
  quantity: number;
}
