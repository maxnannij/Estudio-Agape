/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calculator, ShieldAlert, Sparkles, AlertCircle, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MonotributoLimit } from '../types';

export function MonotributoCalculator() {
  const [revenueInput, setRevenueInput] = useState<string>('800000');
  const [activityType, setActivityType] = useState<'service' | 'product'>('service');
  
  // Annualized projection
  const monthlyRevenue = parseFloat(revenueInput.replace(/[^0-9]/g, '')) || 0;
  const projectedAnnualRevenue = monthlyRevenue * 12;

  // Real scales for Argentina (updated 2026 AFIP scale estimates for realistic context)
  const monotributoScales: MonotributoLimit[] = [
    { category: 'A', maxInvoicing: 26200000, monthlyQuota: 26600 },
    { category: 'B', maxInvoicing: 39000000, monthlyQuota: 30200 },
    { category: 'C', maxInvoicing: 54600000, monthlyQuota: 35400 },
    { category: 'D', maxInvoicing: 76100000, monthlyQuota: 45300 },
    { category: 'E', maxInvoicing: 101000000, monthlyQuota: 56200 },
    { category: 'F', maxInvoicing: 126200000, monthlyQuota: 69400 },
    { category: 'G', maxInvoicing: 151500000, monthlyQuota: 81500 },
    { category: 'H', maxInvoicing: 190000000, monthlyQuota: 101200 },
    // Category I and J and K are only for Product sales
    { category: 'I', maxInvoicing: 215000000, monthlyQuota: 123800 },
    { category: 'J', maxInvoicing: 246000000, monthlyQuota: 145000 },
    { category: 'K', maxInvoicing: 280000000, monthlyQuota: 172000 },
  ];

  // Logic to find category
  const activeScales = activityType === 'service' 
    ? monotributoScales.filter(s => ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(s.category))
    : monotributoScales;

  let assignedCategory: MonotributoLimit | null = null;
  let excluded = false;

  for (const scale of activeScales) {
    if (projectedAnnualRevenue <= scale.maxInvoicing) {
      assignedCategory = scale;
      break;
    }
  }

  if (!assignedCategory && projectedAnnualRevenue > 0) {
    excluded = true;
  }

  // Formatting currency helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(val);
  };

  const getSafetyMarginPercent = () => {
    if (excluded || !assignedCategory) return 0;
    const currentLimit = assignedCategory.maxInvoicing;
    const margin = currentLimit - projectedAnnualRevenue;
    return Math.max(0, Math.min(100, (margin / currentLimit) * 100));
  };

  const safetyMargin = assignedCategory ? assignedCategory.maxInvoicing - projectedAnnualRevenue : 0;
  const safetyPercent = getSafetyMarginPercent();

  return (
    <div id="monotributo-calc" className="space-y-8">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 bg-amber-500/10 rounded-xl">
            <Calculator className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold text-white">Simulador Especializado de Monotributo</h4>
            <p className="text-xs text-slate-400">Calculá tu rango, estimá cuotas mensuales de AFIP y conocé tus topes de permanencia.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User inputs */}
          <div className="space-y-6">
            <div className="space-y-2 text-left">
              <label htmlFor="revenue-range-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                1. ¿Cuánto estimás facturar mensualmente en promedio?
              </label>
              <div className="relative rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 flex items-center">
                <span className="text-base font-medium text-slate-500 mr-2 font-mono">ARS</span>
                <input
                  type="text"
                  id="revenue-range-input"
                  value={revenueInput ? parseFloat(revenueInput).toLocaleString('es-AR') : ''}
                  onChange={(e) => {
                    const rawVal = e.target.value.replace(/[^0-9]/g, '');
                    setRevenueInput(rawVal);
                  }}
                  className="bg-transparent text-white text-lg font-mono font-semibold focus:outline-none w-full"
                  placeholder="0"
                />
              </div>
              <p className="text-[10px] text-slate-550 font-sans italic">
                Equivale a una facturación anual proyectada de <strong className="text-amber-400 font-mono">{formatCurrency(projectedAnnualRevenue)}</strong>
              </p>
            </div>

            <div className="space-y-2 text-left">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                2. ¿A qué actividad principal te dedicás?
              </span>
              <div className="grid grid-cols-2 gap-3" id="calc-activity-selector">
                <button
                  onClick={() => setActivityType('service')}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all text-center flex flex-col items-center justify-center gap-1 ${
                    activityType === 'service'
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="font-semibold block">Servicios</span>
                  <span className="text-[10px]">Consultoría, freelancers, oficios, IT</span>
                </button>
                <button
                  onClick={() => setActivityType('product')}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all text-center flex flex-col items-center justify-center gap-1 ${
                    activityType === 'product'
                      ? 'border-amber-500 bg-amber-500/10 text-white'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="font-semibold block">Productos</span>
                  <span className="text-[10px]">Comercio, reventa, manufacturación</span>
                </button>
              </div>
            </div>

            {/* Quick Informational note */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl flex gap-3 text-left">
              <AlertCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                <strong>¿Sabías que?</strong> Los límites del Monotributo se actualizan impositivamente. Estar en la categoría límite requiere un control riguroso de movimientos bancarios y compras para no caer en el problemático régimen general de forma automática.
              </p>
            </div>
          </div>

          {/* Calculations feedback */}
          <div className="bg-slate-950 border border-slate-850 rounded-2xl p-5 sm:p-6 text-left flex flex-col justify-between">
            {excluded ? (
              <div className="space-y-4 py-4" id="calc-outcome-excluded">
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-serif font-bold text-rose-400">Exclusión del Monotributo</h5>
                    <p className="text-xs text-rose-350 leading-relaxed mt-1">
                      Tus ingresos proyectados de {formatCurrency(projectedAnnualRevenue)} superan el tope máximo admitido por AFIP para monotributistas ({formatCurrency(monotributoScales[monotributoScales.length-1].maxInvoicing)}).
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xs text-slate-400">Próximos pasos recomendados:</span>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4 font-light">
                    <li>Inscribirse en el Régimen General (Autónomos, IVA y Ganancias).</li>
                    <li>Planificar estratégicamente deducciones fiscales para aminorar el impacto del IVA.</li>
                    <li>Evitar retenciones desmedidas en tus cuentas bancarias.</li>
                  </ul>
                </div>
              </div>
            ) : assignedCategory ? (
              <div className="space-y-5" id="calc-outcome-success">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-1">Categoría Estimada</span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-serif font-extrabold text-amber-400">{assignedCategory.category}</span>
                    <span className="text-xs text-slate-400 font-mono">Tope anual: {formatCurrency(assignedCategory.maxInvoicing)}</span>
                  </div>
                </div>

                <div className="border-t border-slate-850 pt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Cuota Mensual Unificada AFIP (Est.):</span>
                    <strong className="text-white font-mono text-sm">{formatCurrency(assignedCategory.monthlyQuota)}</strong>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Margen de Facturación Restante:</span>
                    <strong className="text-emerald-400 font-mono text-sm">{formatCurrency(safetyMargin)}</strong>
                  </div>
                </div>

                {/* Safety bar warning indicator */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Margen de seguridad:</span>
                    <span>{safetyPercent.toFixed(0)}% restante antes de subir de rango</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        safetyPercent < 20 ? 'bg-amber-600' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${safetyPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-8 text-slate-500" id="calc-outcome-idle">
                <AlertCircle className="w-8 h-8 text-slate-600 mb-2" />
                <p className="text-xs">Ingresá tu facturación promedio para simular tu perfil catastral en AFIP.</p>
              </div>
            )}

            {/* Quote Action */}
            <div className="pt-5 border-t border-slate-850 mt-5">
              <a
                href={`https://wa.me/5491163687765?text=Hola%20Contadora%2C%20us%C3%A9%20el%20simulador%20en%20su%20web%20con%20una%20facturaci%C3%B3n%20aproximada%20de%20${revenueInput}%20pesos%20mensuales.%20Quisiera%20asesorarme%20sobre%20mi%20caso.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                Solicitar Diagnóstico Final Gratis
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
