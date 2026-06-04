/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQItem } from '../types';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      category: "Monotributo",
      question: "¿Qué pasa si mis ingresos superan por poco el límite de mi categoría?",
      answer: "AFIP controla de forma sistémica tus facturas emitidas, depósitos bancarios y compras con tarjeta de crédito. Si superás el límite anual, podés subir de categoría en la recategorización semestral. Si superás el límite máximo global (Categoría K), quedarías excluido y obligado a pasar al Régimen General (Autónomo). En el Estudio Ágape monitoreamos tu facturación mensual continua para advertirte antes de dar saltos y explorar alternativas seguras."
    },
    {
      category: "Ingresos Brutos",
      question: "¿Tengo que pagar Ingresos Brutos (IIBB) además de la cuota mensual del Monotributo?",
      answer: "Sí, salvo que estés exento por ley o adherido al régimen del Monotributo Unificado (donde IIBB se abona en la misma boleta única de AFIP, disponible en provincias como Buenos Aires, Córdoba, Mendoza y varias más). Si facturás a clientes ubicados en más de una jurisdicción (por ejemplo, vos vivís en CABA y tu cliente tiene sede en Córdoba), debés inscribirte en Convenio Multilateral para realizar el prorrateo mensual obligatorio."
    },
    {
      category: "Modalidad",
      question: "Si resido en el interior del país, ¿pueden llevar mi contabilidad de forma remota?",
      answer: "¡Por supuesto! Hoy en día toda la operatoria ante AFIP, portales provinciales de Rentas, emisión de comprobantes electrónicos de venta y libros digitales de sueldo se maneja de manera 100% online. Ofrecemos asesoramiento remoto ágil y fluido a profesionales, emprendedores e independientes en todos los puntos de la República Argentina."
    },
    {
      category: "Alta",
      question: "¿Qué datos o claves necesito para que el estudio realice mi alta express en AFIP?",
      answer: "Para comenzar a facturar o formalizar tu actividad comercial, solo requerimos tu número de CUIT y la Clave Fiscal de AFIP con nivel de seguridad 3. Si no la tenés, te guiamos paso a paso para crearla en 5 minutos desde la app Mi AFIP de tu celular. Del alta, la elección del código de actividad, la puesta en marcha de los puntos de venta y el alta de IIBB nos encargamos completamente nosotros."
    },
    {
      category: "PyMEs",
      question: "¿Qué es el Libro de Sueldos Digital y cuándo corresponde implementarlo?",
      answer: "El Libro de Sueldos Digital (LSD) es una plataforma obligatoria de AFIP que reemplaza las hojas móviles de los libros tradicionales. Prácticamente todas las PyMEs y empleadores con personal a cargo en Argentina están obligadas por resolución. Consiste en parametrizar los conceptos de sueldo de tu empresa y subir mensualmente archivos de texto con el detalle de las liquidaciones de haberes previas a la emisión del F.931."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-24 bg-slate-900/10 border-t border-slate-800/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <HelpCircle className="w-8 h-8 text-amber-500 mx-auto" />
          <h2 className="text-3xl font-serif font-semibold text-white">Preguntas Frecuentes Impositivas</h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
            Resolvemos las dudas recurrentes de autónomos, trabajadores de servicios web hacia el exterior y PyMEs en Argentina.
          </p>
        </div>

        {/* Accordion Flow */}
        <div id="faq-accordion" className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-slate-900 border-amber-500/30 shadow-lg' 
                    : 'bg-slate-900/50 border-slate-850 hover:border-slate-800'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  id={`btn-faq-header-${index}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="space-y-1 pr-4">
                    <span className="text-[10px] font-mono text-amber-505 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full text-amber-400">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-serif font-semibold text-white mt-1.5 tracking-wide">
                      {item.question}
                    </h4>
                  </div>
                  <div className="shrink-0 text-slate-400 hover:text-white transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-panel-${index}`}
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? 'max-h-[300px] border-t border-slate-850/40' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-xs sm:text-sm text-slate-350 leading-relaxed font-light">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing support card */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h5 className="font-serif font-bold text-white text-sm">¿Tenés otra duda impositiva más compleja?</h5>
            <p className="text-xs text-slate-450 font-light">La legislación de AFIP cambia periódicamente. Agendá un diagnóstico gratuito directo.</p>
          </div>
          <a
            href="https://wa.me/5491163687765?text=Hola%20Contadora!%20Tengo%20una%20consulta%20contable%20que%20no%20figura%20en%20las%20preguntas%20frecuentes%20de%20la%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all block text-center"
          >
            Preguntar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
