const informationItems = [
  "Nuevas colecciones",
  "Atención personalizada",
  "Pedidos por WhatsApp",
  "Envíos nacionales",
];

export default function InformationBar() {
  return (
    <section className="border-y border-black/10 bg-[#d6a85f]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 lg:justify-between lg:px-8">
        {informationItems.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 text-center text-xs font-black uppercase tracking-[0.18em] text-black sm:text-sm"
          >
            {index > 0 && (
              <span
                aria-hidden="true"
                className="hidden h-1.5 w-1.5 rounded-full bg-black lg:block"
              />
            )}

            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}