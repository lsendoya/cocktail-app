import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { TDrinks } from '../types/cocktail'

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/popular.php',
  headers: {
    'X-RapidAPI-Key': 'e43e1bbfb5msh2962cd4aced272cp104c05jsndb6c2875719d',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
  },
}

export function useMostPopular() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['mostPopular'],
    queryFn: async () => {
      try {
        const response = await axios.request(options)
        const { drinks }: TDrinks = response.data

        return drinks.slice(0, 9)
      } catch (error) {
        throw new Error('Network response was not ok')
      }
    },
  })

  return {
    isLoading,
    isError,
    data,
  }
}
