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

            {/* Fade lateral sin fondo */}
            <div
              className="relative"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div
                className="marquee-track flex min-w-[200%]"
                style={{ animationDuration: "20s" }}
              >
                {/* Bloque A */}
                <div className="flex items-center gap-20 md:gap-28 px-8 min-w-[50%]">
                  {LOGOS.map((l) => <Logo key={`a-${l.src}`} {...l} />)}
                </div>

                {/* Bloque B (duplicado) */}
                <div className="flex items-center gap-20 md:gap-28 px-8 min-w-[50%]">
                  {LOGOS.map((l) => <Logo key={`b-${l.src}`} {...l} />)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Logo grande ---------- */

function Logo({ src, alt }) {
  return (
    <div
      className="
        shrink-0
        w-[260px] sm:w-[300px] md:w-[340px]
        h-20 md:h-24
        flex items-center justify-center
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          max-h-full w-auto object-contain
          opacity-90 hover:opacity-100 transition
        "
        draggable={false}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
