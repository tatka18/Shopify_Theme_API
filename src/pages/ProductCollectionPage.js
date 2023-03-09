import React, { useContext, useEffect } from 'react'
import { Box, Text, Grid, Image } from '@chakra-ui/react';

import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductCollectionPage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts]);

  if (!products) return
  <Box>Loading...</Box>

  return (
    <Box bgGradient="linear(to-t, yellow.500, purple.500)" >
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} p='3'>
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box textAlign='center' p='1' m='1' border='1px' borderColor='white'>
                <Box overflow='hidden' h={['12rem']} position='relative' p='10%'>
                  <Image position='absolute' top='0' left='0' width='100%' height='100%' objectFit='cover' src={product.images[0].src} />
                </Box>
                <Box pt='1rem'>
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

export default ProductCollectionPage
