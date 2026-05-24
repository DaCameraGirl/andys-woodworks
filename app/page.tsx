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
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: "var(--header)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at center, rgba(212,146,42,0.15) 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold" style={{ color: "var(--gold)" }}>
            Handcrafted in the workshop
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-5 tracking-tight" style={{ color: "var(--gold-pale)" }}>
            Built by Hand.
          </h1>
          <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: "var(--gold)" }} />
          <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Every bar, chair, cradle, and keepsake leaves Andy&apos;s shop one at a time.
            No shortcuts. No batch production. Just wood and craft.
          </p>
          <Link href="#shop"
            className="inline-block font-bold px-10 py-4 rounded-lg transition-all text-sm uppercase tracking-widest"
            style={{ background: "var(--gold)", color: "var(--header)" }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Shop */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...categories].map((cat) => {
            const isActive = cat === "All" ? !activeCategory : activeCategory === cat;
            return (
              <Link key={cat} href={cat === "All" ? "/" : `/?category=${cat}`}
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
                style={{
                  background: isActive ? "var(--gold)" : "var(--bg-surface)",
                  color: isActive ? "var(--header)" : "var(--text-muted)",
                  borderColor: isActive ? "var(--gold)" : "var(--border)",
                }}
              >
                {cat}
              </Link>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20" style={{ color: "var(--text-dim)" }}>
            No items in this category right now.
          </div>
        )}
      </section>

      {/* Custom orders callout */}
      <section className="py-16 px-4" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--gold-pale)" }}>
            Need something custom?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-muted)" }}>
            Andy takes on a limited number of custom orders each month — specific dimensions,
            matching sets, personalized gifts. Reach out early.
          </p>
          <Link href="/contact"
            className="inline-block font-semibold px-6 py-3 rounded-lg transition-all border"
            style={{ color: "var(--gold)", borderColor: "var(--gold)", background: "transparent" }}
          >
            Request a Custom Order
          </Link>
        </div>
      </section>
    </>
  );
}
