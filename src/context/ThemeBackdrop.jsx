// src/components/themeBackdrop.jsx
export default function ThemeBackdrop() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradiente base fuerte */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[#FCEE21]/80 
        via-[#FCEE21]/45 
        to-[#050b16]/70" 
      />

      {/* Halo amarillo principal */}
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full 
        bg-[#FCEE21]/55 blur-[140px]" 
      />

      {/* Halo amarillo secundario (profundidad) */}
      <div className="absolute top-1/3 left-1/4 h-[420px] w-[420px] rounded-full 
        bg-[#FCEE21]/35 blur-[160px]" 
      />

      {/* Masa azul profunda */}
      <div className="absolute bottom-[-180px] right-[-180px] h-[650px] w-[650px] rounded-full 
        bg-[#050f1f]/85 blur-[180px]" 
      />

      {/* Capa de unificación (oscurece sin matar color) */}
      <div className="absolute inset-0 bg-[#04070d]/30" />
    </div>
  );
}
