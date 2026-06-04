/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'nosotros', label: 'Estudio y Valores' },
    { id: 'herramientas', label: 'Herramientas Útiles' },
    { id: 'preguntas', label: 'Preguntas Frecuentes' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            id="header-logo"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('inicio')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/10">
              <span className="font-serif font-bold text-slate-950 text-xl">Á</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-semibold tracking-wide text-white leading-none">
                Estudio <span className="text-amber-400">Ágape</span>
              </h1>
              <p className="text-[10px] font-sans tracking-widest text-slate-400 uppercase mt-1">
                Asesoría Contable & Impositiva
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`btn-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors hover:text-white relative py-1 ${
                  activeSection === item.id ? 'text-amber-400' : 'text-slate-300'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:estudioagape.cp@gmail.com"
              id="header-email-link"
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors border border-slate-800 bg-slate-950/40"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              estudioagape.cp@gmail.com
            </a>
            <a
              href="https://wa.me/5491163687765?text=Hola%21%20Encontr%C3%A9%20tu%20web%20y%20quer%C3%ADa%20hacer%20una%20consulta%20con%20el%20Estudio%20%C3%81gape"
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-cta"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-lg shadow-emerald-950/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Consultar WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-mobile-menu"
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div id="mobile-drawer" className="md:hidden bg-slate-950 border-b border-slate-800 absolute top-full left-0 right-0 py-4 px-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`btn-mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  activeSection === item.id ? 'text-amber-400 pl-2 border-l-2 border-amber-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="mailto:estudioagape.cp@gmail.com"
                id="mobile-email-link"
                className="flex items-center gap-2 text-sm font-mono text-slate-300 hover:text-white hover:bg-slate-900 p-2 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                estudioagape.cp@gmail.com
              </a>
              <a
                href="https://wa.me/5491163687765?text=Hola%21%20Encontr%C3%A9%20tu%20web%20y%20quer%C3%ADa%20hacer%20una%20consulta%20con%20el%20Estudio%20%C3%81gape"
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-whatsapp-cta"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Phone className="w-4 h-4" />
                Consultar en WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
