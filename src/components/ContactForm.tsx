/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    taxStatus: 'monotributo_basico',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const taxStatusLabels: { [key: string]: string } = {
    monotributo_basico: "Monotributista Básico / Emprendedor",
    monotributo_alto: "Monotributista Cerca de Tope de Facturación",
    responsable_inscripto: "Responsable Inscripto / Autónomo",
    pyme: "Pyme / Sociedad Comercial",
    particular: "Empleado (Ganancias Clase 4ta / Declaración Particular)"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor completá los campos obligatorios: Nombre, Email y Consulta.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      taxStatus: 'monotributo_basico',
      message: ''
    });
    setSubmitted(false);
  };

  const getWhatsAppURL = () => {
    const profileText = taxStatusLabels[formData.taxStatus];
    const textMsg = `Hola Estudio Ágape! Mi nombre es ${formData.name}. Perfil: ${profileText}. Correo: ${formData.email}. Celular: ${formData.phone || 'No especificado'}. Consulta específica: ${formData.message}`;
    return `https://wa.me/5491163687765?text=${encodeURIComponent(textMsg)}`;
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900/30 border-t border-slate-800/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-500 block">Canales Directos</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white">Canaliza tu consulta con el Estudio</h2>
          <p className="text-sm text-slate-400 font-light max-w-lg mx-auto">
            Contactanos por correo o enviá tu consulta para coordinar un diagnóstico técnico gratuito completando los campos a continuación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Quick Contact Info cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">Canales de Comunicación</h3>
              <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                Respondemos de forma rápida y personalizada. Podés escribirnos directamente a nuestro celular laboral o enviarnos un correo formal.
              </p>

              <div className="space-y-4">
                {/* Email block */}
                <a
                  href="mailto:estudioagape.cp@gmail.com"
                  id="contact-email-card"
                  className="p-4 bg-slate-900 border border-slate-850 hover:border-amber-500/30 rounded-2xl flex items-start gap-4 transition-all group block"
                >
                  <div className="p-2 bg-amber-500/10 rounded-xl">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Correo Electrónico</h4>
                    <p className="text-sm font-semibold text-slate-200 mt-1 max-w-[200px] sm:max-w-none truncate font-mono">estudioagape.cp@gmail.com</p>
                    <span className="text-[10px] text-amber-400 mt-1 block">Escribinos formalmente →</span>
                  </div>
                </a>

                {/* WhatsApp block */}
                <a
                  href="https://wa.me/5491163687765?text=Hola%20Contadora!%20Encontr%C3%A9%20tu%20web%20y%20quer%C3%ADa%20hacerte%2520una%20consulta%20contable."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-phone-card"
                  className="p-4 bg-slate-900 border border-slate-850 hover:border-emerald-500/30 rounded-2xl flex items-start gap-4 transition-all group block"
                >
                  <div className="p-2 bg-emerald-500/10 rounded-xl">
                    <Phone className="w-5 h-5 text-emerald-505 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Celular / WhatsApp</h4>
                    <p className="text-sm font-semibold text-slate-200 mt-1 font-mono">11 6368-7765</p>
                    <span className="text-[10px] text-emerald-400 mt-1 block">Iniciá chat en el acto →</span>
                  </div>
                </a>

                {/* Location block */}
                <div className="p-4 bg-slate-900 border border-slate-850 rounded-2xl flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-xl">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Área de Cobertura</h4>
                    <p className="text-sm font-semibold text-slate-200 mt-1">CABA, Gran Buenos Aires & Todo el País</p>
                    <span className="text-[10px] text-slate-450 mt-1 block">Atendemos consultas digitales a nivel nacional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Little Legal Seal Footnote */}
            <div className="p-4 border border-slate-850 bg-slate-950/40 rounded-xl text-[11px] text-slate-450 leading-relaxed font-light">
              <strong>Compromiso de Privacidad Ágape:</strong> Los datos impositivos provistos están amparados bajo el más estricto secreto profesional exigido por el Código de Ética del Consejo de Ciencias Económicas.
            </div>
          </div>

          {/* Contact form column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              {submitted ? (
                <div id="contact-success-screen" className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto scale-110">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-white">¡Inscripción Exitosa!</h3>
                    <p className="text-xs sm:text-sm text-slate-350 max-w-md mx-auto">
                      Gracias por enviar tu consulta a <strong>Estudio Ágape</strong>. Evaluaremos tu situación de inmediato. Para respuestas prioritarias urgentes, podés duplicar tu mensaje vía WhatsApp.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-slate-850 mt-6">
                    <a
                      href={getWhatsAppURL()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-emerald-950/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Enviar copia de consulta por WhatsApp
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-350 hover:text-white rounded-xl text-xs transition-all w-full sm:w-auto"
                    >
                      Volver a consultar
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form" className="space-y-5 text-left">
                  {error && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex gap-2 text-rose-450 items-center text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-name" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="input-name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-800 bg-slate-950 text-white rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Emprendedor, comerciante o PyME"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-email" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Email de Contacto *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="input-email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-800 bg-slate-950 text-white rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="tu-email@correo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telephone */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-phone" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        WhatsApp / Celular (Opcional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="input-phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-800 bg-slate-950 text-white rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Ej. 11 6368 7765"
                      />
                    </div>

                    {/* Profile selector dropdown */}
                    <div className="space-y-1.5">
                      <label htmlFor="input-taxStatus" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Situación Ante AFIP o Interés
                      </label>
                      <select
                        name="taxStatus"
                        id="input-taxStatus"
                        value={formData.taxStatus}
                        onChange={handleInputChange}
                        className="w-full px-4 py-[13px] border border-slate-800 bg-slate-950 text-slate-350 rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="monotributo_basico">Monotributista o Independiente</option>
                        <option value="monotributo_alto">Monotributista Próximo a Recategorización</option>
                        <option value="responsable_inscripto">Responsable Inscripto Autónomo</option>
                        <option value="pyme">Sociedades Comerciales / PyMEs</option>
                        <option value="particular">Particular / Consulta Variada</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="input-message" className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Consulta impositiva específica *
                    </label>
                    <textarea
                      name="message"
                      id="input-message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-800 bg-slate-950 text-white rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      placeholder="Contanos brevemente qué servicios requerís (Alta monotributo, balances, liquidación de haberes, etc.) para armar un presupuesto a medida."
                    />
                  </div>

                  {/* Action row with WhatsApp generator and direct sender */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    <button
                      type="submit"
                      id="btn-submit-contact"
                      className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      Enviar Consulta Contable
                    </button>
                    {formData.name && formData.email && (
                      <a
                        href={getWhatsAppURL()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3.5 bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Redactar en WhatsApp directo
                      </a>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
