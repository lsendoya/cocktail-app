import { VStack, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import FormCocktails from '../components/Form'
import { useCocktailSearch } from '../store/cocktails'
import { TCocktail } from '../types/cocktail'
import CardCocktail from '../components/CardCocktail'

function ReturnCardCocktail(cocktails: TCocktail[]) {
  return (
    <>
      {cocktails.map((cocktail: TCocktail, ind: number) => (
        <GridItem key={ind} colSpan={1} rowSpan={1}>
          <CardCocktail key={ind} cocktail={cocktail} />
        </GridItem>
      ))}
    </>
  )
}

function Cocktails() {
  const cocktails = useCocktailSearch((state) => state.cocktails)
  const columnGap = useBreakpointValue({ base: '0.5rem', md: '1.5rem' })
  const rowGap = useBreakpointValue({ base: '3rem', md: '6rem' })

  const cocktailsNames = useCocktailSearch((state) => state.cocktailName)
  const isLoadingProps = useCocktailSearch((state) => state.loadingProps)
  const gridColumnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 })

  return (
    <VStack
      w={{ base: 'sm', sm: 'md', md: 'xl', lg: '2xl' }}
      minH={'100vh'}
      mb={'6rem'}
    >
      <VStack spacing={'4rem'} justifyContent={'center'} alignItems={'center'}>
        <FormCocktails />
        <Grid
          templateColumns={`repeat(${gridColumnCount}, 1fr)`}
          columnGap={columnGap}
          rowGap={rowGap}
          placeItems="center"
        >
          {!isLoadingProps
            ? ReturnCardCocktail(cocktails)
            : ReturnCardCocktail(cocktailsNames)}
        </Grid>
      </VStack>
    </VStack>
  )
}

export default Cocktails
