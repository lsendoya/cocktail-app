export type TCard = {
  cocktail: TCocktail
}

export type TImageCarrousel = {
  text: string
  image: string
}

export type TFormData = {
  letter?: string | undefined
  name?: string | undefined
  kind?: string | undefined
}

export type TLink = {
  name: string
  path: string
}

export type TLoadingError = {
  isLoading: boolean
  isError: boolean
}
