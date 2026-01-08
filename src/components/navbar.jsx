// src/components/navbar.jsx
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const LOGO_AMARILLO = "images/logo-gedeon-amarillo.png";
const LOGO_AZUL = "images/logo-gedeon-azul.png";

const BG_AMARILLO = "bg-[#FCEE21]";
const BG_AZUL = "bg-[#0b1a2b]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const logoSrc = scrolled ? LOGO_AMARILLO : LOGO_AZUL;

  // Colores según fondo
  const text = scrolled ? "text-white" : "text-[#0b1a2b]";
  const textMuted = scrolled ? "text-white/80" : "text-[#0b1a2b]/80";
  const border = scrolled ? "border-white/15" : "border-black/15";
  const hoverBg = scrolled ? "hover:bg-white/10" : "hover:bg-black/10";

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      {/* Pill nav tipo PrebuiltUI */}
      <nav
        className={[
          "mx-4",
          "max-md:w-[calc(100%-2rem)]",
          // 👇 más ancho en desktop sin afectar mobile
          "max-w-[1400px]",
          "md:mx-auto",
          "flex items-center justify-between",
          // 👇 más aire horizontal en desktop
          "px-6 md:px-12 py-3",
          "rounded-full",
          "border",
          border,
          "transition-all duration-300",
          scrolled
            ? `${BG_AZUL} shadow-lg shadow-black/20`
            : `${BG_AMARILLO} shadow-md shadow-black/10`,
        ].join(" ")}
      >
        {/* LOGO */}
        <a
          href="#inicio"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 select-none"
          aria-label="Gedeon Security - Inicio"
        >
          <img
            src={logoSrc}
            alt="Gedeon Security"
            className="h-9 w-auto object-contain"
            draggable="false"
          />
        </a>

        {/* LINKS DESKTOP (un poquito más a la izquierda) */}
        <div className="hidden md:flex items-center gap-8 ml-auto mr-6">

          {LINKS.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              className={textMuted}
              hoverClass={text}
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* ACCIONES DESKTOP (al extremo derecho) */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="#contacto"
            className={[
              "rounded-full px-4 py-2 text-sm font-medium border",
              border,
              textMuted,
              hoverBg,
              "transition",
            ].join(" ")}
          >
            Consultar
          </a>

          <a
            href="#contacto"
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              scrolled
                ? "bg-white text-black hover:bg-white/90"
                : "bg-[#0b1a2b] text-white hover:bg-[#0b1a2b]/90",
            ].join(" ")}
          >
            Cotizar
          </a>
        </div>

        {/* TOGGLE MOBILE */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={[
            "md:hidden",
            "h-10 w-10 rounded-full grid place-items-center transition",
            "border",
            border,
            hoverBg,
          ].join(" ")}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-5 h-0.5 ${scrolled ? "bg-white" : "bg-black"}`}
            />
            <span
              className={`block w-5 h-0.5 ${scrolled ? "bg-white" : "bg-black"}`}
            />
            <span
              className={`block w-5 h-0.5 ${scrolled ? "bg-white" : "bg-black"}`}
            />
          </div>
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="mx-4 mt-3 md:hidden">
          <div
            className={[
              "rounded-2xl border",
              border,
              "overflow-hidden",
              "transition-all duration-300",
              scrolled
                ? `${BG_AZUL} shadow-lg shadow-black/20`
                : `${BG_AMARILLO} shadow-md shadow-black/10`,
            ].join(" ")}
          >
            <div className="flex flex-col items-stretch p-4 gap-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-4 py-3 text-base font-medium transition",
                    textMuted,
                    hoverBg,
                  ].join(" ")}
                >
                  {l.label}
                </a>
              ))}

              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-4 py-3 text-sm font-semibold text-center transition border",
                    border,
                    textMuted,
                    hoverBg,
                  ].join(" ")}
                >
                  Consultar
                </a>

                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-4 py-3 text-sm font-semibold text-center transition",
                    scrolled ? "bg-white text-black" : "bg-[#0b1a2b] text-white",
                  ].join(" ")}
                >
                  Cotizar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Link estilo PrebuiltUI: dos spans y animación vertical al hover.
 */
function NavLink({ href, children, className = "", hoverClass = "" }) {
  return (
    <a href={href} className="relative overflow-hidden h-6 group">
      <span
        className={[
          "block transition-transform duration-300",
          "group-hover:-translate-y-full",
          className,
        ].join(" ")}
      >
        {children}
      </span>

      <span
        className={[
          "block absolute top-full left-0 transition-transform duration-300",
          "group-hover:translate-y-[-100%]",
          hoverClass || className,
        ].join(" ")}
      >
        {children}
      </span>
    </a>
  );
}
