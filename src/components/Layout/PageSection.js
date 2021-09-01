import React from 'react'
import {Box} from '@chakra-ui/react'

export default function PageSection({children}){
    return(
        <Box as="section" w="85vw" p={10} h="100%" position="absolute" right="0" boxSizing="border-box" color="gray.500">
            {children}
        </Box>
    )
};