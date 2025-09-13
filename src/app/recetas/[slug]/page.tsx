import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AIWidget from '@/components/ui/AIWidget'

interface RecipePageProps {
  params: {
    slug: string
  }
}

export default function RecipePage({ params }: RecipePageProps) {
  // Datos de ejemplo - en producción vendrían de un CMS o archivos Markdown
  const recipe = {
    id: '1',
    title: 'Pasta Carbonara Clásica',
    description: 'La receta tradicional italiana con guanciale, huevos y pecorino romano. Un plato cremoso y delicioso que conquista a todos.',
    image: '/images/carbonara.jpg',
    prepTime: '15 min',
    cookTime: '20 min',
    totalTime: '35 min',
    servings: '4 personas',
    difficulty: 'Intermedio',
    category: 'Pasta',
    date: '2024-01-15',
    slug: 'pasta-carbonara-clasica',
    ingredients: [
      '400g de pasta (spaghetti o rigatoni)',
      '200g de guanciale (o panceta)',
      '4 huevos frescos',
      '100g de pecorino romano rallado',
      'Pimienta negra recién molida',
      'Sal para el agua de la pasta'
    ],
    steps: [
      {
        number: 1,
        title: 'Preparar los ingredientes',
        description: 'Corta el guanciale en cubos pequeños. Ralla el pecorino romano. Separa las yemas de las claras de los huevos.',
        image: '/images/carbonara-step1.jpg'
      },
      {
        number: 2,
        title: 'Cocinar el guanciale',
        description: 'En una sartén grande, cocina el guanciale a fuego medio hasta que esté dorado y crujiente. Reserva.',
        image: '/images/carbonara-step2.jpg'
      },
      {
        number: 3,
        title: 'Preparar la pasta',
        description: 'Hierve agua con sal abundante y cocina la pasta según las instrucciones del paquete, pero 2 minutos menos.',
        image: '/images/carbonara-step3.jpg'
      },
      {
        number: 4,
        title: 'Mezclar los huevos',
        description: 'En un bowl, mezcla las yemas con el pecorino rallado y pimienta negra abundante.',
        image: '/images/carbonara-step4.jpg'
      },
      {
        number: 5,
        title: 'Combinar todo',
        description: 'Escurre la pasta y mézclala inmediatamente con el guanciale caliente. Agrega la mezcla de huevos removiendo constantemente.',
        image: '/images/carbonara-step5.jpg'
      },
      {
        number: 6,
        title: 'Servir',
        description: 'Sirve inmediatamente con más pecorino rallado y pimienta negra por encima.',
        image: '/images/carbonara-step6.jpg'
      }
    ],
    tips: [
      'Usa guanciale auténtico para el mejor sabor',
      'Los huevos deben estar a temperatura ambiente',
      'Remueve constantemente para evitar que se cuajen los huevos',
      'Sirve inmediatamente para mantener la cremosidad'
    ]
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="architect-container py-4">
        <Link href="/recetas" className="inline-flex items-center space-x-2 text-neutral-600 hover:text-architect-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Recetas</span>
        </Link>
      </div>

      <div className="architect-container">
        <div className="max-w-4xl mx-auto">
          {/* Header de la receta */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-architect-accent/10 px-4 py-2 rounded-full mb-6">
              <ChefHat className="w-4 h-4 text-architect-accent" />
              <span className="text-sm font-medium text-architect-accent uppercase tracking-wide">
                {recipe.category}
              </span>
            </div>
            
            <h1 className="text-hero mb-6">{recipe.title}</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {recipe.description}
            </p>

            {/* Meta información */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{recipe.totalTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>{recipe.servings}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="architect-badge">{recipe.difficulty}</span>
              </div>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative h-96 bg-neutral-100 rounded-lg overflow-hidden mb-12">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contenido principal */}
            <div className="lg:col-span-2 space-y-12">
              {/* Ingredientes */}
              <section>
                <h2 className="text-display mb-6">Ingredientes</h2>
                <div className="architect-card p-6">
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-architect-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Pasos */}
              <section>
                <h2 className="text-display mb-6">Preparación</h2>
                <div className="space-y-8">
                  {recipe.steps.map((step) => (
                    <div key={step.number} className="architect-card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-architect-accent text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-title mb-3">{step.title}</h3>
                          <p className="text-neutral-600 leading-relaxed mb-4">{step.description}</p>
                          {step.image && (
                            <div className="relative h-48 bg-neutral-100 rounded-lg overflow-hidden">
                              <Image
                                src={step.image}
                                alt={`Paso ${step.number}: ${step.title}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Consejos */}
              <section>
                <h2 className="text-display mb-6">Consejos del Chef</h2>
                <div className="architect-card p-6 bg-architect-accent/5">
                  <ul className="space-y-3">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-architect-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-neutral-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Información nutricional */}
                <div className="architect-card p-6">
                  <h3 className="text-title mb-4">Información Nutricional</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Calorías</span>
                      <span className="font-medium">520 kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Proteínas</span>
                      <span className="font-medium">24g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Carbohidratos</span>
                      <span className="font-medium">45g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Grasas</span>
                      <span className="font-medium">28g</span>
                    </div>
                  </div>
                </div>

                {/* Compartir */}
                <div className="architect-card p-6">
                  <h3 className="text-title mb-4">Compartir</h3>
                  <div className="flex space-x-3">
                    <button className="flex-1 architect-button-secondary text-sm py-2">
                      Facebook
                    </button>
                    <button className="flex-1 architect-button-secondary text-sm py-2">
                      Twitter
                    </button>
                    <button className="flex-1 architect-button-secondary text-sm py-2">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget de IA */}
      <AIWidget 
        recipeTitle={recipe.title}
        recipeIngredients={recipe.ingredients}
        recipeSteps={recipe.steps.map(step => step.description)}
      />
    </div>
  )
}
