// src/components/footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f14]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Marca */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white text-black grid place-items-center font-semibold">
              G
            </div>
            <span className="font-semibold tracking-wide">
              GEDEON <span className="text-white/60">SECURITY</span>
            </span>
          </div>

          <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
            Empresa de seguridad orientada a la prevención, control operativo y
            respuesta coordinada. Servicios profesionales para entornos exigentes.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <p className="text-sm uppercase tracking-widest text-white/50">
            Navegación
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#inicio" className="text-white/70 hover:text-white">Inicio</a></li>
            <li><a href="#nosotros" className="text-white/70 hover:text-white">Nosotros</a></li>
            <li><a href="#servicios" className="text-white/70 hover:text-white">Servicios</a></li>
            <li><a href="#ubicacion" className="text-white/70 hover:text-white">Ubicación</a></li>
            <li><a href="#contacto" className="text-white/70 hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <p className="text-sm uppercase tracking-widest text-white/50">
            Contacto
          </p>

          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p>📍 Av. Principal 1234, Santiago</p>
            <p>📞 +56 9 1234 5678</p>
            <p>✉️ contacto@gedeonsecurity.cl</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Gedeon Security. Todos los derechos reservados.
      </div>
    </footer>
  );
}
