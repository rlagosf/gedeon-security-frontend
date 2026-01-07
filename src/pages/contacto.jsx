// src/pages/contacto.jsx
import {
  FileText,
  ClipboardCheck,
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
} from "lucide-react";
import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";

const DOCUMENTOS = [
  "Fotocopia de Cédula de Identidad vigente por ambos lados.",
  "Certificado de Antecedentes para fines especiales vigente original (Registro Civil e identificación).",
  "Certificado de estudios.",
  "Fotocopia de aprobación del curso básico para Guardias de Seguridad OS-10.",
  "Currículum Vitae actualizado a la fecha de su presentación.",
  "Certificado de residencia de la Junta de Vecinos correspondiente a su domicilio o alguna boleta de luz o agua que acredite su identidad.",
  "Certificado de Afiliación de A.F.P. con las 12 últimas cotizaciones originales.",
  "Certificado de afiliación FONASA o ISAPRE originales.",
];

const REQUISITOS = [
  "Ser Chileno.",
  "Edad mínima 18 años.",
  "Buenos antecedentes comerciales y referencias al cargo.",
  "No haber sido condenado, ni estar sometido a proceso por Crimen o Simple delito.",
  "Tener salud y condiciones físicas compatibles con la función que va a desempeñar.",
];

export default function Contacto() {
  // Form básico (sin backend todavía)
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    motivo: "Cotización de servicios",
    mensaje: "",
  });

  const motivos = useMemo(
    () => ["Cotización de servicios", "Trabaje con nosotros", "Consulta general"],
    []
  );

  const onChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Placeholder: acá luego conectamos nodemailer / backend / endpoint
    alert("Solicitud enviada. Te contactaremos a la brevedad.");
    setForm({
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      motivo: "Cotización de servicios",
      mensaje: "",
    });
  };

  return (
    <section id="contacto" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* Fade inferior para empalmar con Footer */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#070b12]" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Contacto
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              Solicita una evaluación, cotiza un servicio o postula para ser parte de Gedeón.
              Respuesta clara, proceso formal y trato profesional.
            </p>
          </div>
        </Reveal>

        {/* 2 tarjetas arriba */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Documentos */}
          <Reveal delay={0.08}>
            <Card>
              <CardHeader
                icon={<FileText className="h-5 w-5 text-[#FCEE21]" />}
                title="Trabaje con Nosotros"
                subtitle="Documentos a presentar"
              />
              <ul className="mt-5 space-y-3 text-sm text-white/85 leading-relaxed">
                {DOCUMENTOS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FCEE21] shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Requisitos */}
          <Reveal delay={0.12}>
            <Card>
              <CardHeader
                icon={<ClipboardCheck className="h-5 w-5 text-[#FCEE21]" />}
                title="Sea parte de la familia Gedeón"
                subtitle="Otros requisitos necesarios"
              />
              <ul className="mt-5 space-y-3 text-sm text-white/85 leading-relaxed">
                {REQUISITOS.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FCEE21] shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>

        {/* Formulario abajo (ancho total) */}
        <Reveal delay={0.16}>
          <div className="mt-6">
            <div className="relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
              {/* Glow sutil */}
              <div className="absolute -inset-6 rounded-3xl bg-[#FCEE21]/10 blur-3xl -z-10" />

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 grid place-items-center backdrop-blur">
                  <Send className="h-5 w-5 text-[#FCEE21]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Formulario de contacto
                  </h3>
                  <p className="text-sm text-white/70">
                    Completa los datos y te responderemos con el estándar corporativo de Gedeón.
                  </p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Field
                    label="Nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={onChange}
                    placeholder="Nombre y apellido"
                    icon={<User className="h-4 w-4" />}
                    required
                  />

                  <Field
                    label="Correo"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="correo@empresa.cl"
                    icon={<Mail className="h-4 w-4" />}
                    type="email"
                    required
                  />

                  <Field
                    label="Teléfono"
                    name="telefono"
                    value={form.telefono}
                    onChange={onChange}
                    placeholder="+56 9 XXXX XXXX"
                    icon={<Phone className="h-4 w-4" />}
                  />

                  <Field
                    label="Empresa / Condominio"
                    name="empresa"
                    value={form.empresa}
                    onChange={onChange}
                    placeholder="Razón social (opcional)"
                    icon={<Building2 className="h-4 w-4" />}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <SelectField
                    label="Motivo"
                    name="motivo"
                    value={form.motivo}
                    onChange={onChange}
                    options={motivos}
                  />
                  <div className="hidden md:block" />
                </div>

                <TextArea
                  label="Mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={onChange}
                  placeholder="Cuéntanos brevemente lo que necesitas (servicio, cobertura, fechas, instalación, etc.)"
                  icon={<MessageSquare className="h-4 w-4" />}
                  required
                />

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mt-2">
                  <p className="text-xs text-white/60">
                    Al enviar, aceptas ser contactado para fines de respuesta comercial o postulación.
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center h-11 px-7 rounded-md bg-[#FCEE21] text-[#0b1a2b] font-semibold hover:brightness-95 active:scale-95 transition"
                  >
                    Enviar solicitud
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- UI Helpers -------------------- */

function Card({ children }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      {children}
    </div>
  );
}

function CardHeader({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/10 grid place-items-center backdrop-blur shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/80">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 h-11">
        <span className="text-white/60">{icon}</span>
        <input
          className="w-full bg-transparent outline-none text-white placeholder:text-white/35 text-sm"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          required={required}
        />
      </div>
    </label>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/80">{label}</span>
      <select
        className="rounded-xl border border-white/15 bg-white/5 px-3 h-11 outline-none text-white text-sm"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0b1a2b]">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-white/80">{label}</span>
      <div className="rounded-xl border border-white/15 bg-white/5 px-3 py-3">
        <div className="flex items-start gap-2">
          <span className="text-white/60 mt-1">{icon}</span>
          <textarea
            className="w-full min-h-[120px] bg-transparent outline-none text-white placeholder:text-white/35 text-sm resize-y"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
          />
        </div>
      </div>
    </label>
  );
}
