import React from 'react';
import { Box, Flex, Spacer, Image } from '@chakra-ui/react';

import featuredImage from '../../assets/images/aloevera-on-the-table-min-removebg-preview.png'

export default function Featured() {
    return (
        <>
        <Flex m="10%" alignItems="center">
            <Image borderRadius="full" boxSize="350px" src={featuredImage} alt="Featured Image"/>
            <Spacer />
            <Box w="180px" h="10" bg="red.500">
            Aquí pondremos el texto
            </Box>
        </Flex>

        <Flex m="10%" alignItems="center">
            <Image  borderRadius="full" boxSize="350px" src={featuredImage} alt="Featured Image"/>
            <Spacer />
            <Box w="180px" h="10" bg="red.500">
            Aquí pondremos el texto
            </Box>
        </Flex>

        <Flex m="10%" alignItems="center">
            <Image  borderRadius="full" boxSize="350px" src={featuredImage} alt="Featured Image"/>
            <Spacer />
            <Box w="180px" h="10" bg="red.500">
            Aquí pondremos el texto
            </Box>
        </Flex>
        </>
    )
};