import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/contactForm";

export const metadata: Metadata = {
  title: "Contacto | Modern Outfit",
  description:
    "Comunícate con Modern Outfit para consultar productos, tallas, pagos, pedidos y envíos.",
};

const whatsappNumber = "573014916832";
const whatsappMessage = encodeURIComponent(
  "Hola, Modern Outfit. Deseo recibir información sobre sus productos.",
);

const contactChannels = [
  {
    id: 1,
    number: "01",
    title: "WhatsApp",
    description:
      "Consulta disponibilidad, tallas, colores, métodos de pago y envíos.",
    value: "+57 300 000 0000",
    href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
    action: "Abrir WhatsApp",
    external: true,
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Instagram",
    description:
      "Conoce nuevos productos, promociones, colecciones y novedades.",
    value: "@modernoutfit",
    href: "https://www.instagram.com/modernoutfit",
    action: "Ver Instagram",
    external: true,
    featured: false,
  },
  {
    id: 3,
    number: "03",
    title: "Correo",
    description:
      "Escríbenos para solicitudes comerciales o información general.",
    value: "modernoutfit@email.com",
    href: "mailto:modernoutfit@email.com",
    action: "Enviar correo",
    external: false,
    featured: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ENCABEZADO */}
      <section className="relative overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(215,169,97,0.3),transparent_35%)]" />

        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full border border-white/5" />

        <div className="absolute -right-20 bottom-0 h-52 w-52 rotate-45 border border-[#d7a961]/15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#d7a961]" />

              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d7a961]">
                Atención personalizada
              </p>
            </div>

            <h1 className="mt-7 font-serif text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Estamos aquí
              <span className="block text-[#d7a961]">
                para  ayudarte
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
              Resolvemos tus inquietudes sobre productos, tallas, pedidos,
              pagos y opciones de envío.
            </p>
          </div>
        </div>
      </section>

      {/* CANALES DE CONTACTO */}
      <section className="relative overflow-hidden bg-[#f4eee5] py-20">
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#b27b32]/15" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#95601d]">
              Elige el canal que prefieras
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black uppercase leading-tight text-neutral-950 sm:text-5xl">
              Hablemos de tu próximo outfit
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              Comunícate directamente con nuestro equipo y recibe atención
              personalizada.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {contactChannels.map((channel) => (
              <article
                key={channel.id}
                className={`group relative flex min-h-[340px] flex-col overflow-hidden border p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  channel.featured
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-black/10 bg-white text-neutral-950"
                }`}
              >
                <span
                  className={`pointer-events-none absolute -right-3 -top-6 font-serif text-[8rem] font-black leading-none ${
                    channel.featured
                      ? "text-white/[0.06]"
                      : "text-neutral-950/[0.05]"
                  }`}
                >
                  {channel.number}
                </span>

                <div className="relative">
                  <p
                    className={`text-xs font-black uppercase tracking-[0.3em] ${
                      channel.featured
                        ? "text-[#d7a961]"
                        : "text-[#95601d]"
                    }`}
                  >
                    Canal de atención
                  </p>

                  <h3
                    className={`mt-5 font-serif text-3xl font-black uppercase ${
                      channel.featured ? "text-white" : "text-neutral-950"
                    }`}
                  >
                    {channel.title}
                  </h3>

                  <p
                    className={`mt-4 leading-7 ${
                      channel.featured
                        ? "text-neutral-300"
                        : "text-neutral-600"
                    }`}
                  >
                    {channel.description}
                  </p>
                </div>

                <div
                  className={`relative mt-auto border-t pt-6 ${
                    channel.featured
                      ? "border-white/15"
                      : "border-neutral-200"
                  }`}
                >
                  <p
                    className={`text-sm font-bold ${
                      channel.featured
                        ? "text-white"
                        : "text-neutral-950"
                    }`}
                  >
                    {channel.value}
                  </p>

                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer" : undefined}
                    className={`mt-5 inline-flex min-h-12 w-full items-center justify-center px-5 text-xs font-black uppercase tracking-[0.16em] transition ${
                      channel.featured
                        ? "bg-[#d7a961] text-black hover:bg-white"
                        : "bg-neutral-950 text-white hover:bg-[#d7a961] hover:text-black"
                    }`}
                  >
                    {channel.action}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO E INFORMACIÓN */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <ContactForm />

          <aside className="flex flex-col gap-6">
            <article className="bg-neutral-950 p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d7a961]">
                Horario de atención
              </p>

              <h2 className="mt-5 font-serif text-3xl font-black uppercase">
                Estamos disponibles
              </h2>

              <div className="mt-7 space-y-5 text-sm">
                <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
                  <span className="text-neutral-400">
                    Lunes a viernes
                  </span>

                  <strong>9:00 a. m. – 6:00 p. m.</strong>
                </div>

                <div className="flex items-center justify-between gap-5 border-b border-white/10 pb-4">
                  <span className="text-neutral-400">
                    Sábados
                  </span>

                  <strong>9:00 a. m. – 4:00 p. m.</strong>
                </div>

                <div className="flex items-center justify-between gap-5">
                  <span className="text-neutral-400">
                    Domingos y festivos
                  </span>

                  <strong>Cerrado</strong>
                </div>
              </div>
            </article>

            <article className="border border-black/10 bg-[#f4eee5] p-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#95601d]">
                Información importante
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-black uppercase text-neutral-950">
                    Pedidos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Indícanos el nombre del producto, color y talla que deseas
                    consultar.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="font-serif text-xl font-black uppercase text-neutral-950">
                    Envíos
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Los tiempos y costos dependen de la ciudad y modalidad de
                    entrega.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-5">
                  <h3 className="font-serif text-xl font-black uppercase text-neutral-950">
                    Respuesta
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Respondemos las solicitudes en el menor tiempo posible
                    dentro del horario de atención.
                  </p>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f4eee5] px-5 py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#d7a961] px-7 py-12 text-black sm:px-12 lg:px-16">
          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-black/10" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em]">
                Modern Outfit
              </p>

              <h2 className="mt-4 max-w-3xl font-serif text-3xl font-black uppercase leading-tight sm:text-4xl">
                Encuentra la prenda ideal para expresar tu estilo
              </h2>
            </div>

            <Link
              href="/catalogo"
              className="inline-flex min-h-14 w-fit items-center justify-center bg-neutral-950 px-8 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
            >
              Explorar catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}