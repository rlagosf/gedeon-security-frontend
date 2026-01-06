// src/pages/contacto.jsx
import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: conectar con backend (nodemailer / endpoint)
    console.log("Contacto:", form);
    alert("Solicitud enviada. Te contactaremos a la brevedad.");
    setForm({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold">Contacto</h2>
      <p className="mt-3 text-white/70 max-w-2xl">
        Completa el formulario y un ejecutivo te contactará. Respuesta formal y
        rápida, sin humo.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
        <Field label="Nombre" name="nombre" value={form.nombre} onChange={onChange} />
        <Field label="Empresa" name="empresa" value={form.empresa} onChange={onChange} />
        <Field label="Email" name="email" type="email" value={form.email} onChange={onChange} />
        <Field label="Teléfono" name="telefono" value={form.telefono} onChange={onChange} />

        <div className="md:col-span-2">
          <label className="text-sm text-white/70">Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={onChange}
            rows={5}
            className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/25"
            placeholder="Describe tu necesidad (tipo de servicio, dirección, horario, etc.)"
            required
          />
        </div>

        <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-xs text-white/50">
            Al enviar, aceptas ser contactado por Gedeon Security para fines comerciales.
          </p>

          <button
            type="submit"
            className="rounded-xl bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
          >
            Enviar solicitud
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-white/70">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="mt-2 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white outline-none focus:border-white/25"
        required
      />
    </div>
  );
}

