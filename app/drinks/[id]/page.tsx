import { Drink } from '@/lib/types/drink'
import Image from 'next/image'
import Link from 'next/link'

interface Params {
  id: string
}

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'

const getDrinkDetail = async (id: string): Promise<Drink> => {
  const response = await fetch(`${baseURL}?i=${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch drink')
  }
  const data = await response.json()
  return data.drinks[0]
}

export default async function DrinkDetailPage({ params }: { params: Params }) {
  const drink = await getDrinkDetail(params.id)
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mb-6">
        Back to drinks
      </Link>
      <Image
        src={drink.strDrinkThumb}
        width={300}
        height={300}
        className="size-48 rounded-lg shadow-lg mb-4"
        priority
        alt={drink.strDrink}
      />
      <h3>{drink.strDrink}</h3>
    </div>
  )
}
