// src/pages/sponsors.jsx
import Reveal from "../components/Reveal";

const LOGOS = [
  { src: "/images/prologistica.png", alt: "Prologística" },
  { src: "/images/lyd-cencosud.png", alt: "LYD Cencosud" },
  { src: "/images/bsm-transportes.png", alt: "BSM Transportes" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative w-full py-20 md:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Títulos */}
        <Reveal>
          <div className="text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-white/55">
              Nuestros clientes ya confían en nosotros
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-white">
              Confianza construida en operación, control y resultados
            </h3>
          </div>
        </Reveal>

        {/* Carrusel */}
        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden w-full select-none">
            <style>{`
              .marquee-track {
                animation: marqueeScroll linear infinite;
                will-change: transform;
              }
              @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .marquee-track { animation: none !important; transform: translateX(0) !important; }
              }
            `}</style>

            {/* Fade lateral suave (sin “caja”) */}
            <div
              className="relative"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div
                className="marquee-track flex min-w-[200%]"
                style={{
                  // un pelín más lento en mobile para que se aprecien bien
                  animationDuration: "22s",
                }}
              >
                {/* Bloque A */}
                <MarqueeBlock />
                {/* Bloque B (duplicado) */}
                <MarqueeBlock />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MarqueeBlock() {
  return (
    <div
      className={[
        "flex items-center",
        // ✅ En mobile: menos gap, se ve 1 a la vez y centrado
        "gap-10 sm:gap-14 md:gap-20 lg:gap-28",
        "px-6 sm:px-8",
        // ✅ Mantiene la lógica del -50%
        "min-w-[50%]",
        // ✅ Importante: no “achicar” y desordenar el track
        "shrink-0",
      ].join(" ")}
    >
      {LOGOS.map((l) => (
        <Logo key={l.src} {...l} />
      ))}
    </div>
  );
}

/* ---------- Logo “slot” responsive ---------- */
function Logo({ src, alt }) {
  return (
    <div
      className={[
        "shrink-0",
        "flex items-center justify-center",
        // ✅ En mobile: slot más chico para que NO se junten (y el 2 se vea sí o sí)
        "w-[180px] sm:w-[220px] md:w-[300px] lg:w-[340px]",
        "h-16 sm:h-20 md:h-24",
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className={[
          "max-h-full w-auto object-contain",
          "opacity-90 hover:opacity-100 transition",
        ].join(" ")}
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
