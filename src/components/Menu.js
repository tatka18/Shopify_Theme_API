import React, { useContext } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Text,
} from '@chakra-ui/react';

import { menuLinkShadow } from '../custom/customClasses'

import { Link } from 'react-router-dom';

import { ShopContext } from '../context/ShopContext'

const Menu = () => {
    const { isMenuOpen, closeMenu } = useContext(ShopContext);
    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' returnFocusOnClose={false} size='xs'>
            <DrawerOverlay onClick={closeMenu}>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <VStack p='3rem' m='5'>
                            <Link to='/'>
                                <Text p='3' fontSize='large' fontWeight='extrabold' _hover={menuLinkShadow}>Home</Text>
                            </Link>
                            <Link to='/about-us'>
                                <Text p='3' fontSize='large' fontWeight='extrabold' _hover={menuLinkShadow}>About Us</Text>
                            </Link>
                            <Link to='/contact'>
                                <Text p='3' fontSize='large' fontWeight='extrabold' _hover={menuLinkShadow}>Contact</Text>
                            </Link>
                            <Link to='/sales'>
                                <Text p='3' fontSize='large' fontWeight='extrabold' _hover={menuLinkShadow}>Sales</Text>
                            </Link>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                       {/* //place for footer */}
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}

export default Menu
