import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl font-black uppercase tracking-[0.16em]">
            Modern Outfit
          </p>

          <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-400">
            Moda moderna y versátil para expresar tu personalidad con estilo y
            confianza.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            Navegación
          </p>

          <div className="mt-5 flex flex-col items-start gap-3 text-sm text-neutral-400">
            <Link href="/" className="hover:text-[#d6a85f]">
              Inicio
            </Link>

            <Link href="/catalogo" className="hover:text-[#d6a85f]">
              Catálogo
            </Link>

            <Link href="/contacto" className="hover:text-[#d6a85f]">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em]">
            Información
          </p>

          <div className="mt-5 space-y-3 text-sm text-neutral-400">
            <p>Bogotá, Colombia</p>
            <p>WhatsApp: +57 300 000 0000</p>
            <p>modernoutfit@email.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-neutral-500">
        © {currentYear} Modern Outfit. Todos los derechos reservados.
      </div>
    </footer>
  );
}