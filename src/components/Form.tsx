import { Stack, FormLabel, HStack, Input, Button } from '@chakra-ui/react'

import { BsFillSearchHeartFill } from 'react-icons/bs'

import { useFormCocktails } from '../hook/useFormCocktails'
import { LoadingError } from './LoadingError'

function FormCocktails() {
  const {
    handleSubmit,
    onSubmit,
    register,
    isErrorLetter,
    isErrorName,
    isLoadingLetter,
    isLoadingName,
  } = useFormCocktails()

  if (isLoadingName || isErrorName) {
    return <LoadingError isError={isErrorName} isLoading={isLoadingName} />
  }

  if (isLoadingLetter || isErrorLetter) {
    return <LoadingError isError={isErrorLetter} isLoading={isLoadingLetter} />
  }

  return (
    <Stack w={{ base: 'xs', sm: 'sm', md: '3xl', lg: '5xl' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack
          w={{ base: 'xs', sm: 'md', md: '3xl', lg: '4xl' }}
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center' }}
          spacing={{ base: '1.5' }}
        >
          <FormLabel htmlFor="letter"></FormLabel>
          <Input
            {...register('letter')}
            placeholder="Search any drink by letter"
            type="text"
          />

          <FormLabel htmlFor="name"></FormLabel>
          <Input
            {...register('name')}
            placeholder="Search any drink by name"
            type="text"
          />

          <FormLabel htmlFor="kind"></FormLabel>

          <Button
            w={{ base: 'xs', md: 'sm' }}
            rightIcon={<BsFillSearchHeartFill />}
            colorScheme="blue"
            variant="outline"
            type="submit"
          >
            Search
          </Button>
        </HStack>
      </form>
    </Stack>
  )
}

export default FormCocktails
