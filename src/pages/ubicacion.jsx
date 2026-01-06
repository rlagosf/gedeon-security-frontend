// src/pages/ubicacion.jsx
export default function Ubicacion() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold">Ubicación</h2>
      <p className="mt-3 text-white/70">
        Indica aquí tu dirección corporativa y zonas de cobertura.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70 uppercase tracking-widest">Dirección</p>
          <p className="mt-3 text-white/85">
            Av. Principal 1234, Santiago, Chile
          </p>

          <p className="mt-6 text-sm text-white/70 uppercase tracking-widest">Horario</p>
          <p className="mt-3 text-white/85">
            Lunes a Viernes — 09:00 a 18:00
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm text-white/70 uppercase tracking-widest">Mapa</p>
          <div className="mt-3 aspect-video rounded-xl bg-black/30 border border-white/10 grid place-items-center text-white/50">
            Aquí va un iframe de Google Maps
          </div>
        </div>
      </div>
    </div>
  );
}

