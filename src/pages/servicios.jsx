// src/pages/servicios.jsx
import Reveal from "../components/Reveal";
import { ShieldCheck, Cctv, Search, UserCheck } from "lucide-react";

const SERVICES = [
  {
    title: "Seguridad Física",
    desc:
      "Para entregar una seguridad integral contamos con vigilancia in situ, procedimientos adecuados según las necesidades de cada instalación y clientes. Profesionales de élite, diseño operativo y herramientas de gestión y control de última generación.",
    icon: ShieldCheck,
    img: "images/seguridad-fisica.jpg",
  },
  {
    title: "Seguridad Electrónica e Integración",
    desc:
      "Soluciones de CCTV (circuito cerrado de televisión), control de acceso y videovigilancia. Sistemas completos para protección perimetral (cercos eléctricos, rayos lineales, etc.) de última generación.",
    icon: Cctv,
    img: "images/seguridad-electronica.jpg",
  },
  {
    title: "Servicio de Investigación Empresarial",
    desc:
      "Control de bajas y absentismo laboral; control de rutas; selección de personal y duplicidad de empleos; robos, hurtos, fraudes y fuga de información; control de personal interno; investigación de accidentes e informes fraudulentos; control de proveedores y revisión de procesos en la cadena logística.",
    icon: Search,
    img: "images/foto-guardia-corp.jpg",
  },
  {
    title: "Guardias de Seguridad",
    desc:
      "Guardias altamente calificados para mayor control sobre el ingreso de personas a su empresa. Nuestro equipo de operaciones diseña disposiciones y protocolos para garantizar la seguridad de la instalación.",
    icon: UserCheck,
    img: "images/foto-guardia.jpg",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative w-full py-20 md:py-28">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Servicios
            </h2>
            <p className="text-sm md:text-base text-white/75 mt-3 leading-relaxed">
              Seguridad integral para entornos corporativos: presencia en terreno,
              tecnología, control y análisis. Prevención y respuesta con estándar operativo.
            </p>
          </div>
        </Reveal>

        {/* CONTENIDO */}
        <div className="mt-12">
          {/* ================= DESKTOP ================= */}
          {/* Hover expand intacto (animamos el bloque completo para no romper el flex) */}
          <Reveal delay={0.08}>
            <div className="hidden lg:flex items-stretch gap-3 h-[420px]">
              {SERVICES.map((s) => (
                <ServicePanel key={s.title} s={s} />
              ))}
            </div>
          </Reveal>

          {/* ================= MOBILE / TABLET ================= */}
          {/* centrado real + stagger por tarjeta */}
          <div className="lg:hidden mt-10 flex justify-center">
            <div className="grid sm:grid-cols-2 gap-4 w-full max-w-3xl">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={0.06 * i}>
                  <ServiceCardMobile s={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePanel({ s }) {
  const Icon = s.icon;

  return (
    <div
      className={[
        "relative group transition-all duration-500",
        "w-[320px] hover:w-[640px]",
        "rounded-2xl overflow-hidden",
        "h-[420px]",
        "border border-white/15 bg-white/5",
      ].join(" ")}
    >
      {/* Imagen */}
      <img
        src={s.img}
        alt={s.title}
        className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
        loading="lazy"
        draggable="false"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2b]/30 via-[#0b1a2b]/65 to-[#0b1a2b]/90" />

      {/* Badge */}
      <div className="absolute top-4 left-4 right-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] text-white/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#FCEE21]" />
          <span className="truncate">{s.title}</span>
        </div>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 grid place-items-center backdrop-blur">
            <Icon className="h-5 w-5 text-[#FCEE21]" />
          </div>
          <h3 className="text-lg font-semibold text-white">{s.title}</h3>
        </div>

        <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-2xl">
          {s.desc}
        </p>
      </div>
    </div>
  );
}

function ServiceCardMobile({ s }) {
  const Icon = s.icon;

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5">
      <img
        src={s.img}
        alt={s.title}
        className="h-48 w-full object-cover"
        loading="lazy"
        draggable="false"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a2b]/20 via-[#0b1a2b]/50 to-[#0b1a2b]/90" />

      <div className="relative p-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 grid place-items-center backdrop-blur">
            <Icon className="h-5 w-5 text-[#FCEE21]" />
          </div>
          <h3 className="text-base font-semibold text-white">{s.title}</h3>
        </div>

        <p className="mt-3 text-sm text-white/80 leading-relaxed">{s.desc}</p>
      </div>
    </div>
  );
}
