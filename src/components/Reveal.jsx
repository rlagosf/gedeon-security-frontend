// src/components/Reveal.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Reveal reversible:
 * - Entra al viewport => aparece con animación
 * - Sale del viewport => vuelve a ocultarse (para que al volver a bajar, re-anime)
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
  duration = 0.6,
  amount = 0.25, // % visible para considerarlo "in view"
}) {
  const ref = useRef(null);

  // ✅ IMPORTANTE: once:false permite que vuelva a animar
  const inView = useInView(ref, {
    amount,
    once: false,
    // margin: "0px 0px -10% 0px", // opcional: dispara un poquito antes
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      // Estados
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y, filter: "blur(6px)" }
      }
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
