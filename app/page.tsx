import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-stone-100 py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80')",
          }}
        />
        <div className="max-w-4xl mx-auto relative text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-amber-300 tracking-tight">
            Built by Hand.
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every cutting board, bowl, and piece of furniture leaves Andy&apos;s
            shop one at a time. No batch production. No shortcuts.
          </p>
          <Link
            href="#shop"
            className="inline-block bg-amber-400 text-stone-900 font-bold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors text-sm uppercase tracking-wide"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              !activeCategory
                ? "bg-stone-900 text-white border-stone-900"
                : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/?category=${cat}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-400"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            No items in this category right now.
          </div>
        )}
      </section>

      {/* Custom orders callout */}
      <section className="bg-amber-50 border-t border-amber-100 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-3">
            Need something custom?
          </h2>
          <p className="text-stone-600 mb-6">
            Andy takes on a limited number of custom orders each month — engraved
            gifts, specific dimensions, matching sets. Reach out early.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-stone-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-stone-700 transition-colors"
          >
            Request a Custom Order
          </Link>
        </div>
      </section>
    </>
  );
}
