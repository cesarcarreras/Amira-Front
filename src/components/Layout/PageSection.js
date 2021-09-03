import React from 'react'
import {Box} from '@chakra-ui/react'

export default function PageSection({children}){
    return(
        <Box as="section" w="80vw" h="95vh" p={10} h="100%" position="absolute" right="0" boxSizing="border-box" backgroundColor="blackAlpha.100" color="gray.500">
            {children}
        </Box>
    )
}