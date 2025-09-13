import Link from 'next/link'
import { Clock, Users, ArrowRight } from 'lucide-react'
import RecipeCard from '@/components/ui/RecipeCard'

export default function LatestRecipes() {
  // Datos de ejemplo - en producción vendrían de un CMS o API
  const latestRecipes = [
    {
      id: '1',
      title: 'Pasta Carbonara Clásica',
      description: 'La receta tradicional italiana con guanciale, huevos y pecorino romano.',
      image: '/images/carbonara.jpg',
      prepTime: '15 min',
      servings: '4 personas',
      difficulty: 'Intermedio',
      category: 'Pasta',
      date: '2024-01-15',
      slug: 'pasta-carbonara-clasica'
    },
    {
      id: '2',
      title: 'Risotto de Hongos',
      description: 'Cremoso risotto con una mezcla de hongos porcini y shiitake.',
      image: '/images/risotto.jpg',
      prepTime: '25 min',
      servings: '4 personas',
      difficulty: 'Avanzado',
      category: 'Arroz',
      date: '2024-01-08',
      slug: 'risotto-de-hongos'
    },
    {
      id: '3',
      title: 'Tiramisú Casero',
      description: 'El postre italiano más famoso con café, mascarpone y cacao.',
      image: '/images/tiramisu.jpg',
      prepTime: '30 min',
      servings: '6 personas',
      difficulty: 'Intermedio',
      category: 'Postres',
      date: '2024-01-01',
      slug: 'tiramisu-casero'
    }
  ]

  return (
    <section className="architect-section">
      <div className="architect-container">
        <div className="text-center mb-16">
          <h2 className="text-display mb-4">Últimas Recetas</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Descubre las recetas más recientes con guías paso a paso y acompañamiento de IA
          </p>
        </div>

        <div className="architect-grid architect-grid-3 mb-12">
          {latestRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/recetas" className="architect-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2">
            <span>Ver Todas las Recetas</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
