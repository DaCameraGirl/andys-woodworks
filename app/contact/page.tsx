import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-stone-900 mb-2">
        Custom Orders and Questions
      </h1>
      <div className="w-16 h-1 bg-amber-400 rounded mb-10" />

      <p className="text-stone-600 mb-6 leading-relaxed">
        Have a specific piece in mind, want to ask about dimensions, or need pricing on a build you saw in the shop?
        Reach out directly and Andy can quote it for you.
      </p>

      <div className="rounded-2xl border border-amber-100 bg-amber-50 p-8 space-y-4">
        <p className="text-sm uppercase tracking-wide font-semibold text-amber-800">
          Best contact
        </p>
        <a
          href="mailto:andy_burch2000@yahoo.com?subject=Andy%27s%20Woodworks%20Inquiry"
          className="block text-xl font-bold text-stone-900 hover:text-amber-700 transition-colors"
        >
          andy_burch2000@yahoo.com
        </a>
        <p className="text-sm text-stone-600 leading-relaxed">
          Include the item name, any custom dimensions, stain or paint color, and your timeline.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-8">
        <h2 className="text-xl font-bold text-stone-900 mb-4">
          What to send
        </h2>
        <ul className="space-y-3 text-sm text-stone-600">
          <li>Item name or link from the shop</li>
          <li>Dimensions or changes you want</li>
          <li>Stain, paint, or finish preference</li>
          <li>Pickup or delivery questions</li>
        </ul>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-block bg-stone-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    </div>
  );
}
