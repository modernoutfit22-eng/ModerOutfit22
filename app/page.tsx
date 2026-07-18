import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/home/heroSlider"

const promotions = [
  {
    id: 1,
    label: "Promoción especial",
    title: "20% de descuento",
    description:
      "Aprovecha un descuento especial en prendas seleccionadas.",
    code: "MODERN20",
  },
  {
    id: 2,
    label: "Beneficio exclusivo",
    title: "Envío gratis",
    description:
      "Envío gratuito en compras superiores al valor establecido.",
    code: "ENVIOFREE",
  },
  {
    id: 3,
    label: "Arma tu outfit",
    title: "Lleva 2 y ahorra",
    description:
      "Combina dos prendas seleccionadas y recibe un precio especial.",
    code: "OUTFIT2",
  },
];

const categories = [
  {
    id: 1,
    name: "Camisetas",
    description: "Prendas modernas, cómodas y fáciles de combinar.",
    style:
      "bg-[linear-gradient(135deg,#171717_0%,#343434_60%,#bd8b4c_160%)]",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Pantalones",
    description: "Siluetas versátiles para crear diferentes estilos.",
    style:
      "bg-[linear-gradient(135deg,#d2b993_0%,#f1e8dc_60%,#a87131_160%)]",
    textColor: "text-neutral-950",
  },
  {
    id: 3,
    name: "Conjuntos",
    description: "Outfits completos diseñados para destacar.",
    style:
      "bg-[linear-gradient(135deg,#845b2c_0%,#c99b5d_60%,#f1e3ce_160%)]",
    textColor: "text-white",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(202,154,85,0.3),transparent_38%)]" />

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full border border-white/5" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#d7a961] sm:text-sm">
              Nueva colección
            </p>

            <h1 className="mt-6 font-serif font-black uppercase tracking-[-0.04em]">
              <span
                className="block leading-[0.9] text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 5.5rem)" }}
              >
                Tu estilo.
              </span>

              <span className="my-2 flex items-center gap-4">
                <span className="hidden h-px w-10 bg-[#d7a961] sm:block" />

                <span
                  className="block whitespace-nowrap leading-none text-[#d7a961]"
                  style={{ fontSize: "clamp(1.9rem, 3vw, 3.3rem)" }}
                >
                  Tu confianza.
                </span>
              </span>

              <span
                className="block leading-[0.9] text-white"
                style={{ fontSize: "clamp(2rem, 4vw, 5.5rem)" }}
              >
                Tu esencia.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
              Descubre prendas modernas, elegantes y versátiles para crear
              outfits que representen tu personalidad.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/catalogo"
                className="inline-flex min-h-14 items-center justify-center bg-[#d7a961] px-8 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#e8c17e]"
              >
                Ver catálogo
              </Link>

              <Link
                href="/contacto"
                className="inline-flex min-h-14 items-center justify-center border border-white/30 px-8 text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
              >
                Contáctanos
              </Link>
            </div>

            
          </div>

          <section>
            <div className="grid lg:grid-cols-1">
              
            
              <HeroSlider />
            </div>
          </section>
        </div>
      </section>

      {/* FRANJA INFORMATIVA */}
      <section className="bg-[#d7a961]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 px-5 py-5 text-center text-xs font-black uppercase tracking-[0.17em] text-black lg:justify-between lg:px-8">
          <p>Nuevas colecciones</p>
          <p>Atención personalizada</p>
          <p>Pedidos por WhatsApp</p>
          <p>Envíos nacionales</p>
        </div>
      </section>

      {/* PROMOCIONES */}
      <section className="relative overflow-hidden bg-[#f4eee5] py-20 sm:py-24">
        {/* Elementos decorativos */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-[#b27b32]/20" />
        
        <div className="pointer-events-none absolute -bottom-52 -left-40 h-96 w-96 rounded-full bg-[#b27b32]/5" />
        
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          {/* Encabezado */}
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#9a641e]" />
        
                <p className="text-xs font-black uppercase tracking-[0.35em] text-[#9a641e]">
                  Beneficios exclusivos
                </p>
              </div>
        
              <h2 className="mt-6 font-serif text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-neutral-950 sm:text-5xl lg:text-6xl">
                Promociones para
                <span className="block text-[#ae762c]">
                  renovar tu estilo
                </span>
              </h2>
        
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-700">
                Aprovecha nuestros beneficios especiales y encuentra las prendas
                ideales para crear un outfit que represente tu personalidad.
              </p>
            </div>
        
            <Link
              href="/catalogo"
              className="inline-flex w-fit items-center justify-center gap-3 border border-neutral-950 px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
            >
              Ver catálogo
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        
          {/* Tarjetas */}
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {promotions.map((promotion, index) => {
              const isFeatured = index === 0;
            
              return (
                <article
                  key={promotion.id}
                  className={`group relative flex min-h-[430px] flex-col overflow-hidden border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    isFeatured
                      ? "border-neutral-950 bg-neutral-950 text-white shadow-xl"
                      : "border-black/10 bg-white text-neutral-950 shadow-sm"
                  }`}
                >
                  {/* Línea superior */}
                  <div
                    className={`absolute left-0 top-0 h-1 transition-all duration-500 group-hover:w-full ${
                      isFeatured
                        ? "w-full bg-[#d7a961]"
                        : "w-16 bg-[#ae762c]"
                    }`}
                  />
      
                  {/* Número de fondo */}
                  <span
                    className={`pointer-events-none absolute -right-3 -top-7 font-serif text-[9rem] font-black leading-none ${
                      isFeatured
                        ? "text-white/[0.07]"
                        : "text-neutral-950/[0.05]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  
                  {/* Etiqueta */}
                  <div className="relative">
                    <span
                      className={`inline-flex px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] ${
                        isFeatured
                          ? "bg-[#d7a961] text-black"
                          : "bg-[#f1e4d0] text-[#8a591b]"
                      }`}
                    >
                      {promotion.label}
                    </span>
                  </div>
                    
                  {/* Información */}
                  <div className="relative mt-8">
                    <h3
                      className={`font-serif text-3xl font-black uppercase leading-[1.05] sm:text-4xl ${
                        isFeatured ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      {promotion.title}
                    </h3>
                    
                    <p
                      className={`mt-5 leading-7 ${
                        isFeatured ? "text-neutral-300" : "text-neutral-600"
                      }`}
                    >
                      {promotion.description}
                    </p>
                  </div>
                    
                  {/* Código y acción */}
                  <div
                    className={`relative mt-auto border-t pt-6 ${
                      isFeatured ? "border-white/15" : "border-neutral-200"
                    }`}
                  >
                    <p
                      className={`text-[10px] font-black uppercase tracking-[0.25em] ${
                        isFeatured ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      Utiliza el código
                    </p>
                    
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <span
                        className={`border border-dashed px-5 py-3 font-mono text-sm font-black tracking-wider ${
                          isFeatured
                            ? "border-[#d7a961] bg-[#d7a961] text-black"
                            : "border-[#ae762c] bg-[#f8f2e9] text-[#805117]"
                        }`}
                      >
                        {promotion.code}
                      </span>
                      
                      <Link
                        href="/catalogo"
                        aria-label={`Ver productos de la promoción ${promotion.title}`}
                        className={`flex h-12 w-12 items-center justify-center border text-xl transition ${
                          isFeatured
                            ? "border-white/30 text-white hover:border-[#d7a961] hover:bg-[#d7a961] hover:text-black"
                            : "border-neutral-300 text-neutral-950 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                        }`}
                      >
                        →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          
          <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-black/10 pt-8 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-neutral-600">
              Promociones sujetas a disponibilidad y referencias seleccionadas.
            </p>
          
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#95601d]">
              Modern Outfit · Style. Confidence. You.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#99651f]">
              Encuentra tu próximo outfit
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black uppercase sm:text-5xl">
              Explora por categoría
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href="/catalogo"
                className={`group relative flex min-h-96 flex-col justify-end overflow-hidden p-8 ${category.style} ${category.textColor}`}
              >
                <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-white/20 transition duration-500 group-hover:scale-125" />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] opacity-70">
                    Categoría 0{index + 1}
                  </p>

                  <h3 className="mt-3 font-serif text-4xl font-black uppercase">
                    {category.name}
                  </h3>

                  <p className="mt-4 max-w-xs leading-7 opacity-80">
                    {category.description}
                  </p>

                  <p className="mt-7 text-sm font-bold uppercase tracking-[0.16em]">
                    Ver productos →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-[#f8f4ed] px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-neutral-950 px-7 py-16 text-white sm:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_right,rgba(215,169,97,0.3),transparent_65%)]" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d7a961]">
              Atención personalizada
            </p>

            <h2 className="mt-5 font-serif text-4xl font-black uppercase leading-tight sm:text-5xl">
              ¿Necesitas ayuda para elegir tu outfit?
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-neutral-300">
              Escríbenos para consultar tallas, colores, disponibilidad,
              métodos de pago y opciones de envío.
            </p>

            <Link
              href="/contacto"
              className="mt-9 inline-flex min-h-14 items-center justify-center bg-[#d7a961] px-8 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}