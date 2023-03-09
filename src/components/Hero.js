import { Box, Text, Flex, Image, Button, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Box height='60vh' w='100%' position='relative' overflow='hidden'>
      <Box backgroundColor='purple.700'>
        <Image w='100%' m='auto' objectFit='contain'
          position='absolute' src='https://as1.ftcdn.net/v2/jpg/05/19/36/46/1000_F_519364621_Ep2CgWzwIH71PtdnLcxto2bXrGlvLusH.jpg' opacity='75%'
          objectPosition={['top', 'center']} />
        <Text color='white' fontSize='5xl' fontWeight='bold' position='absolute' w='100%' textAlign='center' top='20%'>Hero Section</Text>
        <Center>
          <Button height='2rem' backgroundColor='white' fontWeight='bold' position='absolute' bottom='30%'>
            <Link to='/products'>
              Start Shopping
            </Link>
          </Button>
        </Center>
      </Box>
    </Box>

  )
}

export default Hero
