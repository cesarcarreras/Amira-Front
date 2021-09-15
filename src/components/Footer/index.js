import { Box, Container, Flex, Stack, Image, Text, Link, Heading } from '@chakra-ui/react'
import React from 'react'

import Logo from '@assets/images/logo.png'

const Footer = () => {
    return(
        <Box
        bg="gray.500"
        color="white" >
        <Container as={Stack} maxW={'6xl'} py={10}>
        <Flex justifyContent="space-around">
            <Stack>
              <Box>
                <Image src={Logo} w="350px" h="180"/>
              </Box>
              <Text fontSize={'sm'}>
                © 2021 Amira. All rights reserved
              </Text>
            </Stack>
            <Stack align={'flex-start'} alignItems="center">
              <Heading>Productos</Heading>
              <Link href={'#'}>Ver todo</Link>
              <Link href={'#'}>Lo nuevo</Link>
              <Link href={'#'}>Próximamente</Link>
            </Stack>
            <Stack align={'flex-start'} alignItems="center">
              <Heading>Empresa</Heading>
              <Link href={'#'}>Nosotros</Link>
              <Link href={'#'}>Contacto</Link>
              <Link href={'#'}>Socios</Link>
            </Stack>

            <Stack align={'flex-start'} alignItems="center">
              <Heading>¡Síguenos!</Heading>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Instagram</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    )
}

export default Footer