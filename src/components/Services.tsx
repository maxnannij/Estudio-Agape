/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  FileText,
  TrendingUp,
  Coins,
  Users,
  CheckCircle2,
  Phone,
  HelpCircle,
  Sparkles,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { Service, EstimatorResult } from '../types';

export function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'monotributo' | 'pymes' | 'impuestos' | 'finanzas'>('all');
  
  // Interactive Matcher state
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState({
    profile: '',
    volume: '',
    employees: '',
    balanceNeeded: '',
  });
  const [estimatorResult, setEstimatorResult] = useState<EstimatorResult | null>(null);

  const services: Service[] = [
    {
      id: "mono-alta",
      title: "Alta de Monotributo y Registro de Rentas",
      description: "Inscripción rápida en AFIP y Rentas Provinciales (AGIP, ARBA, Convenio Multilateral). Evitá multas e irregularidades desde el primer día.",
      category: "monotributo",
      features: [
        "Inscripción formal en AFIP y elección de Obra Social adecuada.",
        "Alta en Ingresos Brutos (Régimen Simplificado o Convenio Multilateral).",
        "Configuración del punto de venta y Facturación Electrónica.",
        "Asesoramiento inicial sobre montos de facturación y límites de categoría."
      ],
      iconName: "FileText"
    },
    {
      id: "mono-mensual",
      title: "Abono Mensual Monotributo",
      description: "Tranquilidad absoluta para que te enfoques en tu trabajo. Nos ocupamos de tus impuestos mes a mes de manera proactiva.",
      category: "monotributo",
      features: [
        "Monitoreo mensual de límites de facturación para evitar exclusiones de oficio.",
        "Recategorizaciones semestrales obligatorias (Enero y Julio).",
        "Presentación mensual de Ingresos Brutos (monto fijo o alícuota sobre ventas).",
        "Generación periódica de Volantes Electrónicos de Pago (VEP) para el monotributo mensual."
      ],
      iconName: "Calculator"
    },
    {
      id: "ri-pymes",
      title: "Autónomos & Responsables Inscriptos",
      description: "Liquidación y cumplimiento mensual estricto frente a regímenes generales. Planificación fiscal inteligente para personas físicas y jurídicas.",
      category: "pymes",
      features: [
        "Alta en IVA, Impuesto a las Ganancias y Autónomos.",
        "Liquidación mensual de IVA y Declaración Jurada anual de Ganancias.",
        "Declaración anual de Bienes Personales.",
        "Convenio Multilateral con reparto de coeficientes provinciales (F.5800)."
      ],
      iconName: "TrendingUp"
    },
    {
      id: "sueldos-cargas",
      title: "Liquidación de Sueldos (F.931)",
      description: "Liquidación integral de haberes de tus colaboradores bajo las normativas actuales. Gestión completa de convenios colectivos.",
      category: "pymes",
      features: [
        "Liquidación mensual/quincenal de recibos de sueldo según Convenio Colectivo.",
        "Declaración Jurada en AFIP (F.931) y emisión de boletas sindicales.",
        "Administración del Libro de Sueldos Digital (LSD).",
        "Asesoramiento en indemnizaciones, vacaciones y cargas sociales patronales."
      ],
      iconName: "Users"
    },
    {
      id: "finanzas-plan",
      title: "Planificación Financiera & Cash Flow",
      description: "Estructuración de flujos de caja y análisis de costos. Te ayudamos a entender la rentabilidad real de tu negocio o PyME.",
      category: "finanzas",
      features: [
        "Consultoría en flujos de fondos proyectados (Cash Flow).",
        "Análisis de punto de equilibrio y márgenes de rentabilidad neta.",
        "Armado de presupuestos económico-financieros.",
        "Asesoría básica para reinversión de excedentes fiscales."
      ],
      iconName: "Coins"
    },
    {
      id: "balances-certificados",
      title: "Balances Certificados e Informes UBA",
      description: "Presentaciones oficiales para bancos, proveedores y entes reguladores con la debida certificación en el Consejo Profesional de Ciencias Económicas.",
      category: "pymes",
      features: [
        "Auditoría y confección de Estados Contables anuales.",
        "Certificaciones de Ingresos y Manifestaciones de Bienes legales.",
        "Informes de origen de fondos frente a bancos o escribanos.",
        "Gestión de trámites ante IGJ o Direcciones de Personas Jurídicas."
      ],
      iconName: "FileText"
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  // Render icons dynamically
  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-6 h-6 text-amber-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-amber-500" />;
      case 'Coins': return <Coins className="w-6 h-6 text-amber-500" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-500" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-amber-500" />;
      default: return <FileText className="w-6 h-6 text-amber-500" />;
    }
  };

  const handleAnswerSelect = (field: string, value: string) => {
    const updatedAnswers = { ...answers, [field]: value };
    setAnswers(updatedAnswers);

    if (field === 'profile') {
      if (value === 'particular') {
        const result: EstimatorResult = {
          recommendedPlan: 'Asesoría Contable Express',
          estimatedFeeRange: 'Consulta por hora bonificada al iniciar',
          servicesIncluded: [
            'Asesoramiento en Monotributo contra Rentas',
            'Soporte frente a dudas de retenciones bancarias',
            'Revisión preventiva de deudas fiscales'
          ],
          ctaMessage: 'Hola, me gustaría agendar una asesoría express con Estudio Ágape para resolver mis inquietudes impositivas particulares.'
        };
        setEstimatorResult(result);
        setStep(4);
        return;
      }
    }

    // Move to next step or generate result
    if (field === 'profile') setStep(1);
    else if (field === 'volume') setStep(2);
    else if (field === 'employees') setStep(3);
    else if (field === 'balanceNeeded') {
      // Calculate final plan
      calculatePlan(updatedAnswers);
      setStep(4);
    }
  };

  const calculatePlan = (currentAnswers: typeof answers) => {
    let result: EstimatorResult;

    if (currentAnswers.profile === 'sociedad' || currentAnswers.employees !== 'no') {
      result = {
        recommendedPlan: 'Plan Abono PyME Integral',
        estimatedFeeRange: 'Arancel a convenir según transacciones',
        servicesIncluded: [
          'Liquidaciones de IVA, Ganancias y Convenio Multilateral',
          'Liquidación mensual de sueldos (F.931) y Libro de Sueldos Digital',
          'Confección y auditoría de Balances Anuales certificados',
          'Acceso directo a consultas ilimitadas de gestión fiscal'
        ],
        ctaMessage: `Hola! Hice el estimador impositivo de su web. Mi perfil es para una PyME/Sociedad con empleados. Me interesa coordinar una entrevista de diagnóstico gratuito.`
      };
    } else if (currentAnswers.profile === 'ri') {
      result = {
        recommendedPlan: 'Plan Responsable Inscripto Autónomo',
        estimatedFeeRange: 'Soporte fiscal full',
        servicesIncluded: [
          'Declaración jurada mensual de IVA e Ingresos Brutos',
          'Determinación anual del Impuesto a las Ganancias',
          'Declaración de Bienes Personales',
          'Emisión de informes de compras y ventas de AFIP'
        ],
        ctaMessage: `Hola! Realicé el test impositivo. Mi perfil es Responsable Inscripto Autónomo. Me gustaría recibir una cotización formal del abono mensual para mi perfil contable.`
      };
    } else {
      // Monotributistas
      if (currentAnswers.volume === 'alto') {
        result = {
          recommendedPlan: 'Abono Monotributista Pro',
          estimatedFeeRange: 'Control continúo de facturación',
          servicesIncluded: [
            'Recategorización semestral garantizada',
            'Presentación obligatoria mensual de Ingresos Brutos (Arba, Agip o Convenio)',
            'Seguimiento límite de facturación mensual para evitar salto impositivo accidental',
            'Soporte a facturas de exportación de servicios (si aplica)'
          ],
          ctaMessage: `Hola! Usé el recomendador de planes de la web y me recomendó el 'Abono Monotributista Pro'. Me gustaría conversar sobre mi facturación y los topes acumulados.`
        };
      } else {
        result = {
          recommendedPlan: 'Abono Monotributo Básico - Gestión Completa',
          estimatedFeeRange: 'Ideal para emprendedores e independientes',
          servicesIncluded: [
            'Gestión de pagos mensuales AFIP',
            'Recategorizaciones semestrales (Enero y Julio)',
            'DDJJ simplificada de Ingresos Brutos provinciales',
            'Atención a consultas por WhatsApp del día a día'
          ],
          ctaMessage: `Hola! Completé el cuestionario en la web. Mi resultado fue 'Abono Monotributo Básico'. Quisiera iniciar la gestión de mi cuenta contable con ustedes.`
        };
      }
    }

    setEstimatorResult(result);
  };

  const resetEstimator = () => {
    setStep(0);
    setAnswers({
      profile: '',
      volume: '',
      employees: '',
      balanceNeeded: '',
    });
    setEstimatorResult(null);
  };

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/5491163687765?text=${encodeURIComponent(message)}`;
  };

  const categories = [
    { id: 'all', label: 'Todos los Servicios' },
    { id: 'monotributo', label: 'Monotributo' },
    { id: 'pymes', label: 'PyMEs y Autónomos' },
    { id: 'impuestos', label: 'Declaraciones e Impuestos' },
    { id: 'finanzas', label: 'Finanzas y Consultoría' },
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-900/40 relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-amber-500">Servicios Profesionales</h3>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white">
            Soluciones dinámicas para tus compromisos contables
          </h2>
          <p className="text-base text-slate-400">
            Adaptamos nuestro servicio a la escala real de tu negocio o profesión. Te acompañamos desde tu primera factura hasta el crecimiento de tu PyME en Argentina.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div id="service-tabs" className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/10'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-350 hover:-translate-y-1 relative shadow-xl"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>
                <h4 className="text-lg font-serif font-semibold text-white tracking-wide">{service.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{service.description}</p>
                
                {/* Features Checklist */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">¿Qué Incluye?</span>
                  <ul className="space-y-1.5 text-xs text-slate-350">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="pt-6 mt-6 border-t border-slate-805/30">
                <a
                  href={`https://wa.me/5491163687765?text=Hola%20Contadora!%20Estaba%20leyendo%20su%20web%20y%20me%20interesar%C3%ADa%20consultar%20por%20el%20servicio%20de%3A%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-slate-950 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  Consultar por este servicio
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Fee Estimator & Plan Matcher Card */}
        <div id="plan-estimator" className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
              <div className="flex items-center space-x-3 text-left">
                <div className="p-2.5 bg-amber-500/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-semibold text-white">Recomendador Inteligente de Servicios</h4>
                  <p className="text-xs text-slate-400">¿No sabés qué plan se adapta a tu situación fiscal actual en Argentina? Respondé 3 preguntas.</p>
                </div>
              </div>
              
              {step > 0 && step < 4 && (
                <button
                  onClick={resetEstimator}
                  className="text-xs text-slate-400 hover:text-white hover:underline transition-colors block shrink-0"
                >
                  Reiniciar test
                </button>
              )}
            </div>

            {/* Quiz Flow Form rendering */}
            <div className="min-h-[180px] flex flex-col justify-center">
              {step === 0 && (
                <div id="match-step-0" className="text-center py-6 space-y-6">
                  <p className="text-sm text-slate-350 max-w-xl mx-auto">
                    Con un par de elecciones determinaremos si necesitás un abono básico de Monotributo, un esquema para Responsable Inscripto o un plan integral corporativo PyME.
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-sm transition-all shadow-md shadow-amber-500/10 flex items-center gap-2 mx-auto"
                  >
                    Iniciar Recomendador
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 1 && (
                <div id="match-step-1" className="space-y-4 text-left">
                  <span className="text-xs font-mono text-amber-500">Pregunta 1 de 3</span>
                  <h5 className="text-lg font-serif font-semibold text-white">¿Cuál es tu tipo de actividad o perfil contable?</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => handleAnswerSelect('profile', 'monotributo')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors"
                    >
                      <strong className="block text-amber-400">Monotributista o Emprendedor</strong>
                      Actividad por cuenta propia de baja o mediana envergadura.
                    </button>
                    <button
                      onClick={() => handleAnswerSelect('profile', 'ri')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors"
                    >
                      <strong className="block text-amber-400">Responsable Inscripto</strong>
                      Autónomo obligado a liquidar IVA, Ganancias y Autónomos generales.
                    </button>
                    <button
                      onClick={() => handleAnswerSelect('profile', 'sociedad')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors"
                    >
                      <strong className="block text-amber-400">Sociedad Comercial (PyME / SRL / SA)</strong>
                      Organización comercial constituida legalmente o con socios.
                    </button>
                    <button
                      onClick={() => handleAnswerSelect('profile', 'particular')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors"
                    >
                      <strong className="block text-amber-400">Particular (Sueldos / Dudas de Impuestos)</strong>
                      Trabajo en relación de dependencia con dudas puntuales o retenciones indebidas.
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div id="match-step-2" className="space-y-4 text-left">
                  <span className="text-xs font-mono text-amber-500">Pregunta 2 de 3</span>
                  <h5 className="text-lg font-serif font-semibold text-white">¿Cuál es tu volumen estimado de facturación anual aproximado?</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => handleAnswerSelect('volume', 'bajo')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors"
                    >
                      <strong className="block text-amber-400">Bajo o Recién Comenzando</strong>
                      Menos de $4.000.000 anuales. Pocas operaciones o un único cliente recurrente.
                    </button>
                    <button
                      onClick={() => handleAnswerSelect('volume', 'alto')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors"
                    >
                      <strong className="block text-amber-400">Facturación Recurrente / Alta</strong>
                      Más de $4.000.000 anuales. Diversos clientes o cercanía a límites superiores del Monotributo.
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div id="match-step-3" className="space-y-4 text-left">
                  <span className="text-xs font-mono text-amber-500">Pregunta 3 de 3</span>
                  <h5 className="text-lg font-serif font-semibold text-white">¿Tenés o prevés tener empleados bajo relación de dependencia?</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <button
                      onClick={() => handleAnswerSelect('balanceNeeded', 'no')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors flex flex-col justify-between"
                    >
                      <strong className="block text-amber-405">No</strong>
                      Trabajo solo / Freelance sin equipo contratado en nómina.
                    </button>
                    <button
                      onClick={() => handleAnswerSelect('balanceNeeded', 'pocos')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors flex flex-col justify-between"
                    >
                      <strong className="block text-amber-405">Sí, de 1 a 5 empleados</strong>
                      Pequeño plantel laboral. Requiere liquidación de convenio.
                    </button>
                    <button
                      onClick={() => handleAnswerSelect('balanceNeeded', 'muchos')}
                      className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all transition-colors flex flex-col justify-between"
                    >
                      <strong className="block text-amber-405">Sí, más de 5 empleados</strong>
                      Estructura operativa mediana. Sueldos, convenios y libro digital indispensable.
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && estimatorResult && (
                <div id="match-step-result" className="space-y-6 text-left animate-in fade-in duration-300">
                  <div className="p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 block mb-1">Tu Diagnóstico</span>
                    <h5 className="text-xl font-serif font-bold text-white mb-2">{estimatorResult.recommendedPlan}</h5>
                    <p className="text-xs font-mono text-slate-400 mb-4">Estimador de servicio: <span className="text-amber-400 font-semibold">{estimatorResult.estimatedFeeRange}</span></p>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-mono text-slate-500 tracking-wider">Tareas contables sugeridas:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {estimatorResult.servicesIncluded.map((s, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={getWhatsAppLink(estimatorResult.ctaMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-emerald-950/20"
                    >
                      <Phone className="w-4 h-4" />
                      Consultar diagnóstico en Whatsapp
                    </a>
                    <button
                      onClick={resetEstimator}
                      className="px-6 py-3 bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded-xl text-sm transition-all w-full sm:w-auto"
                    >
                      Hacer de nuevo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
