import Link from 'next/link'
import Image from 'next/image'
import { Clock, Users, ArrowRight } from 'lucide-react'

interface Recipe {
  id: string
  title: string
  description: string
  image: string
  prepTime: string
  servings: string
  difficulty: string
  category: string
  date: string
  slug: string
}

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'fácil':
      case 'principiante':
        return 'bg-green-100 text-green-800'
      case 'intermedio':
        return 'bg-yellow-100 text-yellow-800'
      case 'avanzado':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-neutral-100 text-neutral-800'
    }
  }

  return (
    <article className="architect-card overflow-hidden group">
      {/* Imagen */}
      <div className="relative h-48 bg-neutral-100 overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`architect-badge ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-neutral-700">
            {recipe.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-title mb-3 group-hover:text-architect-accent transition-colors">
          {recipe.title}
        </h3>
        
        <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
          {recipe.description}
        </p>

        {/* Meta información */}
        <div className="flex items-center space-x-4 mb-6 text-sm text-neutral-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
        </div>

        {/* Botón */}
        <Link 
          href={`/recetas/${recipe.slug}`}
          className="architect-button w-full text-center inline-flex items-center justify-center space-x-2"
        >
          <span>Ver Receta</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
