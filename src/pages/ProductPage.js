import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Text, Image, Heading, Button, Flex } from '@chakra-ui/react';
import { ShopContext } from '../context/ShopContext';
import Notification from '../components/ui/Notification';
import NotificationContext from '../context/NotificationContext';

const ProductPage = () => {
    const { handle } = useParams();
    const { fetchProductWithHandle, addItemToCheckout, product, status, description } = useContext(ShopContext);

    const notificContext = useContext(NotificationContext);
    const textStyle = {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'pre-line',
    }
    var notificationIsActive = notificContext.notification;

    function addingHandler() {
        addItemToCheckout(product.variants[0].id, 1);
        // notificContext.showNotification({ status: status, description: description });
    }

    useEffect(() => {
        fetchProductWithHandle(handle);
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <Flex justifyContent='center' alignItems='center' bgColor='yellow.500' textColor='white'>Loading...</Flex>

    return (

        <Box p='2rem'>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m='auto'>
                <Box height='350px' overflow='hidden' position='relative' mx='1rem'>
                    <Image position='absolute' top='0' left='0' width='100%' height='100%' objectFit='cover' src={product.images[0].src} />
                </Box>
                <Box height='400px' p='2' justifyContent='center' alignItems='center'>
                    <Heading>{product.title}</Heading>
                    <Text>{product.variants[0].price}</Text>
                    <Box height='200px' overflow='hidden' sx={textStyle}>
                        <Text h='xs' my='0.5rem'>
                            {product.description}
                        </Text>
                    </Box>
                    <Button onClick={addingHandler}
                        bgColor='green.500'
                        color='white'
                        my='1rem'>Add To Cart</Button>
                </Box>
            </Grid>
            {notificationIsActive && (<Notification
                closeNotification={notificContext.hideNotification}
            />)}
        </Box>
    )
}

export default ProductPage
