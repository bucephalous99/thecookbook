import { ChefHat, Award, BookOpen, Users } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="architect-container">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-architect-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ChefHat className="w-12 h-12 text-architect-accent" />
          </div>
          <h1 className="text-hero mb-6">Sobre Mí</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Mi pasión por la cocina comenzó hace más de 15 años y desde entonces he dedicado mi vida 
            a hacer que la gastronomía sea accesible para todos.
          </p>
        </div>

        {/* Historia */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="architect-card p-8">
            <h2 className="text-display mb-6">Mi Historia</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Mi nombre es María González y soy chef profesional con más de 10 años de experiencia 
                en cocinas de todo el mundo. Mi viaje culinario comenzó en las cocinas de mi abuela 
                en el norte de Italia, donde aprendí que la cocina es mucho más que seguir recetas.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Después de graduarme en la Escuela de Cocina de Milán, trabajé en restaurantes 
                Michelin en Francia, España y Japón. Cada experiencia me enseñó que la cocina es 
                un lenguaje universal que conecta culturas y personas.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                En 2020, decidí crear CookBook para compartir mi conocimiento y hacer que la cocina 
                sea accesible para todos, sin importar su nivel de experiencia. Mi misión es 
                simplificar las técnicas complejas y hacer que cada persona pueda crear platos 
                deliciosos en su hogar.
              </p>
            </div>
          </div>
        </div>

        {/* Experiencia */}
        <div className="mb-16">
          <h2 className="text-display text-center mb-12">Mi Experiencia</h2>
          <div className="architect-grid architect-grid-2">
            <div className="architect-card p-6">
              <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-architect-accent" />
              </div>
              <h3 className="text-title mb-3">Formación Profesional</h3>
              <ul className="text-neutral-600 space-y-2">
                <li>• Escuela de Cocina de Milán (2012-2014)</li>
                <li>• Especialización en Cocina Italiana</li>
                <li>• Certificación en Técnicas de Pastelería</li>
                <li>• Curso Avanzado de Cocina Molecular</li>
              </ul>
            </div>

            <div className="architect-card p-6">
              <div className="w-12 h-12 bg-architect-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-architect-accent" />
              </div>
              <h3 className="text-title mb-3">Experiencia Laboral</h3>
              <ul className="text-neutral-600 space-y-2">
                <li>• Chef de Cocina - Restaurante Osteria Francescana (2018-2020)</li>
                <li>• Sous Chef - El Celler de Can Roca (2016-2018)</li>
                <li>• Chef de Partie - Restaurant Gordon Ramsay (2014-2016)</li>
                <li>• Más de 50+ recetas publicadas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Filosofía */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="architect-card p-8 bg-gradient-to-r from-architect-accent/5 to-architect-accent/10">
            <h2 className="text-display mb-6">Mi Filosofía Culinaria</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-title mb-3">Simplicidad</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Creo que las mejores recetas son las más simples. No necesitas ingredientes 
                  complicados para crear platos extraordinarios.
                </p>
              </div>
              <div>
                <h3 className="text-title mb-3">Calidad</h3>
                <p className="text-neutral-600 leading-relaxed">
                  La calidad de los ingredientes es fundamental. Siempre elijo productos 
                  frescos y de temporada para obtener los mejores sabores.
                </p>
              </div>
              <div>
                <h3 className="text-title mb-3">Tradición</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Respeto las tradiciones culinarias pero también me gusta innovar y adaptar 
                  las recetas a los gustos modernos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mb-16">
          <h2 className="text-display text-center mb-12">CookBook en Números</h2>
          <div className="architect-grid architect-grid-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-architect-accent" />
              </div>
              <div className="text-3xl font-bold text-architect-black mb-2">50+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Recetas</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-architect-accent" />
              </div>
              <div className="text-3xl font-bold text-architect-black mb-2">10K+</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-architect-accent" />
              </div>
              <div className="text-3xl font-bold text-architect-black mb-2">15</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-architect-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-architect-accent" />
              </div>
              <div className="text-3xl font-bold text-architect-black mb-2">5</div>
              <div className="text-sm text-neutral-600 uppercase tracking-wide">Países</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="architect-card p-8 max-w-2xl mx-auto">
            <h3 className="text-title mb-4">¿Listo para Cocinar?</h3>
            <p className="text-neutral-600 mb-6">
              Únete a nuestra comunidad y comienza tu viaje culinario con recetas probadas y 
              técnicas profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="architect-button text-lg px-8 py-4">
                Ver Todas las Recetas
              </button>
              <button className="architect-button-secondary text-lg px-8 py-4">
                Suscribirse al Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
