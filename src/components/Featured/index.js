import React from 'react';
import { Box, Flex, Spacer, Image } from '@chakra-ui/react';

import featuredImage from '../../assets/images/aloevera-on-the-table-min-removebg-preview.png'

export default function Featured() {
    return (
        <>
        <Flex ml="20%" mr="20%" mt="10%">
            <Box w="350px" h="10" >
                <Image  borderRadius="full" boxSize="350px" src={featuredImage} alt="Featured Image"/>
            </Box>
            <Spacer />
            <Box w="180px" h="10" bg="red.500" />
        </Flex>
        <Flex ml="20%" mr="20%" mt="10%">
            <Box w="170px" h="10" bg="red.500" />
            <Spacer />
            <Box w="180px" h="10" bg="red.500" />
        </Flex>
        <Flex ml="20%" mr="20%" mt="10%">
            <Box w="170px" h="10" bg="red.500" />
            <Spacer />
            <Box w="180px" h="10" bg="red.500" />
        </Flex>
        </>
    )
};