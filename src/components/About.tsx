/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Eye, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Columns: Text & Brand Value */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 block">
                Nuestra Identidad & Valores
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white leading-tight">
                Ética, cercanía y el máximo estándar académico argentino
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                <strong>Estudio Ágape</strong> nace como respuesta a un problema habitual en el mundo de los servicios contables: la despersonalización. Creemos que detrás de cada CUIT hay un proyecto de vida, una familia o una PyME esforzándose por crecer en un contexto impositivo complejo como el argentino.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                Nuestra fundadora es <strong>Contadora Pública egresada de la Universidad de Buenos Aires (UBA)</strong>, el centro de estudios fiscales más prestigioso de la región. Esto nos permite garantizar un criterio impositivo riguroso, actualizado y adaptado a las últimas normativas regulatorias de la AFIP y entes provinciales.
              </p>
            </div>

            {/* Value cards breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div className="p-5 bg-slate-900/60 border border-slate-850 rounded-2xl flex gap-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl h-fit shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Absoluta Transparencia</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                    Sin sorpresas en los honorarios ni trámites demorados de AFIP. Informamos de forma proactiva cada vencimiento y saldo técnico.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-900/60 border border-slate-850 rounded-2xl flex gap-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl h-fit shrink-0">
                  <HeartHandshake className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Compromiso Ágape</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                    Hacemos un seguimiento diario de tu facturación. Nos importa tu salud fiscal y financiera tanto como a vos.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-900/60 border border-slate-850 rounded-2xl flex gap-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl h-fit shrink-0">
                  <Eye className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Vanguardia Digital</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                    Maximizamos el uso de herramientas de facturación, sincronización de comprobantes y comunicación constante para facilitar tu día a día.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-slate-900/60 border border-slate-850 rounded-2xl flex gap-4">
                <div className="p-2.5 bg-amber-500/10 rounded-xl h-fit shrink-0">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-sm">Respaldo de la UBA</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                    Sello académico de la máxima casa de estudios del país. Formación técnica robustas para defensas ante auditorías complejas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns: Illustrative Badge & Key metrics */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[380px] lg:max-w-none">
              
              {/* Decorative gradient sphere behind visual cards */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* High end UBA seal illustration */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
                
                {/* Simulated UBA Certification badge */}
                <div className="mx-auto w-24 h-24 rounded-full bg-slate-950 border-2 border-dashed border-amber-500/30 flex items-center justify-center relative p-3">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-amber-400 relative">
                    <GraduationCap className="w-10 h-10 text-amber-500" />
                    {/* Ring rotation animation badge effect */}
                    <div className="absolute inset-0 border border-amber-500/10 rounded-full scale-125" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-mono tracking-widest text-slate-500 uppercase">Acreditación Profesional</h4>
                  <h3 className="text-base font-serif font-bold text-white">Graduada en Ciencias Económicas - UBA</h3>
                  <div className="inline-flex items-center space-x-1.5 bg-slate-900 border border-slate-850 px-2.5 py-1 rounded-full text-[10px] text-amber-405 font-mono">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    <span>Matriculada Activa en C.P.C.E.</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-light italic">
                  "Un profesional contable de la Universidad de Buenos Aires no solo domina las leyes impositivas vigentes; posee además el criterio doctrinario indispensable para defender el patrimonio de un contribuyente con solvencia técnica en Argentina."
                </p>

                {/* Localized stats details */}
                <div className="border-t border-slate-850 pt-5 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-550 block">Actividad</span>
                    <span className="text-xs text-slate-300 font-semibold mt-0.5 block">Nacional e Impositiva</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-550 block">Valores guía</span>
                    <span className="text-xs text-slate-300 font-semibold mt-0.5 block">Compromiso y Rigor</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
