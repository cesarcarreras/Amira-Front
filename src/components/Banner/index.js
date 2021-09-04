import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function Banner(props) {
  return (
    <>

      <Box as="section" bgImage={props.bgImage} bgPosition="center" bgSize="cover">
          <Box
            maxW="2xl"
            mx="auto"
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign="center"
          >
            <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
              Los mejores Jabones Ecológicos
            </Heading>
            <Text mt="4" fontSize="lg" color="white">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
              sagittis vel nulla nec.
            </Text>
            <Button mt="8" as="a" href="/products" size="lg" colorScheme="blue" fontWeight="bold" rounded={'full'}>
              Ver productos
            </Button>
          </Box>
        </Box>
    </>
  );
}