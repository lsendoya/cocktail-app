import {
  Card,
  Heading,
  CardFooter,
  Button,
  Image,
  HStack,
  Badge,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'

import { Link } from 'wouter'
import { TCard } from '../types/components'

function CardCocktail({ cocktail }: TCard) {
  const marginBottom = useBreakpointValue({ base: '0.5rem', md: '0.8rem' })
  const headingSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const buttonFontSize = useBreakpointValue({ base: '1rem', sm: '1.1rem' })

  return (
    <Card w={'80'} h="fit-content" boxShadow="dark-lg" borderRadius={'3xl'}>
      <VStack>
        <HStack
          spacing={'8'}
          justifyContent={'space-between'}
          mb={marginBottom}
          h={'14'}
        >
          <Badge colorScheme="red">{cocktail.strCategory}</Badge>
          <Badge variant="outline" colorScheme="green">
            {cocktail.strGlass}
          </Badge>
        </HStack>
        <Image
          h={'72'}
          src={`${cocktail.strDrinkThumb}`}
          alt={`${cocktail.strDrink}`}
          borderRadius="lg"
        />
        <Heading my="4" size={headingSize} >
          {cocktail.strDrink}
        </Heading>
      </VStack>

      <CardFooter
        bg={'#FFF0F5'}
        borderBottomRadius={'3xl'}
        display={'flex'}
        h="16"
        flexDir={'row'}
        justifyContent={'center'}
      >
        <Button colorScheme="twitter" variant="link" fontSize={buttonFontSize}>
          <Link href={`/cocktail/${cocktail.idDrink}`}> view more</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardCocktail
