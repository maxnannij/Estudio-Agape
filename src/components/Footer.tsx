/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, GraduationCap, Github, Code, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-slate-950 border-t border-slate-900 py-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Studio info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollUp}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center">
                <span className="font-serif font-bold text-slate-950 text-lg">Á</span>
              </div>
              <div>
                <h4 className="text-lg font-serif font-semibold tracking-wide text-white leading-none">
                  Estudio <span className="text-amber-400">Ágape</span>
                </h4>
                <p className="text-[9px] font-sans tracking-wider text-slate-500 uppercase mt-0.5">
                  Asesoría Contable & Impositiva
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              Asesoría contable, impositiva y financiera adaptada a la era digital. Soluciones integrales para monotributistas, autónomos, jubilados y PyMEs en toda la Argentina con sello académico de la UBA.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span>Contadora Pública (FCE - UBA)</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">Navegación</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-amber-400 transition-colors">
                  Inicio / Portada
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-amber-400 transition-colors">
                  Servicios Tributarios
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nosotros')} className="hover:text-amber-400 transition-colors">
                  Estudio y Valores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('herramientas')} className="hover:text-amber-400 transition-colors">
                  Herramientas Útiles
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('preguntas')} className="hover:text-amber-400 transition-colors">
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">Contactos del Estudio</h5>
            <div className="space-y-3.5">
              <a
                href="mailto:estudioagape.cp@gmail.com"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors block w-fit font-mono"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>estudioagape.cp@gmail.com</span>
              </a>
              <a
                href="https://wa.me/5491163687765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-white transition-colors block w-fit font-mono"
              >
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+54 9 11 6368-7765</span>
              </a>
              <div className="text-xs text-slate-500 font-light pr-4">
                Horario de atención: Lunes a Viernes de 9hs a 18hs para consultas digitales y asesorías agendadas.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Github-ready notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-550 gap-4">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Estudio Ágape. Todos los derechos reservados.</p>
            <p className="font-light">Buenos Aires, Argentina. Egresada Facultad de Ciencias Económicas - UBA.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 bg-slate-900 border border-slate-850 px-2.5 py-1 rounded-full">
              <Code className="w-3.5 h-3.5 text-amber-500" />
              <span>Optimizado para GitHub Pages</span>
            </span>
            <button
              onClick={scrollUp}
              className="p-2 border border-slate-850 bg-slate-900 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
              title="Ir Arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
