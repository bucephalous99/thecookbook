'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Users, TrendingUp, Heart, Sparkles, Bot, MessageCircle, CheckCircle, Clock, Shield, AlertCircle, Gift, Baby, Coffee, Mail, Phone, User, Building, X, Target, Calendar, Calculator } from 'lucide-react';
import LetterGlitch from './components/LetterGlitch';
import Header from './components/Header';
import TimeBasedHook from './components/ui/TimeBasedHook';

export default function Home() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({ 
    nombre: '', 
    email: '', 
    telefono: '', 
    negocio: '',
    origen: ''
  });

  const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Lead capturado:', formData);
    alert(`¡Gracias ${formData.nombre}! 🎉\n\nTe contactaremos en las próximas 24h.`);
    setShowLeadForm(false);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background con LetterGlitch - AHORA VISIBLE */}
      // Reemplaza la sección del LetterGlitch en tu landing por esto:

{/* Background con LetterGlitch - VERSIÓN PROFESIONAL */}
  <div className="fixed inset-0 w-full h-full z-[-1]">
  <LetterGlitch
    glitchSpeed={80}
    centerVignette={false}
    outerVignette={true}
    smooth={true}
    opacity={0.7}
    enablePerformanceMode={true}
    glitchColors={[
      'rgba(184, 32, 58, 0.12)',   // Rose primario - tu marca
      'rgba(168, 85, 247, 0.10)',  // Purple secundario
      'rgba(59, 130, 246, 0.08)',  // Blue tech
      'rgba(16, 185, 129, 0.06)',  // Emerald sutil
      'rgba(251, 191, 36, 0.04)',  // Amber highlight
      'rgba(139, 92, 246, 0.08)',  // Violet
      'rgba(236, 72, 153, 0.06)',  // Pink accent
      'rgba(6, 182, 212, 0.04)',   // Cyan tech
    ]}
    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>{}[]()!@#$%&*+=_-|\\?~`"
  />
</div>

{/* Overlay eliminado - ya no es necesario */}

{/* Overlay AJUSTADO para mejor contraste */}
<div className="fixed inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40 z-5 pointer-events-none"></div>
      
      <Header />
      
      {/* Contenido principal */}
      <div className="relative z-20">
        
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="text-center max-w-5xl mx-auto">

            <TimeBasedHook />

            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="line-through text-gray-500 block">
                  Trabajar hasta tarde todos los días
                </span>
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Recupera 25+ horas para tu familia
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                La IA te devuelve 25+ horas semanales para familia, salud y descanso real
              </p>
            </div>
            <button
              onClick={() => {
                setFormData({...formData, origen: 'hero-principal'});
                setShowLeadForm(true);
              }}
              className="bg-gradient-to-r from-teal-500 to-rose-500 text-white font-bold py-4 px-8 rounded-lg text-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              💝 Recuperar Mis 25 Horas
            </button>

            {/* Prueba social */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  M
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-500 flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                  S
                </div>
              </div>
              <p className="text-sm text-gray-400">
                47 emprendedoras recuperaron su tiempo este mes
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTRASTE */}
        <section className="py-20 px-4" id="contraste">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ¿Qué precio tiene <span className="text-rose-300">NO automatizar</span>?
              </h2>
              <p className="text-gray-300 text-lg">No es solo dinero. Es vida que no recuperas.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-xl border-2 border-red-500/40 rounded-2xl p-8 hover:border-red-400/60 transition-all">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-red-300">Sin Automatizar</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
                    <span>Cancelar planes con amigos porque &quot;surgió algo urgente&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
                    <span>Trabajar hasta las 11pm revisando mensajes &quot;por si acaso&quot;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
                    <span>Postergar tu salud, hobbies y tiempo personal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 text-2xl font-bold flex-shrink-0">✗</span>
                    <span className="font-bold text-rose-300">En 5 años: Burnout y arrepentimiento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-400/15 to-cyan-500/15 backdrop-blur-xl border-2 border-teal-400/60 rounded-2xl p-8 relative overflow-hidden hover:border-teal-300/80 transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                    <h3 className="text-2xl font-bold text-teal-300">Con Agentes IA</h3>
                  </div>
                  <ul className="space-y-4 text-gray-200">
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-2xl flex-shrink-0">✓</span>
                      <span>Sales a las 5pm: la IA ya atendió 47 clientes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-2xl flex-shrink-0">✓</span>
                      <span>Fines de semana libres para tu vida personal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-2xl flex-shrink-0">✓</span>
                      <span>Tiempo para gym, hobbies, familia, amigos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-teal-400 text-2xl font-bold flex-shrink-0">✓</span>
                      <span className="font-bold text-yellow-300">En 5 años: Negocio escalado Y vida plena</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/roi-calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-gray-900 font-bold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]"
              >
                <Calculator className="w-5 h-5" />
                Calcular Mi ROI Personalizado
              </Link>
            </div>
          </div>
        </section>

        {/* ESTADÍSTICAS */}
        <section className="py-24 px-4" id="impacto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent">
                Nuestro Impacto Real
              </span>
            </h2>
            <p className="text-gray-200 text-center mb-16 text-lg">Resultados medibles, negocios transformados</p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  icon: Heart, 
                  value: '50+', 
                  label: 'Emprendedores Felices', 
                  gradient: 'from-rose-400/20 to-pink-500/20',
                  border: 'border-rose-400/40',
                  iconColor: 'text-rose-300',
                  glow: 'hover:shadow-[0_0_30px_rgba(251,113,133,0.3)]'
                },
                { 
                  icon: TrendingUp, 
                  value: '23+', 
                  label: 'PyMEs Asesoradas', 
                  gradient: 'from-teal-400/20 to-cyan-500/20',
                  border: 'border-teal-400/40',
                  iconColor: 'text-teal-300',
                  glow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]'
                },
                { 
                  icon: Zap, 
                  value: '1,240h', 
                  label: 'Ahorradas/Mes', 
                  gradient: 'from-amber-400/20 to-orange-500/20',
                  border: 'border-amber-400/40',
                  iconColor: 'text-amber-300',
                  glow: 'hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]'
                },
                { 
                  icon: Sparkles, 
                  value: '98%', 
                  label: 'Satisfacción', 
                  gradient: 'from-purple-400/20 to-pink-500/20',
                  border: 'border-purple-400/40',
                  iconColor: 'text-purple-300',
                  glow: 'hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]'
                }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-md border-2 ${stat.border} rounded-2xl p-6 text-center transition-all duration-300 ${stat.glow} hover:scale-105 cursor-pointer`}
                  >
                    <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.iconColor}`} />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 px-4 mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-400/20 to-cyan-500/20 backdrop-blur-xl border-2 border-teal-400/40 rounded-3xl p-12 hover:border-teal-300/60 transition-all duration-300 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-yellow-500/20 border border-yellow-400/50 rounded-full animate-pulse">
                  <AlertCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-yellow-200 font-bold">Pregunta honesta:</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  ¿En qué usarás las <span className="text-rose-300">25 horas</span> que recuperes este mes?
                </h2>

                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  La consultoría es gratis. La decisión de <span className="text-teal-300 font-bold">recuperar tu vida</span> no tiene precio.
                </p>
                
                <button
                  onClick={() => {
                    setFormData({...formData, origen: 'cta-final'});
                    setShowLeadForm(true);
                  }}
                  className="group bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-gray-900 font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(20,184,166,0.8)] inline-flex items-center gap-2 mb-6 shadow-xl"
                >
                  Agendar Consultoría Gratuita
                  <CheckCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 mb-8">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-teal-300" />
                    Sin compromiso
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-teal-300" />
                    Sin tarjetas
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-teal-300" />
                    Respuesta en 24h
                  </span>
                </div>

                <div className="pt-8 border-t border-gray-700">
                  <p className="text-gray-400 italic">
                    💭 Si después de la llamada sientes que no es para ti, te mandamos{' '}
                    <span className="text-yellow-300 font-bold">una guía gratuita</span> con las 5 automatizaciones que puedes hacer tú mismo/a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* MODAL FORMULARIO */}
      {showLeadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 border-2 border-rose-400/50 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setShowLeadForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-4 shadow-lg">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                ¡Estás a 30 segundos de recuperar tu tiempo!
              </h3>
              <p className="text-gray-300">
                Déjanos tus datos y te contactamos en <span className="text-teal-300 font-bold">menos de 24h</span>
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold text-sm">
                  ¿Cómo te llamas? *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    placeholder="María García"
                    className="w-full bg-white/10 border-2 border-purple-400/30 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:border-rose-400/60 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold text-sm">
                  Tu mejor email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="maria@ejemplo.com"
                    className="w-full bg-white/10 border-2 border-purple-400/30 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:border-rose-400/60 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold text-sm">
                  WhatsApp (con código de país) *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    placeholder="+507 6123-4567"
                    className="w-full bg-white/10 border-2 border-purple-400/30 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:border-rose-400/60 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold text-sm">
                  ¿Qué tipo de negocio tienes? *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text"
                    required
                    value={formData.negocio}
                    onChange={(e) => setFormData({...formData, negocio: e.target.value})}
                    placeholder="Ej: Panadería, Consultoría..."
                    className="w-full bg-white/10 border-2 border-purple-400/30 rounded-xl px-12 py-3 text-white placeholder-gray-500 focus:border-rose-400/60 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-400 hover:to-pink-400 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(244,63,94,0.8)] flex items-center justify-center gap-2 mt-6"
              >
                <Sparkles className="w-5 h-5" />
                Quiero Mi Consultoría Gratis
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mt-4">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-teal-400" />
                  Datos seguros
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  Sin spam
                </span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}