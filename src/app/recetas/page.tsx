'use client'

import { useState } from 'react'
import { Search, Filter, Clock, Users } from 'lucide-react'
import RecipeCard from '@/components/ui/RecipeCard'

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')

  // Datos de ejemplo - en producción vendrían de un CMS
  const allRecipes = [
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
    },
    {
      id: '4',
      title: 'Pollo al Limón',
      description: 'Pollo jugoso con salsa de limón y hierbas aromáticas.',
      image: '/images/pollo-limon.jpg',
      prepTime: '20 min',
      servings: '4 personas',
      difficulty: 'Fácil',
      category: 'Carnes',
      date: '2023-12-25',
      slug: 'pollo-al-limon'
    },
    {
      id: '5',
      title: 'Salmón Teriyaki',
      description: 'Salmón glaseado con salsa teriyaki casera y arroz.',
      image: '/images/salmon-teriyaki.jpg',
      prepTime: '25 min',
      servings: '2 personas',
      difficulty: 'Intermedio',
      category: 'Pescados',
      date: '2023-12-18',
      slug: 'salmon-teriyaki'
    },
    {
      id: '6',
      title: 'Brownie de Chocolate',
      description: 'Brownie húmedo y chocolatoso con nueces.',
      image: '/images/brownie.jpg',
      prepTime: '35 min',
      servings: '8 personas',
      difficulty: 'Fácil',
      category: 'Postres',
      date: '2023-12-11',
      slug: 'brownie-de-chocolate'
    }
  ]

  const categories = ['Todas', 'Pasta', 'Arroz', 'Postres', 'Carnes', 'Pescados']
  const difficulties = ['Todas', 'Fácil', 'Intermedio', 'Avanzado']

  // Filtrar recetas
  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Todas' || recipe.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === '' || selectedDifficulty === 'Todas' || recipe.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="pt-20">
      <div className="architect-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-hero mb-6">Todas las Recetas</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Explora nuestra colección completa de recetas con guías paso a paso y acompañamiento de IA
          </p>
        </div>

        {/* Filtros */}
        <div className="architect-card p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Búsqueda */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar recetas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="architect-input pl-10"
              />
            </div>

            {/* Filtro por categoría */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="architect-input"
              >
                {categories.map(category => (
                  <option key={category} value={category === 'Todas' ? '' : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro por dificultad */}
            <div className="lg:w-48">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="architect-input"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty === 'Todas' ? '' : difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-title">
              {filteredRecipes.length} receta{filteredRecipes.length !== 1 ? 's' : ''} encontrada{filteredRecipes.length !== 1 ? 's' : ''}
            </h2>
            <div className="flex items-center space-x-2 text-sm text-neutral-500">
              <Filter className="w-4 h-4" />
              <span>Ordenar por fecha</span>
            </div>
          </div>

          {filteredRecipes.length > 0 ? (
            <div className="architect-grid architect-grid-3">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-neutral-400" />
              </div>
              <h3 className="text-title mb-2">No se encontraron recetas</h3>
              <p className="text-neutral-600 mb-6">
                Intenta ajustar los filtros o usar términos de búsqueda diferentes.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('')
                  setSelectedDifficulty('')
                }}
                className="architect-button"
              >
                Limpiar Filtros
              </button>
            </div>
          )}
        </div>

        {/* Newsletter */}
        <div className="architect-card p-8 text-center bg-gradient-to-r from-architect-accent/5 to-architect-accent/10">
          <h3 className="text-title mb-4">¿Quieres más recetas?</h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe una nueva receta cada semana directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="architect-input"
            />
            <button className="architect-button whitespace-nowrap">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
