import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

const Loader = () => (
    <Flex w="100%" h="100vh" boxSizing="border-box" align="center" justify="center">
        <Spinner
            thickness="8px"
            speed="0.65s"
            emptyColor="gray.100"
            color="coral.900"
            size="xl"
        />
    </Flex>
)

export default Loader