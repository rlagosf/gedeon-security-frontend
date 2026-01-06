// src/context/ThemeContext.jsx
import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

/**
 * Tema corporativo Gedeon (serio, sobrio).
 * Mantiene el patrón de RAFC (provider + hook).
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    brand: "#0b0f14",      // fondo principal
    accent: "#FFFFFF",     // acento sobrio
    muted: "rgba(255,255,255,0.7)",
  });

  const value = useMemo(() => ({ theme, setTheme }), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider />");
  return ctx;
}
