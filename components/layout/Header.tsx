import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f4ed]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/icono.ico"
            alt="Modern Outfit"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <p className="font-serif text-lg font-bold uppercase tracking-[0.18em] text-neutral-950">
              Modern Outfit
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Style. Confidence. You.
            </p>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-neutral-800 sm:gap-8 sm:text-sm">
            <li>
              <Link
                href="/"
                className="transition hover:text-[#b4813d]"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                href="/catalogo"
                className="transition hover:text-[#b4813d]"
              >
                Catálogo
              </Link>
            </li>

            <li>
              <Link
                href="/contacto"
                className="transition hover:text-[#b4813d]"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}