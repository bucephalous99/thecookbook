'use client';
import { useState, useEffect } from 'react';
import { Users, Briefcase, TrendingUp, Heart } from 'lucide-react';

export default function ImpactCounter() {
  const stats = [
    {
      icon: Users,
      label: "Mujeres emprendedoras",
      value: 47,
      suffix: "+",
      color: "text-pink-400"
    },
    {
      icon: Briefcase,
      label: "PyMEs asesoradas",
      value: 23,
      suffix: "+",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      label: "Horas ahorradas/mes",
      value: 1240,
      suffix: "h",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      label: "Satisfacción",
      value: 98,
      suffix: "%",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-green-950/20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
          Nuestro Impacto Social
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="
                bg-black/50 backdrop-blur-sm
                border border-green-500/20 rounded-xl p-6
                text-center hover:border-green-400/40
                transition-all duration-300
              "
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}