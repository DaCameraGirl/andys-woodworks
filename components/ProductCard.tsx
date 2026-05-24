"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-56 bg-stone-100 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
              <span className="text-white font-semibold text-sm bg-stone-800 px-3 py-1 rounded-full">
                Out of Stock
              </span>
            </div>
          )}
          {product.featured && product.inStock && (
            <span className="absolute top-3 left-3 bg-amber-400 text-stone-900 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Popular
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-stone-800 text-sm leading-snug hover:text-amber-700 transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        {product.wood && (
          <p className="text-xs text-stone-400 mb-2">{product.wood}</p>
        )}
        <p className="text-xs text-stone-500 line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-stone-900 font-bold text-base">
            {product.priceOnRequest ? (
              <span className="text-amber-700 text-xs font-semibold">Contact for pricing</span>
            ) : (
              formatPrice(product.price)
            )}
          </span>
          {product.priceOnRequest ? (
            <a
              href="/contact"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
            >
              Inquire
            </a>
          ) : (
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
                !product.inStock
                  ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                  : added
                  ? "bg-green-600 text-white"
                  : "bg-stone-900 text-white hover:bg-amber-600"
              }`}
            >
              {added ? "✓ Added" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
