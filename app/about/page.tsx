import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-stone-900 mb-2">About Andy</h1>
      <div className="w-16 h-1 bg-amber-400 rounded mb-10" />

      <div className="prose prose-stone max-w-none space-y-6 text-stone-600 leading-relaxed">
        <p>
          Andy&apos;s been working with wood since he was old enough to hold a
          hand plane. What started as weekend projects in a cramped garage has
          grown into a full workshop stocked with hand tools, hardwoods from
          local mills, and too many clamps.
        </p>
        <p>
          Every piece is made to last. Andy doesn&apos;t use particleboard,
          shortcuts, or production-line thinking. When you order from
          Andy&apos;s Woodworks, a real person is cutting, fitting, and
          finishing your piece.
        </p>
        <p>
          He works with a wide range of woods — pine, walnut, cherry, white
          oak, maple, and cedar — sourced from domestic mills whenever possible.
          Pine is a favorite for big statement pieces like bars, chairs, and
          cradles. Finishes are always food-safe on anything that touches food.
        </p>
        <p>
          Custom orders are welcome. If you have something specific in mind —
          a dining table, a set of matching frames, an engraved gift —
          reach out and Andy will let you know if he can make it happen.
        </p>
      </div>

      <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-100">
        <h2 className="text-xl font-bold text-stone-800 mb-3">
          Want something custom?
        </h2>
        <p className="text-stone-600 text-sm mb-5">
          Send Andy a message with your idea, dimensions, and timeline.
          He&apos;ll get back to you within a day or two.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-stone-900 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-600 transition-colors text-sm"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
