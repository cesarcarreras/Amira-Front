import { Box, Container, Flex, Stack, Image, Text, Link, Heading } from '@chakra-ui/react'
import React from 'react'

import Logo from '@assets/images/logo.jpg'

const Footer = () => {
    return(
        <Box
        bg="gray.500"
        color="white" >
        <Container as={Stack} maxW={'6xl'} py={10}>
        <Flex justifyContent="space-around">
            <Stack spacing={6}>
              <Box>
                <Image src={Logo} borderRadius="full" boxSize="150px"/>
              </Box>
              <Text fontSize={'sm'}>
                © 2020 Chakra Templates. All rights reserved
              </Text>
            </Stack>
            <Stack align={'flex-start'} alignItems="center">
              <Heading>Product</Heading>
              <Link href={'#'}>Overview</Link>
              <Link href={'#'}>Featured</Link>
              <Link href={'#'}>Releases</Link>
            </Stack>
            <Stack align={'flex-start'} alignItems="center">
              <Heading>Company</Heading>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Press</Link>
              <Link href={'#'}>Contact</Link>
              <Link href={'#'}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'} alignItems="center">
              <Heading>Support</Heading>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Legal</Link>
            </Stack>
            <Stack align={'flex-start'} alignItems="center">
              <Heading>Follow Us</Heading>
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