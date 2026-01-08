// src/components/footer.jsx
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative bg-[#070b12] overflow-hidden">
      {/* Fade superior (para empalmar con el componente anterior) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent to-[#070b12]" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3 items-start">
        {/* Marca */}
        <Reveal>
          <div>
            <div className="flex items-start gap-4">
              <img
                src="images/logo-gedeon-amarillo.png"
                alt="Gedeon Security"
                className="h-16 w-auto object-contain"
                draggable="false"
              />

              <p className="text-white/65 text-sm leading-relaxed max-w-sm mt-1">
                Empresa de seguridad orientada a la prevención, control operativo y
                respuesta coordinada. Servicios profesionales para entornos exigentes.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Navegación */}
        <Reveal delay={0.08}>
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">
              Navegación
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-white transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/70 hover:text-white transition">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/70 hover:text-white transition">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-white/70 hover:text-white transition">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Contacto */}
        <Reveal delay={0.14}>
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">
              Contacto
            </p>

            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>
                📍{" "}
                <a
                  href="https://www.google.com/maps/dir//Lord+Cochrane+30+8330166+Santiago+Regi%C3%B3n+Metropolitana/@-33.4455629,-70.6550952,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  Lord Cochrane N° 30, Oficina 606, Santiago Centro, Chile
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href="https://wa.me/56941375587"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  +56 9 4137 5587
                </a>
              </p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:contacto@gedeonsecurity.cl"
                  className="hover:text-white transition"
                >
                  contacto@gedeonsecurity.cl
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Pie legal */}
      <Reveal delay={0.18}>
        <div className="py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Gedeon Security. Todos los derechos reservados.
        </div>
      </Reveal>
    </footer>
  );
}
