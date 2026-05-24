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
      <nav className="text-sm mb-8 flex gap-2" style={{ color: "var(--text-dim)" }}>
        <Link href="/" className="transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--text)" }}>
          Shop
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* Images */}
        <div>
          {/* Main image — object-contain so you always see the full piece */}
          <div
            className="relative rounded-2xl overflow-hidden mb-3"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", minHeight: "640px" }}
          >
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className="relative h-20 w-20 rounded-lg overflow-hidden border-2 transition-all"
                  style={{
                    borderColor: idx === activeImage ? "var(--gold)" : "var(--border)",
                    background: "var(--bg-surface)",
                  }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
            {product.category}
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>
            {product.name}
          </h1>
          {product.wood && (
            <p className="text-sm mb-4" style={{ color: "var(--text-dim)" }}>{product.wood}</p>
          )}

          {/* Price */}
          <p className="text-2xl font-bold mb-6" style={{ color: product.priceOnRequest ? "var(--gold)" : "var(--gold-pale)" }}>
            {product.priceOnRequest ? "Contact for pricing" : formatPrice(product.price)}
          </p>

          <p className="leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            {product.longDescription}
          </p>

          {product.dimensions && (
            <div className="rounded-xl p-4 mb-8 text-sm" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="font-semibold" style={{ color: "var(--text)" }}>Dimensions: </span>
              <span style={{ color: "var(--text-muted)" }}>{product.dimensions}</span>
            </div>
          )}

          {/* CTA */}
          {product.priceOnRequest ? (
            <Link
              href="/contact"
              className="block text-center w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all"
              style={{ background: "var(--gold)", color: "var(--header)" }}
            >
              Request a Quote →
            </Link>
          ) : product.inStock ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>Qty:</label>
                <div className="flex items-center rounded-lg overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 transition-colors hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >−</button>
                  <span className="px-4 py-2 text-sm font-medium" style={{ color: "var(--text)" }}>{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 transition-colors hover:opacity-80"
                    style={{ color: "var(--text-muted)" }}
                  >+</button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-200"
                style={{
                  background: added ? "#16a34a" : "var(--gold)",
                  color: added ? "white" : "var(--header)",
                }}
              >
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="block text-center text-sm transition-colors hover:opacity-80"
                style={{ color: "var(--text-dim)" }}
              >
                View Cart →
              </Link>
            </div>
          ) : (
            <div className="rounded-xl p-4 text-center" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              Out of stock.{" "}
              <Link href="/contact" style={{ color: "var(--gold)" }}>
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
          <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>
            More from {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                className="group rounded-xl overflow-hidden border transition-all"
                style={{ background: "var(--bg-card)", borderColor: "var(--border)" }}
              >
                <div className="relative h-44" style={{ background: "var(--bg-surface)" }}>
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>{p.name}</p>
                  <p className="text-xs font-medium mt-1" style={{ color: "var(--gold)" }}>
                    {p.priceOnRequest ? "Contact for pricing" : formatPrice(p.price)}
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
