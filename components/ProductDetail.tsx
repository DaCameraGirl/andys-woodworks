"use client";

import { Product } from "@/lib/types";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  function handleAddToCart() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-stone-400 mb-8 flex gap-2">
        <Link href="/" className="hover:text-amber-600">
          Shop
        </Link>
        <span>/</span>
        <span className="text-stone-600">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Images */}
        <div>
          <div className="relative h-96 rounded-2xl overflow-hidden bg-stone-100 mb-3">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === activeImage
                      ? "border-amber-500"
                      : "border-stone-200 hover:border-stone-400"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="text-xs text-amber-600 font-semibold uppercase tracking-widest mb-2">
            {product.category}
          </div>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">
            {product.name}
          </h1>
          {product.wood && (
            <p className="text-stone-500 text-sm mb-4">{product.wood}</p>
          )}
          <p className="text-3xl font-bold text-stone-900 mb-6">
            {formatPrice(product.price)}
          </p>

          <p className="text-stone-600 leading-relaxed mb-8">
            {product.longDescription}
          </p>

          {product.dimensions && (
            <div className="bg-stone-50 rounded-xl p-4 mb-8 text-sm">
              <span className="font-semibold text-stone-700">Dimensions: </span>
              <span className="text-stone-600">{product.dimensions}</span>
            </div>
          )}

          {product.inStock ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-stone-700">Qty:</label>
                <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-sm font-medium">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-200 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-stone-900 text-white hover:bg-amber-600"
                }`}
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="block text-center text-sm text-stone-500 hover:text-amber-600 transition-colors"
              >
                View Cart →
              </Link>
            </div>
          ) : (
            <div className="bg-stone-100 rounded-xl p-4 text-center text-stone-500">
              Out of stock.{" "}
              <Link href="/contact" className="text-amber-600 hover:underline">
                Contact Andy
              </Link>{" "}
              about availability.
            </div>
          )}
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-stone-800 mb-6">
            More from {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group bg-white rounded-xl overflow-hidden border border-stone-100 hover:shadow-md transition-all"
              >
                <div className="relative h-40 bg-stone-100">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-stone-800">{p.name}</p>
                  <p className="text-sm text-stone-500 font-medium mt-1">
                    {formatPrice(p.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
