// src/components/isLoading.jsx
export default function IsLoading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b0f14] text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
        <p className="text-sm tracking-widest text-white/60 uppercase">
          Cargando
        </p>
      </div>
    </div>
  );
}
