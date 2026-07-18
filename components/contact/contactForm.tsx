"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "573014916832";

const initialForm = {
  name: "",
  phone: "",
  subject: "Consulta de producto",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.message.trim()) {
      setError("Completa tu nombre y el mensaje para continuar.");
      return;
    }

    setError("");

    const whatsappMessage = [
      "Hola, Modern Outfit.",
      "",
      `Mi nombre es: ${formData.name.trim()}`,
      formData.phone.trim()
        ? `Mi número de contacto es: ${formData.phone.trim()}`
        : "",
      `Motivo de la consulta: ${formData.subject}`,
      "",
      `Mensaje: ${formData.message.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-black/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-[#a66f28]" />

        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#95601d]">
          Escríbenos
        </p>
      </div>

      <h2 className="mt-5 font-serif text-3xl font-black uppercase leading-tight text-neutral-950 sm:text-4xl">
        Cuéntanos cómo podemos ayudarte
      </h2>

      <p className="mt-4 leading-7 text-neutral-600">
        Completa el formulario y te llevaremos directamente a WhatsApp con el
        mensaje preparado.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600"
          >
            Nombre completo
          </label>

          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                name: event.target.value,
              }))
            }
            placeholder="Escribe tu nombre"
            className="mt-2 h-14 w-full border border-neutral-300 bg-[#faf8f4] px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#a66f28]"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600"
          >
            Teléfono
          </label>

          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(event) =>
              setFormData((current) => ({
                ...current,
                phone: event.target.value,
              }))
            }
            placeholder="300 000 0000"
            className="mt-2 h-14 w-full border border-neutral-300 bg-[#faf8f4] px-4 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#a66f28]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-subject"
          className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600"
        >
          Motivo de consulta
        </label>

        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              subject: event.target.value,
            }))
          }
          className="mt-2 h-14 w-full border border-neutral-300 bg-[#faf8f4] px-4 text-sm font-medium text-neutral-950 outline-none transition focus:border-[#a66f28]"
        >
          <option>Consulta de producto</option>
          <option>Disponibilidad y tallas</option>
          <option>Métodos de pago</option>
          <option>Estado de un pedido</option>
          <option>Envíos y entregas</option>
          <option>Otro motivo</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600"
        >
          Mensaje
        </label>

        <textarea
          id="contact-message"
          rows={6}
          value={formData.message}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          placeholder="Escribe tu consulta, producto, talla o información que necesitas..."
          className="mt-2 w-full resize-none border border-neutral-300 bg-[#faf8f4] px-4 py-4 text-sm leading-6 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-[#a66f28]"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="mt-4 border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 flex min-h-14 w-full items-center justify-center bg-neutral-950 px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#d7a961] hover:text-black"
      >
        Enviar por WhatsApp
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-neutral-500">
        Al continuar se abrirá WhatsApp. Ningún dato se almacena en esta página.
      </p>
    </form>
  );
}