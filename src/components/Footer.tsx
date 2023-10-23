import { Center, Box, Text, useColorModeValue } from '@chakra-ui/react'

function Footer() {
  return (
    <Box
      as="footer"
      bg={useColorModeValue('black.100', 'gray.900')}
      color="black"
      py="4"
      borderTop="1px"
      borderColor="blue.900"
    >
      <Center>
        <Text>&copy; 2023 DrinkIT All rights reserved.</Text>
      </Center>
    </Box>
  )
}

export default Footer
