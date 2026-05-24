"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
            image: i.product.images[0],
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      window.location.href = data.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <div className="text-6xl mb-6">🪵</div>
        <h1 className="text-2xl font-bold text-stone-800 mb-3">
          Your cart is empty
        </h1>
        <p className="text-stone-500 mb-8">
          Head back to the shop and find something beautiful.
        </p>
        <Link
          href="/"
          className="inline-block bg-stone-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-stone-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex gap-4 bg-white border border-stone-100 rounded-xl p-4 shadow-sm"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-stone-100 flex-shrink-0">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <Link
                  href={`/products/${product.id}`}
                  className="font-semibold text-stone-800 hover:text-amber-700 transition-colors text-sm"
                >
                  {product.name}
                </Link>
                {product.wood && (
                  <p className="text-xs text-stone-400 mt-0.5">{product.wood}</p>
                )}
                <p className="text-sm font-bold text-stone-900 mt-1">
                  {formatPrice(product.price)}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden text-sm">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity - 1)
                      }
                      className="px-2 py-1 hover:bg-stone-100 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      className="px-2 py-1 hover:bg-stone-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-xs text-stone-400 hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-sm font-bold text-stone-800 whitespace-nowrap">
                {formatPrice(product.price * quantity)}
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-xs text-stone-400 hover:text-red-500 transition-colors mt-2"
          >
            Clear cart
          </button>
        </div>

        {/* Summary */}
        <div className="bg-stone-50 rounded-2xl p-6 h-fit border border-stone-100 space-y-4">
          <h2 className="font-bold text-stone-900 text-lg">Order Summary</h2>

          <div className="space-y-2 text-sm text-stone-600">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between">
                <span className="truncate mr-2">
                  {product.name} × {quantity}
                </span>
                <span className="font-medium text-stone-800 whitespace-nowrap">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-stone-200 pt-3 flex justify-between font-bold text-stone-900">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="text-xs text-stone-400">
            Shipping and taxes calculated at checkout.
          </p>

          {error && (
            <p className="text-red-500 text-xs bg-red-50 p-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-amber-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm uppercase tracking-wide"
          >
            {loading ? "Redirecting to checkout…" : "Checkout with Stripe →"}
          </button>
        </div>
      </div>
    </div>
  );
}
