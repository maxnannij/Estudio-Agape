/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { MonotributoCalculator } from './components/MonotributoCalculator';
import { TaxCalendar } from './components/TaxCalendar';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Calculator, Calendar, Milestone, ShieldCheck, Sparkles, Phone, Mail } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [activeToolTab, setActiveToolTab] = useState<'calculator' | 'calendar'>('calculator');

  // Handle smooth scroll to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Monitor scroll progress to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'nosotros', 'herramientas', 'preguntas', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="app-root" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Dynamic Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Intro view */}
      <Hero 
        onLearnMore={() => handleNavigate('servicios')} 
        onConsult={() => handleNavigate('contacto')} 
      />

      {/* Services and Matcher Quiz */}
      <Services />

      {/* About & Values section */}
      <About />

      {/* Interactive Tools Hub (Calculator + Deadlines) */}
      <section id="herramientas" className="py-24 bg-slate-900/10 border-t border-slate-800/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 block">Autogestión Inteligente</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white">
              Herramientas interactivas para tu día a día
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Tomá el control de tu planificación fiscal. Utilizá nuestro simulador impositivo nacional y consultá las fechas oficiales de AFIP para que nunca pagues recargos ni intereses.
            </p>

            {/* Dashboard tab selector switcher */}
            <div id="tools-selector-tabs" className="inline-flex bg-slate-950 border border-slate-850 p-1 rounded-2xl gap-1 mt-6">
              <button
                onClick={() => setActiveToolTab('calculator')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  activeToolTab === 'calculator'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calculator className="w-4 h-4" />
                Simulador Monotributo
              </button>
              <button
                onClick={() => setActiveToolTab('calendar')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                  activeToolTab === 'calendar'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                Calendario AFIP
              </button>
            </div>
          </div>

          {/* Dynamic rendering of tool inside bento look frame */}
          <div className="max-w-4xl mx-auto">
            {activeToolTab === 'calculator' ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <MonotributoCalculator />
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <TaxCalendar />
              </div>
            )}
          </div>

        </div>
      </section>

      {/* FAQ panel section */}
      <FAQ />

      {/* Main contact capture area */}
      <ContactForm />

      {/* Beautiful localized footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
