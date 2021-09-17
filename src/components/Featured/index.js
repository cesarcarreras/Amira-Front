import React from 'react';
import { Flex, Image, Heading, Text, Button, Badge } from '@chakra-ui/react';

import featuredImage from '@assets/images/lavanda-palo-rosa.png'

export default function Featured() {
    return (
        <>
         <Heading mt="150px" fontSize="64px" className="header-font" textAlign="center">Lo nuevo</Heading>
        <Flex m="6%" alignItems="center">
            <Image w="650px" src={featuredImage} alt="Featured Image" mr="100px"/>
            <Flex direction="column">
            <Flex direction="row">
                <Heading fontSize="54px" className="header-font">Jabón de Lavanda & Palo de Rosa  <Badge borderRadius="full" h="20px" colorScheme="teal" className="body-font" >NEW</Badge></Heading>
                </Flex>
                <Text mt={6} >Jabón natural de lavanda artesanal fabricado con aceites esenciales, especialmente de oliva, lavandín y lavanda. Tiene propiedades antisépticas, previene el acné y ayuda a tratar inflamaciones, quemaduras y afecciones cutáneas como la psoriasis.</Text>
                 <Button as="a" href="/products" mt={10} colorScheme="blue" w="130px" >Comprar</Button>
            </Flex>
        </Flex>
        </>
    )
};