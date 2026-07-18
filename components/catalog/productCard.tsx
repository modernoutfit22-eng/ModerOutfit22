import Image from "next/image";
import type { Product } from "@/type/product";

interface ProductCardProps {
  product: Product;
}

const whatsappNumber = "573014916832";

function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductCard({
  product,
}: Readonly<ProductCardProps>) {
  const discountPercentage = product.previousPrice
    ? Math.round(
        ((product.previousPrice - product.price) / product.previousPrice) * 100,
      )
    : null;

  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesada en el producto ${product.name}. ¿Me pueden brindar información sobre disponibilidad y tallas?`,
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Imagen */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eee8de]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

        {/* Etiquetas */}
        <div className="absolute left-4 top-4 z-10 flex flex-col items-start gap-2">
          {product.isNew && (
            <span className="bg-neutral-950 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Nuevo
            </span>
          )}

          {discountPercentage && (
            <span className="bg-[#d7a961] px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>

      {/* Información */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#99651f]">
          {product.category}
        </p>

        <h2 className="mt-3 font-serif text-2xl font-black uppercase leading-tight text-neutral-950">
          {product.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {product.description}
        </p>

        {/* Tallas */}
        <div className="mt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
            Tallas disponibles
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="flex h-9 min-w-9 items-center justify-center border border-neutral-300 px-2 text-xs font-bold text-neutral-800"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-2xl font-black text-neutral-950">
              {formatPrice(product.price)}
            </p>

            {product.previousPrice && (
              <p className="text-sm text-neutral-400 line-through">
                {formatPrice(product.previousPrice)}
              </p>
            )}
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex min-h-12 items-center justify-center bg-neutral-950 px-5 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#d7a961] hover:text-black"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}