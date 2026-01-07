// src/pages/ubicacion.jsx
import { MapPin, Clock } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="relative w-full py-20 md:py-28">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Ubicación
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              Nuestra operación se encuentra en el centro de Santiago, desde donde coordinamos
              servicios, supervisión y soporte a clientes corporativos.
            </p>
          </div>
        </Reveal>

        {/* Contenido */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">

          {/* Información */}
          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 grid place-items-center backdrop-blur">
                    <MapPin className="h-5 w-5 text-[#FCEE21]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Dirección</h3>
                </div>

                <p className="mt-3 text-white/85 leading-relaxed">
                  Lord Cochrane N° 30, Oficina 606<br />
                  Santiago Centro, Región Metropolitana, Chile.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 grid place-items-center backdrop-blur">
                    <Clock className="h-5 w-5 text-[#FCEE21]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Horario de atención</h3>
                </div>

                <p className="mt-3 text-white/85">
                  Lunes a Viernes — 09:00 a 18:00 hrs.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.14}>
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-xl min-h-[320px]">
              {/* Overlay corporativo sutil */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#FCEE21]/5 via-transparent to-[#0b1a2b]/40 z-10" />

              <iframe
                title="Ubicación Gedeon Security"
                src="https://www.google.com/maps?q=Lord%20Cochrane%2030%2C%20Santiago%20Centro%2C%20Chile&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
