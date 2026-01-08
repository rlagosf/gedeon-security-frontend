// src/pages/landing.jsx

const MASK_STYLE = {
  WebkitMaskImage:
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)",
  maskImage:
    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 72%, rgba(0,0,0,0) 100%)",
};

export default function Landing() {
  return (
    <section
      id="inicio"
      className="relative isolate w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* FONDO (con máscara para “desaparecer” al pie y mostrar ThemeBackdrop) */}
      <div className="absolute inset-0 z-0" style={MASK_STYLE}>
        {/* Foto */}
        <img
          src="images/foto-camara-ia.jpg"
          alt="Gedeon Security fondo"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay corporativo: ojo, NO lo dejamos sólido al final */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2b]/60 via-[#0b1a2b]/80 to-transparent" />

        {/* Oscurecimiento suave para texto (centro), sin matar el fade */}
        <div className="absolute inset-0 bg-[#0b1a2b]/25" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* BLOQUE IZQUIERDO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/85 text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FCEE21]" />
              Seguridad física profesional
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-white max-w-2xl">
              Proteger y velar por lo que más importa.
            </h1>

            <p className="mt-5 text-white/80 max-w-xl leading-relaxed">
              GEDEON SECURITY es una empresa nacional con más de 20 años de experiencia en
              seguridad privada. Entregamos soluciones reales de protección, adaptadas a la
              realidad actual, basadas en personal capacitado, legalidad y compromiso con
              nuestros clientes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center h-11 px-7 rounded-md bg-[#FCEE21] text-[#0b1a2b] font-semibold hover:brightness-95 active:scale-95 transition"
              >
                Cotizar servicio
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center h-11 px-6 rounded-md border border-white/30 text-white hover:bg-white/10 active:scale-95 transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* BLOQUE DERECHO – PILARES */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-3xl bg-[#FCEE21]/12 blur-2xl" />

              <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
                <ul className="space-y-4 text-sm text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#FCEE21]" />
                    <span>
                      <b>Experiencia real en seguridad privada.</b> Más de 20 años en servicios de seguridad física.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#FCEE21]" />
                    <span>
                      <b>Protección y confianza.</b> Proteger bienes y velar por la tranquilidad de nuestros clientes.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#FCEE21]" />
                    <span>
                      <b>Personal capacitado y legalidad.</b> Formación, experiencia y cumplimiento normativo.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-[#FCEE21]" />
                    <span>
                      <b>Crecimiento responsable.</b> Evolución junto a nuestros clientes y respeto al recurso humano.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
