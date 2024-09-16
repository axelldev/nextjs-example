import DrinksList from '@/components/DrinksList'
import { Drink } from '@/lib/types/drink'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

const fetchDrinks = async (): Promise<Drink[]> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch drinks')
  }
  const data = await response.json()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return data.drinks
}

export default async function DrinksPage() {
  const drinks = await fetchDrinks()

  return (
    <div>
      <h3 className="mb-6 font-bold text-2xl">Drinks</h3>
      <DrinksList drinks={drinks} />
    </div>
  )
}
