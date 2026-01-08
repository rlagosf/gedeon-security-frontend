// src/pages/nosotros.jsx
import { ShieldCheck, Scale, Users } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative w-full py-20 md:py-28">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Título + bajada */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Sobre GEDEON SECURITY
            </h2>
            <p className="text-sm md:text-base text-white/75 mt-3 max-w-2xl mx-auto leading-relaxed">
              Seguridad profesional con estándares, legalidad y criterio operativo. Un servicio
              diseñado para proteger, velar y responder, sin perder el foco humano.
            </p>
          </div>
        </Reveal>

        {/* Layout principal */}
        <div className="relative mt-12 flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Glow corporativo (amarillo dominante + azul profundo) */}
          <div className="absolute -z-10 inset-0 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-[#FCEE21]/25 blur-[140px]" />
            <div className="h-[520px] w-[520px] rounded-full bg-[#050f1f]/35 blur-[180px] -ml-32" />
          </div>

          {/* Imagen */}
          <Reveal delay={0.08}>
            <div className="w-full md:w-[420px] flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl" />
                <img
                  src="images/cibersecurity.png"
                  alt="Ciberseguridad y control"
                  className="relative w-full max-w-sm rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                  loading="eager"
                  decoding="async"
                  draggable="false"
                />
              </div>
            </div>
          </Reveal>

          {/* Contenido */}
          <div className="w-full md:flex-1">
            <Reveal delay={0.12}>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Un enfoque serio, legal y operativo.
                </h3>
                <p className="text-sm md:text-base text-white/75 mt-3 leading-relaxed max-w-xl">
                  Nuestra propuesta se sostiene en tres pilares: <b>misión</b>, <b>visión</b> y
                  <b> principios</b>. Protegemos bienes y personas con personal capacitado, procesos
                  claros y compromiso real con nuestros clientes.
                </p>
              </div>
            </Reveal>

            {/* Pilares */}
            <div className="flex flex-col gap-6 mt-8">
              {/* MISIÓN */}
              <Reveal delay={0.16}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg border border-white/15 bg-white/10 grid place-items-center">
                    <ShieldCheck className="h-5 w-5 text-[#FCEE21]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Misión</h4>
                    <p className="text-sm text-white/75 mt-1 leading-relaxed">
                      Proporcionar soluciones reales de seguridad con la más alta calidad profesional.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* VISIÓN */}
              <Reveal delay={0.20}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg border border-white/15 bg-white/10 grid place-items-center">
                    <Users className="h-5 w-5 text-[#FCEE21]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Visión</h4>
                    <p className="text-sm text-white/75 mt-1 leading-relaxed">
                      Mantener un crecimiento significativo junto a nuestros clientes, respetando al
                      Recurso Humano y la legislación vigente.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* PRINCIPIOS */}
              <Reveal delay={0.24}>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-lg border border-white/15 bg-white/10 grid place-items-center">
                    <Scale className="h-5 w-5 text-[#FCEE21]" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">Nuestros principios</h4>
                    <p className="text-sm text-white/75 mt-1 leading-relaxed">
                      Justicia, honestidad y preocupación por la gente y sus bienes. Evolucionamos con el
                      mundo, manteniendo intacto el fundamento que sostiene un servicio confiable.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
