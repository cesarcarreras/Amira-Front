import React from 'react'
import {Banner, NavBar, Featured, ProductCard, Footer} from '@components'
import { Flex } from '@chakra-ui/react'

const Home = () => {
    return(
        <>
            <NavBar/>
            <Banner/>
            <Featured/>
            <Flex p={6} m="10px" wrap="wrap" justifyContent="space-between" alignItems="center" alignContent="center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            </Flex>
            <Footer/>
        </>
    )
}

export default Home