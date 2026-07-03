"use client";

import { useSearchParams } from "next/navigation";
import ShopHome from "@/components/ShopHome";

export default function ShopPageClient() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? undefined;

  return <ShopHome activeCategory={activeCategory} />;
}
