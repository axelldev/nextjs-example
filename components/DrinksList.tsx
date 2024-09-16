import { Drink } from '@/lib/types/drink'
import Image from 'next/image'
import Link from 'next/link'

export default function DrinksList({ drinks }: { drinks: Drink[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-2 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          {
            <Link href={`/drinks/${drink.idDrink}`}>
              <div className="relative size-48 mb-4">
                <Image
                  fill
                  alt={drink.strDrink}
                  src={drink.strDrinkThumb}
                  className="rounded-md object-cover"
                  sizes="(max-width: 786px) 100vw, (max-width: 1200px) 50vw"
                />
              </div>
              {drink.strDrink}
            </Link>
          }
        </li>
      ))}
    </ul>
  )
}
