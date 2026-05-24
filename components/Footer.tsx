import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🪵</span>
              <span className="font-bold text-amber-300 text-lg">
                Andy&apos;s Woodworks
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Every piece is built by hand, one at a time, with wood selected
              for its character and grain. No shortcuts.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-stone-200 font-semibold mb-3 text-sm uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About Andy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-amber-300 transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-stone-200 font-semibold mb-3 text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <p className="text-sm mb-2">Custom orders welcome.</p>
            <Link
              href="/contact"
              className="inline-block text-sm text-amber-300 hover:text-amber-200 transition-colors"
            >
              Send Andy a message →
            </Link>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-6 text-xs text-center text-stone-600">
          © {new Date().getFullYear()} Andy&apos;s Woodworks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
