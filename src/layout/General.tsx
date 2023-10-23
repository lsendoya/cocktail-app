import { ReactNode } from 'react'
import { VStack } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

interface HomeProps {
  children: ReactNode
}

function Layout({ children }: HomeProps) {
  return (
    <VStack
      justifyContent={'center'}
      w={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}
      maxW={'full'}
      fontFamily={'roboto'}
    >
      <NavBar />
      {children}
      <Footer />
    </VStack>
  )
}

export default Layout
