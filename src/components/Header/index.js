import React from 'react'
import { Box, Text } from "@chakra-ui/react"

export default function Header() {
    return (
        <Box w="100%" h="30px" backgroundColor="coral.300" textAlign="center" >
            <Text className="header-font" fontSize="0.9rem" pt="3px">🎁 Envíos gratis a partir de $500 MXN 🎁</Text>
        </Box>
    )
}
