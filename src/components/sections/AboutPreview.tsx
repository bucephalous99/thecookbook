import Link from 'next/link'
import { ArrowRight, ChefHat, BookOpen, MessageCircle } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="architect-section bg-neutral-50">
      <div className="architect-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display mb-8">¿Por qué CookBook?</h2>
          
          <div className="architect-grid architect-grid-3 mb-12">
            {/* Característica 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-architect-accent" />
              </div>
              <h3 className="text-title mb-4">Guías Detalladas</h3>
              <p className="text-neutral-600 mb-4">
                Cada receta incluye pasos claros, ingredientes precisos y consejos profesionales 
                para garantizar el éxito en tu cocina.
              </p>
            </div>

            {/* Característica 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-architect-accent" />
              </div>
              <h3 className="text-title mb-4">Acompañamiento IA</h3>
              <p className="text-neutral-600 mb-4">
                Resuelve dudas en tiempo real con nuestro asistente inteligente que conoce 
                cada receta y puede ayudarte con sustituciones y técnicas.
              </p>
            </div>

            {/* Característica 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-lg flex items-center mx-auto mb-6">
                <ChefHat className="w-8 h-8 text-architect-accent" />
              </div>
              <h3 className="text-title mb-4">Una Receta Semanal</h3>
              <p className="text-neutral-600 mb-4">
                Nuevas recetas cada semana, cuidadosamente seleccionadas y probadas para 
                expandir tu repertorio culinario de forma constante.
              </p>
            </div>
          </div>

          <div className="bg-white architect-card p-8 max-w-2xl mx-auto">
            <h3 className="text-title mb-4">Mi Historia</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Soy chef profesional con más de 10 años de experiencia en cocinas de todo el mundo. 
              Mi pasión es hacer que la cocina sea accesible para todos, sin importar el nivel de experiencia.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Cada receta en CookBook ha sido probada múltiples veces y refinada para garantizar 
              resultados consistentes y deliciosos en tu hogar.
            </p>
            <Link href="/sobre-mi" className="architect-button text-lg px-8 py-4 inline-flex items-center space-x-2">
              <span>Conoce Mi Historia Completa</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
