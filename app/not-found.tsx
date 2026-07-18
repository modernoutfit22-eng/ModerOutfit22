import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-700">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-black uppercase text-neutral-950 md:text-5xl">
          Página no encontrada
        </h1>

        <p className="mt-5 leading-7 text-neutral-600">
          La página que intentas visitar no existe o fue eliminada.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block bg-neutral-950 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-amber-600 hover:text-black"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}