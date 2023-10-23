import { create } from 'zustand'
import { KindCocktail, TCocktail } from '../types/cocktail'

interface State {
  cocktails: TCocktail[]
  cocktailName: TCocktail[]
  cocktailKind: KindCocktail[]
  loadingProps: boolean
  mostPopular: TCocktail[]
  setMostPopular: (drinks: TCocktail[]) => void
  setLoadingProps: (togle: boolean) => void

  setCocktailByName: (drinks: TCocktail[]) => void
  setCocktailByKind: (drinks: TCocktail[]) => void
  setCocktailByLetter: (drinks: TCocktail[]) => void
}

export const useCocktailSearch = create<State>((set) => ({
  cocktails: [],
  cocktailName: [],
  cocktailKind: [],
  loadingProps: false,
  mostPopular: [],
  setMostPopular: (drinks: TCocktail[]) => {
    set(() => ({
      mostPopular: drinks,
    }))
  },
  setLoadingProps: (togle) => {
    set(() => {
      return {
        loadingProps: !togle,
      }
    })
  },

  setCocktailByLetter: (drinks: TCocktail[]) => {
    set(() => ({
      cocktails: drinks,
    }))
  },

  setCocktailByName: (drinks: TCocktail[]) => {
    set(() => ({
      cocktailName: drinks,
    }))
  },

  setCocktailByKind: (drinks: KindCocktail[]) => {
    set(() => ({
      cocktailKind: drinks,
    }))
  },
}))
