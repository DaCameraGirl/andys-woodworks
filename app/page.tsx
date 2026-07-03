import { Suspense } from "react";
import ShopHome from "@/components/ShopHome";
import ShopPageClient from "@/components/ShopPageClient";

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopHome />}>
      <ShopPageClient />
    </Suspense>
  );
}
