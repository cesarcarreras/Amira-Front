import React, {useEffect, useState} from 'react'
import {Banner, Navbar, Featured, ProductCard, Footer, Newsletter} from '@components'
import { Flex } from '@chakra-ui/react'
import { allProductsEP } from '@services/product-ws'
import bgPicture from '@assets/images/banner.png'

const Home = () => {

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     allProductsEP()
    //     .then(({data}) => setProducts([...data.products]))
    //     .catch(err => console.log(err))
    // }, [])

    // const filteredProducts = products.filter((products) => products.featured === true)

    return(
        <>
            <Navbar/>
            <Banner
                bgImage={bgPicture}
            />
            <Featured/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home