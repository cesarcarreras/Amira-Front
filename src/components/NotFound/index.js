import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const NotFound = () => {

    return(
            <Flex justify="center" alignItems="center" alignContent="center" direction="column" w="100vw" h="100vh">
                <Heading >La página que estás buscando no se encuentra</Heading>
                <Button as="a" href="/" >Ir al Home</Button>
            </Flex>
    )
}

export default NotFound