import { TCocktail } from '../types/cocktail'

const ingredients: string[] = []
export function ReturnAllIngredients(drinks: TCocktail[]) {
  drinks.forEach((drink: TCocktail) => {
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof TCocktail]
      const measure = drink[`strMeasure${i}` as keyof TCocktail]
      if (ingredient) {
        ingredients.push(`${measure} of  ${ingredient} ` as string)
      }
    }
  })

  return ingredients
}
