import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Image,
  Button,
  Stack
} from '@chakra-ui/react';


import Logo from '../../assets/images/logo.jpg'


export default function Navbar(props) {

  return (
    <Flex p={4}>
    <Box>
    <Image src={Logo} alt="Logo img" boxSize="150px"  borderRadius="full"/>
    </Box>
    <Stack direction={["column", "row"]} spacing="24px" ml={20}>
    <Box w="100px" h="40px" bg="yellow.200">
       LINK 1
    </Box>
    <Box w="100px" h="40px" bg="tomato">
       LINK 2
    </Box>
    <Box w="100px" h="40px" bg="pink.100">
       LINK 3
    </Box>
</Stack>
    <Spacer />
    <Box>
        <Button colorScheme="teal" mr="4">
        Sign Up
        </Button>
        <Button colorScheme="teal">Log in</Button>
    </Box>
    </Flex>
  );
}

