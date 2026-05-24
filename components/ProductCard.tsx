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
    <div className="group rounded-xl overflow-hidden transition-all duration-300"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden" style={{ background: "var(--bg-surface)" }}>
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: product.imagePosition ?? "center" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(18,10,4,0.7)" }}>
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ color: "var(--text)", background: "var(--bg-surface)" }}>
                Out of Stock
              </span>
            </div>
          )}
          {product.featured && product.inStock && (
            <span className="absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
              style={{ background: "var(--gold)", color: "var(--header)" }}>
              Popular
            </span>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-sm leading-snug transition-colors mb-1 hover:opacity-80" style={{ color: "var(--text)" }}>
            {product.name}
          </h3>
        </Link>
        {product.wood && (
          <p className="text-xs mb-2" style={{ color: "var(--text-dim)" }}>{product.wood}</p>
        )}
        <p className="text-xs line-clamp-2 mb-4" style={{ color: "var(--text-muted)" }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-base" style={{ color: product.priceOnRequest ? "var(--gold)" : "var(--gold-pale)" }}>
            {product.priceOnRequest ? (
              <span className="text-xs font-semibold">Contact for pricing</span>
            ) : (
              formatPrice(product.price)
            )}
          </span>
          {product.priceOnRequest ? (
            <a href="/contact" onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: "var(--bg-surface)", color: "var(--gold)", border: "1px solid var(--gold)" }}>
              Inquire
            </a>
          ) : (
            <button onClick={handleAddToCart} disabled={!product.inStock}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
              style={{
                background: added ? "#16a34a" : "var(--gold)",
                color: added ? "white" : "var(--header)",
                opacity: !product.inStock ? 0.5 : 1,
                cursor: !product.inStock ? "not-allowed" : "pointer",
              }}>
              {added ? "✓ Added" : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
