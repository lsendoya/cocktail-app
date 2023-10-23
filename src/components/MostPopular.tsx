import {
  Grid,
  GridItem,
  Heading,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useMostPopular } from '../hook/mostPopular'
import CardCocktail from './CardCocktail'
import { TCocktail } from '../types/cocktail'
import { LoadingError } from './LoadingError'

export function MostPopular() {
  const gridColumnCount = useBreakpointValue({ base: 1, md: 2, lg: 3 })
  const columnGap = useBreakpointValue({ base: '0.5rem', md: '1.5rem' })
  const rowGap = useBreakpointValue({ base: '3rem', md: '6rem' })

  const { isError, isLoading, data } = useMostPopular()

  if (isError || isLoading) {
    return <LoadingError isError={isError} isLoading={isLoading} />
  }

  return (
    <VStack
      w={{ base: 'sm', sm: 'xl', md: '4xl', lg: '6xl' }}
      justifyContent={'center'}
      p="1rem"
    >
      <Heading w={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }} my="3rem">
        The Most Popular Cocktails
      </Heading>
      <Grid
        templateColumns={`repeat(${gridColumnCount}, 1fr)`}
        w={{ base: 'xs', sm: 'xl', md: '3xl', lg: '5xl' }}
        columnGap={columnGap}
        rowGap={rowGap}
        placeItems="center"
      >
        {data &&
          data.map((cocktail: TCocktail, ind: number) => (
            <GridItem key={ind} colSpan={1} rowSpan={1}>
              <CardCocktail key={ind} cocktail={cocktail} />
            </GridItem>
          ))}
      </Grid>
    </VStack>
  )
}
