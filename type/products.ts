import type {Product} from "@/type/product"

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Essential",
    slug: "camiseta-essential",
    category: "Camisetas",
    description:
      "Camiseta de corte moderno, tela suave y diseño versátil para cualquier ocasión.",
    price: 85000,
    previousPrice: 105000,
    image: "/images/products/camiseta-essential.jpg",
    sizes: ["S", "M", "L"],
    featured: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Pantalón Wide Leg",
    slug: "pantalon-wide-leg",
    category: "Pantalones",
    description:
      "Pantalón de silueta amplia, tiro alto y caída elegante para crear outfits modernos.",
    price: 145000,
    image: "/images/products/pantalon-wide-leg.jpg",
    sizes: ["S", "M", "L"],
    featured: true,
  },
  {
    id: 3,
    name: "Conjunto Aura Beige",
    slug: "conjunto-aura-beige",
    category: "Conjuntos",
    description:
      "Conjunto coordinado en tono beige, cómodo y elegante para destacar sin esfuerzo.",
    price: 220000,
    previousPrice: 250000,
    image: "/images/products/conjunto-beige.jpg",
    sizes: ["S", "M", "L"],
    featured: true,
    isNew: true,
  },
  {
    id: 4,
    name: "Vestido Midnight",
    slug: "vestido-midnight",
    category: "Vestidos",
    description:
      "Vestido negro de silueta estilizada, ideal para ocasiones especiales.",
    price: 180000,
    image: "/images/products/vestido-negro.jpg",
    sizes: ["S", "M", "L"],
  },
  {
    id: 5,
    name: "Blazer Arena",
    slug: "blazer-arena",
    category: "Chaquetas",
    description:
      "Blazer estructurado en tono arena para elevar tus looks casuales y formales.",
    price: 195000,
    previousPrice: 225000,
    image: "/images/products/blazer-arena.jpg",
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "Jean Recto Classic",
    slug: "jean-recto-classic",
    category: "Pantalones",
    description:
      "Jean de corte recto y tiro alto, diseñado para brindar comodidad y estilo.",
    price: 155000,
    image: "/images/products/jean-recto.jpg",
    sizes: ["6", "8", "10", "12"],
    isNew: true,
  },
];