'use client';

import { useState } from 'react';
import {
  ArrowRight, Heart, Sparkles, CheckCircle, Clock, Shield,
  X, User, Building, Mail, Phone, TrendingUp, Zap, Target,
  ChevronDown
} from 'lucide-react';
import Header from './components/Header';
import InfiniteIconScroll from './components/InfiniteIconScroll';
import CatalogSection from './components/CatalogSection';
import BookCallModal from './components/BookCallModal';

export default function Home() {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [bookCallModalOpen, setBookCallModalOpen] = useState(false);
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
    setFormData({ nombre: '', email: '', telefono: '', negocio: '', origen: '' });
  };

  const openFormWithSource = (source: string) => {
    setFormData({...formData, origen: source});
    setShowLeadForm(true);
  };

  return (
    <div className="min-h-screen relative bg-black">
      {/* Clean Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <Header />

      {/* Main Content */}
      <div className="relative z-10">

        {/* HERO SECTION - Optimized Journey */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full text-sm font-semibold text-teal-200 animate-fade-in">
                <Sparkles className="w-5 h-5" />
                <span>Automatización IA que funciona mientras duermes</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight">
                <span className="block text-white mb-4">Recupera</span>
                <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-4">
                  25+ Horas
                </span>
                <span className="block text-gray-300 text-5xl md:text-6xl lg:text-7xl">
                  Cada Semana
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Agentes IA que atienden clientes, toman pedidos y cierran ventas{' '}
                <span className="text-teal-300 font-bold">24/7 automáticamente</span>
              </p>

              {/* Primary CTA */}
              <div className="pt-8">
                <button
                  onClick={() => setBookCallModalOpen(true)}
                  className="group bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-gray-900 font-black py-6 px-12 rounded-2xl text-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[0_0_60px_rgba(20,184,166,0.8)] inline-flex items-center gap-3"
                >
                  Quiero Mi Consultoría Gratis
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </button>

                {/* Trust badges below CTA */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 mt-6">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-400" />
                    <span>Sin compromiso</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-teal-400" />
                    <span>Sin tarjetas de crédito</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <span>Respuesta en 24h</span>
                  </span>
                </div>
              </div>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-12">
                {[
                  { icon: Zap, value: '1,240h', label: 'Ahorradas/Mes', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-400/50', iconColor: 'text-amber-300' },
                  { icon: TrendingUp, value: '2.3x', label: 'Más Ingresos', color: 'from-green-500/20 to-emerald-500/20', border: 'border-green-400/50', iconColor: 'text-green-300' },
                  { icon: Target, value: '92%', label: 'Auto-Resuelto', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-400/50', iconColor: 'text-blue-300' },
                  { icon: Heart, value: '50+', label: 'Clientes Felices', color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-400/50', iconColor: 'text-rose-300' },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl border-2 ${stat.border} rounded-2xl p-6 hover:scale-105 transition-all`}>
                      <Icon className={`w-10 h-10 ${stat.iconColor} mb-3 mx-auto`} />
                      <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Scroll indicator */}
              <div className="pt-16 animate-bounce">
                <ChevronDown className="w-8 h-8 text-gray-500 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* INFINITE ICON SCROLL DIVIDER */}
        <InfiniteIconScroll />

        {/* PROBLEM/SOLUTION SECTION - Customer Journey Step 2 */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                ¿Te Suena <span className="text-rose-400">Familiar</span>?
              </h2>
              <p className="text-xl text-gray-400">La realidad de emprender sin automatización</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { emoji: '😫', problem: 'Trabajas 70h/semana', detail: 'Pero tu negocio no crece al mismo ritmo' },
                { emoji: '📱', problem: 'Contestas WhatsApp 24/7', detail: 'Incluidos fines de semana y vacaciones' },
                { emoji: '💸', problem: 'Pierdes ventas diario', detail: 'Porque no puedes atender a todos a tiempo' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-red-900/20 to-rose-900/20 backdrop-blur-xl border-2 border-red-500/30 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">{item.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.problem}</h3>
                  <p className="text-gray-400">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Solution Preview */}
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-xl border-2 border-teal-400/40 rounded-3xl p-12 text-center">
              <h3 className="text-4xl font-black text-white mb-4">
                Pero hay una <span className="text-teal-300">Solución Simple</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Agentes IA que replican tu mejor vendedor, trabajan 24/7 y nunca piden vacaciones
              </p>
              <button
                onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-xl text-white font-bold transition-all hover:scale-105"
              >
                Ver Cómo Funciona
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* INFINITE ICON SCROLL DIVIDER */}
        <InfiniteIconScroll />

        {/* CATALOG SECTION - Customer Journey Step 3 */}
        <div id="servicios">
          <CatalogSection onOpenForm={openFormWithSource} />
        </div>

        {/* INFINITE ICON SCROLL DIVIDER */}
        <InfiniteIconScroll />

        {/* SOCIAL PROOF - Customer Journey Step 4 */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Resultados <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Reales</span>
              </h2>
              <p className="text-xl text-gray-400">Transformaciones verificadas de emprendedores como tú</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'María González',
                  business: 'Panadería La Dulzura',
                  result: 'De 70h a 40h/semana. Mismo revenue.',
                  quote: 'El agente IA toma pedidos mientras duermo. Ahora tengo tiempo para mi familia.',
                  gradient: 'from-purple-500/20 to-pink-500/20',
                  border: 'border-purple-400/40'
                },
                {
                  name: 'Carlos Mendoza',
                  business: 'Taller Mecánico Express',
                  result: '+150% en citas agendadas',
                  quote: 'El chatbot responde al instante. Mis clientes aman la velocidad.',
                  gradient: 'from-teal-500/20 to-cyan-500/20',
                  border: 'border-teal-400/40'
                },
                {
                  name: 'Ana Rodríguez',
                  business: 'Boutique Fashion Style',
                  result: '23h/semana para familia',
                  quote: 'La IA maneja todo. Yo solo apruebo. Game changer total.',
                  gradient: 'from-rose-500/20 to-orange-500/20',
                  border: 'border-rose-400/40'
                },
              ].map((testimonial, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${testimonial.gradient} backdrop-blur-xl border-2 ${testimonial.border} rounded-3xl p-8 hover:scale-105 transition-all`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-white text-2xl font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.business}</div>
                    </div>
                  </div>
                  <div className="mb-4 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-xl">
                    <div className="text-green-300 font-bold text-sm">{testimonial.result}</div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA - Customer Journey Step 5 */}
        <section className="py-32 px-4 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-xl border-2 border-teal-400/50 rounded-3xl p-16 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                  ¿Listo para Recuperar<br />
                  <span className="text-teal-300">Tu Vida</span>?
                </h2>

                <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
                  Agenda tu consultoría gratuita ahora.<br />
                  <span className="text-teal-300 font-bold">Cero compromiso. Cero riesgo. Solo resultados.</span>
                </p>

                <button
                  onClick={() => setBookCallModalOpen(true)}
                  className="group bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 text-gray-900 font-black px-12 py-6 rounded-2xl text-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(20,184,166,0.9)] inline-flex items-center gap-3 mb-8 shadow-2xl"
                >
                  <Heart className="w-7 h-7 group-hover:scale-110 transition-transform" />
                  Agendar Ahora (Gratis)
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                </button>

                <div className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-300" />
                    <span>Sin compromiso</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-teal-300" />
                    <span>Sin tarjetas</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-teal-300" />
                    <span>Respuesta en 24h</span>
                  </span>
                </div>

                <div className="pt-10 mt-10 border-t border-gray-700/50">
                  <p className="text-gray-400 text-lg">
                    <span className="text-yellow-300 font-bold">Garantía:</span> Si después de la llamada decides que no es para ti,
                    te mandamos una guía gratuita con 5 automatizaciones que puedes hacer tú mismo/a.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* OPTIMIZED LEAD FORM MODAL */}
      {showLeadForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 border-2 border-teal-400/50 rounded-3xl p-10 max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-4xl font-black text-white mb-3">
                ¡Último Paso!
              </h3>
              <p className="text-gray-300 text-lg">
                Te contactamos en <span className="text-teal-300 font-bold">menos de 24h</span>
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  ¿Cómo te llamas? *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    placeholder="María García"
                    className="w-full bg-white/10 border-2 border-teal-400/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-teal-400/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Tu mejor email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="maria@ejemplo.com"
                    className="w-full bg-white/10 border-2 border-teal-400/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-teal-400/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    placeholder="+507 6123-4567"
                    className="w-full bg-white/10 border-2 border-teal-400/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-teal-400/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-semibold">
                  Tu negocio *
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.negocio}
                    onChange={(e) => setFormData({...formData, negocio: e.target.value})}
                    placeholder="Ej: Panadería, Consultoría..."
                    className="w-full bg-white/10 border-2 border-teal-400/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:border-teal-400/60 focus:outline-none transition-all text-lg"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-black py-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(20,184,166,0.9)] flex items-center justify-center gap-3 mt-8 text-xl"
              >
                <Sparkles className="w-6 h-6" />
                Confirmar Consultoría Gratis
              </button>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mt-6">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-teal-400" />
                  Datos 100% seguros
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-teal-400" />
                  Sin spam
                </span>
              </div>
            </form>
          </div>
        </div>
      )}

      <BookCallModal
        isOpen={bookCallModalOpen}
        onClose={() => setBookCallModalOpen(false)}
      />
    </div>
  );
}
