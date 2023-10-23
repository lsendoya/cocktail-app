import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TFormData } from '../types/components'
import { useCocktailSearch } from '../store/cocktails'
import { TDrinks } from '../types/cocktail'
import { useRoute } from 'wouter'

export function useFormCocktails() {
  const [letter, setLetter] = useState<string | undefined>('a')
  const [name, setName] = useState<string | undefined>('margarita')

  const { register, handleSubmit, reset } = useForm<TFormData>()

  const setCocktailByLetter = useCocktailSearch(
    (state) => state.setCocktailByLetter,
  )

  const setCocktailByName = useCocktailSearch(
    (state) => state.setCocktailByName,
  )
  const setLoadingProps = useCocktailSearch((state) => state.setLoadingProps)

  const onSubmit: SubmitHandler<TFormData> = (values) => {
    if (values.letter) {
      setLetter(values.letter)
    }
    if (values.name) {
      setName(values.name)
    }

    reset()
  }

  const fetchData = async (param: string) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?${param}`,
    )
    if (!response.ok) throw new Error('Network response was not ok')

    return response.json()
  }

  const { isError: isErrorLetter, isLoading: isLoadingLetter } = useQuery(
    ['cocktail', letter],
    async () => {
      if (letter === undefined) return null
      const data: TDrinks = await fetchData(`f=${letter}`)
      setCocktailByLetter(data?.drinks)
      setLetter(undefined)
      setLoadingProps(true)

      return data
    },
  )

  const { isError: isErrorName, isLoading: isLoadingName } = useQuery(
    ['name', name],
    async () => {
      if (name === undefined) return null
      const data: TDrinks = await fetchData(`s=${name}`)
      setCocktailByName(data?.drinks)
      setName(undefined)
      setLoadingProps(false)

      return data
    },
  )

  return {
    register,
    handleSubmit,
    onSubmit,
    isErrorName,
    isLoadingName,
    isErrorLetter,
    isLoadingLetter,
  }
}

export const useFetchCocktailById = () => {
  const [, params] = useRoute('/cocktail/:id')
  const { isLoading, isError, data } = useQuery({
    queryKey: ['cocktailById', params?.id],
    queryFn: async () => {
      const response = await fetch(
        `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params?.id}`,
      )

      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
  })

  return { isLoading, isError, data }
}
