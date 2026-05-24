"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-stone-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🪵</span>
            <div>
              <div className="font-bold text-lg leading-tight tracking-wide text-amber-300">
                Andy&apos;s Woodworks
              </div>
              <div className="text-xs text-stone-400 leading-tight hidden sm:block">
                Handcrafted with care
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="text-stone-300 hover:text-amber-300 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-stone-300 hover:text-amber-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-stone-300 hover:text-amber-300 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Cart + mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 text-stone-300 hover:text-amber-300 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-amber-400 text-stone-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-stone-300 hover:text-amber-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-700 bg-stone-900 px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-stone-300 hover:text-amber-300 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block text-stone-300 hover:text-amber-300 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-stone-300 hover:text-amber-300 text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
