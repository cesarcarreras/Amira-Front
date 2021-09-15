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
        <MenuList borderColor="#94BABA" w="xs" h="xs">
          <MenuItem m={2}>Inicio</MenuItem>
          <MenuItem m={2}>Productos</MenuItem>
          <MenuItem m={2}>Quienes somos</MenuItem>
        </MenuList>
      </Menu>

    <Image src={Logo} alt="Logo img" w="650px" h="250"/>

    <Button>Ver mi pedido</Button>
    </Flex>
  );
}

