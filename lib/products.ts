import { Product } from "./types";

export const products: Product[] = [
  {
    id: "pine-bar-6ft",
    name: "6-Foot Handcrafted Pine Bar",
    description: "Solid pine bar with horizontal plank front and rich stained top — perfect for a man cave, garage, or patio.",
    longDescription:
      "Built from solid pine with horizontal tongue-and-groove planking on the front and sides. The finished version features a beautiful dark walnut-stained top that makes the grain pop. Wide, flat surface is perfect for a home bar, man cave, garage, or outdoor entertaining space. Can be stained or painted to your color preference.",
    price: 200000,
    category: "Furniture",
    images: ["/products/Finished_6_Foot_Bar.jpg", "/products/6-foot-bar.jpg"],
    dimensions: '72" × 24" × 42" tall',
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "king-chair-set",
    name: "King Chair Set — 2 Chairs + Pedestal Table",
    description: "Tall Adirondack-style king chairs with matching pedestal table, finished in bold red.",
    longDescription:
      "Andy's signature king chairs are built big and built to last. Bar-height Adirondack-style with wide flat armrests and a high slatted back. This set comes as two chairs plus a matching turned pedestal table — perfect for a porch, deck, or patio. Shown here in a bold red stain but available in any color.",
    price: 0,
    priceOnRequest: true,
    category: "Outdoor",
    images: ["/products/King_Chairs.jpg", "/products/Single_King_Chair.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "king-chair-single",
    name: "King Chair — Single",
    description: "Tall bar-height Adirondack-style king chair in a warm walnut stain.",
    longDescription:
      "The single version of Andy's popular king chair. Bar-height Adirondack style with wide flat armrests, high slatted back, and a solid base. Shown in a warm walnut/cedar stain. Available in any stain or paint color you want.",
    price: 0,
    priceOnRequest: true,
    category: "Outdoor",
    images: ["/products/Single_King_Chair.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "farmhouse-picnic-table",
    name: "Farmhouse Picnic Table with Bench",
    description: "Heavy-duty farmhouse picnic table with X-brace legs and matching bench — seats 6 comfortably.",
    longDescription:
      "Built from structural pine with the classic X-brace trestle design. Thick plank top, matching bench included. Solid enough to live on a patio or deck for years. Can be stained, painted, or left natural with an outdoor sealer. This is a serious piece of furniture — not flimsy, not flat-pack.",
    price: 0,
    priceOnRequest: true,
    category: "Outdoor",
    images: ["/products/Park_Bench.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "entryway-hall-tree",
    name: "Entryway Hall Tree with Bench & Storage",
    description: "Full entryway hall tree — top shelf, coat hooks, bench seat, and lower cubbies.",
    longDescription:
      "Everything you need right inside the front door. This hall tree has a display shelf on top, four heavy-duty coat hooks in the middle, a bench seat for putting on shoes, and open storage cubbies below. Finished in a warm honey-walnut stain. A statement piece for any entryway.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Coat_Rack.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "kitchen-island",
    name: "Farmhouse Kitchen Island / Console Table",
    description: "White farmhouse-style island with X-brace sides, tray top, and two lower shelves.",
    longDescription:
      "Clean farmhouse styling with X-brace side panels, a raised tray-edge top, and two open lower shelves for storage. Painted white here but can be done in any color. Works as a kitchen island, entryway console, bar cart, or potting table. Built solid — no wobble.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Kitchen_Island.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "baby-cradle-finished",
    name: "Heirloom Baby Cradle — Finished",
    description: "Hand-built spindle cradle with rocker base, rich walnut stain — built to last generations.",
    longDescription:
      "A true heirloom piece. Spindle sides, gentle rocker base, finished in a rich walnut stain. Built to be passed down — not mass-produced, not flat-packed. Every one is made to order.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/baby-cradle.jpg", "/products/Baby_Crib.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "baby-cradle-unfinished",
    name: "Baby Cradle — Unfinished / Raw Pine",
    description: "Solid-sided rocking cradle with scalloped detail — raw pine, ready to stain or paint yourself.",
    longDescription:
      "Want to add your own finish? This cradle is built complete in raw pine — solid sides with decorative scalloped ends and a smooth rocker base. Sand it, stain it, paint it any color. Great if you want a custom color or want the natural wood look.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Unfinished_Baby_Crib_2.jpg"],
    wood: "Pine",
    inStock: true,
  },
  {
    id: "baby-crib-unfinished",
    name: "Baby Crib — Unfinished",
    description: "Slatted baby crib with arched headboard and rocker base — raw pine, ready to finish.",
    longDescription:
      "A full-size slatted baby crib with a beautiful arched headboard and rocker base. Shown here in raw pine — add your own stain, paint, or sealer. Solid construction, built to last.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Unfinished_Baby_Crib.jpg", "/products/Unfinished_Baby_Crib1.1.jpg"],
    wood: "Pine",
    inStock: true,
  },
  {
    id: "crib-rails",
    name: "Crib Rails — Finished & Unfinished",
    description: "Handcrafted crib rails, available finished or raw pine.",
    longDescription:
      "Need rails for a crib or cradle? Andy builds them to order. Shown here both finished in walnut stain and raw pine. Can be built to match any crib Andy makes or custom sized to fit what you already have.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Finished_Crib_Rails.jpg", "/products/Unfinished_Crib_Rails.jpg"],
    wood: "Pine",
    inStock: true,
  },
  {
    id: "bar-stools",
    name: "Bar Stools — Set of 2",
    description: "Solid wood bar stools with round seat and stretcher base — rich walnut stain.",
    longDescription:
      "A matching set of two bar stools, turned and assembled by hand. Round seat, angled legs, and a stretcher ring base for foot support. Finished in a warm walnut stain that shows off the grain. Solid and sturdy — no wobble. Pair these with the 6-foot bar for the perfect home bar setup.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Finished_Set_Chairs.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "boat-shelf",
    name: "Boat-Shaped Wall Shelf",
    description: "Hand-built pine shelf shaped like a rowboat hull — 3 shelves, tongue-and-groove back.",
    longDescription:
      "One of Andy's most popular pieces. Shaped like the hull of a classic rowboat, this wall shelf features three open shelves backed with tongue-and-groove pine paneling. Finished with a warm walnut stain. Great for a lake house, kid's room, nautical-themed space, or anywhere you want something that makes people stop and ask where you got it.",
    price: 0,
    priceOnRequest: true,
    category: "Decor",
    images: ["/products/boat-shelf.jpg", "/products/Boat_Shaped_Library.jpg"],
    wood: "Pine",
    inStock: true,
    featured: true,
  },
  {
    id: "log-cabin-birdhouse",
    name: "Log Cabin Birdhouse",
    description: "Detailed log cabin birdhouse with wraparound deck railing and dark stain.",
    longDescription:
      "Built like a little house — steeply pitched roof, log-style siding, and a full wraparound deck with railing. Dark walnut stain gives it a rustic cabin look. Great as a functional birdhouse or as garden decor. Each one is slightly different because Andy builds them by hand.",
    price: 0,
    priceOnRequest: true,
    category: "Outdoor",
    images: ["/products/Finished_Birdhouse.jpg"],
    wood: "Pine / Cedar",
    inStock: true,
    imagePosition: "center 75%",
  },
  {
    id: "garden-bench",
    name: "Garden Bench",
    description: "Simple solid pine garden bench — sturdy, clean lines, natural finish.",
    longDescription:
      "A no-fuss outdoor bench built from solid pine. Slatted seat and back, angled legs, and a natural golden finish. Works as a garden bench, entryway bench, or extra seating anywhere you need it. Can be stained or painted any color.",
    price: 0,
    priceOnRequest: true,
    category: "Outdoor",
    images: ["/products/Bench.jpg"],
    wood: "Pine",
    inStock: true,
    imagePosition: "center 35%",
  },
  {
    id: "round-pedestal-table",
    name: "Round Pedestal End Table",
    description: "Solid pine round-top pedestal table — great as a side table, bistro table, or plant stand.",
    longDescription:
      "Clean and simple. Round top, turned pedestal column, and a four-point cross base. Shown here unfinished but available stained or painted to match anything. Works as a side table, bistro table, nightstand, or plant stand. Pairs great with the King Chair set.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Round_End_Table.jpg"],
    wood: "Pine",
    inStock: true,
  },
  {
    id: "elevated-dog-feeder",
    name: "Elevated Dog Bowl Stand",
    description: "Raised pine dog feeder with two stainless steel bowls — better for your dog's posture.",
    longDescription:
      "Raised feeders are easier on a dog's neck and joints — and this one actually looks good in your house. Solid pine box construction with a warm stain, fitted with two removable stainless steel bowls. Available in small, medium, or large dog sizes.",
    price: 0,
    priceOnRequest: true,
    category: "Pets",
    images: ["/products/Dog_Feeder_Set.jpg"],
    wood: "Pine",
    inStock: true,
  },
  {
    id: "heart-planter",
    name: "Heart-Shaped Planter Box",
    description: "Unique heart-shaped slatted planter box with dark ebony finish.",
    longDescription:
      "A one-of-a-kind piece. Slatted pine sides shaped into a heart, finished in a deep ebony stain. Use it as a planter, a gift basket, or just a decorative bowl on a table. Makes a great Valentine's or Mother's Day gift — especially with a plant or arrangement inside.",
    price: 0,
    priceOnRequest: true,
    category: "Decor",
    images: ["/products/Heart_Shaped_Planter.jpg"],
    wood: "Pine",
    inStock: true,
  },
  {
    id: "toy-chest",
    name: "Toy Chest / Storage Bench",
    description: "Large solid pine toy chest with scalloped detail and a light whitewash finish.",
    longDescription:
      "Built big enough to actually hold a kid's toys. Solid pine with a decorative scalloped top edge and a light whitewash finish that keeps the wood grain visible. Flip-top lid, smooth hinges. Works as a toy chest, a blanket chest at the foot of a bed, or extra storage anywhere. Made to order.",
    price: 0,
    priceOnRequest: true,
    category: "Furniture",
    images: ["/products/Unfinished_Toybox.jpg"],
    wood: "Pine",
    inStock: true,
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
