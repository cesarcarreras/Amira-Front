import React from 'react';
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons'

import Logo from '@assets/images/logo.png'


export default function Navbar(props) {


  return (
    <Flex justify="space-around" alignContent="center" alignItems="center">

      <Menu >
        <MenuButton colorScheme="blue" as={Button} size="lg" rightIcon={<HamburgerIcon />}>
          Menu
        </MenuButton>
        <MenuList borderColor="#94BABA" w="100px" h="150px" m={2}>
          <MenuItem _hover={{ bg: "blue.100", color: "white" }} as="a" href="/" > Inicio</MenuItem>
          <MenuItem _hover={{ bg: "blue.100", color: "white" }} as="a" href="/products"> Productos</MenuItem>
          <MenuItem _hover={{ bg: "blue.100", color: "white" }} as="a" href="/about-us"> Quienes somos</MenuItem>
        </MenuList>
      </Menu>

    <Image src={Logo} alt="Logo img" w="650px" h="250"/>

    <Button>Ver mi pedido</Button>
    </Flex>
  );
}

