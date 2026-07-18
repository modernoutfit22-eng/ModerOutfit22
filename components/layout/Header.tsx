import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Catálogo",
    href: "/catalogo",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f5ef]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Ir al inicio de Modern Outfit"
          className="flex min-w-0 items-center gap-3"
        >
          

          <div className="hidden sm:block">
            <p className="font-serif text-lg font-bold uppercase tracking-[0.16em]">
              Modern Outfit
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Style. Confidence. You.
            </p>
          </div>
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider sm:gap-6 sm:text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 transition-colors hover:text-[#a8752b]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}