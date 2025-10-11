'use client';

import { useState } from 'react';
import { Camera, TrendingUp, Users, MessageCircle } from 'lucide-react';
import BookCallModal from '../../components/BookCallModal';

const casosExito = [
  {
    empresa: "PyME Textil - María González",
    sector: "Manufactura",
    problema: "Atención al cliente manual consumía 6h diarias",
    solucion: "Dialog Mind + FlowGrid Messenger",
    resultados: [
      "80% reducción en tiempo de respuesta",
      "300% aumento en consultas atendidas",
      "Liberó 25h semanales para producción"
    ],
    testimonio: "Ahora puedo enfocarme en crear, no en contestar WhatsApp",
    impacto: "12 nuevos clientes en 2 meses",
    imagen: "/casos/maria-textil.jpg" // placeholder
  },
  // Agrega 4-6 casos más con estructura similar
];

export default function CasosExito() {
  const [bookCallModalOpen, setBookCallModalOpen] = useState(false);
  return (
    <main className="min-h-screen bg-black pt-24 px-4">
      {/* Hero */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          Resultados Reales, Impacto Medible
        </h1>
        <p className="text-xl text-gray-400">
          PyMEs y emprendedoras transformando sus negocios con IA
        </p>
      </section>

      {/* Grid de casos */}
      <section className="max-w-7xl mx-auto grid gap-8">
        {casosExito.map((caso, idx) => (
          <article 
            key={idx}
            className="
              bg-gradient-to-br from-green-500/10 to-emerald-600/5
              border border-green-500/20 rounded-2xl p-8
              hover:border-green-400/40 transition-all duration-300
            "
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Imagen/Video */}
              <div className="relative h-64 bg-gray-900 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-16 h-16 text-green-500/30" />
                  <span className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs text-green-400">
                    Video disponible
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    {caso.empresa}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {caso.sector}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="border-l-2 border-red-500 pl-4">
                    <p className="text-sm text-gray-500">Problema:</p>
                    <p className="text-gray-300">{caso.problema}</p>
                  </div>

                  <div className="border-l-2 border-green-500 pl-4">
                    <p className="text-sm text-gray-500">Solución:</p>
                    <p className="text-green-400 font-semibold">{caso.solucion}</p>
                  </div>
                </div>

                {/* Resultados */}
                <div className="grid grid-cols-1 gap-2">
                  {caso.resultados.map((resultado, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{resultado}</span>
                    </div>
                  ))}
                </div>

                {/* Testimonio */}
                <blockquote className="border-l-4 border-green-500/30 pl-4 italic text-gray-400">
                  "{caso.testimonio}"
                </blockquote>

                {/* Impacto destacado */}
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="text-green-400 font-bold text-lg">
                    💚 {caso.impacto}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto text-center mt-16 mb-24">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl p-12 border border-green-500/30">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            ¿Lista para ser el próximo caso de éxito?
          </h2>
          <p className="text-gray-300 mb-8">
            Agenda una consultoría gratuita de 30 minutos
          </p>
          <button
            onClick={() => setBookCallModalOpen(true)}
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl transition-all">
            Agendar Consultoría Gratuita
          </button>
        </div>
      </section>
    </main>

      <BookCallModal
        isOpen={bookCallModalOpen}
        onClose={() => setBookCallModalOpen(false)}
      />
  );
}