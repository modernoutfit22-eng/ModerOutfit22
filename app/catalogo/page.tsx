import type { Metadata } from "next";
import CatalogClient from "@/components/catalog/CatalogClient";
import { products } from "@/type/products";

export const metadata: Metadata = {
  title: "Catálogo | Modern Outfit",
  description:
    "Explora la colección de prendas, conjuntos y accesorios de Modern Outfit.",
};

export default function CatalogPage() {
  return (
    <>
      {/* Encabezado del catálogo */}
      <section className="relative overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(215,169,97,0.28),transparent_35%)]" />

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full border border-white/5" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#d7a961]" />

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d7a961]">
                Colección Modern Outfit
              </p>
            </div>

            <h1 className="mt-7 font-serif text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Encuentra prendas
              <span className="block text-[#d7a961]">
                para tu estilo
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              Explora nuestra selección de prendas modernas, elegantes y
              versátiles. Consulta tallas y disponibilidad directamente por
              WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <CatalogClient products={products} />

      {/* Información inferior */}
      <section className="bg-neutral-950 px-5 py-14 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="font-serif text-2xl font-black text-[#d7a961]">
              Envíos
            </p>

            <p className="mt-2 text-sm text-neutral-400">
              Consulta cobertura y tiempos de entrega.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl font-black text-[#d7a961]">
              Tallas
            </p>

            <p className="mt-2 text-sm text-neutral-400">
              Recibe asesoría para elegir la talla ideal.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl font-black text-[#d7a961]">
              Atención
            </p>

            <p className="mt-2 text-sm text-neutral-400">
              Resolvemos tus dudas directamente por WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}