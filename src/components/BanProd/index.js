import React from 'react'

import {
    Box,
    Heading,
    Text,
  } from '@chakra-ui/react';

export default function ProductBanner(props) {
    return (
     <Box as="section" bgImage={props.bgImage} bgPosition="center" bgSize="cover" h="80vh" bgRepeat="no-repeat" mt="40px">
            <Box
            maxW="2xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center">
          <Heading as="h1" color="white" fontWeight="light" letterSpacing="tight" className="header-font" fontSize="72px">
           Los mejores Jabones Ecológicos
         </Heading>
         <Text mt="4" fontSize="lg" color="white">
           Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
           sagittis vel nulla nec.
         </Text>
       </Box>
     </Box>
    )
}
