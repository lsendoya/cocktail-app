import { VStack } from '@chakra-ui/react'
import Carrousel from '../components/Carrousel'
import { MostPopular } from '../components/MostPopular'

function Home() {
  return (
    <VStack
      w={{ base: 'sm', sm: 'md', md: 'xl', lg: '2xl' }}
      minH={'100vh'}
      mb="6rem"
    >
      <Carrousel />

      <MostPopular />
    </VStack>
  )
}

export default Home
