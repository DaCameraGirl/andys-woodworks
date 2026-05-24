import { Product } from "./types";

export const products: Product[] = [
  {
    id: "walnut-cutting-board",
    name: "End-Grain Walnut Cutting Board",
    description: "Handcrafted end-grain walnut board with juice groove.",
    longDescription:
      "Each board is individually crafted from premium black walnut. The end-grain construction is gentle on knife edges and self-healing over time. Finished with food-safe mineral oil and beeswax blend. No two are exactly alike.",
    price: 8500,
    category: "Kitchen",
    images: [
      "https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80",
    ],
    dimensions: '14" × 10" × 1.5"',
    wood: "Black Walnut",
    inStock: true,
    featured: true,
  },
  {
    id: "oak-serving-tray",
    name: "White Oak Serving Tray",
    description: "Live-edge white oak tray with leather strap handles.",
    longDescription:
      "Milled from a single slab of white oak, this serving tray keeps all the character of the original tree. Genuine leather handles are riveted and hand-stitched. Finished with a food-safe hardwax oil.",
    price: 12000,
    category: "Kitchen",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    ],
    dimensions: '18" × 12" × 2"',
    wood: "White Oak",
    inStock: true,
    featured: true,
  },
  {
    id: "cherry-side-table",
    name: "Cherry Wood Side Table",
    description: "Solid cherry side table with tapered legs.",
    longDescription:
      "Hand-cut mortise-and-tenon joinery means no metal fasteners hold this piece together — just wood and craftsmanship. Cherry deepens to a rich honey-red patina over years of use. Finished with danish oil.",
    price: 42000,
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    dimensions: '20" × 20" × 24"',
    wood: "Cherry",
    inStock: true,
    featured: true,
  },
  {
    id: "maple-bowl",
    name: "Turned Maple Bowl",
    description: "Lathe-turned big-leaf maple bowl with natural edge.",
    longDescription:
      "Turned on a wood lathe from a single chunk of big-leaf maple. The natural bark edge is preserved where the tree's form allows. Finished with multiple coats of food-safe walnut oil. Perfect for fruit, keys, or just looking at.",
    price: 6500,
    category: "Décor",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    ],
    dimensions: '10" dia × 4" tall',
    wood: "Big-Leaf Maple",
    inStock: true,
  },
  {
    id: "walnut-bookshelf",
    name: "Walnut Floating Bookshelf Set",
    description: "Set of 3 floating shelves — solid walnut with hidden brackets.",
    longDescription:
      "Three staggered floating shelves cut from the same walnut slab so the grain flows wall-to-wall. Comes with concealed steel bracket hardware. Custom lengths available — just ask.",
    price: 32000,
    category: "Furniture",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
    dimensions: '36" × 8" × 1.75" each',
    wood: "Black Walnut",
    inStock: true,
    featured: true,
  },
  {
    id: "cedar-plant-stand",
    name: "Cedar Plant Stand",
    description: "Three-tier cedar plant stand, great for indoors or out.",
    longDescription:
      "Built from aromatic western red cedar — naturally resistant to rot and insects, and it smells incredible. Three tiers hold pots up to 12 inches in diameter. Finished with an outdoor-rated tung oil blend.",
    price: 18500,
    category: "Décor",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    ],
    dimensions: '16" × 16" × 36" tall',
    wood: "Western Red Cedar",
    inStock: false,
  },
  {
    id: "oak-picture-frames",
    name: "White Oak Picture Frames (set of 3)",
    description: "Minimalist solid oak frames — 4×6, 5×7, and 8×10.",
    longDescription:
      "Clean, modern frames milled from white oak with a hand-rubbed finish. No visible fasteners. Each frame has wall-mount hardware and an easel back. Great as a set or individually.",
    price: 9500,
    category: "Décor",
    images: [
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    ],
    wood: "White Oak",
    inStock: true,
  },
  {
    id: "pine-bar-6ft",
    name: "6-Foot Pine Bar",
    description: "Solid pine bar with tongue-and-groove front panels and wide top surface.",
    longDescription:
      "Built from solid pine with horizontal tongue-and-groove planking on the front and sides. Wide, flat top is perfect for a home bar, man cave, garage, or outdoor entertaining space. Sturdy frame construction with a clean, classic look. Can be stained, painted, or left natural — Andy can finish it to order.",
    price: 160000,
    category: "Furniture",
    images: ["/products/6-foot-bar.jpg"],
    dimensions: '72" × 24" × 42" tall',
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "custom-charcuterie",
    name: "Custom Charcuterie / Gift Board",
    description: "Personalized charcuterie board with engraved name or message.",
    longDescription:
      "The perfect gift. Choose your wood, pick your size, and send Andy a name or short message to engrave. Each board is finished with food-safe mineral oil and comes gift-ready. Allow 1–2 weeks for custom orders.",
    price: 7500,
    category: "Kitchen",
    images: [
      "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=800&q=80",
    ],
    wood: "Walnut, Cherry, or Maple — your choice",
    inStock: true,
    featured: true,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.inStock);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = [...new Set(products.map((p) => p.category))];
