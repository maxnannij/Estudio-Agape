/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, AlertTriangle, ShieldCheck, HelpCircle, BellRing, Sparkles } from 'lucide-react';
import { TaxExpiry } from '../types';

export function TaxCalendar() {
  const [filterType, setFilterType] = useState<'all' | 'mensual' | 'anual' | 'critical'>('all');

  const milestones: TaxExpiry[] = [
    {
      id: "vencimiento-monotributo",
      name: "Cuota Mensual del Monotributo",
      description: "Pago obligatorio del componente impositivo, jubilatorio y obra social. Se recomienda configurar débito automático para acceder al beneficio de devolución anual de una cuota.",
      frequency: "Mensual",
      nextExpiry: "El día 20 de cada mes (o día hábil posterior).",
      urgency: "medium"
    },
    {
      id: "recategorizacion-afip",
      name: "Recategorización Semestral de AFIP",
      description: "Instancia obligatoria donde se evalúan las ventas de los últimos 12 meses. Determina si debés subir, bajar de categoría, o mantenerte estable.",
      frequency: "Semestral",
      nextExpiry: "Del 1 al 20 de ENERO y del 1 al 20 de JULIO.",
      urgency: "high"
    },
    {
      id: "suss-haberes",
      name: "Cargas Sociales SUSS (F. 931) y Haberes",
      description: "Presentación obligatoria de nómina salarial y pago de aportes/contribuciones patronales para comercios y PyMEs que cuenten con empleados.",
      frequency: "Mensual",
      nextExpiry: "Entre el 9 y el 11 de cada mes (según terminación de CUIT).",
      urgency: "high"
    },
    {
      id: "ddjj-iva",
      name: "Declaración Jurada Mensual de IVA",
      description: "Confección electrónica del IVA debito/crédito fiscal para Responsables Inscriptos. Obligación de informar compras, ventas y saldos técnicos.",
      frequency: "Mensual",
      nextExpiry: "Entre el 18 y el 22 de cada mes (según número de CUIT).",
      urgency: "high"
    },
    {
      id: "convenio-multilateral",
      name: "Ingresos Brutos - Convenio Multilateral",
      description: "Declaración de ventas distribuidas por jurisdicciones provinciales utilizando coeficientes de reparto ajustados anualmente por balance.",
      frequency: "Mensual",
      nextExpiry: "Alrededor del 15 de cada mes.",
      urgency: "medium"
    },
    {
      id: "ddjj-ganancias",
      name: "Ganancias y Personas Humanas Anual",
      description: "Presentación anual obligatoria donde se detalla la renta neta obtenida a lo largo del periodo fiscal vencido y determinación de saldos fiscales.",
      frequency: "Anual",
      nextExpiry: "Durante JUNIO de cada año para periodos previos.",
      urgency: "medium"
    },
    {
      id: "bienes-personales",
      name: "Bienes Personales Anual",
      description: "Declaración e informe del patrimonio acumulado al 31 de diciembre de cada año. Aplica a quienes superen el mínimo no imponible correspondiente.",
      frequency: "Anual",
      nextExpiry: "Durante JUNIO (en conjunto con Ganancias).",
      urgency: "low"
    }
  ];

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return <span className="px-2 py-1 bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-[10px] uppercase font-bold rounded-md">Vence Pronto</span>;
      case 'medium':
        return <span className="px-2 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] uppercase font-bold rounded-md">Intermedio</span>;
      default:
        return <span className="px-2 py-1 bg-slate-800 text-slate-400 font-mono text-[10px] uppercase font-bold rounded-md">Planificado</span>;
    }
  };

  const filteredMilestones = milestones.filter(m => {
    if (filterType === 'mensual') return m.frequency === 'Mensual';
    if (filterType === 'anual') return m.frequency === 'Anual' || m.frequency === 'Semestral';
    if (filterType === 'critical') return m.urgency === 'high';
    return true;
  });

  return (
    <div id="tax-calendar-wrapper" className="space-y-6 text-left">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-amber-500/10 rounded-xl">
              <Calendar className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold text-white">Cronograma y Alertas de Vencimiento</h4>
              <p className="text-xs text-slate-400">Consultá las fechas clave de AFIP para ordenar tus finanzas en Argentina.</p>
            </div>
          </div>

          {/* Quick Filters */}
          <div id="calendar-filters" className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-850 self-start sm:self-center">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'all' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilterType('mensual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'mensual' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Mensuales
            </button>
            <button
              onClick={() => setFilterType('anual')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'anual' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
              }`}
            >
              Anuales / Especiales
            </button>
            <button
              onClick={() => setFilterType('critical')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'critical' ? 'bg-amber-500 text-slate-950' : 'text-slate-405 hover:text-rose-400'
              }`}
            >
              Críticos
            </button>
          </div>
        </div>

        {/* Milestones list render */}
        <div className="space-y-4" id="calendar-timeline">
          {filteredMilestones.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950/60 hover:bg-slate-950 border border-slate-850 hover:border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-all duration-300"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h5 className="font-serif font-bold text-white text-sm tracking-wide">{item.name}</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded-full">
                    {item.frequency}
                  </span>
                  {getUrgencyBadge(item.urgency)}
                </div>
                <p className="text-xs text-slate-450 leading-relaxed font-light">{item.description}</p>
                
                {/* Due Date Indicator */}
                <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-amber-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Plazo: <strong>{item.nextExpiry}</strong></span>
                </div>
              </div>

              {/* Direct query action */}
              <div className="self-end sm:self-center shrink-0">
                <a
                  href={`https://wa.me/5491163687765?text=Hola%20Contadora!%20Tengo%20dudas%20o%20quiero%20delegar%20la%20liquidaci%C3%B3n%20de%20mi%20obligaci%C3%B3n%20de%3A%20${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-slate-900 hover:bg-slate-850 rounded-xl text-slate-300 hover:text-white border border-slate-800 hover:border-amber-500 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <BellRing className="w-3.5 h-3.5 text-amber-500" />
                  Saber más
                </a>
              </div>
            </div>
          ))}

          {filteredMilestones.length === 0 && (
            <div className="text-center py-12 text-slate-500 bg-slate-950 border border-slate-900 rounded-2xl">
              <p className="text-xs">No hay vencimientos agendados para este filtro.</p>
            </div>
          )}
        </div>

        {/* Tip section */}
        <div className="mt-6 pt-5 border-t border-slate-805/40 flex flex-col md:flex-row md:items-center justify-between text-xs text-slate-450 gap-4">
          <p className="flex items-center gap-1.5 font-light">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Todos nuestros abonos mensuales impositivos incluyen el monitoreo activo de este calendario para prevenir recargos de AFIP.</span>
          </p>
          <a
            href="mailto:estudioagape.cp@gmail.com"
            className="text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1 block font-medium"
          >
            Suscripción a alertas imprevistas
            <Sparkles className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
