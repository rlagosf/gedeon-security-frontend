// src/pages/servicios.jsx
const SERVICES = [
  { title: "Guardias y rondas", desc: "Cobertura en terreno, rondas preventivas y control de accesos." },
  { title: "Control de accesos", desc: "Protocolos, registros, visitantes y trazabilidad de ingreso/salida." },
  { title: "Apoyo a eventos", desc: "Planificación, puntos críticos, perímetros y coordinación operativa." },
  { title: "Supervisión y reportes", desc: "Supervisión periódica y reportabilidad clara para administración." },
];

export default function Servicios() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-3xl font-semibold">Servicios</h2>
          <p className="mt-3 text-white/70 max-w-2xl">
            Cobertura flexible según tu operación. Enfoque preventivo, protocolos y
            mejora continua.
          </p>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium text-lg">{s.title}</h3>
            <p className="mt-3 text-white/75 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
