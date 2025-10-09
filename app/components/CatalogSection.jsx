'use client';

import { Bot, MessageCircle, Zap, TrendingUp, Shield, Sparkles, ArrowRight } from 'lucide-react';

export default function CatalogSection({ onOpenForm }) {
  const services = [
    {
      icon: Bot,
      title: 'Agentes IA Personalizados',
      description: 'Asistentes inteligentes que trabajan 24/7 atendiendo clientes, respondiendo preguntas y cerrando ventas mientras duermes.',
      gradient: 'from-purple-500/30 via-pink-500/20 to-purple-600/30',
      borderGlow: 'border-purple-400/50 hover:border-purple-300/70',
      iconColor: 'text-purple-300',
      glowEffect: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]',
      stats: '47 clientes atendidos/día promedio'
    },
    {
      icon: MessageCircle,
      title: 'Automatización de WhatsApp',
      description: 'Respuestas automáticas inteligentes, seguimiento de leads, recordatorios y campañas sin levantar un dedo.',
      gradient: 'from-teal-500/30 via-cyan-500/20 to-teal-600/30',
      borderGlow: 'border-teal-400/50 hover:border-teal-300/70',
      iconColor: 'text-teal-300',
      glowEffect: 'hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]',
      stats: '92% de consultas resueltas automáticamente'
    },
    {
      icon: Zap,
      title: 'Workflows Inteligentes',
      description: 'Conectamos todas tus herramientas: CRM, email, calendarios, facturas. Todo sincronizado sin esfuerzo manual.',
      gradient: 'from-amber-500/30 via-orange-500/20 to-amber-600/30',
      borderGlow: 'border-amber-400/50 hover:border-amber-300/70',
      iconColor: 'text-amber-300',
      glowEffect: 'hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]',
      stats: '25+ horas ahorradas por semana'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reportes IA',
      description: 'Dashboards que te dicen qué vender, cuándo y a quién. Decisiones basadas en datos, no en corazonadas.',
      gradient: 'from-blue-500/30 via-indigo-500/20 to-blue-600/30',
      borderGlow: 'border-blue-400/50 hover:border-blue-300/70',
      iconColor: 'text-blue-300',
      glowEffect: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]',
      stats: '2.3x mejora en toma de decisiones'
    },
    {
      icon: Shield,
      title: 'Gestión de Inventario IA',
      description: 'Predicción de demanda, alertas de stock bajo, reorden automático. Nunca más pierdas ventas por falta de producto.',
      gradient: 'from-emerald-500/30 via-green-500/20 to-emerald-600/30',
      borderGlow: 'border-emerald-400/50 hover:border-emerald-300/70',
      iconColor: 'text-emerald-300',
      glowEffect: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]',
      stats: '98% precisión en predicciones'
    },
    {
      icon: Sparkles,
      title: 'Content & Marketing IA',
      description: 'Genera posts, emails, ads y contenido optimizado en segundos. Marketing que funciona sin agencias costosas.',
      gradient: 'from-rose-500/30 via-pink-500/20 to-rose-600/30',
      borderGlow: 'border-rose-400/50 hover:border-rose-300/70',
      iconColor: 'text-rose-300',
      glowEffect: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.4)]',
      stats: '5x más engagement que contenido manual'
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Servicios que <span className="bg-gradient-to-r from-teal-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">Transforman</span> Negocios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones IA personalizadas que trabajan para ti mientras vives tu vida
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`
                  group relative
                  bg-gradient-to-br ${service.gradient}
                  backdrop-blur-xl
                  border-2 ${service.borderGlow}
                  rounded-3xl p-8
                  transition-all duration-500
                  ${service.glowEffect}
                  hover:scale-105
                  cursor-pointer
                  overflow-hidden
                `}
              >
                {/* Animated background blob */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center
                    w-16 h-16 mb-6
                    bg-white/10 backdrop-blur-sm
                    rounded-2xl
                    ${service.iconColor}
                    group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-300
                  `}>
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Stats badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-200 border border-white/20 mb-6">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>{service.stats}</span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onOpenForm(`catalog-${service.title}`)}
                    className={`
                      w-full flex items-center justify-center gap-2
                      py-3 px-6
                      bg-white/10 hover:bg-white/20
                      backdrop-blur-sm
                      border border-white/30
                      rounded-xl
                      text-white font-semibold
                      transition-all duration-300
                      group-hover:translate-x-1
                    `}
                  >
                    Quiero Esto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            ¿No ves lo que necesitas? Creamos soluciones personalizadas
          </p>
          <button
            onClick={() => onOpenForm('catalog-custom')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
          >
            <Sparkles className="w-5 h-5" />
            Solicitar Solución Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}
