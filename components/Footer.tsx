import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-header-trans" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🪵</span>
              <span className="font-bold text-lg" style={{ color: "var(--gold)" }}>
                Andy&apos;s Woodworks
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Every piece is built by hand, one at a time, with wood selected
              for its character and grain. No shortcuts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xs uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              {[["Shop", "/"], ["About Andy", "/about"], ["Custom Orders", "/contact"], ["Cart", "/cart"]].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="transition-colors hover:opacity-100 opacity-60" style={{ color: "var(--text)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-xs uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>
              Get in Touch
            </h3>
            <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>Custom orders welcome.</p>
            <Link href="/contact" className="inline-block text-sm transition-colors hover:opacity-80" style={{ color: "var(--gold)" }}>
              Send Andy a message →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 text-xs text-center" style={{ borderTop: "1px solid var(--border)", color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} Andy&apos;s Woodworks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
