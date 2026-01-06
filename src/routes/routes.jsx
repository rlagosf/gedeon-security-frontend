// src/routes/routes.jsx
import { lazy } from "react";

// Si aún no tienes estos componentes en Gedeon, déjalos comentados
// import ProtectedRoute from "../components/protectedRoute";
// import useInactividadLogout from "../hooks/useInactividadLogout";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

/* -------------------- Públicos -------------------- */
const Landing = lazy(() => import("../pages/landing"));
const Nosotros = lazy(() => import("../pages/nosotros"));
const Servicios = lazy(() => import("../pages/servicios"));
const Ubicacion = lazy(() => import("../pages/ubicacion"));
const Contacto = lazy(() => import("../pages/contacto"));
const Galeria = lazy(() => import("../pages/galeria"));

function Home() {
  return (
    <>
      <section id="inicio" className="scroll-mt-20">
        <Landing />
      </section>

      <section id="nosotros" className="scroll-mt-20">
        <Nosotros />
      </section>

      <section id="servicios" className="scroll-mt-20">
        <Servicios />
      </section>

      <section id="ubicacion" className="scroll-mt-20">
        <Ubicacion />
      </section>

      <section id="contacto" className="scroll-mt-20">
        <Contacto />
      </section>
    </>
  );
}

function PublicShell() {
  return (
    <div className="scroll-smooth w-full min-h-screen bg-[#0b0f14] text-white font-sans">
      {/* Fondo corporativo serio: oscuro + leve gradiente */}
      <div className="min-h-screen bg-gradient-to-b from-[#0b0f14] via-[#0c131c] to-[#0b0f14]">
        <Navbar />
        <main className="pt-16">{/* navbar fixed-friendly */}
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

// Mantengo el “molde RAFC” para cuando habilites admin.
// De momento lo dejo funcionando como passthrough para no romper build.
/*
function PrivateApp({
  children,
  redirectTo,
  timeoutMs = 5 * 60 * 1000,
  pingMs = 15 * 1000,
  storageKey,
  forceKey,
}) {
  useInactividadLogout({
    timeoutMs,
    pingMs,
    redirectTo,
    storageKey,
    forceKey,
  });

  return children;
}
*/

export const routes = [
  { path: "/", element: <PublicShell /> },
  { path: "/galeria", element: <Galeria /> },

  // --- Si después agregas admin/login, lo dejamos igual que RAFC ---
  // { path: "/login", element: <Login /> },
  // {
  //   path: "/admin",
  //   element: (
  //     <ProtectedRoute mode="admin" roleIn={[1, 2]}>
  //       <PrivateApp
  //         redirectTo="/login"
  //         storageKey="gedeon_lastActivity_admin"
  //         forceKey="gedeon_forceLogout_admin"
  //         timeoutMs={5 * 60 * 1000}
  //       >
  //         <DashboardLayout />
  //       </PrivateApp>
  //     </ProtectedRoute>
  //   ),
  //   children: [
  //     { path: "dashboard", element: <DashboardHome /> },
  //   ],
  // },
];
