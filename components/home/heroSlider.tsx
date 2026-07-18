"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    src: "/images/foto1.avif",
    alt: "Outfit moderno de la colección Modern Outfit",
    label: "Nueva colección",
    title: "Elegancia moderna",
  },
  {
    id: 2,
    src: "/images/foto2.jpg",
    alt: "Conjunto casual de Modern Outfit",
    label: "Estilo casual",
    title: "Comodidad con estilo",
  },
  {
    id: 3,
    src: "/images/foto3.jpg",
    alt: "Prenda elegante de Modern Outfit",
    label: "Selección especial",
    title: "Diseñado para destacar",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }, []);

  const showPreviousSlide = () => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(showNextSlide, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, showNextSlide]);

  return (
    <div
      className="relative mx-auto w-full max-w-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Marco decorativo trasero */}
      <div className="absolute -inset-4 rotate-3 border border-[#d7a961]/40" />

      {/* Contenedor principal */}
      <div className="relative aspect-[4/5] overflow-hidden border border-[#d7a961]/40 bg-[#f4eee5] shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "visible scale-100 opacity-100"
                : "invisible scale-105 opacity-0"
            }`}
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Degradado para mejorar la lectura */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

            {/* Información de la fotografía */}
            <div className="absolute bottom-20 left-0 right-0 px-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e4b96f]">
                {slide.label}
              </p>

              <p className="mt-2 font-serif text-2xl font-black uppercase sm:text-3xl">
                {slide.title}
              </p>
            </div>
          </div>
        ))}

        {/* Esquinas decorativas */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-20 w-20 border-l-2 border-t-2 border-[#d7a961]" />

        <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-20 w-20 border-b-2 border-r-2 border-[#d7a961]" />

        {/* Flecha anterior */}
        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Mostrar fotografía anterior"
          className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-2xl text-white backdrop-blur-sm transition hover:border-[#d7a961] hover:bg-[#d7a961] hover:text-black"
        >
          ‹
        </button>

        {/* Flecha siguiente */}
        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Mostrar fotografía siguiente"
          className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-2xl text-white backdrop-blur-sm transition hover:border-[#d7a961] hover:bg-[#d7a961] hover:text-black"
        >
          ›
        </button>

        {/* Indicadores inferiores */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Mostrar fotografía ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#d7a961]"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Etiqueta inferior */}
      <div className="absolute -bottom-6 -left-4 z-30 bg-[#d7a961] px-6 py-4 text-black shadow-xl">
        <p className="text-xs font-bold uppercase tracking-[0.24em]">
          Modern Outfit
        </p>

        <p className="mt-1 font-serif text-lg font-black uppercase">
          Style. Confidence. You.
        </p>
      </div>
    </div>
  );
}