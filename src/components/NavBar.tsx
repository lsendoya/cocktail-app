;('use client')

import { Link } from 'wouter'
import {
  Box,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  VStack,
} from '@chakra-ui/react'

import { CiMenuBurger } from 'react-icons/ci'
import { AiOutlineClose } from 'react-icons/ai'
import { Links } from '../utils/navbar'
import { TLink } from '../types/components'

const GRADIENTNAV =
  'linear-gradient( 89.4deg,  rgba(194,0,39,1) 0.8%, rgba(10,35,104,1) 99.4% )'

const GRADIENTLOGO =
  'linear-gradient(69.7deg, rgba(244,37,243,1) 1.4%, rgba(244,87,1,1) 36.2%, rgba(255,204,37,1) 72.2%, rgba(20,196,6,1) 113%)'

const NavLink = ({ name, path }: TLink) => {
  return (
    <Link href={path}>
      <Text
        as="h2"
        cursor={'pointer'}
        fontSize={'1.6rem'}
        fontWeight={'bold'}
        style={{
          background: GRADIENTNAV,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        _hover={{
          transform: 'scale(1.05)',
          color: 'blue',
        }}
        _active={{
          transform: 'scale(0.95)',
          color: 'red',
        }}
      >
        {name}
      </Text>
    </Link>
  )
}

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w={{ base: 'xs', sm: 'md', md: '3xl', lg: '4xl' }} p="1rem">
      <HStack w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          p={'1rem'}
          size={'md'}
          icon={isOpen ? <AiOutlineClose /> : <CiMenuBurger />}
          aria-label={'Open Menu'}
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack w={{ base: '80%' }} spacing={8} justifyContent={'center'}>
          <Box
            fontWeight={'extrabold'}
            fontSize={'3rem'}
            as="h2"
            style={{
              background: GRADIENTLOGO,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <Link href={`/`}> DrinkIT</Link>
          </Box>
          <HStack
            w="80%"
            as={'nav'}
            spacing={'5rem'}
            display={{ base: 'none', md: 'flex' }}
            justifyContent={'center'}
          >
            {Links.map((item, ind) => (
              <NavLink key={ind} {...item} />
            ))}
          </HStack>
        </HStack>
      </HStack>

      {isOpen ? (
        <VStack
          w={{
            base: '100%',
            md: 'none',
          }}
          fontSize={'1rem'}
          h="auto"
          justifyContent={'center'}
          my="2rem"
        >
          {Links.map((item, ind) => (
            <NavLink key={ind} {...item} />
          ))}
        </VStack>
      ) : null}
    </Box>
  )
}

export default NavBar
