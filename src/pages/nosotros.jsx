// src/pages/nosotros.jsx
export default function Nosotros() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold">Nosotros</h2>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70 uppercase tracking-widest">Misión</p>
          <p className="mt-3 text-white/80 leading-relaxed">
            Proteger personas y activos con disciplina operativa, prevención y reacción
            coordinada.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70 uppercase tracking-widest">Estándar</p>
          <p className="mt-3 text-white/80 leading-relaxed">
            Procedimientos claros, supervisión, reportabilidad y mejora continua.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70 uppercase tracking-widest">Confianza</p>
          <p className="mt-3 text-white/80 leading-relaxed">
            Equipo formado, comunicación formal y compromiso con el servicio.
          </p>
        </div>
      </div>
    </div>
  );
}

