import React, { useContext } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Grid,
    Text,
    Flex,
    Image,
    Box,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(ShopContext);

    return (
        <>
            <Drawer
                isOpen={isCartOpen}
                placement='right'
                onClose={closeCart}
                size={'sm'}
            >
                <DrawerOverlay />
                <DrawerContent bgGradient="linear(to-t, purple.100, white)">
                    <DrawerCloseButton />
                    <DrawerHeader>Shopping Cart</DrawerHeader>

                    <DrawerBody>
                        {
                            checkout.lineItems?.length ? checkout.lineItems.map(item => (
                                <Grid templateColumns={'repeat(2, 1fr)'} gap={1} key={item.id} m='1' p='1rem' _hover={{
                                    shadow: 'lg', border: 'ridge 0.1px', borderColor: 'purple.200', bgGradient: "linear(to-t, white, purple.100)"
                                    // , cursor: "pointer"
                                }} bgColor='purple.50'>
                                    <Box>
                                        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={1}>
                                            <Flex alignItems='center' justifyContent='center'>
                                                <Box height='4rem' width='6rem' overflow='hidden' position='relative'>
                                                    <Image src={item.variant.image.src} objectFit='cover' top='0' left='0' position='absolute' height='100%' width='100%' />
                                                </Box>
                                            </Flex>
                                            <Box pl='1rem'>
                                                <Text fontWeight='medium'>{item.title}</Text>
                                                <Text >{item.variant.price}</Text>
                                            </Box>
                                        </Grid>
                                    </Box>
                                    <Box>
                                        <Flex justifyContent='right'>
                                            <CloseIcon cursor='pointer' onClick={() => removeLineItem(item.id)} />
                                        </Flex>
                                    </Box>
                                </Grid>
                            )) :
                                <Box h='100%' w='100%'>
                                    <Text h='100%' display='flex' alignItems='center' justifyContent='center'>Ooops.. Your cart is currently empty</Text>
                                </Box>
                        }

                    </DrawerBody>

                    {checkout.lineItems?.length ?
                        <DrawerFooter>
                            <Button w='100%' shadow='lg' bgColor='purple.400'>
                                <Link to={checkout.webUrl}>
                                    Checkout
                                </Link>
                            </Button>
                        </DrawerFooter> : null
                    }
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart
