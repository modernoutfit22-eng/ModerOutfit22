"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/catalog/productCard";
import type { Product } from "@/type/product";

interface CatalogClientProps {
  products: Product[];
}

type SortOption =
  | "featured"
  | "price-low"
  | "price-high"
  | "name";

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function CatalogClient({
  products,
}: Readonly<CatalogClientProps>) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortOption, setSortOption] =
    useState<SortOption>("featured");

  const categories = useMemo(
    () => [
      "Todos",
      ...Array.from(
        new Set(products.map((product) => product.category)),
      ),
    ],
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = normalizeText(search);

    const result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "Todos" ||
        product.category === selectedCategory;

      const searchableText = normalizeText(
        `${product.name} ${product.category} ${product.description}`,
      );

      const matchesSearch =
        normalizedSearch === "" ||
        searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    return [...result].sort((firstProduct, secondProduct) => {
      switch (sortOption) {
        case "price-low":
          return firstProduct.price - secondProduct.price;

        case "price-high":
          return secondProduct.price - firstProduct.price;

        case "name":
          return firstProduct.name.localeCompare(secondProduct.name);

        case "featured":
        default:
          return Number(secondProduct.featured ?? false) -
            Number(firstProduct.featured ?? false);
      }
    });
  }, [products, search, selectedCategory, sortOption]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("Todos");
    setSortOption("featured");
  };

  return (
    <section className="bg-[#f8f4ed] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Controles */}
        <div className="border border-black/10 bg-white p-5 shadow-sm sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
            <div>
              <label
                htmlFor="catalog-search"
                className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-600"
              >
                Buscar productos
              </label>

              <div className="relative mt-2">
                <input
                  id="catalog-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Busca camisetas, vestidos, pantalones..."
                  className="h-14 w-full border border-neutral-300 bg-[#faf8f4] px-5 pr-12 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#a66f28]"
                />

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xl text-neutral-500"
                >
                  ⌕
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="catalog-order"
                className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-600"
              >
                Ordenar por
              </label>

              <select
                id="catalog-order"
                value={sortOption}
                onChange={(event) =>
                  setSortOption(event.target.value as SortOption)
                }
                className="mt-2 h-14 w-full border border-neutral-300 bg-[#faf8f4] px-4 text-sm font-semibold text-neutral-950 outline-none transition focus:border-[#a66f28]"
              >
                <option value="featured">Destacados</option>
                <option value="price-low">
                  Precio: menor a mayor
                </option>
                <option value="price-high">
                  Precio: mayor a menor
                </option>
                <option value="name">Nombre</option>
              </select>
            </div>
          </div>

          {/* Categorías */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-600">
              Categorías
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-11 border px-5 text-xs font-black uppercase tracking-[0.14em] transition ${
                      isSelected
                        ? "border-neutral-950 bg-neutral-950 text-white"
                        : "border-neutral-300 bg-white text-neutral-700 hover:border-[#a66f28] hover:text-[#8b5919]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cantidad de resultados */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-b border-black/10 pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#99651f]">
              Colección Modern Outfit
            </p>

            <h2 className="mt-2 font-serif text-3xl font-black uppercase text-neutral-950">
              Productos disponibles
            </h2>
          </div>

          <p className="text-sm text-neutral-600">
            Mostrando{" "}
            <strong className="text-neutral-950">
              {filteredProducts.length}
            </strong>{" "}
            {filteredProducts.length === 1
              ? "producto"
              : "productos"}
          </p>
        </div>

        {/* Productos */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 border border-black/10 bg-white px-6 py-20 text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#99651f]">
              Sin resultados
            </p>

            <h3 className="mt-4 font-serif text-3xl font-black uppercase text-neutral-950">
              No encontramos productos
            </h3>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-neutral-600">
              Intenta utilizar otra palabra o selecciona una categoría
              diferente.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-7 bg-neutral-950 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#d7a961] hover:text-black"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}