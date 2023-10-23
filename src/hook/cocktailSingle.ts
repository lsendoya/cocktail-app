import { useToast } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { useRoute } from 'wouter'
import { TDrinks } from '../types/cocktail'

export function UseCocktailSingle() {
  const toast = useToast()
  const [checkedItems, setCheckedItems] = useState<boolean[]>([])
  const [toastShown, setToastShown] = useState(false)
  const [, params] = useRoute('/cocktail/:id')
  const { isLoading, isError, data } = useQuery<TDrinks>(
    ['cocktailById', params?.id],
    async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params?.id}`,
      )

      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    },
  )

  const drinks = data?.drinks || []

  const handleChecked = (index: number) => {
    const updatedCheckedItems = [...checkedItems]
    updatedCheckedItems[index] = !updatedCheckedItems[index]
    setCheckedItems(updatedCheckedItems)
  }

  const isAllChecked = () => {
    if (
      checkedItems.length === drinks[0]?.strInstructions.split('. ').length &&
      checkedItems.every((item) => item === true)
    ) {
      setToastShown(true)
      return true
    }
    setToastShown(false)
    return false
  }

  useEffect(() => {
    if (isAllChecked() && !toastShown) {
      toast({
        title: '🎶 Good choice 🥵',
        description: 'Just enjoy the moment with this cocktail 🎊',
        status: 'success',
        duration: 6000,
        isClosable: true,
        position: 'top',
      })
    }
  }, [toastShown, checkedItems])

  return {
    drinks,
    isLoading,
    isError,
    handleChecked,
    checkedItems,
  }
}
