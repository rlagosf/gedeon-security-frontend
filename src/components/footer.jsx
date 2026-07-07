// src/components/footer.jsx
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Reveal from "./Reveal";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const MAPS_LINK =
    "https://www.google.com/maps/place/Dr.+S%C3%B3tero+del+R%C3%ADo+508,+8340297+Santiago,+Regi%C3%B3n+Metropolitana/@-33.4376354,-70.6573288,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c5a51b63b6b3:0xf20434902593373f!8m2!3d-33.4376354!4d-70.6547539!16s%2Fg%2F11dzq5hrgp?entry=ttu";

  const scrollToId = useCallback((id) => {
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const goToSection = useCallback(
    (id) => {
      // Si estás en otra ruta, vuelve a "/" y luego scrollea
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => scrollToId(id), 0);
        return;
      }

      scrollToId(id);
    },
    [location.pathname, navigate, scrollToId]
  );

  const onNavClick = (e, id) => {
    e.preventDefault();
    goToSection(id);
  };

  return (
    <footer className="relative bg-[#070b12] overflow-hidden">
      {/* Fade superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent to-[#070b12]" />

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-3 items-start">
        {/* Marca */}
        <Reveal>
          <div>
            <div className="flex items-start gap-4">
              <a
                href="#inicio"
                onClick={(e) => onNavClick(e, "inicio")}
                className="shrink-0"
                aria-label="Ir a inicio"
              >
                <img
                  src="images/logo-gedeon-amarillo.png"
                  alt="Gedeon Security"
                  className="h-16 w-auto object-contain"
                  draggable="false"
                />
              </a>

              <p className="text-white/65 text-sm leading-relaxed max-w-sm mt-1">
                Empresa de seguridad orientada a la prevención, control operativo
                y respuesta coordinada. Servicios profesionales para entornos
                exigentes.
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
                <a
                  href="#inicio"
                  onClick={(e) => onNavClick(e, "inicio")}
                  className="text-white/70 hover:text-white transition"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#nosotros"
                  onClick={(e) => onNavClick(e, "nosotros")}
                  className="text-white/70 hover:text-white transition"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  onClick={(e) => onNavClick(e, "servicios")}
                  className="text-white/70 hover:text-white transition"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#ubicacion"
                  onClick={(e) => onNavClick(e, "ubicacion")}
                  className="text-white/70 hover:text-white transition"
                >
                  Ubicación
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  onClick={(e) => onNavClick(e, "contacto")}
                  className="text-white/70 hover:text-white transition"
                >
                  Contacto
                </a>
              </li>

              <li>
                <a
                  href="#sponsors"
                  onClick={(e) => onNavClick(e, "sponsors")}
                  className="text-white/70 hover:text-white transition"
                >
                  Sponsors
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
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="Abrir ubicación de Gedeon Security en Google Maps"
                >
                  Dr. Sótero del Río 508, Oficina 1024, Santiago Centro, Chile
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href="https://wa.me/56981302694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +56 9 8130 2694
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
          © {new Date().getFullYear()} Gedeon Security. Todos los derechos
          reservados.
        </div>
      </Reveal>
    </footer>
  );
}