// src/pages/landing.jsx
export default function Landing() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
        <p className="text-sm tracking-widest text-white/70 uppercase">
          Gedeon Security
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
          Seguridad corporativa con protocolos, control y respuesta.
        </h1>

        <p className="mt-5 text-white/75 max-w-2xl leading-relaxed">
          Servicios profesionales para empresas, condominios y operaciones críticas.
          Supervisión, trazabilidad y estándares de operación desde el primer día.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Cotizar servicio
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/15 text-white hover:bg-white/5 transition"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </div>
  );
}
