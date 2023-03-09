import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Flex } from '@chakra-ui/react';
import Hero from '../components/Hero';

const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  if (!products) return 
  <Box>Loading...</Box>

  return (
    <Box bgGradient="linear(to-t, green.500, purple.500)" >
      <Hero />
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} p='3' templateRows={["repeat(1, 0)"]}>
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box m='3' p='2' bg='white' shadow='xl' >
                <Flex overflow='hidden' height='10rem' justifyContent='center' alignItems='center'>
                  <Image _hover={{ transform: 'scale(1.1)', transition: '1s' }} src={product.images[0].src}/>
                </Flex>
                <Box textAlign='center' p='1'>
                  <Text fontSize='sm' fontWeight='bold'>{product.title}</Text>
                  <Text fontSize='sm' fontWeight='thin'>${product.variants[0].price}</Text>
                </Box>
              </Box>
            </Link>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Home;
