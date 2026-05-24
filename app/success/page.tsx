"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <div className="text-7xl mb-6">🎉</div>
      <h1 className="text-3xl font-bold text-stone-900 mb-4">
        Order confirmed!
      </h1>
      <p className="text-stone-600 leading-relaxed mb-3">
        Thanks so much — Andy will get to work on your order. You&apos;ll
        receive a confirmation email shortly.
      </p>
      <p className="text-stone-500 text-sm mb-10">
        Custom and handcrafted pieces typically ship within 1–2 weeks.
      </p>
      <Link
        href="/"
        className="inline-block bg-stone-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-600 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
