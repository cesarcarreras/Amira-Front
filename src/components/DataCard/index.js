import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'


export default function DataCard(props) {
    return (
        <Box backgroundColor="#fefdfe" w="300px" h="200px" borderRadius="30px" boxShadow="2xl" p="6" >
            <Flex justify="space-between" direction="column" p={5}>
                <Flex>
                <Heading className="header-font" p={3} fontSize="3rem">{props.data}</Heading>
                <ArrowUpIcon ml="50px" boxSize="3em" color="blue.100"/>
                </Flex>
                <Text className="body-font" fontSize="1.5rem">{props.title}</Text>
            </Flex>
        </Box>
    )
};