import { Box, Image, Text, Flex, Center } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {
  return (
    <Box h='1hv' p='2rem'>
      <Center>
        <Image h='15rem' src="https://i.imgur.com/qIufhof.png" />
      </ Center >
      <Center>
        <Text fontSize='2rem'>Oooops.. This page could not be found</Text>
      </Center>
    </Box>
  )
}

export default NotFound

