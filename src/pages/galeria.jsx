// src/pages/galeria.jsx
const ITEMS = [
  { title: "Operación en terreno", desc: "Cobertura y rondas preventivas." },
  { title: "Control de accesos", desc: "Registro y trazabilidad de visitas." },
  { title: "Supervisión", desc: "Supervisión periódica y reportabilidad." },
  { title: "Coordinación", desc: "Comunicación y respuesta ante incidentes." },
];

export default function Galeria() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-semibold">Galería</h1>
        <p className="mt-3 text-white/70 max-w-2xl">
          Material referencial. Aquí luego conectamos imágenes reales, con estética
          corporativa (sin “festival de colores”).
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-video rounded-xl bg-black/30 border border-white/10 grid place-items-center text-white/40">
                Imagen
              </div>
              <h3 className="mt-4 font-medium">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

