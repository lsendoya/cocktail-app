import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Divider,
  HStack,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

import { UseCocktailSingle } from '../hook/cocktailSingle'
import { TCocktail } from '../types/cocktail'
import { LoadingError } from '../components/LoadingError'

const GRADIENT = 'linear-gradient(45deg, #874da2 0%, #c43a30 100%)'

function CocktailSingle() {
  const { checkedItems, drinks, handleChecked, isError, isLoading } =
    UseCocktailSingle()

  const ingredients: string[] = []
  drinks.forEach((drink: TCocktail) => {
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}` as keyof TCocktail]
      const measure = drink[`strMeasure${i}` as keyof TCocktail]
      if (ingredient) {
        ingredients.push(`${measure} of ${ingredient} ` as string)
      }
    }
  })

  const isMobile = useBreakpointValue({ base: true, md: false })

  if (isError || isLoading) {
    return <LoadingError isError={isError} isLoading={isLoading} />
  }

  return (
    <Card
      maxW="md"
      shadow={'dark-lg'}
      colorScheme="#F5F7F8"
      borderRadius={'3xl'}
      mb="6rem"
    >
      <CardBody>
        <VStack justifyContent={'center'} mt="0.2rem" mb="1rem" spacing={3}>
          <HStack
            w="90%"
            justifyContent={isMobile ? 'center' : 'space-between'}
            mb="0.8rem"
            spacing={'8'}
          >
            <Badge
              fontSize={isMobile ? '0.7rem' : 'md'}
              variant="outline"
              colorScheme="messenger"
            >
              {drinks[0].strGlass}
            </Badge>
            <Badge fontSize={isMobile ? '0.7rem' : 'md'} colorScheme="yellow">
              {drinks[0].strCategory}
            </Badge>
          </HStack>
          <Heading
            size={isMobile ? 'md' : 'lg'}
            style={{
              background: GRADIENT,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            mb="1rem"
          >
            {drinks[0].strDrink}
          </Heading>
          <img
            src={`${drinks[0].strDrinkThumb}`}
            alt="Green double couch with wooden legs"
            style={{ height: isMobile ? 'auto' : '300px', width: 'auto' }}
          />
        </VStack>

        <Divider />
        <VStack w="100%" justifyContent={'center'} my={'1rem'}>
          <UnorderedList>
            {ingredients.map((value, i) => (
              <ListItem
                textAlign={isMobile ? 'center' : 'start'}
                fontStyle={'italic'}
                fontFamily={'serif'}
                key={i}
              >
                {value}
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
        <Divider />
        <Stack mt="6" spacing="3">
          {drinks[0].strInstructions.split('. ').map((item, i) => (
            <HStack key={i} alignItems="baseline">
              <Checkbox
                fontFamily={isMobile ? 'body' : 'inherit'}
                borderColor="red.700"
                key={i}
                isChecked={checkedItems[i] || false}
                onChange={() => handleChecked(i)}
                textAlign={isMobile ? 'center' : 'start'}
                textDecoration={checkedItems[i] ? 'line-through' : undefined}
              >
                {item}
              </Checkbox>
            </HStack>
          ))}
        </Stack>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  )
}

export default CocktailSingle
