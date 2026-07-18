import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(196,146,72,0.28),transparent_35%)]" />

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-white/5" />
      <div className="absolute -left-20 top-32 h-56 w-56 rounded-full border border-white/5" />

      <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#d6a85f] sm:text-sm">
            Nueva colección
          </p>

          <h1 className="mt-6 font-serif font-black uppercase tracking-[-0.04em]">
            <span
              className="block leading-[0.9] text-white"
              style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)" }}
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
              style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)" }}
            >
              Tu esencia.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
            Descubre prendas modernas, elegantes y versátiles para construir
            outfits que representen tu personalidad.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/catalogo"
              className="inline-flex min-h-14 items-center justify-center bg-[#d6a85f] px-8 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#e5bd7b]"
            >
              Ver catálogo
            </Link>

            <Link
              href="/contacto"
              className="inline-flex min-h-14 items-center justify-center border border-white/30 px-8 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Contáctanos
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
            <div>
              <p className="text-xl font-black text-[#d6a85f]">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Estilo
              </p>
            </div>

            <div>
              <p className="text-xl font-black text-[#d6a85f]">Nuevas</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Tendencias
              </p>
            </div>

            <div>
              <p className="text-xl font-black text-[#d6a85f]">Atención</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-neutral-400">
                Personalizada
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rotate-3 border border-[#d6a85f]/30" />

          <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#f3eee4] p-8 shadow-2xl sm:p-12">
            <div className="absolute left-0 top-0 h-24 w-24 border-l-2 border-t-2 border-[#d6a85f]" />
            <div className="absolute bottom-0 right-0 h-24 w-24 border-b-2 border-r-2 border-[#d6a85f]" />

            <Image
              src="/images/logo-modern-outfit.png"
              alt="Modern Outfit"
              width={500}
              height={500}
              preload
              className="h-auto w-full max-w-sm rounded-full object-contain"
            />
          </div>

          <div className="absolute -bottom-6 -left-5 bg-[#d6a85f] px-6 py-4 text-black shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em]">
              Style
            </p>

            <p className="font-serif text-xl font-black uppercase">
              Confidence. You.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}