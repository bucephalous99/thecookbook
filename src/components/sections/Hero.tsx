import Link from 'next/link'
import { ArrowRight, ChefHat, Clock, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="architect-section bg-gradient-to-br from-neutral-50 to-white">
      <div className="architect-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-architect-accent/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <ChefHat className="w-4 h-4 text-architect-accent" />
            <span className="text-sm font-medium text-architect-accent uppercase tracking-wide">
              Nueva receta cada semana
            </span>
          </div>
          
          {/* Hero Title */}
          <h1 className="text-hero mb-8 animate-slide-up">
            Descubre la cocina
            <br />
            <span className="text-architect-accent">paso a paso</span>
            <br />
            con simplicidad
          </h1>
          
          {/* Hero Description */}
          <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Guías detalladas, ingredientes claros y acompañamiento de IA para hacer de la cocina 
            una experiencia única y accesible para todos.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-scale-in">
            <Link href="/recetas" className="architect-button text-lg px-8 py-4 flex items-center space-x-2">
              <span>Explorar Recetas</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/sobre-mi" className="architect-button-secondary text-lg px-8 py-4">
              Conoce mi Historia
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ChefHat className="w-6 h-6 text-architect-accent" />
              </div>
              <div className="text-2xl font-bold text-architect-black mb-1">50+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Recetas</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-architect-accent" />
              </div>
              <div className="text-2xl font-bold text-architect-black mb-1">30min</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Promedio</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-architect-accent" />
              </div>
              <div className="text-2xl font-bold text-architect-black mb-1">1000+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Cocineros</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
