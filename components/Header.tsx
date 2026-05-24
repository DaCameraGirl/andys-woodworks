"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-header-trans" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl">🪵</span>
            <div>
              <div className="font-bold text-lg leading-tight tracking-wide" style={{ color: "var(--gold)" }}>
                Andy&apos;s Woodworks
              </div>
              <div className="text-xs leading-tight hidden sm:block" style={{ color: "var(--text-dim)" }}>
                Handcrafted with care
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Shop", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
                className="transition-colors hover:opacity-100 opacity-70"
                style={{ color: "var(--text)" }}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Cart + mobile */}
          <div className="flex items-center gap-3">
            <Link href="/cart" className="relative p-2 transition-colors opacity-70 hover:opacity-100" style={{ color: "var(--text)" }} aria-label="Cart">
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--header)" }}>
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="md:hidden p-2 opacity-70 hover:opacity-100" style={{ color: "var(--text)" }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 py-4 space-y-3 bg-header-trans" style={{ borderTop: "1px solid var(--border)" }}>
          {["Shop", "About", "Contact"].map((item) => (
            <Link key={item} href={item === "Shop" ? "/" : `/${item.toLowerCase()}`}
              className="block text-sm font-medium opacity-80 hover:opacity-100"
              style={{ color: "var(--text)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
