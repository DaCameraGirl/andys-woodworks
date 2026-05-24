import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Andy's Woodworks — Handcrafted Wood Creations",
  description:
    "Handcrafted cutting boards, furniture, and décor made from premium hardwoods. Each piece is built by hand, one at a time.",
  keywords: ["woodworking", "handcrafted", "cutting boards", "wood furniture", "custom wood"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
