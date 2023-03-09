import { Box, Grid, VStack, Image, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import { linkShadow } from '../custom/customClasses'

function Footer() {

    return (
        <Box background='cyan.900'>
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} color='white'>
                <Flex alignItems='center' justifyContent='center' flexDirection='column' p={['1rem']}>
                    <Link to='/'>
                        <Image
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfx2bUbuWOlqWQElN9DD8LJAqU4Ac4J8BCmQ&usqp=CAU' h={50} w={50} my={'auto'} />
                    </Link>
                    <Text mt='4' fontSize='0.7rem' fontFamily='serif' fontWeight='thin'>All Rights Reserved by ..</Text>

                </Flex>
                <VStack p={['1rem', '2rem']}>
                    <Link to='/contact'><Text _hover={linkShadow}>Contact</Text></Link>
                    <Link to='/about-us'><Text _hover={linkShadow}>About Us</Text></Link>
                    <Link to='/sales'><Text _hover={linkShadow}>Sales</Text></Link>
                    <Link to='/'><Text _hover={linkShadow}>Home</Text></Link>
                </VStack>
                <VStack p='2rem'>
                    <Link to='/'><Text _hover={linkShadow}>FirstLink</Text></Link>
                    <Link to='/'><Text _hover={linkShadow}>SecondLink</Text></Link>
                    <Link to='/'><Text _hover={linkShadow}>ThirdLink</Text></Link>
                </VStack>
            </Grid>
            {/* {activeNotific && (
                <AddToCartAllert
                    title={activeNotific.title}
                    message={activeNotific.message}
                    status={activeNotific.status}
                />
             )
            } */}
        </Box>
    )
}

export default Footer
