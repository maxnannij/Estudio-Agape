/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, ArrowRight, Sparkles, GraduationCap, Building2, Landmark, CheckCircle } from 'lucide-react';

interface HeroProps {
  onLearnMore: () => void;
  onConsult: () => void;
}

export function Hero({ onLearnMore, onConsult }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] pt-32 pb-20 flex items-center overflow-hidden bg-radial"
      style={{
        backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.07) 0%, rgba(15, 23, 42, 0) 65%)',
      }}
    >
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* UBA Badge */}
            <div className="inline-flex items-center space-x-2 bg-gey-500/10 border border-grey-500/30 rounded-full px-4 py-1.5 text-grey-300">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-mono font-medium tracking-wide">
                Contadora Pública — UBA Alumni
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight text-white leading-tight">
                El respaldo <span className="text-transparent bg-clip-text bg-gradient-to-r from-grey-400 to-grey-200">profesional</span> que tu proyecto necesita
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-sans font-light leading-relaxed">
                En <strong>Estudio Ágape</strong> combinamos rigor técnico, calidez de atención y tecnología impositiva para acompañar tu crecimiento en Argentina. Soluciones pensadas para monotributistas, autónomos, inversores y PyMEs.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl">
                <span className="block font-serif text-2xl font-bold text-grey-400">100%</span>
                <span className="text-[11px] font-sans text-slate-400 uppercase tracking-widest mt-1 block">Atención Personalizada</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl">
                <span className="block font-serif text-2xl font-bold text-grey-500">UBA</span>
                <span className="text-[11px] font-sans text-slate-400 uppercase tracking-widest mt-1 block">Estándar Académico</span>
              </div>
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl col-span-2 sm:col-span-1">
                <span className="block font-serif text-2xl font-bold text-grey-400">Online</span>
                <span className="text-[11px] font-sans text-slate-400 uppercase tracking-widest mt-1 block">Toda la Argentina</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onConsult}
                id="hero-primary-cta"
                className="px-8 py-3.5 bg-gradient-to-r from-grey-500 to-grey-600 hover:from-grey-400 hover:to-grey-500 text-slate-950 hover:shadow-lg hover:shadow-grey-500/10 font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                Iniciar Consulta Sin Cargo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={onLearnMore}
                id="hero-secondary-cta"
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white font-medium rounded-xl text-sm transition-all duration-300 border border-slate-800 flex items-center justify-center gap-2 hover:border-slate-700"
              >
                Ver Servicios & Herramientas
              </button>
            </div>
          </div>

          {/* Graphical/Interactive Right Side Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Blur backdrop light glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-grey-500 to-grey-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" />

              {/* Main Visual Card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                {/* Header card with UBA Emblem / Seal concept */}
                <div className="flex items-center space-x-4 mb-6 border-b border-slate-805/40 pb-5">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-grey-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white">Estudio Ágape</h3>
                    <p className="text-xs text-slate-400">Contaduría Profesional con Sello UBA</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed italic mb-5">
                  "El término griego **Ágape** representa un compromiso y dedicación íntegra hacia otro. Fundamos el estudio con el propósito de servir honesta e incondicionalmente al monotributista, al Pyme y al profesional autónomo en cada etapa de su camino fiscal."
                </p>

                {/* Checklist with professional tools included on direct consultation */}
                <div className="space-y-3.5 mb-6">
                  <h4 className="text-[11px] font-sans font-semibold tracking-wider uppercase text-grey-400">
                    Nuestra Propuesta de Valor:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-350">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Liquidación y Diagnóstico Tributario Inicial sin costo.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Atención personalizada por Contadora Pública (UBA).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Herramientas digitales modernas de facturación y alertas.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Planificación fiscal periódica para no pagar de más.</span>
                    </li>
                  </ul>
                </div>

                {/* Secondary badge for trust */}
                <div className="border-t border-slate-800 pt-5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-grey-500" />
                    <span>Matrícula en Consejo CABA & Prov.</span>
                  </div>
                  <span>Argentina 2026</span>
                </div>
              </div>

              {/* Little Floating Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-gradient-to-tr from-slate-900 to-slate-950 border border-slate-800 shadow-xl rounded-xl p-4 flex items-center space-x-3 max-w-[200px] animate-bounce-slow">
                <div className="w-8 h-8 rounded-full bg-grey-500/20 text-grey-400 flex items-center justify-center font-bold">
                  %
                </div>
                <div>
                  <h5 className="text-[10px] uppercase font-mono tracking-widest text-slate-500">Monotributo</h5>
                  <p className="text-xs font-bold text-white leading-none mt-0.5">Alta Express 24hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
