import React, { useContext } from 'react';
import { Icon, Image, Badge, Flex, Box } from '@chakra-ui/react';
import { AiOutlineMenu, AiFillShop } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
    const { openCart, openMenu, checkout } = useContext(ShopContext)

    return (
        <Flex background='purple.900' flexDir='row' justifyContent='space-around' p='1rem' alignItems='center'>
            <Icon as={AiOutlineMenu} cursor='pointer' fill='white' w={10} h={10}
                onClick={() => openMenu()}></Icon>
            <Link to='/'>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfx2bUbuWOlqWQElN9DD8LJAqU4Ac4J8BCmQ&usqp=CAU'
                    h={50} w={50} my={'auto'} />
            </Link>
            <Box>
                <Icon as={AiFillShop} cursor='pointer' fill='white' w={10} h={10}
                    onClick={() => openCart()} />
                <Badge colorScheme='blue' borderRadius='md'>{checkout.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )
}

export default NavBar
