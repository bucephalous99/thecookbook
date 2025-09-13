import Hero from '@/components/sections/Hero'
import LatestRecipes from '@/components/sections/LatestRecipes'
import AboutPreview from '@/components/sections/AboutPreview'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <LatestRecipes />
      <AboutPreview />
    </div>
  )
}

